// Generated by CoffeeScript 2.5.1
var Button, Day, Kalender, MONTHS, N, S, age, ageClick, attributes, c, data, daysInMonth, filterData, geo, geoClick, kalender, month, monthClick, pretty, r, resize,
  modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

import {
  log,
  range
} from '../js/utils.js';

N = 7;

MONTHS = "Jan Feb Mar Apr Maj Jun Jul Aug Sep Okt Nov Dec".split(' ');

r = (i) => {
  return Math.floor(i / N);
};

c = (i) => {
  return i % N;
};

S = 50;

kalender = null;

data = {};

month = "2023-04";

age = ""; // Junior Senior Tjej

geo = ""; // Klubb Distrikt Nation

daysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

monthClick = (delta) => {
  var mm, yyyy;
  [yyyy, mm] = month.split('-');
  yyyy = parseInt(yyyy);
  mm = parseInt(mm);
  if (mm === 12 && delta === 1) {
    yyyy++;
    mm = 1;
  } else if (mm === 1 && delta === -1) {
    yyyy--;
    mm = 12;
  } else {
    mm += delta;
    if (mm < 10) {
      mm = '0' + mm;
    }
  }
  month = yyyy + "-" + mm;
  kalender.filtrera();
  return console.log(month);
};

pretty = (month) => {
  var mm, yyyy;
  [yyyy, mm] = month.split('-');
  mm = parseInt(mm);
  return " Januari Februari Mars April Maj Juni Juli Augusti September Oktober November December".split(' ')[mm] + ' ' + yyyy;
};

ageClick = function(obj) {
  age = age === obj.prompt ? "" : obj.prompt;
  return kalender.filtrera();
};

geoClick = function(obj) {
  geo = geo === obj.prompt ? "" : obj.prompt;
  return kalender.filtrera();
};

Button = class Button {
  constructor(prompt, x4, y4, w1, h1, bg, click) {
    this.draw = this.draw.bind(this);
    this.click = this.click.bind(this);
    this.prompt = prompt;
    this.x = x4;
    this.y = y4;
    this.w = w1;
    this.h = h1;
    this.bg = bg;
    this.click = click;
    this.x *= width / 100;
    this.y *= height / 100;
  }

  draw() {
    var ref;
    push();
    fill(this.bg);
    if ((ref = this.prompt) === age || ref === geo) {
      strokeWeight(3);
    } else {
      strokeWeight(1);
    }
    rect(this.x, this.y, this.w, this.h);
    if (this.bg === 'blue') {
      fill('white');
    } else {
      fill('black');
    }
    textSize(0.3 * S);
    text(this.prompt, this.x, this.y);
    return pop();
  }

  click() {
    return console.log(this.prompt);
  }

  inside() {
    return (this.x - this.w / 2 < mouseX && mouseX < this.x + this.w / 2) && (this.y - this.h / 2 < mouseY && mouseY < this.y + this.h / 2);
  }

};

Day = class Day {
  constructor(prompt, i1, x4, y4, attributes1) {
    this.click = this.click.bind(this);
    this.draw = this.draw.bind(this);
    this.drawAttributes = this.drawAttributes.bind(this);
    this.prompt = prompt;
    this.i = i1;
    this.x = x4;
    this.y = y4;
    this.attributes = attributes1;
  }

  click() {
    return console.log(this.prompt);
  }

  inside(index) {
    var ci, ref, ref1, ri;
    ci = c(index + kalender.offset);
    ri = r(index + kalender.offset);
    return (S * ci - S / 2 < (ref = mouseX - kalender.mx) && ref < S * ci + S / 2) && (S * ri - S / 2 < (ref1 = mouseY - kalender.my) && ref1 < S * ri + S / 2);
  }

  draw() {
    fill('white');
    rect(this.x, this.y, S, S);
    this.drawAttributes();
    fill('black');
    textSize(0.3 * S);
    return text(this.prompt, this.x, this.y - 0.3 * S);
  }

  drawAttributes() {
    var antal, attr, d, i, j, len, ref, sw, x, x1, x2, x3, xy, y, y1, y2, y3;
    d = 0.1 * S;
    push();
    this.attributes = this.attributes.slice(0, 6);
    antal = this.attributes.length;
    x1 = round(this.x - 3 * d);
    x2 = round(this.x);
    x3 = round(this.x + 3 * d);
    y1 = round(this.y - 3 * d);
    y2 = round(this.y);
    y3 = round(this.y + 3 * d);
    xy = [[]];
    xy.push([
      [
        x2,
        y2 // one
      ]
    ]);
    xy.push([
      [x1,
      y1],
      [
        x3,
        y3 // two
      ]
    ]);
    xy.push([
      [x1,
      y1],
      [x2,
      y2],
      [
        x3,
        y3 // three
      ]
    ]);
    xy.push([
      [x1,
      y1],
      [x1,
      y3],
      [x3,
      y1],
      [
        x3,
        y3 // four
      ]
    ]);
    xy.push([
      [x1,
      y1],
      [x1,
      y3],
      [x3,
      y1],
      [x3,
      y3],
      [
        x2,
        y2 // five
      ]
    ]);
    xy.push([
      [x1,
      y1],
      [x1,
      y2],
      [x1,
      y3],
      [x3,
      y1],
      [x3,
      y2],
      [
        x3,
        y3 // six
      ]
    ]);
    d = 0.2 * S;
    sw = 0.05 * S;
    strokeWeight(sw);
    ref = this.attributes;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      attr = ref[i];
      fill({
        J: 'white',
        S: 'yellow',
        T: 'pink'
      }[attr[0]]);
      stroke({
        K: 'red',
        D: 'green',
        N: 'blue'
      }[attr[1]]);
      [x, y] = xy[antal][i];
      // console.log @i+1,attr,x,y
      circle(x, y, d);
    }
    return pop();
  }

};

filterData = (items, month, attr) => {
  return _.filter(items, (item) => {
    return item.d.includes(month) && item.a.includes(attr);
  });
};

attributes = (items, date) => {
  var res;
  res = _.filter(items, (item) => {
    return item.d.includes(date) && (age === "" || item.a[0] === age[0]) && (geo === "" || item.a[1] === geo[0]);
  });
  res = _.map(res, (item) => {
    return item.a;
  });
  return res.sort().reverse();
};

Kalender = class Kalender {
  constructor(items1) {
    this.filtrera = this.filtrera.bind(this);
    this.draw = this.draw.bind(this);
    this.mousePressed = this.mousePressed.bind(this);
    this.items = items1;
    this.mx = 3 * S / 2;
    this.my = 3 * S / 2;
    this.date = new Date(month + '-01');
    this.month = this.date.getMonth();
    this.tmonth = MONTHS[this.month];
    this.filtrera();
  }

  filtrera() {
    var i, items, j, len, ref, results, x, y;
    items = filterData(this.items, month, "");
    this.offset = modulo(this.date.getDay() - 1, 7);
    this.days = [];
    ref = range(daysInMonth(this.date.getFullYear(), this.date.getMonth() + 1));
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      if (this.offset + i >= 0) {
        x = this.mx + S * (modulo(this.offset + i, 7));
        y = this.my + S * floor((this.offset + i) / 7);
        results.push(this.days.push(new Day(i + 1, i, x, y, attributes(items, month + "-" + ("0" + (i + 1)).slice(-2)))));
      } else {
        results.push(void 0);
      }
    }
    return results;
  }

  draw() {
    var button, day, i, j, k, l, len, len1, len2, len3, m, ref, ref1, ref2, ref3, results;
    fill("black");
    textSize(0.3 * S);
    ref = range(N);
    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      text("Må Ti On To Fr Lö Sö".split(' ')[i], kalender.mx + S * i, 0.77 * S);
    }
    textSize(0.3 * S);
    ref1 = range(6);
    for (k = 0, len1 = ref1.length; k < len1; k++) {
      i = ref1[k];
      text("v" + "15 16 17 18 19 20 21 22".split(' ')[i], S / 2, kalender.my + S * i);
    }
    text(pretty(month), S * 4.5, 0.3 * S);
    ref2 = this.days;
    for (l = 0, len2 = ref2.length; l < len2; l++) {
      day = ref2[l];
      day.draw();
    }
    ref3 = this.buttons;
    results = [];
    for (m = 0, len3 = ref3.length; m < len3; m++) {
      button = ref3[m];
      results.push(button.draw());
    }
    return results;
  }

  mousePressed(x, y) {
    var button, day, j, k, len, len1, ref, ref1, results;
    ref = this.days;
    for (j = 0, len = ref.length; j < len; j++) {
      day = ref[j];
      if (day.inside(day.i)) {
        day.click();
      }
    }
    ref1 = this.buttons;
    results = [];
    for (k = 0, len1 = ref1.length; k < len1; k++) {
      button = ref1[k];
      if (button.inside()) {
        results.push(button.click(button));
      } else {
        results.push(void 0);
      }
    }
    return results;
  }

};

window.onresize = function() {
  return resize();
};

resize = function() {
  var day, h, j, len, ref, w;
  resizeCanvas(innerWidth, innerWidth * 0.85);
  S = width / 8.5;
  kalender.mx = 3 * S / 2;
  kalender.my = 3 * S / 2;
  ref = kalender.days;
  for (j = 0, len = ref.length; j < len; j++) {
    day = ref[j];
    day.x = kalender.mx + S * c(day.i + kalender.offset);
    day.y = kalender.my + S * r(day.i + kalender.offset);
  }
  kalender.buttons = [];
  w = 0.11 * width;
  h = 0.06 * height;
  kalender.buttons.push(new Button("Förra", 18, 4, w, h, 'white', () => {
    return monthClick(-1);
  }));
  kalender.buttons.push(new Button("Nästa", 88, 4, w, h, 'white', () => {
    return monthClick(+1);
  }));
  w = 0.16 * width;
  h = 0.06 * height;
  kalender.buttons.push(new Button("Senior", 45, 88, w, h, 'yellow', ageClick));
  kalender.buttons.push(new Button("Junior", 65, 88, w, h, 'white', ageClick));
  kalender.buttons.push(new Button("Tjej", 85, 88, w, h, 'pink', ageClick));
  kalender.buttons.push(new Button("Klubb", 45, 95, w, h, 'red', geoClick));
  kalender.buttons.push(new Button("Distrikt", 65, 95, w, h, 'green', geoClick));
  return kalender.buttons.push(new Button("Nation", 85, 95, w, h, 'blue', geoClick));
};

// H = min(innerHeight//11,innerWidth//10)
// W = H
// S = W
// mx = (innerWidth - 8*S)/2
// my = S/2
window.mousePressed = () => {
  return kalender.mousePressed(mouseX, mouseY);
};

window.preload = () => {
  return data = loadJSON("kalender.json");
};

window.setup = () => {
  //noLoop()
  createCanvas(425, 375);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  data = data.events;
  kalender = new Kalender(data);
  resize();
  return draw();
};

window.draw = function() {
  background('lightgray');
  return kalender.draw();
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsZW5kZXIuanMiLCJzb3VyY2VSb290IjoiLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxca2FsZW5kZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsUUFBQSxFQUFBLE1BQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxRQUFBLEVBQUEsVUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsV0FBQSxFQUFBLFVBQUEsRUFBQSxHQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxLQUFBLEVBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQSxDQUFBLEVBQUEsTUFBQTtFQUFBOztBQUFBLE9BQUE7RUFBUSxHQUFSO0VBQVksS0FBWjtDQUFBLE1BQUE7O0FBRUEsQ0FBQSxHQUFJOztBQUNKLE1BQUEsR0FBUyxpREFBaUQsQ0FBQyxLQUFsRCxDQUF3RCxHQUF4RDs7QUFFVCxDQUFBLEdBQUksQ0FBQyxDQUFELENBQUEsR0FBQTtvQkFBTyxJQUFLO0FBQVo7O0FBQ0osQ0FBQSxHQUFJLENBQUMsQ0FBRCxDQUFBLEdBQUE7U0FBTyxDQUFBLEdBQUk7QUFBWDs7QUFFSixDQUFBLEdBQUk7O0FBQ0osUUFBQSxHQUFVOztBQUNWLElBQUEsR0FBTyxDQUFBOztBQUVQLEtBQUEsR0FBUTs7QUFDUixHQUFBLEdBQU0sR0FiTjs7QUFjQSxHQUFBLEdBQU0sR0FkTjs7QUFnQkEsV0FBQSxHQUFjLENBQUMsSUFBRCxFQUFPLEtBQVAsQ0FBQSxHQUFBO1NBQWlCLElBQUksSUFBSixDQUFTLElBQVQsRUFBZSxLQUFmLEVBQXNCLENBQXRCLENBQXdCLENBQUMsT0FBekIsQ0FBQTtBQUFqQjs7QUFDZCxVQUFBLEdBQWEsQ0FBQyxLQUFELENBQUEsR0FBQTtBQUNiLE1BQUEsRUFBQSxFQUFBO0VBQUMsQ0FBQyxJQUFELEVBQU0sRUFBTixDQUFBLEdBQVksS0FBSyxDQUFDLEtBQU4sQ0FBWSxHQUFaO0VBQ1os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OUIsRUFBZ0MsTUFBaEMsRUFBdUMsUUFBdkMsQ0FBdEI7QUE1QlEsRUFuS1Q7Ozs7Ozs7QUF1TUEsTUFBTSxDQUFDLFlBQVAsR0FBc0IsQ0FBQSxDQUFBLEdBQUE7U0FDckIsUUFBUSxDQUFDLFlBQVQsQ0FBc0IsTUFBdEIsRUFBNkIsTUFBN0I7QUFEcUI7O0FBR3RCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLENBQUEsQ0FBQSxHQUFBO1NBQ2hCLElBQUEsR0FBTyxRQUFBLENBQVMsZUFBVDtBQURTOztBQUdqQixNQUFNLENBQUMsS0FBUCxHQUFlLENBQUEsQ0FBQSxHQUFBLEVBQUE7O0VBRWQsWUFBQSxDQUFhLEdBQWIsRUFBaUIsR0FBakI7RUFDQSxTQUFBLENBQVUsTUFBVixFQUFrQixNQUFsQjtFQUNBLFFBQUEsQ0FBUyxNQUFUO0VBQ0EsSUFBQSxHQUFPLElBQUksQ0FBQztFQUNaLFFBQUEsR0FBVyxJQUFJLFFBQUosQ0FBYSxJQUFiO0VBQ1gsTUFBQSxDQUFBO1NBQ0EsSUFBQSxDQUFBO0FBUmM7O0FBVWYsTUFBTSxDQUFDLElBQVAsR0FBYyxRQUFBLENBQUEsQ0FBQTtFQUNiLFVBQUEsQ0FBVyxXQUFYO1NBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBQTtBQUZhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtsb2cscmFuZ2V9IGZyb20gJy4uL2pzL3V0aWxzLmpzJ1xyXG5cclxuTiA9IDdcclxuTU9OVEhTID0gXCJKYW4gRmViIE1hciBBcHIgTWFqIEp1biBKdWwgQXVnIFNlcCBPa3QgTm92IERlY1wiLnNwbGl0KCcgJylcclxuXHJcbnIgPSAoaSkgPT4gaSAvLyBOXHJcbmMgPSAoaSkgPT4gaSAlIE5cclxuXHJcblMgPSA1MFxyXG5rYWxlbmRlcj0gbnVsbFxyXG5kYXRhID0ge31cclxuXHJcbm1vbnRoID0gXCIyMDIzLTA0XCJcclxuYWdlID0gXCJcIiAjIEp1bmlvciBTZW5pb3IgVGplalxyXG5nZW8gPSBcIlwiICMgS2x1YmIgRGlzdHJpa3QgTmF0aW9uXHJcblxyXG5kYXlzSW5Nb250aCA9ICh5ZWFyLCBtb250aCkgPT4gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKVxyXG5tb250aENsaWNrID0gKGRlbHRhKSA9PlxyXG5cdFt5eXl5LG1tXSA9IG1vbnRoLnNwbGl0ICctJ1xyXG5cdHl5eXkgPSBwYXJzZUludCB5eXl5XHJcblx0bW0gICA9IHBhcnNlSW50IG1tXHJcblx0aWYgbW0gPT0gMTIgYW5kIGRlbHRhID09IDFcclxuXHRcdHl5eXkrK1xyXG5cdFx0bW0gPSAxXHJcblx0ZWxzZSBpZiBtbSA9PSAxIGFuZCBkZWx0YSA9PSAtMVxyXG5cdFx0eXl5eS0tXHJcblx0XHRtbSA9IDEyXHJcblx0ZWxzZSBcclxuXHRcdG1tICs9IGRlbHRhXHJcblx0XHRpZiBtbSA8IDEwIHRoZW4gbW0gPSAnMCcgKyBtbVxyXG5cdG1vbnRoID0geXl5eSArIFwiLVwiICsgbW1cclxuXHRrYWxlbmRlci5maWx0cmVyYSgpXHJcblx0Y29uc29sZS5sb2cgbW9udGhcclxuXHJcbnByZXR0eSA9IChtb250aCkgPT5cclxuXHRbeXl5eSxtbV0gPSBtb250aC5zcGxpdCAnLSdcclxuXHRtbSA9IHBhcnNlSW50IG1tXHJcblx0XCIgSmFudWFyaSBGZWJydWFyaSBNYXJzIEFwcmlsIE1haiBKdW5pIEp1bGkgQXVndXN0aSBTZXB0ZW1iZXIgT2t0b2JlciBOb3ZlbWJlciBEZWNlbWJlclwiLnNwbGl0KCcgJylbbW1dICsgJyAnICsgeXl5eVxyXG5cclxuYWdlQ2xpY2sgPSAob2JqKSAtPlxyXG5cdGFnZSA9IGlmIGFnZSA9PSBvYmoucHJvbXB0IHRoZW4gXCJcIiBlbHNlIG9iai5wcm9tcHRcclxuXHRrYWxlbmRlci5maWx0cmVyYSgpXHJcbmdlb0NsaWNrID0gKG9iaikgLT5cclxuXHRnZW8gPSBpZiBnZW8gPT0gb2JqLnByb21wdCB0aGVuIFwiXCIgZWxzZSBvYmoucHJvbXB0XHJcblx0a2FsZW5kZXIuZmlsdHJlcmEoKVxyXG5cclxuY2xhc3MgQnV0dG9uXHJcblx0Y29uc3RydWN0b3IgOiAoQHByb21wdCxAeCxAeSxAdyxAaCxAYmcsQGNsaWNrKSAtPlxyXG5cdFx0QHggKj0gd2lkdGgvMTAwXHJcblx0XHRAeSAqPSBoZWlnaHQvMTAwXHJcblx0ZHJhdyA6ID0+XHJcblx0XHRwdXNoKClcclxuXHRcdGZpbGwgQGJnXHJcblx0XHRpZiBAcHJvbXB0IGluIFthZ2UsZ2VvXSB0aGVuIHN0cm9rZVdlaWdodCAzIGVsc2Ugc3Ryb2tlV2VpZ2h0IDFcclxuXHRcdHJlY3QgQHgsIEB5LCBAdyxAaFxyXG5cdFx0aWYgQGJnID09ICdibHVlJyB0aGVuIGZpbGwgJ3doaXRlJyBlbHNlIGZpbGwgJ2JsYWNrJ1xyXG5cdFx0dGV4dFNpemUgMC4zKlNcclxuXHRcdHRleHQgQHByb21wdCwgQHgsIEB5XHJcblx0XHRwb3AoKVxyXG5cdGNsaWNrOiA9PlxyXG5cdFx0Y29uc29sZS5sb2cgQHByb21wdFxyXG5cdGluc2lkZSA6IC0+IEB4LUB3LzIgPCBtb3VzZVggPCBAeCtAdy8yIGFuZCBAeS1AaC8yIDwgbW91c2VZIDwgQHkrQGgvMlxyXG5cclxuY2xhc3MgRGF5XHJcblx0Y29uc3RydWN0b3IgOiAoQHByb21wdCxAaSxAeCxAeSxAYXR0cmlidXRlcykgLT5cclxuXHRjbGljayA6ID0+IGNvbnNvbGUubG9nXHRAcHJvbXB0XHJcblx0aW5zaWRlIDogKGluZGV4KSAtPlxyXG5cdFx0Y2kgPSBjIGluZGV4K2thbGVuZGVyLm9mZnNldFxyXG5cdFx0cmkgPSByIGluZGV4K2thbGVuZGVyLm9mZnNldFxyXG5cdFx0UypjaS1TLzIgPCBtb3VzZVgta2FsZW5kZXIubXggPCBTKmNpK1MvMiBhbmQgUypyaS1TLzIgPCBtb3VzZVkta2FsZW5kZXIubXkgPCBTKnJpK1MvMlxyXG5cclxuXHRkcmF3IDogPT5cclxuXHRcdGZpbGwgJ3doaXRlJ1xyXG5cdFx0cmVjdCBAeCwgQHksIFMsIFNcclxuXHRcdEBkcmF3QXR0cmlidXRlcygpXHJcblx0XHRmaWxsICdibGFjaydcclxuXHRcdHRleHRTaXplIDAuMypTXHJcblx0XHR0ZXh0IEBwcm9tcHQsIEB4LCBAeSAtIDAuMypTXHJcblxyXG5cdGRyYXdBdHRyaWJ1dGVzIDogPT5cclxuXHRcdGQgPSAwLjEqU1xyXG5cdFx0cHVzaCgpXHJcblx0XHRAYXR0cmlidXRlcyA9IEBhdHRyaWJ1dGVzLnNsaWNlIDAsNlxyXG5cdFx0YW50YWwgPSBAYXR0cmlidXRlcy5sZW5ndGhcclxuXHRcdHgxID0gcm91bmQgQHggLSAzKmRcclxuXHRcdHgyID0gcm91bmQgQHhcclxuXHRcdHgzID0gcm91bmQgQHggKyAzKmRcclxuXHJcblx0XHR5MSA9IHJvdW5kIEB5IC0gMypkXHJcblx0XHR5MiA9IHJvdW5kIEB5XHJcblx0XHR5MyA9IHJvdW5kIEB5ICsgMypkXHJcblxyXG5cdFx0eHkgPSBbW11dXHJcblx0XHR4eS5wdXNoIFtbeDIseTJdXSAjIG9uZVxyXG5cdFx0eHkucHVzaCBbW3gxLHkxXSxbeDMseTNdXSAjIHR3b1xyXG5cdFx0eHkucHVzaCBbW3gxLHkxXSxbeDIseTJdLFt4Myx5M11dICMgdGhyZWVcclxuXHRcdHh5LnB1c2ggW1t4MSx5MV0sW3gxLHkzXSxbeDMseTFdLFt4Myx5M11dICMgZm91clxyXG5cdFx0eHkucHVzaCBbW3gxLHkxXSxbeDEseTNdLFt4Myx5MV0sW3gzLHkzXSxbeDIseTJdXSAjIGZpdmVcclxuXHRcdHh5LnB1c2ggW1t4MSx5MV0sW3gxLHkyXSxbeDEseTNdLFt4Myx5MV0sW3gzLHkyXSxbeDMseTNdXSAjIHNpeFxyXG5cclxuXHRcdGQgPSAwLjIqU1xyXG5cdFx0c3cgPSAwLjA1KlNcclxuXHRcdHN0cm9rZVdlaWdodCBzd1xyXG5cdFx0Zm9yIGF0dHIsaSBpbiBAYXR0cmlidXRlc1xyXG5cdFx0XHRmaWxsIHtKOid3aGl0ZScsUzoneWVsbG93JyxUOidwaW5rJ31bYXR0clswXV1cclxuXHRcdFx0c3Ryb2tlIHtLOidyZWQnLEQ6J2dyZWVuJyxOOidibHVlJ31bYXR0clsxXV1cclxuXHRcdFx0W3gseV0gPSB4eVthbnRhbF1baV1cclxuXHRcdFx0IyBjb25zb2xlLmxvZyBAaSsxLGF0dHIseCx5XHJcblx0XHRcdGNpcmNsZSB4LHksIGRcclxuXHRcdHBvcCgpXHJcblxyXG5maWx0ZXJEYXRhID0gKGl0ZW1zLCBtb250aCwgYXR0cikgPT5cclxuXHRfLmZpbHRlciBpdGVtcywgKGl0ZW0pID0+IGl0ZW0uZC5pbmNsdWRlcyhtb250aCkgYW5kIGl0ZW0uYS5pbmNsdWRlcyBhdHRyXHJcblxyXG5hdHRyaWJ1dGVzID0gKGl0ZW1zLGRhdGUpID0+XHJcblx0cmVzID0gXy5maWx0ZXIoaXRlbXMsIChpdGVtKSA9PiBpdGVtLmQuaW5jbHVkZXMoZGF0ZSkgYW5kIChhZ2U9PVwiXCIgb3IgaXRlbS5hWzBdPT1hZ2VbMF0pIGFuZCAoZ2VvPT1cIlwiIG9yIGl0ZW0uYVsxXT09Z2VvWzBdKSlcclxuXHRyZXMgPSBfLm1hcCByZXMsIChpdGVtKSA9PiBpdGVtLmFcclxuXHRyZXMuc29ydCgpLnJldmVyc2UoKVxyXG5cclxuY2xhc3MgS2FsZW5kZXJcclxuXHRjb25zdHJ1Y3RvciA6IChAaXRlbXMpIC0+XHJcblx0XHRAbXggPSAzKlMvMlxyXG5cdFx0QG15ID0gMypTLzJcclxuXHRcdEBkYXRlID0gbmV3IERhdGUgbW9udGggKyAnLTAxJ1xyXG5cdFx0QG1vbnRoID0gQGRhdGUuZ2V0TW9udGgoKVxyXG5cdFx0QHRtb250aCA9IE1PTlRIU1tAbW9udGhdXHJcblxyXG5cdFx0QGZpbHRyZXJhKClcclxuXHJcblx0ZmlsdHJlcmEgOiA9PlxyXG5cdFx0aXRlbXMgPSBmaWx0ZXJEYXRhIEBpdGVtcywgbW9udGgsXCJcIlxyXG5cdFx0QG9mZnNldCA9IChAZGF0ZS5nZXREYXkoKS0xKSAlJSA3XHJcblx0XHRAZGF5cyA9IFtdXHJcblx0XHRmb3IgaSBpbiByYW5nZSBkYXlzSW5Nb250aCBAZGF0ZS5nZXRGdWxsWWVhcigpLCBAZGF0ZS5nZXRNb250aCgpKzFcclxuXHRcdFx0aWYgQG9mZnNldCtpID49IDBcclxuXHRcdFx0XHR4ID0gQG14ICsgUyooKEBvZmZzZXQraSkgJSUgNylcclxuXHRcdFx0XHR5ID0gQG15ICsgUypmbG9vciAoQG9mZnNldCtpKS83XHJcblx0XHRcdFx0QGRheXMucHVzaCBuZXcgRGF5IGkrMSwgaSwgeCx5LCBhdHRyaWJ1dGVzIGl0ZW1zLCBtb250aCArIFwiLVwiKyhcIjBcIiArIChpKzEpKS5zbGljZSAtMlxyXG5cclxuXHRkcmF3IDogPT5cclxuXHRcdGZpbGwgXCJibGFja1wiXHJcblx0XHR0ZXh0U2l6ZSAwLjMqU1xyXG5cdFx0Zm9yIGkgaW4gcmFuZ2UgTlxyXG5cdFx0XHR0ZXh0IFwiTcOlIFRpIE9uIFRvIEZyIEzDtiBTw7ZcIi5zcGxpdCgnICcpW2ldLCBrYWxlbmRlci5teCtTKmksIDAuNzcqU1xyXG5cdFx0dGV4dFNpemUgMC4zKlNcclxuXHRcdGZvciBpIGluIHJhbmdlIDZcclxuXHRcdFx0dGV4dCBcInZcIitcIjE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyXCIuc3BsaXQoJyAnKVtpXSwgUy8yLCBrYWxlbmRlci5teStTKmlcclxuXHRcdHRleHQgcHJldHR5KG1vbnRoKSwgUyo0LjUsIDAuMypTXHJcblxyXG5cdFx0Zm9yIGRheSBpbiBAZGF5c1xyXG5cdFx0XHRkYXkuZHJhdygpXHJcblxyXG5cdFx0Zm9yIGJ1dHRvbiBpbiBAYnV0dG9uc1xyXG5cdFx0XHRidXR0b24uZHJhdygpXHJcblxyXG5cdG1vdXNlUHJlc3NlZCA6ICh4LHkpID0+XHJcblx0XHRmb3IgZGF5IGluIEBkYXlzXHJcblx0XHRcdGlmIGRheS5pbnNpZGUgZGF5LmkgdGhlbiBkYXkuY2xpY2soKVxyXG5cdFx0Zm9yIGJ1dHRvbiBpbiBAYnV0dG9uc1xyXG5cdFx0XHRpZiBidXR0b24uaW5zaWRlKCkgdGhlbiBidXR0b24uY2xpY2sgYnV0dG9uXHJcblxyXG53aW5kb3cub25yZXNpemUgPSAtPiByZXNpemUoKVxyXG5cclxucmVzaXplID0gLT5cclxuXHJcblx0cmVzaXplQ2FudmFzIGlubmVyV2lkdGgsIGlubmVyV2lkdGgqMC44NVxyXG5cclxuXHRTID0gd2lkdGgvOC41XHJcblx0a2FsZW5kZXIubXggPSAzKlMvMlxyXG5cdGthbGVuZGVyLm15ID0gMypTLzJcclxuXHRmb3IgZGF5IGluIGthbGVuZGVyLmRheXNcclxuXHRcdGRheS54ID0ga2FsZW5kZXIubXgrUypjKGRheS5pK2thbGVuZGVyLm9mZnNldClcclxuXHRcdGRheS55ID0ga2FsZW5kZXIubXkrUypyKGRheS5pK2thbGVuZGVyLm9mZnNldClcclxuXHJcblx0a2FsZW5kZXIuYnV0dG9ucyA9IFtdXHJcblxyXG5cdHcgPSAwLjExKndpZHRoXHJcblx0aCA9IDAuMDYqaGVpZ2h0XHJcblxyXG5cdGthbGVuZGVyLmJ1dHRvbnMucHVzaCBuZXcgQnV0dG9uIFwiRsO2cnJhXCIsICAxOCw0LHcsaCwnd2hpdGUnLD0+IG1vbnRoQ2xpY2sgLTFcclxuXHRrYWxlbmRlci5idXR0b25zLnB1c2ggbmV3IEJ1dHRvbiBcIk7DpHN0YVwiLCAgODgsNCx3LGgsJ3doaXRlJyw9PiBtb250aENsaWNrICsxXHJcblxyXG5cdHcgPSAwLjE2KndpZHRoXHJcblx0aCA9IDAuMDYqaGVpZ2h0XHJcblxyXG5cdGthbGVuZGVyLmJ1dHRvbnMucHVzaCBuZXcgQnV0dG9uIFwiU2VuaW9yXCIsICA0NSw4OCx3LGgsJ3llbGxvdycsYWdlQ2xpY2tcclxuXHRrYWxlbmRlci5idXR0b25zLnB1c2ggbmV3IEJ1dHRvbiBcIkp1bmlvclwiLCAgNjUsODgsdyxoLCd3aGl0ZScsYWdlQ2xpY2tcclxuXHRrYWxlbmRlci5idXR0b25zLnB1c2ggbmV3IEJ1dHRvbiBcIlRqZWpcIiwgICAgODUsODgsdyxoLCdwaW5rJyxhZ2VDbGlja1xyXG5cclxuXHRrYWxlbmRlci5idXR0b25zLnB1c2ggbmV3IEJ1dHRvbiBcIktsdWJiXCIsICAgNDUsOTUsdyxoLCdyZWQnLGdlb0NsaWNrXHJcblx0a2FsZW5kZXIuYnV0dG9ucy5wdXNoIG5ldyBCdXR0b24gXCJEaXN0cmlrdFwiLDY1LDk1LHcsaCwnZ3JlZW4nLGdlb0NsaWNrXHJcblx0a2FsZW5kZXIuYnV0dG9ucy5wdXNoIG5ldyBCdXR0b24gXCJOYXRpb25cIiwgIDg1LDk1LHcsaCwnYmx1ZScsZ2VvQ2xpY2tcclxuXHJcblx0IyBIID0gbWluKGlubmVySGVpZ2h0Ly8xMSxpbm5lcldpZHRoLy8xMClcclxuXHQjIFcgPSBIXHJcblx0IyBTID0gV1xyXG5cdCMgbXggPSAoaW5uZXJXaWR0aCAtIDgqUykvMlxyXG5cdCMgbXkgPSBTLzJcclxuXHJcbndpbmRvdy5tb3VzZVByZXNzZWQgPSA9PlxyXG5cdGthbGVuZGVyLm1vdXNlUHJlc3NlZCBtb3VzZVgsbW91c2VZXHJcblxyXG53aW5kb3cucHJlbG9hZCA9ID0+XHJcblx0ZGF0YSA9IGxvYWRKU09OIFwia2FsZW5kZXIuanNvblwiXHJcblxyXG53aW5kb3cuc2V0dXAgPSA9PlxyXG5cdCNub0xvb3AoKVxyXG5cdGNyZWF0ZUNhbnZhcyA0MjUsMzc1XHJcblx0dGV4dEFsaWduIENFTlRFUiwgQ0VOVEVSXHJcblx0cmVjdE1vZGUgQ0VOVEVSXHJcblx0ZGF0YSA9IGRhdGEuZXZlbnRzXHJcblx0a2FsZW5kZXIgPSBuZXcgS2FsZW5kZXIgZGF0YVxyXG5cdHJlc2l6ZSgpXHJcblx0ZHJhdygpXHJcblxyXG53aW5kb3cuZHJhdyA9IC0+XHJcblx0YmFja2dyb3VuZCAnbGlnaHRncmF5J1xyXG5cdGthbGVuZGVyLmRyYXcoKSJdfQ==
//# sourceURL=c:\github\2023-023-Wasa-Search\coffee\kalender.coffee