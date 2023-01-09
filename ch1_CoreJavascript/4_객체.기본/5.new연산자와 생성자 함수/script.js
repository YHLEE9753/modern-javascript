// function User(name){
//   // this = {};
//   this.name = name;
//   this.isAdmin = false;
//   // return this;
// }
// let user = new User("yong hoon");

// function BigUser() {
//   this.name = "a";
//   return {
//     name: "b",
//   }
// }
// alert(new BigUser().name)

// 과제1 함수 두개로 동일한 객체 만들기
// function A() { return this }
// function B() { return A() }

// let a = new A;
// let b = new B;

// alert( A() == B()); // true

// 과제2 계산기 만들기
// function Calculator(){
//   this.read = function(){
//     this.a = prompt("number");
//     this.b = prompt("number");
//   },
//   this.sum = function(){
//     return Number(this.a) + Number(this.b);
//   },
//   this.mul = function(){
//     return this.a * this.b;
//   }
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// 과제3 누산기 만들기
function Accumulator(origin) {
  this.value = origin;
  this.read = function(){
    this.value += Number(prompt("number"))
  }
}

let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함
