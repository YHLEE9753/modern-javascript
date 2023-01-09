// let user = {};
let user = null;

// alert( user?.address?.street);
// alert( user?.address.street);
// alert( user.address.street); // error


user = {
  name : null,
}

user?.name = "test";
alert(user.name);