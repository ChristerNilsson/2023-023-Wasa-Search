# TODO
# Månaderna startar alltid på en lördag!
# Kontaktstuds
# byte av månad => date = 0
# Markera vald dag med boldface
# Hamburgare
#		Nyheter
#		Rating
#		Kontakt
#			Senior
#			Junior
#			Styrelse
#		Sök
# Lag/Individ ?

import {r4r,div,a,span,log,range} from '../js/utils.js'

#N = 7

r = (i) => i // 7
c = (i) => i % 7

Z = 50
kalender= null
data = {}

J='white'
S='yellow'
T='pink'

K='red'
D='green'
N='blue'

month = "2023-04"
age = "" # Senior Junior Tjej
geo = "" # Klubb Distrikt Nation

twoDigits = (n) => ("0" + n).slice -2

getWeek = (yyyymmdd) => # https://weeknumber.com/how-to/javascript
	date = new Date yyyymmdd
	date.setDate date.getDate() + 3 - (date.getDay() + 6) % 7
	week1 = new Date date.getFullYear(), 0, 4
	1 + Math.round ((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7
console.assert 19 == getWeek "2023-05-10"
console.assert 52 == getWeek "2023-01-01"
console.assert 52 == getWeek "2022-01-01"
console.assert 53 == getWeek "2021-01-01"
console.assert  1 == getWeek "2019-12-31"

daysInMonth = (year, month) => new Date(year, month, 0).getDate()
monthClick = (delta) =>
	[yyyy,mm] = month.split '-'
	yyyy = parseInt yyyy
	mm   = parseInt mm
	if mm == 12 and delta == 1
		yyyy++
		mm = 1
	else if mm == 1 and delta == -1
		yyyy--
		mm = 12
	else 
		mm += delta
		if mm < 10 then mm = '0' + mm
	month = yyyy + "-" + mm
	kalender.filtrera()
	console.log month

pretty = (month) =>
	[yyyy,mm] = month.split '-'
	mm = parseInt mm
	" Januari Februari Mars April Maj Juni Juli Augusti September Oktober November December".split(' ')[mm] + ' ' + yyyy

ageClick = (obj) ->
	age = if age == obj.prompt then "" else obj.prompt
	kalender.filtrera()
geoClick = (obj) ->
	geo = if geo == obj.prompt then "" else obj.prompt
	kalender.filtrera()

class Button
	constructor : (@prompt,@x,@y,@w,@h,@bg,@click) ->
		@x *= width/100
		@y *= height/100
	draw : =>
		push()
		fill @bg
		if @prompt in [age,geo] then strokeWeight 5 else strokeWeight 1
		rect @x, @y, @w,@h
		if 'red green blue'.includes @bg then fill 'white' else fill 'black'
		textSize 0.3*Z
		text @prompt, @x, @y
		pop()
	click: =>
		console.log @prompt
	inside : -> @x-@w/2 < mouseX < @x+@w/2 and @y-@h/2 < mouseY < @y+@h/2

class Day
	constructor : (@prompt,@i,@x,@y,@attributes) ->
	click : => 
		content @prompt
		# console.log	@prompt
	inside : (index) ->
		ci = c index+kalender.offset
		ri = r index+kalender.offset
		Z*ci-Z/2 < mouseX-kalender.mx < Z*ci+Z/2 and Z*ri-Z/2 < mouseY-kalender.my < Z*ri+Z/2

	draw : =>
		fill 'white'
		rect @x, @y, Z, Z
		@drawAttributes()
		fill 'black'
		textSize 0.3*Z
		text @prompt, @x, @y - 0.3*Z

	drawAttributes : =>
		d = 0.1*Z
		push()
		@attributes = @attributes.slice 0,6
		antal = @attributes.length
		x1 = round @x - 3*d
		x2 = round @x
		x3 = round @x + 3*d

		#y1 = round @y - 3*d
		y2 = round @y
		y3 = round @y + 3*d

		xy = [[]]
		xy.push [[x2,y2]] # one
		xy.push [[x1,y2],[x3,y2]] # two
		xy.push [[x1,y2],[x2,y2],[x3,y2]] # three
		xy.push [[x1,y2],[x2,y2],[x3,y2],[x2,y3]] # four
		xy.push [[x1,y2],[x2,y2],[x3,y2],[x1,y3],[x3,y3]] # five
		xy.push [[x1,y2],[x2,y2],[x3,y2],[x1,y3],[x2,y3],[x3,y3]] # six

		d = 0.2*Z
		sw = 0.05*Z
		strokeWeight sw
		for attr,i in @attributes
			fill {J,S,T}[attr[0]]
			stroke {K,D,N}[attr[1]]
			[x,y] = xy[antal][i]
			circle x,y, d
		pop()

filterData = (items, month, attr) =>
	_.filter items, (item) => item.d.includes(month) and item.a.includes attr

attributes = (items,date) =>
	res = _.filter(items, (item) => item.d.includes(date) and (age=="" or item.a[0]==age[0]) and (geo=="" or item.a[1]==geo[0]))
	res = _.map res, (item) => item.a
	res.sort().reverse()

addDays = (date, days) => new Date date.getTime() + days * 24*60*60000

class Kalender
	constructor : (@items) ->
		@mx = 3*Z/2
		@my = 3*Z/2
		@date = new Date month + '-01'
		@month = @date.getMonth()

		@filtrera()

	filtrera : =>
		items = filterData @items, month,""
		@offset = (@date.getDay()-1) %% 7
		@days = []
		for i in range daysInMonth @date.getFullYear(), @date.getMonth()+1
			if @offset+i >= 0
				x = @mx + Z*((@offset+i) %% 7)
				y = @my + Z*floor (@offset+i)/7
				@days.push new Day i+1, i, x,y, attributes items, month + "-" + twoDigits(i+1)

	draw : =>
		fill "black"
		textSize 0.3*Z
		for i in range 7
			text "Mån Tis Ons Tor Fre Lör Sön".split(' ')[i], kalender.mx+Z*i, 0.25*Z
		d = new Date month + '-01'
		for i in range 6
			weekNo = getWeek d
			d = addDays d, 7
			text "v" + weekNo, 0.375*Z, kalender.my+Z*i
		text pretty(month), Z*4.0, 8.2*Z

		for day in @days
			day.draw()

		for button in @buttons
			button.draw()

	mousePressed : (x,y) =>
		for day in @days
			if day.inside day.i then day.click()
		for button in @buttons
			if button.inside() then button.click button

window.onresize = -> resize()

resize = ->

	resizeCanvas innerWidth-20, innerWidth*1.1

	Z = width/8
	kalender.mx = 1.25*Z
	kalender.my = Z
	for day in kalender.days
		day.x = kalender.mx+Z*c(day.i+kalender.offset)
		day.y = kalender.my+Z*r(day.i+kalender.offset)

	kalender.buttons = []

	w = 1.5*Z
	h = Z

	kalender.buttons.push new Button "Förra",  17,93,w,h,'white',=> monthClick -1
	kalender.buttons.push new Button "Nästa",  87,93,w,h,'white',=> monthClick +1

	w = 1.5*Z
	h = Z

	kalender.buttons.push new Button "Senior",  45+4,76-7,w,h,'yellow',ageClick
	kalender.buttons.push new Button "Junior",  64+4,76-7,w,h,'white',ageClick
	kalender.buttons.push new Button "Tjej",    83+4,76-7,w,h,'pink',ageClick

	kalender.buttons.push new Button "Klubb",   45+4,89-8,w,h,'red',geoClick
	kalender.buttons.push new Button "Distrikt",64+4,89-8,w,h,'green',geoClick
	kalender.buttons.push new Button "Nation",  83+4,89-8,w,h,'blue',geoClick

	draw()

window.mousePressed = =>
	kalender.mousePressed mouseX,mouseY
	draw()

window.preload = =>
	data = loadJSON "kalender.json"

window.setup = =>
	noLoop()
	canvas = createCanvas 425,375
	canvas.parent 'sketch-holder'
	textAlign CENTER, CENTER
	rectMode CENTER
	data = data.events
	kalender = new Kalender data
	resize()
	draw()

content = (date) =>
	element = document.getElementById "app"
	element.replaceChildren()

	# filterData = (items, month, attr) =>
	date = month + "-" + twoDigits(date)
	console.log date
	res = _.filter(kalender.items, (item) => item.d.includes(date) and (age=="" or item.a[0]==age[0]) and (geo=="" or item.a[1]==geo[0]))

	# items = kalender.filterData kalender.items, month + "-04",""
	console.log res

	r4r =>
		div {style:"margin-left:10px"},
			date
			for item in res
				bg0 = {J,S,T}[item.a[0]]
				bg1 = {K,D,N}[item.a[1]]
				text0 = {J:"Junior",S:"Senior",T:"Tjej"}[item.a[0]]
				text1 = {K:"Klubb",D:"Distrikt",N:"Nation"}[item.a[1]]
				div {style:"margin-left:20px;"},
					span {style:"margin-left:0px; background-color:#{bg0};"},
						text0 
					" "
					span {style:"margin-left:0px; background-color:#{bg1}; color:white"},
						text1 
					" " + item.t
					if item.i
						div {style:"margin-left:20px"},
							a {href:item.i}, "Inbjudan"
					if item.r
						div {style:"margin-left:20px"},
							a {href:item.r}, "Resultat"


window.draw = ->
	background 'lightgray'
	kalender.draw()
