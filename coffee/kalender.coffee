# TODO

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

r = (i) => i // 7
c = (i) => i % 7

Z = 50
kalender= null
data = {}
released = true

J='white'
S='yellow'
T='pink'

K='red'
D='green'
N='blue'

month = (new Date()).toISOString().slice 0,10 # yyyy-mm eller yyyy-mm-dd
console.log month
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

daysInMonth = (month) => new Date(month.slice(0,4), month.slice(5,7), 0).getDate()
monthClick = (delta) =>
	[yyyy,mm] = month.slice(0,7).split '-'
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
	console.log 'monthClick1',month
	kalender.filtrera()
	console.log 'monthClick2',month

pretty = (month) =>
	[yyyy,mm,dd] = month.split '-'
	mm = parseInt mm
	" Januari Februari Mars April Maj Juni Juli Augusti September Oktober November December".split(' ')[mm]

ageClick = (obj) ->
	age = if age == obj.prompt then "" else obj.prompt
	kalender.filtrera()
geoClick = (obj) ->
	geo = if geo == obj.prompt then "" else obj.prompt
	kalender.filtrera()

class Button
	constructor : (@prompt,@x,@y,@w,@h,@bg,@click) ->
	draw : =>
		push()
		fill @bg
		if @prompt in [age,geo] then textSize 0.45*Z else textSize 0.3*Z
		rect @x, @y, @w,@h
		if 'red green blue'.includes @bg then fill 'white' else fill 'black'		
		text @prompt, @x, @y
		pop()
	click: =>
		console.log @prompt
	inside : -> @x-@w/2 < mouseX < @x+@w/2 and @y-@h/2 < mouseY < @y+@h/2

class Day
	constructor : (@prompt,@i,@x,@y,@attributes) ->
	click : =>
		month = month.slice(0,7) + '-' + twoDigits @prompt
		@draw()
		content month
		console.log	month
	inside : (index) ->
		ci = c index+kalender.offset
		ri = r index+kalender.offset
		Z*ci-Z/2 < mouseX-kalender.mx < Z*ci+Z/2 and Z*ri-Z/2 < mouseY-kalender.my < Z*ri+Z/2

	draw : =>
		push()
		arr = ['white','black']
		#console.log 'draw',month,twoDigits @prompt
		if month.slice(7,10) == '-' + twoDigits @prompt then arr.reverse()
		fill arr[0]
		rect @x, @y, Z, Z
		fill arr[1]
		text @prompt, @x, @y - 0.3*Z
		@drawAttributes()
		pop()

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
	console.log 'filterData',month.slice(0,7)
	_.filter items, (item) => item.d.includes(month.slice(0,7)) and item.a.includes attr

attributes = (items,date) =>
	res = _.filter(items, (item) => item.d.includes(date) and (age=="" or item.a[0]==age[0]) and (geo=="" or item.a[1]==geo[0]))
	res = _.map res, (item) => item.a
	#res.sort().reverse()
	res

addDays = (date, days) => new Date date.getTime() + days * 24*60*60000

class Kalender
	constructor : (@items) ->
		@mx = 3*Z/2
		@my = 3*Z/2
		#@date = new Date month
		#@month = @date.getMonth()

		@filtrera()

	getOffset : =>
		res = new Date month.slice(0,7) + '-01' #@date.getFullYear(),@date.getMonth(),1
		res = (res.getDay()-1) %% 7
		console.log "getOffset", month,res
		res

	filtrera : =>
		items = filterData @items, month,""
		@offset = @getOffset()
		#console.log "filtrera", @offset, @date.getDay(), @date
		@days = []
		for i in range daysInMonth month #@date.getFullYear(), @date.getMonth()+1
			if @offset+i >= 0
				x = @mx + Z*((@offset+i) %% 7)
				y = @my + Z*floor (@offset+i)/7
				@days.push new Day i+1, i, x,y, attributes items, month + "-" + twoDigits(i+1)

	draw : =>
		fill "black"
		textSize 0.3*Z
		for i in range 7
			text "Mån Tis Ons Tor Fre Lör Sön".split(' ')[i], kalender.mx+Z*i, 0.25*Z
		d = new Date month.slice(0,7) + '-01'
		for i in range 6
			weekNo = getWeek d
			d = addDays d, 7
			text "v" + weekNo, 0.375*Z, kalender.my+Z*i
		text pretty(month),    Z*5.25, 7.85*Z
		text month.slice(0,4), Z*5.25, 8.25*Z

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

	resizeCanvas innerWidth-20, innerWidth*1.05

	Z = width/7.8
	kalender.mx = 1.25*Z
	kalender.my = Z
	for day in kalender.days
		day.x = kalender.mx+Z*c(day.i+kalender.offset)
		day.y = kalender.my+Z*r(day.i+kalender.offset)

	kalender.buttons = []

	w = 5*Z/3
	h = Z
	x1 = 2.75*Z+0.5*w
	x2 = 2.75*Z+1.5*w
	x3 = 2.75*Z+2.5*w
	y1 = 6*Z
	y2 = 7*Z
	y3 = 8*Z

	kalender.buttons.push new Button "Senior",  x1,y1,w,h,'yellow',ageClick
	kalender.buttons.push new Button "Junior",  x2,y1,w,h,'white',ageClick
	kalender.buttons.push new Button "Tjej",    x3,y1,w,h,'pink',ageClick

	kalender.buttons.push new Button "Klubb",   x1,y2,w,h,'red',geoClick
	kalender.buttons.push new Button "Distrikt",x2,y2,w,h,'green',geoClick
	kalender.buttons.push new Button "Nation",  x3,y2,w,h,'blue',geoClick

	kalender.buttons.push new Button "Förra",   x1,y3,w,h,'white', => monthClick -1
	kalender.buttons.push new Button "Nästa",   x3,y3,w,h,'white', => monthClick +1

	draw()

window.mousePressed = =>
	if !released then return # to make Android work 
	released = false
	kalender.mousePressed mouseX,mouseY
	draw()

window.mouseReleased = -> # to make Android work 
	released = true 
	false

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

	console.log date
	res = _.filter(kalender.items, (item) => item.d.includes(date) and (age=="" or item.a[0]==age[0]) and (geo=="" or item.a[1]==geo[0]))

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
