import { User } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import request from "supertest";
import app from "../../src/app";
import { prismaMock } from "./../singleton";

describe("GET /", () => {
  it("Healthy Request should success", async () => {
    await request(app).get("/").expect(StatusCodes.OK).expect("Healthy");
  });
});

describe("GET /users", () => {
  it("Get Users Request should success", async () => {
    const users: User[] = [
      {
        id: 1,
        name: "Demo Butty",
        email: "hello@gmail.com",
      },
    ];
    prismaMock.user.findMany.mockResolvedValue(users);
    await request(app).get("/users").expect(StatusCodes.OK).expect(users);
  });
});

describe("POST /users", () => {
  it("POST Users should success", async () => {
    const user: User = {
      id: 1,
      name: "Tester",
      email: "Tester@gmail.com",
    };
    prismaMock.user.create.mockResolvedValue(user);
    await request(app)
      .post("/users")
      .send(user)
      .expect(StatusCodes.OK)
      .expect(user);
  });
  it("POST Users should throw bad request", async () => {
    prismaMock.user.create.mockRejectedValue(new Error("Error happen"));
    await request(app)
      .post("/users")
      .send({ otherwise: "tester" })
      .expect(StatusCodes.BAD_REQUEST)
      .expect({ message: "Error happen" });
  });
});
