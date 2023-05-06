// Generated by CoffeeScript 2.5.1
  // import h                from "https://cdn.skypack.dev/solid-js@1.2.6/h"
var countTabs,
  modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

import _ from 'https://cdn.skypack.dev/lodash';

import {
  createSignal,
  createEffect,
  createMemo
} from "https://cdn.skypack.dev/solid-js@1.2.6";

import {
  createStore
} from "https://cdn.skypack.dev/solid-js@1.2.6/store";

import h from "https://cdn.skypack.dev/solid-js@1.2.6/h";

import {
  render
} from "https://cdn.skypack.dev/solid-js@1.2.6/web";

export var signal = createSignal;

export var effect = createEffect;

export var memo = createMemo;

export var N = 8;

export var col = (n) => {
  return modulo(n, N);
};

export var row = (n) => {
  return Math.floor(n / N);
};

export var sum = (arr) => {
  return arr.reduce(((a, b) => {
    return a + b;
  }), 0);
};

export var r4r = (a) => {
  return render(a, document.getElementById("app"));
};

export var map = _.map;

export var range = _.range;

export var log = console.log;

export var abs = Math.abs;

export var a = (...a) => {
  return h("a", a);
};

export var b = (...a) => {
  return h("b", a);
};

export var br = (...a) => {
  return h("br", a);
};

export var button = (...a) => {
  return h("button", a);
};

export var circle = (...a) => {
  return h("circle", a);
};

export var defs = (...a) => {
  return h("defs", a);
};

export var div = (...a) => {
  return h("div", a);
};

export var ellipse = (...a) => {
  return h("ellipse", a);
};

export var figure = (...a) => {
  return h("figure", a);
};

export var figCaption = (...a) => {
  return h("figCaption", a);
};

export var form = (...a) => {
  return h("form", a);
};

export var g = (...a) => {
  return h("g", a);
};

export var h1 = (...a) => {
  return h("h1", a);
};

export var h3 = (...a) => {
  return h("h3", a);
};

export var header = (...a) => {
  return h("header", a);
};

export var img = (...a) => {
  return h("img", a);
};

export var input = (...a) => {
  return h("input", a);
};

export var li = (...a) => {
  return h("li", a);
};

export var linearGradient = (...a) => {
  return h("linearGradient", a);
};

export var option = (...a) => {
  return h("option", a);
};

export var p = (...a) => {
  return h("p", a);
};

export var table = (...a) => {
  return h("table", a);
};

export var tr = (...a) => {
  return h("tr", a);
};

export var td = (...a) => {
  return h("td", a);
};

export var th = (...a) => {
  return h("th", a);
};

export var rect = (...a) => {
  return h("rect", a);
};

export var select = (...a) => {
  return h("select", a);
};

export var span = (...a) => {
  return h("span", a);
};

export var stop = (...a) => {
  return h("stop", a);
};

export var strong = (...a) => {
  return h("strong", a);
};

export var svg = (...a) => {
  return h("svg", a);
};

export var text = (...a) => {
  return h("text", a);
};

export var ul = (...a) => {
  return h("ul", a);
};

export var Position = function(index) {
  return `${"abcdefgh"[col(index)]}${"87654321"[row(index)]}`;
};

export var createLocalStore = (name, init) => {
  var localState, setState, state;
  localState = localStorage.getItem(name);
  [state, setState] = createStore(localState ? JSON.parse(localState) : init);
  createEffect(() => {
    return localStorage.setItem(name, JSON.stringify(state));
  });
  return [state, setState];
};

export var removeIndex = (array, index) => {
  // [...array.slice 0, index, ...array.slice index + 1]
  a = array.slice(0, index);
  b = array.slice(index + 1);
  console.log(a.concat(b));
  return a.concat(b);
};

countTabs = (s) => {
  var c, i, len, n;
  n = 0;
  for (i = 0, len = s.length; i < len; i++) {
    c = s[i];
    if (c === "\t") {
      n++;
    } else {
      return n;
    }
  }
};

export var indented = (s) => {
  var arr, line, n;
  return div({
    style: "font-family:monospace;font-size:16px"
  }, (function() {
    var i, len, ref, results;
    ref = s.split("\n");
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      line = ref[i];
      n = countTabs(line);
      results.push(div({
        style: "margin-left:" + n * 20 + "px"
      }, line.includes("LINK") ? (arr = line.split("|"), a({
        href: arr[2]
      }, arr[1])) : line.includes("TOUR") ? (arr = line.split("|"), a({
        href: "https://member.schack.se/ShowTournamentServlet?id=" + arr[2]
      }, arr[1])) : line.includes("ANMÄL") ? (arr = line.split("|"), a({
        href: "https://member.schack.se/turnering/" + arr[2] + "/anmalan"
      }, arr[1])) : line.trim() === "" ? br({}) : line.includes("HEADER") ? (arr = line.split("|"), h1({}, arr[1])) : line.includes("BB2") ? (arr = line.split("|"), a({
        href: "https://storage.googleapis.com/bildbanken2/index.html?query=" + arr[2]
      }, arr[1])) : line.includes("WASA") ? (arr = line.split("|"), a({
        href: "https://www.wasask.se/" + arr[2]
      }, arr[1])) : line.includes("BOLD") ? (arr = line.split("|"), b({}, arr[1])) : line));
    }
    return results;
  })());
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcdXRpbHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBeUU7QUFBQSxJQUFBLFNBQUE7RUFBQTs7QUFDekUsT0FBTyxDQUFQLE1BQUE7O0FBRUEsT0FBQTtFQUFTLFlBQVQ7RUFBdUIsWUFBdkI7RUFBcUMsVUFBckM7Q0FBQSxNQUFBOztBQUNBLE9BQUE7RUFBUyxXQUFUO0NBQUEsTUFBQTs7QUFDQSxPQUFPLENBQVAsTUFBQTs7QUFDQSxPQUFBO0VBQVMsTUFBVDtDQUFBLE1BQUE7O0FBRUEsT0FBQSxJQUFPLE1BQUEsR0FBUzs7QUFDaEIsT0FBQSxJQUFPLE1BQUEsR0FBUzs7QUFDaEIsT0FBQSxJQUFPLElBQUEsR0FBTzs7QUFFZCxPQUFBLElBQU8sQ0FBQSxHQUFJOztBQUVYLE9BQUEsSUFBTyxHQUFBLEdBQU0sQ0FBQyxDQUFELENBQUEsR0FBQTtnQkFBTyxHQUFLO0FBQVo7O0FBQ2IsT0FBQSxJQUFPLEdBQUEsR0FBTSxDQUFDLENBQUQsQ0FBQSxHQUFBO29CQUFPLElBQUs7QUFBWjs7QUFDYixPQUFBLElBQU8sR0FBQSxHQUFNLENBQUMsR0FBRCxDQUFBLEdBQUE7U0FBUyxHQUFHLENBQUMsTUFBSixDQUFXLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFBLEdBQUE7V0FBVSxDQUFBLEdBQUk7RUFBZCxDQUFELENBQVgsRUFBOEIsQ0FBOUI7QUFBVDs7QUFDYixPQUFBLElBQU8sR0FBQSxHQUFNLENBQUMsQ0FBRCxDQUFBLEdBQUE7U0FBTyxNQUFBLENBQU8sQ0FBUCxFQUFVLFFBQVEsQ0FBQyxjQUFULENBQXdCLEtBQXhCLENBQVY7QUFBUDs7QUFFYixPQUFBLElBQU8sR0FBQSxHQUFNLENBQUMsQ0FBQzs7QUFDZixPQUFBLElBQU8sS0FBQSxHQUFRLENBQUMsQ0FBQzs7QUFDakIsT0FBQSxJQUFPLEdBQUEsR0FBTSxPQUFPLENBQUM7O0FBQ3JC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QUFHLENBQUMsQ0FBRCxDQUFULENBREwsQ0FEUyxHQUlKLElBekJGO0lBRkQsQ0FBQTs7TUFERDtBQURpQiIsInNvdXJjZXNDb250ZW50IjpbIiMgaW1wb3J0IGggICAgICAgICAgICAgICAgZnJvbSBcImh0dHBzOi8vY2RuLnNreXBhY2suZGV2L3NvbGlkLWpzQDEuMi42L2hcIlxyXG5pbXBvcnQgXyAgICAgICAgICAgICAgICBmcm9tICdodHRwczovL2Nkbi5za3lwYWNrLmRldi9sb2Rhc2gnXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVTaWduYWwsIGNyZWF0ZUVmZmVjdCwgY3JlYXRlTWVtbyB9IGZyb20gXCJodHRwczovL2Nkbi5za3lwYWNrLmRldi9zb2xpZC1qc0AxLjIuNlwiXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gIGZyb20gXCJodHRwczovL2Nkbi5za3lwYWNrLmRldi9zb2xpZC1qc0AxLjIuNi9zdG9yZVwiXHJcbmltcG9ydCBoICAgICAgICAgICAgICAgIGZyb20gXCJodHRwczovL2Nkbi5za3lwYWNrLmRldi9zb2xpZC1qc0AxLjIuNi9oXCJcclxuaW1wb3J0IHsgcmVuZGVyIH0gICAgICAgZnJvbSBcImh0dHBzOi8vY2RuLnNreXBhY2suZGV2L3NvbGlkLWpzQDEuMi42L3dlYlwiXHJcblxyXG5leHBvcnQgc2lnbmFsID0gY3JlYXRlU2lnbmFsXHJcbmV4cG9ydCBlZmZlY3QgPSBjcmVhdGVFZmZlY3RcclxuZXhwb3J0IG1lbW8gPSBjcmVhdGVNZW1vXHJcblxyXG5leHBvcnQgTiA9IDhcclxuXHJcbmV4cG9ydCBjb2wgPSAobikgPT4gbiAlJSBOXHJcbmV4cG9ydCByb3cgPSAobikgPT4gbiAvLyBOXHJcbmV4cG9ydCBzdW0gPSAoYXJyKSA9PiBhcnIucmVkdWNlKCgoYSwgYikgPT4gYSArIGIpLCAwKVxyXG5leHBvcnQgcjRyID0gKGEpID0+IHJlbmRlciBhLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCBcImFwcFwiXHJcblxyXG5leHBvcnQgbWFwID0gXy5tYXBcclxuZXhwb3J0IHJhbmdlID0gXy5yYW5nZVxyXG5leHBvcnQgbG9nID0gY29uc29sZS5sb2dcclxuZXhwb3J0IGFicyA9IE1hdGguYWJzXHJcblxyXG5leHBvcnQgYSA9IChhLi4uKSA9PiBoIFwiYVwiLCBhXHJcbmV4cG9ydCBiID0gKGEuLi4pID0+IGggXCJiXCIsIGFcclxuZXhwb3J0IGJyID0gKGEuLi4pID0+IGggXCJiclwiLCBhXHJcbmV4cG9ydCBidXR0b24gPSAoYS4uLikgPT4gaCBcImJ1dHRvblwiLCBhXHJcbmV4cG9ydCBjaXJjbGUgPSAoYS4uLikgPT4gaCBcImNpcmNsZVwiLCBhXHJcbmV4cG9ydCBkZWZzID0gKGEuLi4pID0+IGggXCJkZWZzXCIsIGFcclxuZXhwb3J0IGRpdiA9IChhLi4uKSA9PiBoIFwiZGl2XCIsIGFcclxuZXhwb3J0IGVsbGlwc2UgPSAoYS4uLikgPT4gaCBcImVsbGlwc2VcIiwgYVxyXG5leHBvcnQgZmlndXJlID0gKGEuLi4pID0+IGggXCJmaWd1cmVcIiwgYVxyXG5leHBvcnQgZmlnQ2FwdGlvbiA9IChhLi4uKSA9PiBoIFwiZmlnQ2FwdGlvblwiLCBhXHJcbmV4cG9ydCBmb3JtID0gKGEuLi4pID0+IGggXCJmb3JtXCIsIGFcclxuZXhwb3J0IGcgPSAoYS4uLikgPT4gaCBcImdcIiwgYVxyXG5leHBvcnQgaDEgPSAoYS4uLikgPT4gaCBcImgxXCIsIGFcclxuZXhwb3J0IGgzID0gKGEuLi4pID0+IGggXCJoM1wiLCBhXHJcbmV4cG9ydCBoZWFkZXIgPSAoYS4uLikgPT4gaCBcImhlYWRlclwiLGFcclxuZXhwb3J0IGltZyA9IChhLi4uKSA9PiBoIFwiaW1nXCIsIGFcclxuZXhwb3J0IGlucHV0ID0gKGEuLi4pID0+IGggXCJpbnB1dFwiLCBhXHJcbmV4cG9ydCBsaSA9IChhLi4uKSA9PiBoIFwibGlcIiwgYVxyXG5leHBvcnQgbGluZWFyR3JhZGllbnQgPSAoYS4uLikgPT4gaCBcImxpbmVhckdyYWRpZW50XCIsIGFcclxuZXhwb3J0IG9wdGlvbiA9IChhLi4uKSA9PiBoIFwib3B0aW9uXCIsIGFcclxuZXhwb3J0IHAgPSAoYS4uLikgPT4gaCBcInBcIiwgYVxyXG5leHBvcnQgdGFibGUgPSAoYS4uLikgPT4gaCBcInRhYmxlXCIsIGFcclxuZXhwb3J0IHRyID0gKGEuLi4pID0+IGggXCJ0clwiLCBhXHJcbmV4cG9ydCB0ZCA9IChhLi4uKSA9PiBoIFwidGRcIiwgYVxyXG5leHBvcnQgdGggPSAoYS4uLikgPT4gaCBcInRoXCIsIGFcclxuZXhwb3J0IHJlY3QgICA9IChhLi4uKSA9PiBoIFwicmVjdFwiLGFcclxuZXhwb3J0IHNlbGVjdCA9IChhLi4uKSA9PiBoIFwic2VsZWN0XCIsIGFcclxuZXhwb3J0IHNwYW4gPSAoYS4uLikgPT4gaCBcInNwYW5cIiwgYVxyXG5leHBvcnQgc3RvcCA9IChhLi4uKSA9PiBoIFwic3RvcFwiLCBhXHJcbmV4cG9ydCBzdHJvbmcgPSAoYS4uLikgPT4gaCBcInN0cm9uZ1wiLCBhXHJcbmV4cG9ydCBzdmcgPSAoYS4uLikgPT4gaCBcInN2Z1wiLCBhXHJcbmV4cG9ydCB0ZXh0ICAgPSAoYS4uLikgPT4gaCBcInRleHRcIixhXHJcbmV4cG9ydCB1bCA9IChhLi4uKSA9PiBoIFwidWxcIiwgYVxyXG5cclxuZXhwb3J0IFBvc2l0aW9uID0gKGluZGV4KSAtPiBcIiN7XCJhYmNkZWZnaFwiW2NvbCBpbmRleF19I3tcIjg3NjU0MzIxXCJbcm93IGluZGV4XX1cIlxyXG5cclxuXHJcbmV4cG9ydCBjcmVhdGVMb2NhbFN0b3JlID0gKG5hbWUsaW5pdCkgPT5cclxuXHRsb2NhbFN0YXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0gbmFtZVxyXG5cdFtzdGF0ZSwgc2V0U3RhdGVdID0gY3JlYXRlU3RvcmUgaWYgbG9jYWxTdGF0ZSB0aGVuIEpTT04ucGFyc2UgbG9jYWxTdGF0ZSBlbHNlIGluaXRcclxuXHRjcmVhdGVFZmZlY3QgKCkgPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0gbmFtZSwgSlNPTi5zdHJpbmdpZnkgc3RhdGVcclxuXHRbc3RhdGUsIHNldFN0YXRlXVxyXG5cclxuZXhwb3J0IHJlbW92ZUluZGV4ID0gKGFycmF5LCBpbmRleCkgPT5cclxuXHQjIFsuLi5hcnJheS5zbGljZSAwLCBpbmRleCwgLi4uYXJyYXkuc2xpY2UgaW5kZXggKyAxXVxyXG5cdGEgPSBhcnJheS5zbGljZSAwLCBpbmRleCBcclxuXHRiID0gYXJyYXkuc2xpY2UgaW5kZXggKyAxXHJcblx0Y29uc29sZS5sb2cgYS5jb25jYXQgYlxyXG5cdGEuY29uY2F0IGJcclxuXHJcbmNvdW50VGFicyA9IChzKSA9PlxyXG5cdG4gPSAwXHJcblx0Zm9yIGMgaW4gc1xyXG5cdFx0aWYgYyA9PSBcIlxcdFwiIHRoZW4gbisrIGVsc2UgcmV0dXJuIG5cclxuXHJcbmV4cG9ydCBpbmRlbnRlZCA9IChzKSA9PlxyXG5cdGRpdiB7c3R5bGU6XCJmb250LWZhbWlseTptb25vc3BhY2U7Zm9udC1zaXplOjE2cHhcIn0sXHJcblx0XHRmb3IgbGluZSBpbiBzLnNwbGl0IFwiXFxuXCIgXHJcblx0XHRcdG4gPSBjb3VudFRhYnMgbGluZVxyXG5cdFx0XHRkaXYge3N0eWxlOlwibWFyZ2luLWxlZnQ6XCIgKyBuKjIwICsgXCJweFwifSxcclxuXHRcdFx0XHRpZiBsaW5lLmluY2x1ZGVzIFwiTElOS1wiXHJcblx0XHRcdFx0XHRhcnIgPSBsaW5lLnNwbGl0IFwifFwiXHJcblx0XHRcdFx0XHRhIHtocmVmOmFyclsyXX0sIGFyclsxXVxyXG5cdFx0XHRcdGVsc2UgaWYgbGluZS5pbmNsdWRlcyBcIlRPVVJcIlxyXG5cdFx0XHRcdFx0YXJyID0gbGluZS5zcGxpdCBcInxcIlxyXG5cdFx0XHRcdFx0YSB7aHJlZjpcImh0dHBzOi8vbWVtYmVyLnNjaGFjay5zZS9TaG93VG91cm5hbWVudFNlcnZsZXQ/aWQ9XCIrYXJyWzJdfSwgYXJyWzFdXHJcblx0XHRcdFx0ZWxzZSBpZiBsaW5lLmluY2x1ZGVzIFwiQU5Nw4RMXCJcclxuXHRcdFx0XHRcdGFyciA9IGxpbmUuc3BsaXQgXCJ8XCJcclxuXHRcdFx0XHRcdGEge2hyZWY6XCJodHRwczovL21lbWJlci5zY2hhY2suc2UvdHVybmVyaW5nL1wiICsgYXJyWzJdICsgXCIvYW5tYWxhblwifSwgYXJyWzFdXHJcblx0XHRcdFx0ZWxzZSBpZiBsaW5lLnRyaW0oKSA9PSBcIlwiXHJcblx0XHRcdFx0XHRiciB7fVxyXG5cdFx0XHRcdGVsc2UgaWYgbGluZS5pbmNsdWRlcyBcIkhFQURFUlwiXHJcblx0XHRcdFx0XHRhcnIgPSBsaW5lLnNwbGl0IFwifFwiXHJcblx0XHRcdFx0XHRoMSB7fSwgYXJyWzFdXHJcblx0XHRcdFx0ZWxzZSBpZiBsaW5lLmluY2x1ZGVzIFwiQkIyXCJcclxuXHRcdFx0XHRcdGFyciA9IGxpbmUuc3BsaXQgXCJ8XCJcclxuXHRcdFx0XHRcdGEge2hyZWY6XCJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vYmlsZGJhbmtlbjIvaW5kZXguaHRtbD9xdWVyeT1cIithcnJbMl19LGFyclsxXVxyXG5cdFx0XHRcdGVsc2UgaWYgbGluZS5pbmNsdWRlcyBcIldBU0FcIlxyXG5cdFx0XHRcdFx0YXJyID0gbGluZS5zcGxpdCBcInxcIlxyXG5cdFx0XHRcdFx0YSB7aHJlZjpcImh0dHBzOi8vd3d3Lndhc2Fzay5zZS9cIithcnJbMl19LGFyclsxXVxyXG5cdFx0XHRcdGVsc2UgaWYgbGluZS5pbmNsdWRlcyBcIkJPTERcIlxyXG5cdFx0XHRcdFx0YXJyID0gbGluZS5zcGxpdCBcInxcIlxyXG5cdFx0XHRcdFx0YiB7fSwgYXJyWzFdXHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0bGluZVxyXG4iXX0=
//# sourceURL=c:\github\2023-023-Wasa-Search\coffee\utils.coffee