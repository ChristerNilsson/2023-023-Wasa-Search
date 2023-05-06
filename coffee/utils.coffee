# import h                from "https://cdn.skypack.dev/solid-js@1.2.6/h"
import _                from 'https://cdn.skypack.dev/lodash'

import { createSignal, createEffect, createMemo } from "https://cdn.skypack.dev/solid-js@1.2.6"
import { createStore }  from "https://cdn.skypack.dev/solid-js@1.2.6/store"
import h                from "https://cdn.skypack.dev/solid-js@1.2.6/h"
import { render }       from "https://cdn.skypack.dev/solid-js@1.2.6/web"

export signal = createSignal
export effect = createEffect
export memo = createMemo

export N = 8

export col = (n) => n %% N
export row = (n) => n // N
export sum = (arr) => arr.reduce(((a, b) => a + b), 0)
export r4r = (a) => render a, document.getElementById "app"

export map = _.map
export range = _.range
export log = console.log
export abs = Math.abs

export a = (a...) => h "a", a
export b = (a...) => h "b", a
export br = (a...) => h "br", a
export button = (a...) => h "button", a
export circle = (a...) => h "circle", a
export defs = (a...) => h "defs", a
export div = (a...) => h "div", a
export ellipse = (a...) => h "ellipse", a
export figure = (a...) => h "figure", a
export figCaption = (a...) => h "figCaption", a
export form = (a...) => h "form", a
export g = (a...) => h "g", a
export h1 = (a...) => h "h1", a
export h3 = (a...) => h "h3", a
export header = (a...) => h "header",a
export img = (a...) => h "img", a
export input = (a...) => h "input", a
export li = (a...) => h "li", a
export linearGradient = (a...) => h "linearGradient", a
export option = (a...) => h "option", a
export p = (a...) => h "p", a
export table = (a...) => h "table", a
export tr = (a...) => h "tr", a
export td = (a...) => h "td", a
export th = (a...) => h "th", a
export rect   = (a...) => h "rect",a
export select = (a...) => h "select", a
export span = (a...) => h "span", a
export stop = (a...) => h "stop", a
export strong = (a...) => h "strong", a
export svg = (a...) => h "svg", a
export text   = (a...) => h "text",a
export ul = (a...) => h "ul", a

export Position = (index) -> "#{"abcdefgh"[col index]}#{"87654321"[row index]}"


export createLocalStore = (name,init) =>
	localState = localStorage.getItem name
	[state, setState] = createStore if localState then JSON.parse localState else init
	createEffect () => localStorage.setItem name, JSON.stringify state
	[state, setState]

export removeIndex = (array, index) =>
	# [...array.slice 0, index, ...array.slice index + 1]
	a = array.slice 0, index 
	b = array.slice index + 1
	console.log a.concat b
	a.concat b

countTabs = (s) =>
	n = 0
	for c in s
		if c == "\t" then n++ else return n

export indented = (s) =>
	div {style:"font-family:monospace; font-size:16px"},
		for line in s.split "\n" 
			n = countTabs line
			div {style:"margin-left:" + n*20 + "px"},
				if line.includes "LINK"
					arr = line.split "|"
					a {href:arr[2]}, arr[1]
				else if line.includes "TOUR"
					arr = line.split "|"
					a {href:"https://member.schack.se/ShowTournamentServlet?id="+arr[2]}, arr[1]
				else if line.includes "ANMÄL"
					arr = line.split "|"
					a {href:"https://member.schack.se/turnering/" + arr[2] + "/anmalan"}, arr[1]
				else if line.trim() == ""
					br {}
				else if line.includes "HEADER"
					arr = line.split "|"
					h1 {}, arr[1]
				else if line.includes "BB2"
					arr = line.split "|"
					a {href:"https://storage.googleapis.com/bildbanken2/index.html?query="+arr[2]},arr[1]
				else if line.includes "WASA"
					arr = line.split "|"
					a {href:"https://www.wasask.se/"+arr[2]},arr[1]
				else if line.includes "BOLD"
					arr = line.split "|"
					b {}, arr[1]
				else
					line
