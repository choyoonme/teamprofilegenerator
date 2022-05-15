const Intern = require("../lib/intern");

test("should return an object containing name, id, email, and school", () => {
    const intern = new Intern("George Harrison", "225", "ime@mine.com", "Liverpool");

    expect(intern.getName()).toEqual("George Harrison");
    expect(intern.getId()).toEqual("225");
    expect(intern.getEmail()).toEqual("ime@mine.com");
    expect(intern.getSchool()).toEqual("Liverpool");
    expect(intern.getRole()).toEqual("Intern");

});