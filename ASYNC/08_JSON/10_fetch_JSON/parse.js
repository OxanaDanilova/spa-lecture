const dataString = '{"firstName":"Oxana", "hobbies":["wandern", "klettern"]}';

const obj = JSON.parse(dataString);

console.log(obj);

obj.hobbies.forEach((hobby) => console.log(hobby));
