// let user = new Object();
// let users = {
//     name: "John",
//     age: 30,
//     "test case" : "222",
// };

// alert(users.name);
// alert(users.age);
// delete users.age;
// alert(users.age);

// users.age;
// users["test case"];

// alert("name" in users);
// alert("age" in users);
// alert("test case" in users);

// for(let key in users){
//     alert(key);
//     alert(users[key] );
// }

// 과제 
// 객체야 안녕?
const user = {};
user.name = "John";
user.suername = "Smith";
user.name = "Pete";
delete user.name;

for(let key in user){
    alert(`${key} + ${user[key]}`);
}

// 객체가 비어있는지 확인하기
let test = function(obj){
    
}

