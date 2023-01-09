// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   };
  
//   let user = makeUser();
  
//   alert(1);
//   alert( user.ref.name ); // 결과가 어떻게 될까요?
//   alert(2);
//   alert( user.name ); // 결과가 어떻게 될까요?
//   alert(3);
//   alert( user.this.name ); // 결과가 어떻게 될까요?


let calculator = {
  // ... 여기에 답안 작성 ...
  read(){
    this.a = prompt("number", 0);
    this.b = prompt("number", 0);

  },

  sum(){
    return Number(this.a) + Number(this.b);
  },

  mul(){
    return this.a * this.b;
  }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );