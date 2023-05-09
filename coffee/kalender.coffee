import {log,range} from '../js/utils.js'

N = 7
MONTHS = "jan feb mar apr maj jun jul aug sep okt nov dec".split(' ')

r = (i) => i // N
c = (i) => i % N

S = 50
kalender= null
data = {}

daysInMonth = (year, month) => new Date(year, month, 0).getDate()
#daysInMonth(2020, 12)); // 31
#daysInMonth(2024, 2)); // 29

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
		fill 'black'
		textSize 0.3*S
		text @prompt, @x, @y-0.25*S
		@drawAttributes()

	drawAttributes : =>
		d = 0.1*S
		yo = 0.15*S
		push()
		strokeWeight 3
		@attributes = @attributes.slice 0,6
		antal = @attributes.length
		x1 = round @x - 3.2*d
		x2 = round @x - 1.6*d
		x3 = round @x
		x4 = round @x + 1.6*d
		x5 = round @x + 3.2*d
		y1 = round @y + yo - 1.3*d
		y2 = round @y + yo
		y3 = round @y + yo + 1.3*d
		w =  round 0.08*S

		xy = [[]]
		xy.push [[x3,y2]]
		xy.push [[x2-w,y2],[x4+w,y2]]
		xy.push [[x1,y2],[x3,y2],[x5,y2]] 
		xy.push [[x2-w,y1-w],[x4+w,y1-w],[x2-w,y3],[x4+w,y3]] # quad
		xy.push [[x1,y1],[x3,y1],[x5,y1],[x2,y3],[x4,y3]] # olympic rings
		xy.push [[x1,y1],[x3,y1],[x5,y1],[x1,y3],[x3,y3],[x5,y3]] # six pack

		d = [0,0.4*S,0.3*S,0.25*S,0.3*S,0.2*S,0.2*S][antal]
		sw = [0,6,4,3,3,2,2][antal]
		strokeWeight sw
		for attr,i in @attributes
			fill {J:'black',S:'lightgray',F:'pink'}[attr[0]]
			stroke {K:'red',D:'green',N:'blue'}[attr[1]]
			[x,y] = xy[antal][i]
			console.log @i+1,attr,x,y
			circle x,y, d
		pop()

filterData = (items, month, attr) =>
	_.filter items, (item) => item.d.includes(month) and item.a.includes attr

attributes = (items,date) =>
	res = _.filter(items, (item) => item.d.includes date)
	res = _.map res, (item) => item.a
	res.sort().reverse()

class Kalender
	constructor : (@items) ->
		@mx = 3*S/2
		@my = 3*S/2
		month = '2023-04'
		@date = new Date month + '-01'
		@month = @date.getMonth()
		@tmonth = MONTHS[@month]
		
		# JST LAC TE KDN  C=Stockholm N=Sverige
		items = filterData @items, month,""
		console.log {items}

		@offset = (@date.getDay()-1) %% 7
		console.log 'offset',@offset
		@days = []
		for i in range daysInMonth @date.getFullYear(), @date.getMonth()+1
			if @offset+i >= 0
				@days.push new Day i+1, i, @mx+S*c(@offset+i), @my+S*r(@offset+i), attributes items, month + "-"+("0" + (i+1)).slice -2

	draw : =>
		textSize 0.3*S
		for i in range N
			text "må ti on to fr lö sö".split(' ')[i], kalender.mx+S*i, 0.7*S
		textSize 0.3*S
		for i in range 6
			text "v"+"15 16 17 18 19 20 21 22".split(' ')[i], S/2, kalender.my+S*i
		text "< " + MONTHS[(@month-1)%%12], S*1.5, 0.3*S
		text MONTHS[@month],          S*4.5, 0.3*S
		text MONTHS[(@month+1)%%12] + " >", S*7.5, 0.3*S

		for day in @days
			day.draw()

	mousePressed : (x,y) =>
		for day in @days
			if day.inside day.i
				day.click()

window.onresize = -> resize()

resize = ->
	S = innerWidth/8.5
	kalender.mx = 3*S/2
	kalender.my = 3*S/2
	for day in kalender.days
		day.x = kalender.mx+S*c(day.i+kalender.offset)
		day.y = kalender.my+S*r(day.i+kalender.offset)	

	# H = min(innerHeight//11,innerWidth//10)
	# W = H
	# S = W
	# mx = (innerWidth - 8*S)/2
	# my = S/2
	resizeCanvas innerWidth, 7.5*S

window.mousePressed = =>
	kalender.mousePressed mouseX,mouseY

window.preload = =>
	data = loadJSON "kalender.json"

window.setup = =>
	noLoop()
	createCanvas 425,375
	textAlign CENTER, CENTER
	rectMode CENTER
	data = data.events
	console.log data
	kalender = new Kalender data
	resize()
	draw()

window.draw = ->
	background 'lightgray'	
	kalender.draw()