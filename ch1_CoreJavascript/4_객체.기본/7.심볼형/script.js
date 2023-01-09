// let id1 = Symbol("id");
// let id2 = Symbol("id");

// alert(id1 == id2); // false

// let test = Symbol("uid");
// alert(test.toString());
// alert(test.description);

let user = {
  name : "John",
};

let id = Symbol("id");

user[id] = 1;
alert(user[id]);

user[id] = 2;
alert(user[id]);

