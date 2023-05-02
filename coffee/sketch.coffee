import {r4r,div,button,input,br,table,tr,td,th} from '../js/utils.js'

URL1 = "https://www.wasask.se/aaawasa/wordpress/?s="
URL2 = "https://www.google.com/search?q=site:wasask.se "
URL3 = "https://bildbanken.schack.se/?query="
URL4 = "https://storage.googleapis.com/bildbanken2/index.html?query="

data = null
click = (url) => window.location = url + data.value
makeButton = (url, text) => [
	br {}
	button {style:"font-size:32px; text-align:center; width:608px", onclick: => click url}, text
]

tds = {style:"border:1px solid black"}

rad = (a,b,c) =>
	tr {},
		td tds, a
		td tds, b
		td tds, c

r4r =>
	div {style:"font-size:32px; text-align:center"},
		"Wasa SK sökruta",
		br {}
		data = input {style:"font-size:32px; width:600px", autofocus:true}
		makeButton URL1, "Sök via Wordpress"
		makeButton URL2, "Sök via Google"
		makeButton URL3, "Sök i Bildbanken 1"
		makeButton URL4, "Sök i Bildbanken 2"
		br {}
		br {}
		table {style:"border:1px solid black; margin:auto; border-collapse: collapse;"},
			tr {},
				th tds, "Egenskap"
				th tds, "BB1"
				th tds, "BB2"
			rad "Maximal upplösning", "Nej", "Ja"
			rad "Beskrivande texter", "Nej", "Ja"
			rad "Länkar till Inbjudan", "Nej", "Ja"
			rad "Länkar till Resultat", "Nej", "Ja"
			rad "Zoom", "Nej", "Ja"
			rad "Bildspel Direkt", "Nej", "Ja"
