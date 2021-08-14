import { Prisma, Product } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import request from "supertest";
import app from "../app";
import { prismaMock } from "../singleton";

describe("GET /", () => {
  it("Healthy Request should success", async () => {
    await request(app).get("/").expect(StatusCodes.OK).expect("Healthy");
  });
});

describe("GET /products", () => {
  it("Get Products Request should success", async () => {
    const products: Product[] = [
      {
        id: 1,
        name: "Tester",
        sku: "KS944RUR",
        price: new Prisma.Decimal(122.3),
        description: "long desc",
        vendor: "apple",
      },
    ];
    prismaMock.product.findMany.mockResolvedValue(products);
    await request(app)
      .get("/products")
      .expect(StatusCodes.OK)
      .expect([
        {
          id: 1,
          name: "Tester",
          sku: "KS944RUR",
          price: "122.3",
          description: "long desc",
          vendor: "apple",
        },
      ]);
  });
});

describe("POST /products", () => {
  it("POST Products should success", async () => {
    const product: Product = {
      id: 1,
      name: "Tester",
      sku: "KS944RUR",
      price: new Prisma.Decimal(122.3),
      description: "long desc",
      vendor: "apple",
    };
    prismaMock.product.create.mockResolvedValue(product);
    await request(app)
      .post("/products")
      .send(product)
      .expect(StatusCodes.OK)
      .expect({
        id: 1,
        name: "Tester",
        sku: "KS944RUR",
        price: "122.3",
        description: "long desc",
        vendor: "apple",
      });
  });
  it("POST Products should throw bad request", async () => {
    prismaMock.product.create.mockRejectedValue(new Error("Error happen"));
    await request(app)
      .post("/products")
      .send({ otherwise: "tester" })
      .expect(StatusCodes.BAD_REQUEST)
      .expect({ message: "Error happen" });
  });
});
