var targetElement = document.querySelector( "ul.list-cities" );

var cities = [
  "Denver",
  "Boulder",
  "Black Hawk",
  "Aurora"
];

for (var i=0; i<cities.length; i++) {
  var listItem = document.createElement("li");
  listItem.innerHTML = cities[i];
  console.log(listItem);
  targetElement.append(listItem);
}

//var element = document.createElement(tagName[, options]);
// div.innerHTML += 'Extra stuff';
