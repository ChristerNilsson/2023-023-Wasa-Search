import {log,range} from '../js/utils.js'

N = 7
MONTHS = "Jan Feb Mar Apr Maj Jun Jul Aug Sep Okt Nov Dec".split(' ')

r = (i) => i // N
c = (i) => i % N

S = 50
kalender= null
data = {}

month = "2023-04"
age = "" # Junior Senior Tjej
geo = "" # Klubb Distrikt Nation

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
		if @prompt in [age,geo] then strokeWeight 3 else strokeWeight 1
		rect @x, @y, @w,@h
		if @bg == 'blue' then fill 'white' else fill 'black'
		textSize 0.3*S
		text @prompt, @x, @y
		pop()
	click: =>
		console.log @prompt
	inside : -> @x-@w/2 < mouseX < @x+@w/2 and @y-@h/2 < mouseY < @y+@h/2

class Day
	constructor : (@prompt,@i,@x,@y,@attributes) ->
	click : => console.log	@prompt
	inside : (index) ->
		ci = c index+kalender.offset
		ri = r index+kalender.offset
		S*ci-S/2 < mouseX-kalender.mx < S*ci+S/2 and S*ri-S/2 < mouseY-kalender.my < S*ri+S/2

	draw : =>
		fill 'white'
		rect @x, @y, S, S
		@drawAttributes()
		fill 'black'
		textSize 0.3*S
		text @prompt, @x, @y - 0.3*S

	drawAttributes : =>
		d = 0.1*S
		push()
		@attributes = @attributes.slice 0,6
		antal = @attributes.length
		x1 = round @x - 3*d
		x2 = round @x
		x3 = round @x + 3*d

		y1 = round @y - 3*d
		y2 = round @y
		y3 = round @y + 3*d

		xy = [[]]
		xy.push [[x2,y2]] # one
		xy.push [[x1,y1],[x3,y3]] # two
		xy.push [[x1,y1],[x2,y2],[x3,y3]] # three
		xy.push [[x1,y1],[x1,y3],[x3,y1],[x3,y3]] # four
		xy.push [[x1,y1],[x1,y3],[x3,y1],[x3,y3],[x2,y2]] # five
		xy.push [[x1,y1],[x1,y2],[x1,y3],[x3,y1],[x3,y2],[x3,y3]] # six

		d = 0.2*S
		sw = 0.05*S
		strokeWeight sw
		for attr,i in @attributes
			fill {J:'white',S:'yellow',T:'pink'}[attr[0]]
			stroke {K:'red',D:'green',N:'blue'}[attr[1]]
			[x,y] = xy[antal][i]
			# console.log @i+1,attr,x,y
			circle x,y, d
		pop()

filterData = (items, month, attr) =>
	_.filter items, (item) => item.d.includes(month) and item.a.includes attr

attributes = (items,date) =>
	res = _.filter(items, (item) => item.d.includes(date) and (age=="" or item.a[0]==age[0]) and (geo=="" or item.a[1]==geo[0]))
	res = _.map res, (item) => item.a
	res.sort().reverse()

class Kalender
	constructor : (@items) ->
		@mx = 3*S/2
		@my = 3*S/2
		@date = new Date month + '-01'
		@month = @date.getMonth()
		@tmonth = MONTHS[@month]

		@filtrera()

	filtrera : =>
		items = filterData @items, month,""
		@offset = (@date.getDay()-1) %% 7
		@days = []
		for i in range daysInMonth @date.getFullYear(), @date.getMonth()+1
			if @offset+i >= 0
				x = @mx + S*((@offset+i) %% 7)
				y = @my + S*floor (@offset+i)/7
				@days.push new Day i+1, i, x,y, attributes items, month + "-"+("0" + (i+1)).slice -2

	draw : =>
		fill "black"
		textSize 0.3*S
		for i in range N
			text "Må Ti On To Fr Lö Sö".split(' ')[i], kalender.mx+S*i, 0.77*S
		textSize 0.3*S
		for i in range 6
			text "v"+"15 16 17 18 19 20 21 22".split(' ')[i], S/2, kalender.my+S*i
		text pretty(month), S*4.5, 0.3*S

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

	resizeCanvas innerWidth, innerWidth*0.85

	S = width/8.5
	kalender.mx = 3*S/2
	kalender.my = 3*S/2
	for day in kalender.days
		day.x = kalender.mx+S*c(day.i+kalender.offset)
		day.y = kalender.my+S*r(day.i+kalender.offset)

	kalender.buttons = []

	w = 0.11*width
	h = 0.06*height

	kalender.buttons.push new Button "Förra",  18,4,w,h,'white',=> monthClick -1
	kalender.buttons.push new Button "Nästa",  88,4,w,h,'white',=> monthClick +1

	w = 0.16*width
	h = 0.06*height

	kalender.buttons.push new Button "Senior",  45,88,w,h,'yellow',ageClick
	kalender.buttons.push new Button "Junior",  65,88,w,h,'white',ageClick
	kalender.buttons.push new Button "Tjej",    85,88,w,h,'pink',ageClick

	kalender.buttons.push new Button "Klubb",   45,95,w,h,'red',geoClick
	kalender.buttons.push new Button "Distrikt",65,95,w,h,'green',geoClick
	kalender.buttons.push new Button "Nation",  85,95,w,h,'blue',geoClick

	# H = min(innerHeight//11,innerWidth//10)
	# W = H
	# S = W
	# mx = (innerWidth - 8*S)/2
	# my = S/2

window.mousePressed = =>
	kalender.mousePressed mouseX,mouseY

window.preload = =>
	data = loadJSON "kalender.json"

window.setup = =>
	#noLoop()
	createCanvas 425,375
	textAlign CENTER, CENTER
	rectMode CENTER
	data = data.events
	kalender = new Kalender data
	resize()
	draw()

window.draw = ->
	background 'lightgray'
	kalender.draw()