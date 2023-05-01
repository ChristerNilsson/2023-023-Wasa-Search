import {r4r,div,button,input,br} from '../js/utils.js'

URL = "https://www.wasask.se/aaawasa/wordpress/?s="

data = null
onclick = => window.location = URL + data.value
onkeypress = (e) => if e.keyCode == 13 then onclick()


r4r =>
	div {style : "font-size:32px; text-align:center"},
		"Sök inom Wasa Schackklubbs hemsida:",
		br {}
		data = input {style: "font-size:32px; width:600px",onkeypress}
		br {}
		button {style: "font-size:32px; text-align:center; width:608px", onclick},"Sök"
