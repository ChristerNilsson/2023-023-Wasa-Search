// Generated by CoffeeScript 2.5.1
var J, N, URL1, URL2, URL3, URL4, URL5, URL6, URL7, URL8, click, data, makeButtons, rad, rubrik, tds, tdt;

import {
  r4r,
  div,
  button,
  input,
  br,
  table,
  tr,
  td,
  th,
  span
} from '../js/utils.js';

URL1 = "https://www.wasask.se/aaawasa/wordpress/?s=";

URL2 = "https://www.google.com/search?q=site:wasask.se ";

URL3 = "https://stockholmsschack.se/?s=";

URL4 = "https://www.google.com/search?q=site:stockholmsschack.se ";

URL5 = "https://schack.se/?s=";

URL6 = "https://www.google.com/search?q=site:schack.se ";

URL7 = "https://bildbanken.schack.se/?query=";

URL8 = "https://storage.googleapis.com/bildbanken2/index.html?query=";

N = "";

J = "Ja";

data = null;

click = (url) => {
  return window.location = url + data.value;
};

makeButtons = (urlw, urlg, text, g) => {
  return [
    tr({},
    //td {}, text
    td({},
    button({
      style: "font-size:30px; text-align:center; width:270px",
      onclick: () => {
        return click(urlw);
      }
    },
    text)),
    td({},
    button({
      style: "font-size:30px; text-align:center; width:270px",
      onclick: () => {
        return click(urlg);
      }
    },
    g)))
  ];
};

tds = {
  style: "border:1px solid black; text-align:left"
};

tdt = {
  style: "border:1px solid black"
};

rubrik = (a, b, c) => {
  return tr({}, th(tds, a), th(tds, b), th(tds, c));
};

rad = (a, b, c, d = "") => {
  return tr({}, td(tds, a), td(tdt, b), td(tdt, c), td(tds, d));
};

r4r(() => {
  return div({
    style: "font-size:30px; text-align:center"
  }, br({}), data = input({
    style: "font-size:30px; width:540px",
    autofocus: true,
    placeholder: "ange noll eller flera sökord"
  }), br({}), br({}), table({
    style: "border:1px solid black; margin:auto; border-collapse: collapse;"
  }, makeButtons(URL1, URL2, "Wasa Schackklubb", "Google"), makeButtons(URL3, URL4, "Stockholms SF", "Google"), makeButtons(URL5, URL6, "Sveriges SF", "Google"), makeButtons(URL7, URL8, "Bildbanken 1", "Bildbanken 2")), br({}), table({
    style: "font-size:24px; border:1px solid black; margin:auto; border-collapse: collapse;"
  }, rubrik("Feature", "BB1", "BB2"), rad("Bildtext", N, J), rad("Länk till Inbjudan", N, J), rad("Länk till Resultat", N, J), rad("Länk till Video", N, J), rad("Zoom", N, J, "Klick + rullhjul"), rad("Panorering", N, J, "Klick + mushasning"), rad("Bildspel", N, J, "Add + Play"), rad("Högupplösta bilder", N, J, "Klick"), rad("Sökning med OCH", J, J, "anges ej"), rad("Sökning med ELLER", N, J, "anges ej"), rad("Sökning på hela ord", J, J, "All = [x]"), rad("Sökning på orddelar", N, J, "All = [  ]"), rad("Skiftlägesokänslig", J, J, "Case = [  ]"), rad("Skiftlägeskänslig", N, J, "Case = [x]"), rad("Sökning i filnamn", J, J), rad("Sökning i katalognamn", N, J), rad("Sökning i viss katalog", N, J), rad("Korrekt kronologi", N, J, "Knäpptidpunkt"), rad("Sökning i text i bild", J, N), rad("Kräver webbserver", J, N)));
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsV0FBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBOztBQUFBLE9BQUE7RUFBUSxHQUFSO0VBQVksR0FBWjtFQUFnQixNQUFoQjtFQUF1QixLQUF2QjtFQUE2QixFQUE3QjtFQUFnQyxLQUFoQztFQUFzQyxFQUF0QztFQUF5QyxFQUF6QztFQUE0QyxFQUE1QztFQUErQyxJQUEvQztDQUFBLE1BQUE7O0FBRUEsSUFBQSxHQUFPOztBQUNQLElBQUEsR0FBTzs7QUFDUCxJQUFBLEdBQU87O0FBQ1AsSUFBQSxHQUFPOztBQUNQLElBQUEsR0FBTzs7QUFDUCxJQUFBLEdBQU87O0FBQ1AsSUFBQSxHQUFPOztBQUNQLElBQUEsR0FBTzs7QUFFUCxDQUFBLEdBQUk7O0FBQ0osQ0FBQSxHQUFJOztBQUVKLElBQUEsR0FBTzs7QUFDUCxLQUFBLEdBQVEsQ0FBQyxHQUFELENBQUEsR0FBQTtTQUFTLE1BQU0sQ0FBQyxRQUFQLEdBQWtCLEdBQUEsR0FBTSxJQUFJLENBQUM7QUFBdEM7O0FBQ1IsV0FBQSxHQUFjLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLENBQW5CLENBQUEsR0FBQTtTQUF5QjtJQUN0QyxFQUFBLENBQUcsQ0FBQSxDQUFIOztJQUVDLEVBQUEsQ0FBRyxDQUFBLENBQUg7SUFDQyxNQUFBLENBQU87TUFBQyxLQUFBLEVBQU0sZ0RBQVA7TUFBeUQsT0FBQSxFQUFTLENBQUEsQ0FBQSxHQUFBO2VBQUcsS0FBQSxDQUFNLElBQU47TUFBSDtJ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T0FBL0IsQ0FURCxFQVVDLEdBQUEsQ0FBSSxpQkFBSixFQUF1QixDQUF2QixFQUEwQixDQUExQixFQUE2QixVQUE3QixDQVZELEVBV0MsR0FBQSxDQUFJLG1CQUFKLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLFVBQS9CLENBWEQsRUFZQyxHQUFBLENBQUkscUJBQUosRUFBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUMsV0FBakMsQ0FaRCxFQWFDLEdBQUEsQ0FBSSxxQkFBSixFQUEyQixDQUEzQixFQUE4QixDQUE5QixFQUFnQyxZQUFoQyxDQWJELEVBY0MsR0FBQSxDQUFJLG9CQUFKLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCLEVBQWdDLGFBQWhDLENBZEQsRUFlQyxHQUFBLENBQUksbUJBQUosRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsWUFBL0IsQ0FmRCxFQWdCQyxHQUFBLENBQUksbUJBQUosRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FoQkQsRUFpQkMsR0FBQSxDQUFJLHVCQUFKLEVBQTZCLENBQTdCLEVBQWdDLENBQWhDLENBakJELEVBa0JDLEdBQUEsQ0FBSSx3QkFBSixFQUE4QixDQUE5QixFQUFpQyxDQUFqQyxDQWxCRCxFQW1CQyxHQUFBLENBQUksbUJBQUosRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBOEIsZUFBOUIsQ0FuQkQsRUFvQkMsR0FBQSxDQUFJLHVCQUFKLEVBQTZCLENBQTdCLEVBQWdDLENBQWhDLENBcEJELEVBcUJDLEdBQUEsQ0FBSSxtQkFBSixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQXJCRCxDQVhEO0FBREcsQ0FBSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cjRyLGRpdixidXR0b24saW5wdXQsYnIsdGFibGUsdHIsdGQsdGgsc3Bhbn0gZnJvbSAnLi4vanMvdXRpbHMuanMnXHJcblxyXG5VUkwxID0gXCJodHRwczovL3d3dy53YXNhc2suc2UvYWFhd2FzYS93b3JkcHJlc3MvP3M9XCJcclxuVVJMMiA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1zaXRlOndhc2Fzay5zZSBcIlxyXG5VUkwzID0gXCJodHRwczovL3N0b2NraG9sbXNzY2hhY2suc2UvP3M9XCJcclxuVVJMNCA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1zaXRlOnN0b2NraG9sbXNzY2hhY2suc2UgXCJcclxuVVJMNSA9IFwiaHR0cHM6Ly9zY2hhY2suc2UvP3M9XCJcclxuVVJMNiA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1zaXRlOnNjaGFjay5zZSBcIlxyXG5VUkw3ID0gXCJodHRwczovL2JpbGRiYW5rZW4uc2NoYWNrLnNlLz9xdWVyeT1cIlxyXG5VUkw4ID0gXCJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vYmlsZGJhbmtlbjIvaW5kZXguaHRtbD9xdWVyeT1cIlxyXG5cclxuTiA9IFwiXCJcclxuSiA9IFwiSmFcIlxyXG5cclxuZGF0YSA9IG51bGxcclxuY2xpY2sgPSAodXJsKSA9PiB3aW5kb3cubG9jYXRpb24gPSB1cmwgKyBkYXRhLnZhbHVlXHJcbm1ha2VCdXR0b25zID0gKHVybHcsIHVybGcsIHRleHQsIGcpID0+IFtcclxuXHR0ciB7fSxcclxuXHRcdCN0ZCB7fSwgdGV4dFxyXG5cdFx0dGQge30sXHJcblx0XHRcdGJ1dHRvbiB7c3R5bGU6XCJmb250LXNpemU6MzBweDsgdGV4dC1hbGlnbjpjZW50ZXI7IHdpZHRoOjI3MHB4XCIsIG9uY2xpY2s6ID0+IGNsaWNrIHVybHd9LCB0ZXh0XHJcblx0XHR0ZCB7fSxcclxuXHRcdFx0YnV0dG9uIHtzdHlsZTpcImZvbnQtc2l6ZTozMHB4OyB0ZXh0LWFsaWduOmNlbnRlcjsgd2lkdGg6MjcwcHhcIiwgb25jbGljazogPT4gY2xpY2sgdXJsZ30sIGdcclxuXVxyXG5cclxudGRzID0ge3N0eWxlOlwiYm9yZGVyOjFweCBzb2xpZCBibGFjazsgdGV4dC1hbGlnbjpsZWZ0XCJ9XHJcbnRkdCA9IHtzdHlsZTpcImJvcmRlcjoxcHggc29saWQgYmxhY2tcIn1cclxuXHJcbnJ1YnJpayA9IChhLGIsYykgPT5cclxuXHR0ciB7fSxcclxuXHRcdHRoIHRkcywgYVxyXG5cdFx0dGggdGRzLCBiXHJcblx0XHR0aCB0ZHMsIGNcclxuXHJcbnJhZCA9IChhLGIsYyxkPVwiXCIpID0+XHJcblx0dHIge30sXHJcblx0XHR0ZCB0ZHMsIGFcclxuXHRcdHRkIHRkdCwgYlxyXG5cdFx0dGQgdGR0LCBjXHJcblx0XHR0ZCB0ZHMsIGRcclxuXHJcbnI0ciA9PlxyXG5cdGRpdiB7c3R5bGU6XCJmb250LXNpemU6MzBweDsgdGV4dC1hbGlnbjpjZW50ZXJcIn0sXHJcblx0XHRiciB7fVxyXG5cdFx0ZGF0YSA9IGlucHV0IHtzdHlsZTpcImZvbnQtc2l6ZTozMHB4OyB3aWR0aDo1NDBweFwiLCBhdXRvZm9jdXM6dHJ1ZSwgcGxhY2Vob2xkZXI6XCJhbmdlIG5vbGwgZWxsZXIgZmxlcmEgc8O2a29yZFwifVxyXG5cdFx0YnIge31cclxuXHRcdGJyIHt9XHJcblx0XHR0YWJsZSB7c3R5bGU6XCJib3JkZXI6MXB4IHNvbGlkIGJsYWNrOyBtYXJnaW46YXV0bzsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcIn0sXHJcblx0XHRcdG1ha2VCdXR0b25zIFVSTDEsIFVSTDIsIFwiV2FzYSBTY2hhY2trbHViYlwiLFwiR29vZ2xlXCJcclxuXHRcdFx0bWFrZUJ1dHRvbnMgVVJMMywgVVJMNCwgXCJTdG9ja2hvbG1zIFNGXCIsXCJHb29nbGVcIlxyXG5cdFx0XHRtYWtlQnV0dG9ucyBVUkw1LCBVUkw2LCBcIlN2ZXJpZ2VzIFNGXCIsXCJHb29nbGVcIlxyXG5cdFx0XHRtYWtlQnV0dG9ucyBVUkw3LCBVUkw4LCBcIkJpbGRiYW5rZW4gMVwiLFwiQmlsZGJhbmtlbiAyXCJcclxuXHRcdGJyIHt9XHJcblx0XHR0YWJsZSB7c3R5bGU6XCJmb250LXNpemU6MjRweDsgYm9yZGVyOjFweCBzb2xpZCBibGFjazsgbWFyZ2luOmF1dG87IGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XCJ9LFxyXG5cdFx0XHRydWJyaWsgXCJGZWF0dXJlXCIsIFwiQkIxXCIsIFwiQkIyXCJcclxuXHRcdFx0cmFkIFwiQmlsZHRleHRcIiwgTiwgSlxyXG5cdFx0XHRyYWQgXCJMw6RuayB0aWxsIEluYmp1ZGFuXCIsIE4sIEpcclxuXHRcdFx0cmFkIFwiTMOkbmsgdGlsbCBSZXN1bHRhdFwiLCBOLCBKXHJcblx0XHRcdHJhZCBcIkzDpG5rIHRpbGwgVmlkZW9cIiwgTiwgSlxyXG5cdFx0XHRyYWQgXCJab29tXCIsIE4sIEosIFwiS2xpY2sgKyBydWxsaGp1bFwiXHJcblx0XHRcdHJhZCBcIlBhbm9yZXJpbmdcIiwgTiwgSixcIktsaWNrICsgbXVzaGFzbmluZ1wiXHJcblx0XHRcdHJhZCBcIkJpbGRzcGVsXCIsIE4sIEosIFwiQWRkICsgUGxheVwiXHJcblx0XHRcdHJhZCBcIkjDtmd1cHBsw7ZzdGEgYmlsZGVyXCIsIE4sIEosXCJLbGlja1wiXHJcblx0XHRcdHJhZCBcIlPDtmtuaW5nIG1lZCBPQ0hcIiwgSiwgSiwgXCJhbmdlcyBlalwiXHJcblx0XHRcdHJhZCBcIlPDtmtuaW5nIG1lZCBFTExFUlwiLCBOLCBKLCBcImFuZ2VzIGVqXCJcclxuXHRcdFx0cmFkIFwiU8O2a25pbmcgcMOlIGhlbGEgb3JkXCIsIEosIEosIFwiQWxsID0gW3hdXCJcclxuXHRcdFx0cmFkIFwiU8O2a25pbmcgcMOlIG9yZGRlbGFyXCIsIE4sIEosXCJBbGwgPSBbICBdXCJcclxuXHRcdFx0cmFkIFwiU2tpZnRsw6RnZXNva8OkbnNsaWdcIiwgSiwgSiwgXCJDYXNlID0gWyAgXVwiXHJcblx0XHRcdHJhZCBcIlNraWZ0bMOkZ2Vza8OkbnNsaWdcIiwgTiwgSiwgXCJDYXNlID0gW3hdXCJcclxuXHRcdFx0cmFkIFwiU8O2a25pbmcgaSBmaWxuYW1uXCIsIEosIEpcclxuXHRcdFx0cmFkIFwiU8O2a25pbmcgaSBrYXRhbG9nbmFtblwiLCBOLCBKXHJcblx0XHRcdHJhZCBcIlPDtmtuaW5nIGkgdmlzcyBrYXRhbG9nXCIsIE4sIEpcclxuXHRcdFx0cmFkIFwiS29ycmVrdCBrcm9ub2xvZ2lcIiwgTiwgSixcIktuw6RwcHRpZHB1bmt0XCJcclxuXHRcdFx0cmFkIFwiU8O2a25pbmcgaSB0ZXh0IGkgYmlsZFwiLCBKLCBOXHJcblx0XHRcdHJhZCBcIktyw6R2ZXIgd2ViYnNlcnZlclwiLCBKLCBOXHJcbiJdfQ==
//# sourceURL=c:\github\2023-023-Wasa-Search\coffee\sketch.coffee