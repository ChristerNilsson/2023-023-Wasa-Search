import {r4r,div,button,input,br} from '../js/utils.js'

URL = "https://www.wasask.se/aaawasa/wordpress/?s="
btn = null

keypress = (e) => if e.keyCode == 13 then btn.click()

r4r =>
	div {style:"width:600px"},
		"Sök inom Wasa Schackklubbs hemsida:",
		data = input {style:"width:600px; font-size:32px;", onkeypress : keypress}
		br {}
		btn = button {type:"submit", style:"width:608px; font-size:32px;",onclick: => window.location = URL + data.value},"Sök"
