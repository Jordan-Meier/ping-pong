
describe('pingPong', function () {
  it("is a number not divisible by 3 or 5", function () {
    expect(pingPong(2)).to.equal(2);
  });

  it("is a number divisible by 3", function () {
    expect(pingPong(6)).to.equal("ping");
  });

  it("is a number divisible by 5", function () {
    expect(pingPong(5)).to.equal("pong");
  });

  it("is a number divisible by 15", function () {
    expect(pingPong(15)).to.equal("pingpong");
  });

});
