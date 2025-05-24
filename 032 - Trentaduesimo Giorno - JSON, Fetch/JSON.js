
const jsonTest ={
  "student": {
    "name": "Rumaisa Mahoney",
    "age": 30,
    "fullTime": true,
    "languages": [ "JavaScript", "HTML", "CSS" ],
    "GPA": 3.9,
    "favoriteSubject": null
  }
}   

console.log(JSON.stringify(jsonTest, null, 2));

const jsonData = '{ "book": { "name": "JSON Primer", "price": 29.99, "inStock": true, "rating": null } }';

const jsObject = JSON.parse(jsonData);

console.log(jsObject.book.name);
console.log(jsObject["book"]["inStock"]);


