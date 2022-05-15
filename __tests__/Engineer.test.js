const Engineer = require("../lib/engineer");

test("should return an object containing name, id, email, github, and role", () => {
    const engineer = new Engineer("Paul McCartney", "618", "macca@ilyl.com", "Macca", "Engineer");

    expect(engineer.getName()).toEqual("Paul McCartney");
    expect(engineer.getId()).toEqual("618");
    expect(engineer.getEmail()).toEqual("macca@ilyl.com");
    expect(engineer.getGitHub()).toEqual("Macca");
    expect(engineer.getRole()).toEqual("Engineer");

});