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
  var b;
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
  var arr, i, len, line, n, ref, results;
  ref = s.split("\n");
  results = [];
  for (i = 0, len = ref.length; i < len; i++) {
    line = ref[i];
    n = countTabs(line);
    if (n === 0) {
      results.push(div({}, line, br({})));
    } else {
      results.push(div({
        style: "margin-left:" + n * 20 + "px"
      }, line.includes("LINK") ? (arr = line.split(" "), a({
        href: arr[2]
      }, arr[1])) : line));
    }
  }
  return results;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcdXRpbHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBeUU7QUFBQSxJQUFBLFNBQUE7RUFBQTs7QUFDekUsT0FBTyxDQUFQLE1BQUE7O0FBRUEsT0FBQTtFQUFTLFlBQVQ7RUFBdUIsWUFBdkI7RUFBcUMsVUFBckM7Q0FBQSxNQUFBOztBQUNBLE9BQUE7RUFBUyxXQUFUO0NBQUEsTUFBQTs7QUFDQSxPQUFPLENBQVAsTUFBQTs7QUFDQSxPQUFBO0VBQVMsTUFBVDtDQUFBLE1BQUE7O0FBRUEsT0FBQSxJQUFPLE1BQUEsR0FBUzs7QUFDaEIsT0FBQSxJQUFPLE1BQUEsR0FBUzs7QUFDaEIsT0FBQSxJQUFPLElBQUEsR0FBTzs7QUFFZCxPQUFBLElBQU8sQ0FBQSxHQUFJOztBQUVYLE9BQUEsSUFBTyxHQUFBLEdBQU0sQ0FBQyxDQUFELENBQUEsR0FBQTtnQkFBTyxHQUFLO0FBQVo7O0FBQ2IsT0FBQSxJQUFPLEdBQUEsR0FBTSxDQUFDLENBQUQsQ0FBQSxHQUFBO29CQUFPLElBQUs7QUFBWjs7QUFDYixPQUFBLElBQU8sR0FBQSxHQUFNLENBQUMsR0FBRCxDQUFBLEdBQUE7U0FBUyxHQUFHLENBQUMsTUFBSixDQUFXLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFBLEdBQUE7V0FBVSxDQUFBLEdBQUk7RUFBZCxDQUFELENBQVgsRUFBOEIsQ0FBOUI7QUFBVDs7QUFDYixPQUFBLElBQU8sR0FBQSxHQUFNLENBQUMsQ0FBRCxDQUFBLEdBQUE7U0FBTyxNQUFBLENBQU8sQ0FBUCxFQUFVLFFBQVEsQ0FBQyxjQUFULENBQXdCLEtBQXhCLENBQVY7QUFBUDs7QUFFYixPQUFBLElBQU8sR0FBQSxHQUFNLENBQUMsQ0FBQzs7QUFDZixPQUFBLElBQU8sS0FBQSxHQUFRLENBQUMsQ0FBQzs7QUFDakIsT0FBQSxJQUFPLEdBQUEsR0FBTSxPQUFPLENBQUM7O0FBQ3JC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TG9COztBQU9yQixTQUFBLEdBQVksQ0FBQyxDQUFELENBQUEsR0FBQTtBQUNaLE1BQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUE7RUFBQyxDQUFBLEdBQUk7RUFDSixLQUFBLG1DQUFBOztJQUNDLElBQUcsQ0FBQSxLQUFLLElBQVI7TUFBa0IsQ0FBQSxHQUFsQjtLQUFBLE1BQUE7QUFBMkIsYUFBTyxFQUFsQzs7RUFERDtBQUZXOztBQUtaLE9BQUEsSUFBTyxRQUFBLEdBQVcsQ0FBQyxDQUFELENBQUEsR0FBQTtBQUNsQixNQUFBLEdBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBO0FBQUM7QUFBQTtFQUFBLEtBQUEscUNBQUE7O0lBQ0MsQ0FBQSxHQUFJLFNBQUEsQ0FBVSxJQUFWO0lBQ0osSUFBRyxDQUFBLEtBQUcsQ0FBTjttQkFDQyxHQUFBLENBQUksQ0FBQSxDQUFKLEVBQ0MsSUFERCxFQUVDLEVBQUEsQ0FBRyxDQUFBLENBQUgsQ0FGRCxHQUREO0tBQUEsTUFBQTttQkFLQyxHQUFBLENBQUk7UUFBQyxLQUFBLEVBQU0sY0FBQSxHQUFpQixDQUFBLEdBQUUsRUFBbkIsR0FBd0I7TUFBL0IsQ0FBSixFQUNJLElBQUksQ0FBQyxRQUFMLENBQWMsTUFBZCxDQUFILEdBQ0osQ0FBSyxHQUFBLEdBQU0sSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYLENBQVgsRUFDSyxDQUFBLENBQUU7UUFBQyxJQUFBLEVBQUssR0FBRyxDQUFDLENBQUQ7TUFBVCxDQUFGLEVBQWlCLEdBQUcsQ0FBQyxDQUFELENBQXBCLENBREwsQ0FESSxHQUlDLElBTEYsR0FMRDs7RUFGRCxDQUFBOztBQURpQiIsInNvdXJjZXNDb250ZW50IjpbIiMgaW1wb3J0IGggICAgICAgICAgICAgICAgZnJvbSBcImh0dHBzOi8vY2RuLnNreXBhY2suZGV2L3NvbGlkLWpzQDEuMi42L2hcIlxyXG5pbXBvcnQgXyAgICAgICAgICAgICAgICBmcm9tICdodHRwczovL2Nkbi5za3lwYWNrLmRldi9sb2Rhc2gnXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVTaWduYWwsIGNyZWF0ZUVmZmVjdCwgY3JlYXRlTWVtbyB9IGZyb20gXCJodHRwczovL2Nkbi5za3lwYWNrLmRldi9zb2xpZC1qc0AxLjIuNlwiXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gIGZyb20gXCJodHRwczovL2Nkbi5za3lwYWNrLmRldi9zb2xpZC1qc0AxLjIuNi9zdG9yZVwiXHJcbmltcG9ydCBoICAgICAgICAgICAgICAgIGZyb20gXCJodHRwczovL2Nkbi5za3lwYWNrLmRldi9zb2xpZC1qc0AxLjIuNi9oXCJcclxuaW1wb3J0IHsgcmVuZGVyIH0gICAgICAgZnJvbSBcImh0dHBzOi8vY2RuLnNreXBhY2suZGV2L3NvbGlkLWpzQDEuMi42L3dlYlwiXHJcblxyXG5leHBvcnQgc2lnbmFsID0gY3JlYXRlU2lnbmFsXHJcbmV4cG9ydCBlZmZlY3QgPSBjcmVhdGVFZmZlY3RcclxuZXhwb3J0IG1lbW8gPSBjcmVhdGVNZW1vXHJcblxyXG5leHBvcnQgTiA9IDhcclxuXHJcbmV4cG9ydCBjb2wgPSAobikgPT4gbiAlJSBOXHJcbmV4cG9ydCByb3cgPSAobikgPT4gbiAvLyBOXHJcbmV4cG9ydCBzdW0gPSAoYXJyKSA9PiBhcnIucmVkdWNlKCgoYSwgYikgPT4gYSArIGIpLCAwKVxyXG5leHBvcnQgcjRyID0gKGEpID0+IHJlbmRlciBhLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCBcImFwcFwiXHJcblxyXG5leHBvcnQgbWFwID0gXy5tYXBcclxuZXhwb3J0IHJhbmdlID0gXy5yYW5nZVxyXG5leHBvcnQgbG9nID0gY29uc29sZS5sb2dcclxuZXhwb3J0IGFicyA9IE1hdGguYWJzXHJcblxyXG5leHBvcnQgYSA9IChhLi4uKSA9PiBoIFwiYVwiLCBhXHJcbmV4cG9ydCBiciA9IChhLi4uKSA9PiBoIFwiYnJcIiwgYVxyXG5leHBvcnQgYnV0dG9uID0gKGEuLi4pID0+IGggXCJidXR0b25cIiwgYVxyXG5leHBvcnQgY2lyY2xlID0gKGEuLi4pID0+IGggXCJjaXJjbGVcIiwgYVxyXG5leHBvcnQgZGVmcyA9IChhLi4uKSA9PiBoIFwiZGVmc1wiLCBhXHJcbmV4cG9ydCBkaXYgPSAoYS4uLikgPT4gaCBcImRpdlwiLCBhXHJcbmV4cG9ydCBlbGxpcHNlID0gKGEuLi4pID0+IGggXCJlbGxpcHNlXCIsIGFcclxuZXhwb3J0IGZpZ3VyZSA9IChhLi4uKSA9PiBoIFwiZmlndXJlXCIsIGFcclxuZXhwb3J0IGZpZ0NhcHRpb24gPSAoYS4uLikgPT4gaCBcImZpZ0NhcHRpb25cIiwgYVxyXG5leHBvcnQgZm9ybSA9IChhLi4uKSA9PiBoIFwiZm9ybVwiLCBhXHJcbmV4cG9ydCBnID0gKGEuLi4pID0+IGggXCJnXCIsIGFcclxuZXhwb3J0IGgxID0gKGEuLi4pID0+IGggXCJoMVwiLCBhXHJcbmV4cG9ydCBoMyA9IChhLi4uKSA9PiBoIFwiaDNcIiwgYVxyXG5leHBvcnQgaGVhZGVyID0gKGEuLi4pID0+IGggXCJoZWFkZXJcIixhXHJcbmV4cG9ydCBpbWcgPSAoYS4uLikgPT4gaCBcImltZ1wiLCBhXHJcbmV4cG9ydCBpbnB1dCA9IChhLi4uKSA9PiBoIFwiaW5wdXRcIiwgYVxyXG5leHBvcnQgbGkgPSAoYS4uLikgPT4gaCBcImxpXCIsIGFcclxuZXhwb3J0IGxpbmVhckdyYWRpZW50ID0gKGEuLi4pID0+IGggXCJsaW5lYXJHcmFkaWVudFwiLCBhXHJcbmV4cG9ydCBvcHRpb24gPSAoYS4uLikgPT4gaCBcIm9wdGlvblwiLCBhXHJcbmV4cG9ydCBwID0gKGEuLi4pID0+IGggXCJwXCIsIGFcclxuZXhwb3J0IHRhYmxlID0gKGEuLi4pID0+IGggXCJ0YWJsZVwiLCBhXHJcbmV4cG9ydCB0ciA9IChhLi4uKSA9PiBoIFwidHJcIiwgYVxyXG5leHBvcnQgdGQgPSAoYS4uLikgPT4gaCBcInRkXCIsIGFcclxuZXhwb3J0IHRoID0gKGEuLi4pID0+IGggXCJ0aFwiLCBhXHJcbmV4cG9ydCByZWN0ICAgPSAoYS4uLikgPT4gaCBcInJlY3RcIixhXHJcbmV4cG9ydCBzZWxlY3QgPSAoYS4uLikgPT4gaCBcInNlbGVjdFwiLCBhXHJcbmV4cG9ydCBzcGFuID0gKGEuLi4pID0+IGggXCJzcGFuXCIsIGFcclxuZXhwb3J0IHN0b3AgPSAoYS4uLikgPT4gaCBcInN0b3BcIiwgYVxyXG5leHBvcnQgc3Ryb25nID0gKGEuLi4pID0+IGggXCJzdHJvbmdcIiwgYVxyXG5leHBvcnQgc3ZnID0gKGEuLi4pID0+IGggXCJzdmdcIiwgYVxyXG5leHBvcnQgdGV4dCAgID0gKGEuLi4pID0+IGggXCJ0ZXh0XCIsYVxyXG5leHBvcnQgdWwgPSAoYS4uLikgPT4gaCBcInVsXCIsIGFcclxuXHJcbmV4cG9ydCBQb3NpdGlvbiA9IChpbmRleCkgLT4gXCIje1wiYWJjZGVmZ2hcIltjb2wgaW5kZXhdfSN7XCI4NzY1NDMyMVwiW3JvdyBpbmRleF19XCJcclxuXHJcblxyXG5leHBvcnQgY3JlYXRlTG9jYWxTdG9yZSA9IChuYW1lLGluaXQpID0+XHJcblx0bG9jYWxTdGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtIG5hbWVcclxuXHRbc3RhdGUsIHNldFN0YXRlXSA9IGNyZWF0ZVN0b3JlIGlmIGxvY2FsU3RhdGUgdGhlbiBKU09OLnBhcnNlIGxvY2FsU3RhdGUgZWxzZSBpbml0XHJcblx0Y3JlYXRlRWZmZWN0ICgpID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtIG5hbWUsIEpTT04uc3RyaW5naWZ5IHN0YXRlXHJcblx0W3N0YXRlLCBzZXRTdGF0ZV1cclxuXHJcbmV4cG9ydCByZW1vdmVJbmRleCA9IChhcnJheSwgaW5kZXgpID0+XHJcblx0IyBbLi4uYXJyYXkuc2xpY2UgMCwgaW5kZXgsIC4uLmFycmF5LnNsaWNlIGluZGV4ICsgMV1cclxuXHRhID0gYXJyYXkuc2xpY2UgMCwgaW5kZXggXHJcblx0YiA9IGFycmF5LnNsaWNlIGluZGV4ICsgMVxyXG5cdGNvbnNvbGUubG9nIGEuY29uY2F0IGJcclxuXHRhLmNvbmNhdCBiXHJcblxyXG5jb3VudFRhYnMgPSAocykgPT5cclxuXHRuID0gMFxyXG5cdGZvciBjIGluIHNcclxuXHRcdGlmIGMgPT0gXCJcXHRcIiB0aGVuIG4rKyBlbHNlIHJldHVybiBuXHJcblxyXG5leHBvcnQgaW5kZW50ZWQgPSAocykgPT5cclxuXHRmb3IgbGluZSBpbiBzLnNwbGl0IFwiXFxuXCIgXHJcblx0XHRuID0gY291bnRUYWJzKGxpbmUpXHJcblx0XHRpZiBuPT0wXHJcblx0XHRcdGRpdiB7fSxcclxuXHRcdFx0XHRsaW5lXHJcblx0XHRcdFx0YnIge31cclxuXHRcdGVsc2VcclxuXHRcdFx0ZGl2IHtzdHlsZTpcIm1hcmdpbi1sZWZ0OlwiICsgbioyMCArIFwicHhcIn0sXHJcblx0XHRcdFx0aWYgbGluZS5pbmNsdWRlcyBcIkxJTktcIlxyXG5cdFx0XHRcdFx0YXJyID0gbGluZS5zcGxpdCBcIiBcIlxyXG5cdFx0XHRcdFx0YSB7aHJlZjphcnJbMl19LCBhcnJbMV1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRsaW5lXHJcbiJdfQ==
//# sourceURL=c:\github\2023-023-Wasa-Search\coffee\utils.coffee