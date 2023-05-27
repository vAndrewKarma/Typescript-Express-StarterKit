import { describe, expect, beforeAll } from "@jest/globals";
import { app } from "../src/app";
import request from "supertest";
import { Express } from "express-serve-static-core";

let initializedApp: Express; // global declaration

beforeAll(async () => {
  initializedApp = await app;
});

describe("status test", () => {
  test("return value", async () => {
    const res = await request(initializedApp).get('/alive');
    expect(res.status).toEqual(200);
  });
});

describe("Not Found handler testing",()=>{
  test("not found handling",async ()=>{
    const res = await request(initializedApp).get('/notexistingroute')
    expect(res.status).toEqual(404)
  })
})