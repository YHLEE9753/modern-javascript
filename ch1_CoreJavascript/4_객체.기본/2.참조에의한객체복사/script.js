let user = {
    name : "John",
    age : 30,
}

let clone = Object.assign({}, user);
for(let key in clone){
    console.log(`${key} - ${clone[key]}`);
}