const Manager = require("../lib/manager");

test("should return an object containing name, id, email, office number, and role", () => {
    const manager = new Manager("Ringo Starr", "77", "peace@love.com", "1940", "Manager");

    expect(manager.getName()).toEqual("Ringo Starr");
    expect(manager.getId()).toEqual("77");
    expect(manager.getEmail()).toEqual("peace@love.com");
    expect(manager.getOfficeNumber()).toEqual("1940");
    expect(manager.getRole()).toEqual("Manager");

});