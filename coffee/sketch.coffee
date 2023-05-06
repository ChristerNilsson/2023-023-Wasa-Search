import {signal,r4r,div,a,button,input,br,table,tr,td,th,span} from '../js/utils.js'

URL1 = "https://www.wasask.se/aaawasa/wordpress/?s="
URL2 = "https://www.google.com/search?q=site:wasask.se "
URL3 = "https://stockholmsschack.se/?s="
URL4 = "https://www.google.com/search?q=site:stockholmsschack.se "
URL5 = "https://schack.se/?s="
URL6 = "https://www.google.com/search?q=site:schack.se "
URL7 = "https://bildbanken.schack.se/?query="
URL8 = "https://storage.googleapis.com/bildbanken2/index.html?query="

N = ""
J = "Ja"

[page,setPage] = signal 0

data = null
click = (url) => window.location = url + data.value
makeButtons = (urlw, urlg, text, g) => [
	tr {},
		#td {}, text
		td {},
			button {style:"font-size:30px; text-align:center; width:270px", onclick: => click urlw}, text
		td {},
			button {style:"font-size:30px; text-align:center; width:270px", onclick: => click urlg}, g
]

tds = {style:"border:1px solid black; text-align:left"}
tdt = {style:"border:1px solid black"}

rubrik = (a,b,c) =>
	tr {},
		th tds, a
		th tds, b
		th tds, c

rad = (a,b,c,d="") =>
	tr {},
		td tds, a
		td tdt, b
		td tdt, c
		td tds, d

search = =>
	div {style:"font-size:30px; text-align:center"},
		br {}
		data = input {style:"font-size:30px; width:540px", autofocus:true, placeholder:"ange noll eller flera sökord"}
		br {}
		br {}
		table {style:"border:1px solid black; margin:auto; border-collapse: collapse;"},
			makeButtons URL1, URL2, "Wasa Schackklubb","Google"
			makeButtons URL3, URL4, "Stockholms SF","Google"
			makeButtons URL5, URL6, "Sveriges SF","Google"
			makeButtons URL7, URL8, "Bildbanken 1","Bildbanken 2"
		br {}
		table {style:"font-size:24px; border:1px solid black; margin:auto; border-collapse: collapse;"},
			rubrik "Feature", "BB1", "BB2"
			rad "Bildtext", N, J
			rad "Länk till Inbjudan", N, J
			rad "Länk till Resultat", N, J
			rad "Länk till Video", N, J
			rad "Zoom", N, J, "Klick + rullhjul"
			rad "Panorering", N, J,"Klick + mushasning"
			rad "Bildspel", N, J, "Add + Play"
			rad "Högupplösta bilder", N, J,"Klick"
			rad "Sökning med OCH", J, J, "anges ej"
			rad "Sökning med ELLER", N, J, "anges ej"
			rad "Sökning på hela ord", J, J, "All = [x]"
			rad "Sökning på orddelar", N, J,"All = [  ]"
			rad "Skiftlägesokänslig", J, J, "Case = [  ]"
			rad "Skiftlägeskänslig", N, J, "Case = [x]"
			rad "Sökning i filnamn", J, J
			rad "Sökning i katalognamn", N, J
			rad "Sökning i viss katalog", N, J
			rad "Korrekt kronologi", N, J,"Knäpptidpunkt"
			rad "Sökning i text i bild", J, N
			rad "Kräver webbserver", J, N

r4r =>
	div {style:"font-size:20px; text-align:center"},
		a {href:"http://wasask.se/VT-2023_inbjudningar.php"},"Inbjudningar"
		" • "
		a {href:"junior.html"},"Junior"
		" • "
		a {href:"https://wasask.se/aaawasa/wordpress"},"Nyheter"
		" • "
		a {href:"https://resultat.schack.se/ShowClubRatingServlet?clubid=38481"},"Ranking"
		" • "
		a {href:"senior.html"},"Senior"
		" • "
		a {href:"speldatum.html"},"Speldatum"
		" • "
		a {href:"styrelse.html"},"Styrelse"
		search()