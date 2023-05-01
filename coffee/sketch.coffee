import {r4r,div,button,input,br} from '../js/utils.js'

URL = "https://www.wasask.se/aaawasa/wordpress/?s="

data = null
click = => window.location = URL + data.value
keypress = (e) => if e.keyCode == 13 then click()

r4r =>
	div {style:"width:600px"},
		"Sök inom Wasa Schackklubbs hemsida:",
		data = input {style:"width:600px; font-size:32px;", onkeypress : keypress}
		br {}
		button {type:"submit", style:"width:608px; font-size:32px;",onclick: click},"Sök"
