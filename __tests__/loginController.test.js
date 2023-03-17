const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const { getMockRes, getMockReq } = require("@jest-mock/express");

const { addNewUser } = require("../services/authService");
const loginController = require("../controllers/auth/loginController");

const mongoServer = new MongoMemoryServer();
beforeAll(async () => {
  await mongoose.connect(mongoServer.getUri(), {
    dbName: "verifyLOGIN",
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe("test loginController", () => {
  const { res, next } = getMockRes();

  test("test login, response status 200", async () => {
    const newUser = {
      email: "email@mail.com",
      password: "password",
    };

    const user = await addNewUser(newUser);

    const req = getMockReq({ body: newUser });

    await loginController(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      token: expect.toBeTruthy(),
      user: {
        email: expect.stringContaining("email@mail.com"),
        password: experst.stringContaining("password"),
      },
    });
  });
});
