const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const { getMockRes, getMockReq } = require("@jest-mock/express");

const { addNewUser } = require("../services/authService");
const loginController = require("../controllers/auth/loginController");
const mongoServer = new MongoMemoryServer();

beforeAll(async () => {
  const mongoUri = await mongoServer.getUri();

  await mongoose.connect(mongoUri, {
    dbName: "verifyLOGIN",
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe("test loginController", () => {
  const { res, next } = getMockRes();

  test("email@mail.com, password, token, response status 200", async () => {
    const newUser = {
      email: "email@mail.com",
      password: "password",
    };

    const user = await addNewUser(newUser);

    const req = getMockReq({ body: newUser });

    await loginController(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        token: expect.anything(),
        user: expect.objectContaining({
          email: expect.stringContaining("email@mail.com"),
          subscription: expect.stringContaining("starter"),
        }),
      })
    );
  });
});
