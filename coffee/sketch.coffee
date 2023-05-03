import {r4r,div,button,input,br,table,tr,td,th,span} from '../js/utils.js'

URL1 = "https://www.wasask.se/aaawasa/wordpress/?s="
URL2 = "https://www.google.com/search?q=site:wasask.se "
URL3 = "https://stockholmsschack.se/?s="
URL4 = "https://www.google.com/search?q=site:stockholmsschack.se "
URL5 = "https://schack.se/?s="
URL6 = "https://www.google.com/search?q=site:schack.se "
URL7 = "https://bildbanken.schack.se/?query="
URL8 = "https://storage.googleapis.com/bildbanken2/index.html?query="

N = "Nej"
J = "Ja"

data = null
click = (url) => window.location = url + data.value
makeButtons = (urlw, urlg, text, w, g) => [
	tr {},
		td {}, text
		td {},
			button {style:"font-size:32px; text-align:center; width:150px", onclick: => click urlw}, w
		td {},
			button {style:"font-size:32px; text-align:center; width:150px", onclick: => click urlg}, g
]

tds = {style:"border:1px solid black"}

rubrik = (a,b,c) =>
	tr {},
		th tds, a
		th tds, b
		th tds, c

rad = (a,b,c,d="") =>
	tr {},
		td tds, a
		td tds, b
		if d==""
			td tds,c
		else
			td tds,
				span {title:d}, c

r4r =>
	div {style:"font-size:32px; text-align:center"},
		"Wasa Schackklubb Sökverktyg",
		br {}
		data = input {style:"font-size:32px; width:500px", autofocus:true}
		br {}
		br {}
		table {style:"border:1px solid black; margin:auto; border-collapse: collapse;"},
			makeButtons URL1, URL2, "Wasa SK","WP","Google"
			makeButtons URL3, URL4, "Stockholms SF","WP","Google"
			makeButtons URL5, URL6, "Sveriges SF","WP","Google"
			makeButtons URL7, URL8, "Bildbanken","BB1","BB2"
		br {}
		table {style:"border:1px solid black; margin:auto; border-collapse: collapse;"},
			rubrik "Feature", "BB1", "BB2"
			rad "Bildtext", N, J
			rad "Länk till Inbjudan", N, J
			rad "Länk till Resultat", N, J
			rad "Länk till Video", N, J
			rad "Zoom", N, J, "Klicka på bilden, använd rullhjulet"
			rad "Panorering", N, J,"Klicka på bilden, drag med musen"
			rad "Bildspel", N, J, "Klicka på Add, därefter Play"
			rad "Högupplösta bilder", N, J
			rad "Sökning med OCH", J, J, "OCH anges ej"
			rad "Sökning med ELLER", N, J, "ELLER anges ej"
			rad "Sökning på hela ord", J, J, "All ikryssat"
			rad "Sökning på delar av ord", N, J,"All ej ikryssat"
			rad "Skiftlägesokänslig", J, J, "Case ej ikryssat"
			rad "Skiftlägeskänslig", N, J, "Case ikryssat"
			rad "Sökning på katalognamn", N, J
			rad "Sökning på filnamn", J, J
			rad "Sökning på text i bild", J, N
			rad "Kräver webbserver", J, N
