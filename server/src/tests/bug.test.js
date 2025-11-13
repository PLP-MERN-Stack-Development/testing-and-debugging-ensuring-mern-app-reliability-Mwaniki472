import request from "supertest";
import express from "express";
import { jest } from "@jest/globals";
import bugRoutes from "../routes/bugRoutes.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use("/api/bugs", bugRoutes);

// Mock MongoDB Model
jest.unstable_mockModule("../models/Bug.js", () => {
  const fakeDB = [];
  return {
    default: {
      find: jest.fn(() => Promise.resolve(fakeDB)),
      findByIdAndUpdate: jest.fn((id, data) => {
        const bug = fakeDB.find((b) => b._id === id);
        Object.assign(bug, data);
        return Promise.resolve(bug);
      }),
      findByIdAndDelete: jest.fn((id) => {
        const index = fakeDB.findIndex((b) => b._id === id);
        if (index > -1) fakeDB.splice(index, 1);
        return Promise.resolve();
      }),
      create: jest.fn((bug) => {
        const newBug = { ...bug, _id: String(fakeDB.length + 1) };
        fakeDB.push(newBug);
        return Promise.resolve(newBug);
      }),
    },
  };
});

describe("Bug API Routes", () => {
  it("POST /api/bugs → creates new bug", async () => {
    const res = await request(app)
      .post("/api/bugs")
      .send({ title: "Test Bug", description: "Bug desc" });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Test Bug");
  });

  it("GET /api/bugs → returns list", async () => {
    const res = await request(app).get("/api/bugs");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
  it("should return 404 for non-existing endpoint", async () => {
    const res = await request(app).get("/api/nonexistent");
    expect(res.statusCode).toBe(404);
  });
});
