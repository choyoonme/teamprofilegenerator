const Turtle = require("../lib/employee");

describe("Turtle", () => {
    describe("constructor", () => {
        it("should set 2 as `num` prop when given 2 as a num", () => {
            const num = 2;
            const t = new Turtle(num);
            expect(t.num).toEqual(num);
        });
    });
    describe("getTurtles", () => {
        it("should get turtle twice when num is 2", () => {
            const num = 2;
            const expected = "Turtle Turtle ";
            const t = new Turtle(num);

            const answer = t.getTurtles();

            expect(answer).toEqual(expected);
        });
    })
});