// Generated by CoffeeScript 2.5.1
var URL1, URL2, click, data;

import {
  r4r,
  div,
  button,
  input,
  br
} from '../js/utils.js';

URL1 = "https://www.wasask.se/aaawasa/wordpress/?s=";

URL2 = "https://www.google.com/search?q=site:wasask.se ";

data = null;

click = (url) => {
  return window.location = url + data.value;
};

r4r(() => {
  return div({
    style: "font-size:32px; text-align:center"
  }, "Wasa SK sökruta", br({}), data = input({
    style: "font-size:32px; width:600px"
  }), br({}), button({
    style: "font-size:32px; text-align:center; width:608px",
    onclick: () => {
      return click(URL1);
    }
  }, "Sök via Wordpress"), br({}), button({
    style: "font-size:32px; text-align:center; width:608px",
    onclick: () => {
      return click(URL2);
    }
  }, "Sök via Google"));
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUE7O0FBQUEsT0FBQTtFQUFRLEdBQVI7RUFBWSxHQUFaO0VBQWdCLE1BQWhCO0VBQXVCLEtBQXZCO0VBQTZCLEVBQTdCO0NBQUEsTUFBQTs7QUFFQSxJQUFBLEdBQU87O0FBQ1AsSUFBQSxHQUFPOztBQUVQLElBQUEsR0FBTzs7QUFDUCxLQUFBLEdBQVEsQ0FBQyxHQUFELENBQUEsR0FBQTtTQUFTLE1BQU0sQ0FBQyxRQUFQLEdBQWtCLEdBQUEsR0FBTSxJQUFJLENBQUM7QUFBdEM7O0FBRVIsR0FBQSxDQUFJLENBQUEsQ0FBQSxHQUFBO1NBQ0gsR0FBQSxDQUFJO0lBQUMsS0FBQSxFQUFNO0VBQVAsQ0FBSixFQUNDLGlCQURELEVBRUMsRUFBQSxDQUFHLENBQUEsQ0FBSCxDQUZELEVBR0MsSUFBQSxHQUFPLEtBQUEsQ0FBTTtJQUFDLEtBQUEsRUFBTTtFQUFQLENBQU4sQ0FIUixFQUlDLEVBQUEsQ0FBRyxDQUFBLENBQUgsQ0FKRCxFQUtDLE1BQUEsQ0FBTztJQUFDLEtBQUEsRUFBTSxnREFBUDtJQUF5RCxPQUFBLEVBQVMsQ0FBQSxDQUFBLEdBQUE7YUFBRyxLQUFBLENBQU0sSUFBTjtJQUFIO0VBQWxFLENBQVAsRUFBd0YsbUJBQXhGLENBTEQsRUFNQyxFQUFBLENBQUcsQ0FBQSxDQUFILENBTkQsRUFPQyxNQUFBLENBQU87SUFBQyxLQUFBLEVBQU0sZ0RBQVA7SUFBeUQsT0FBQSxFQUFTLENBQUEsQ0FBQSxHQUFBO2FBQUcsS0FBQSxDQUFNLElBQU47SUFBSDtFQUFsRSxDQUFQLEVBQXdGLGdCQUF4RixDQVBEO0FBREcsQ0FBSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cjRyLGRpdixidXR0b24saW5wdXQsYnJ9IGZyb20gJy4uL2pzL3V0aWxzLmpzJ1xyXG5cclxuVVJMMSA9IFwiaHR0cHM6Ly93d3cud2FzYXNrLnNlL2FhYXdhc2Evd29yZHByZXNzLz9zPVwiXHJcblVSTDIgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9c2l0ZTp3YXNhc2suc2UgXCJcclxuXHJcbmRhdGEgPSBudWxsXHJcbmNsaWNrID0gKHVybCkgPT4gd2luZG93LmxvY2F0aW9uID0gdXJsICsgZGF0YS52YWx1ZVxyXG5cclxucjRyID0+XHJcblx0ZGl2IHtzdHlsZTpcImZvbnQtc2l6ZTozMnB4OyB0ZXh0LWFsaWduOmNlbnRlclwifSxcclxuXHRcdFwiV2FzYSBTSyBzw7ZrcnV0YVwiLFxyXG5cdFx0YnIge31cclxuXHRcdGRhdGEgPSBpbnB1dCB7c3R5bGU6XCJmb250LXNpemU6MzJweDsgd2lkdGg6NjAwcHhcIn1cclxuXHRcdGJyIHt9XHJcblx0XHRidXR0b24ge3N0eWxlOlwiZm9udC1zaXplOjMycHg7IHRleHQtYWxpZ246Y2VudGVyOyB3aWR0aDo2MDhweFwiLCBvbmNsaWNrOiA9PiBjbGljayBVUkwxfSxcIlPDtmsgdmlhIFdvcmRwcmVzc1wiXHJcblx0XHRiciB7fVxyXG5cdFx0YnV0dG9uIHtzdHlsZTpcImZvbnQtc2l6ZTozMnB4OyB0ZXh0LWFsaWduOmNlbnRlcjsgd2lkdGg6NjA4cHhcIiwgb25jbGljazogPT4gY2xpY2sgVVJMMn0sXCJTw7ZrIHZpYSBHb29nbGVcIlxyXG4iXX0=
//# sourceURL=c:\github\2023-023-Wasa-Search\coffee\sketch.coffee