describe("pow", function () {

  before(() => alert("테스트를 시작합니다 - 테스트가 시작되기 전"));
  after(() => alert("테스트를 종료합니다 - 테스트가 종료된 후"));

  beforeEach(() => alert("단일 테스트를 시작합니다 - 각 테스트 시작 전"));
  afterEach(() => alert("단일 테스트를 종료합니다 - 각 테스트 종료 후"));


  it("주어진 숫자의 n 제곱", function () {
    assert.equal(pow(2, 3), 8);
  });

  it("주어진 숫자의 n 제곱", function () {
    assert.equal(pow(3, 2), 9);
  });

  it("주어진 숫자의 n 제곱 틀린 케이스", function () {
    assert.equal(pow(3, 2), -1);
  })

});


describe("other pow case", function () {

  it("다른 케이스", function () {
    assert.equal(pow(4, 3), -1);
  })
})


describe("pow", function () {

  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} 를 세번 곱하면 ${expected}입니다.`, function () {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x < 5; x++) {
    makeTest(x);
  }
});

describe("pow test", function () {

  describe("x를 세번 곱합니다.", function () {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} 를 세번 곱하면 ${expected}입니다.`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x < 5; x++) {
      makeTest(x);
    }
  })
})