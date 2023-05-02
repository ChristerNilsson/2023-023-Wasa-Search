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

rubrik = (a,b,c) =>
	tr {},
		th tds, a
		th tds, b
		th tds, c

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
		makeButton URL2, "Sök via Google (rek)"
		makeButton URL1, "Sök via Wordpress"
		makeButton URL4, "Sök i Bildbanken 2 (rek)"
		makeButton URL3, "Sök i Bildbanken 1"
		br {}
		br {}
		table {style:"border:1px solid black; margin:auto; border-collapse: collapse;"},
			rubrik "Egenskap", "BB1", "BB2"
			rad "Maximal upplösning", "Nej", "Ja"
			rad "Beskrivande text", "Nej", "Ja"
			rad "Länk till Inbjudan", "Nej", "Ja"
			rad "Länk till Resultat", "Nej", "Ja"
			rad "Länk till Video", "Nej", "Ja"
			rad "Zoom", "Nej", "Ja"
			rad "Panorering", "Nej", "Ja"
			rad "Bildspel", "Nej", "Ja"
			rad "Sökning med OCH", "Ja", "Ja"
			rad "Sökning med ELLER", "Nej", "Ja"
			rad "Sökning på hela ord", "Ja", "Ja"
			rad "Sökning på delar av ord", "Nej", "Ja"
			rad "Skiftlägesokänslig", "Ja", "Ja"
			rad "Skiftlägeskänslig", "Nej", "Ja"
			rad "Sökning på katalognamn", "Nej", "Ja"
			rad "Sökning på bildnamn", "Ja", "Ja"
			rad "Kräver webbserver", "Ja", "Nej"
