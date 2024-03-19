const request = require("supertest");

const app = require("../app");

const { sequelize } = require("../models");
const db = require("../models/index.js");

const router = require("../routers/index");


describe("API", () => {
  describe("test the root path", () => {
    test("it should response the GET method", async () => {
      const response = await request(app).get("/api");

      expect(response.statusCode).toEqual(200);
    });
  });

  describe("test the notes path", () => {
    beforeAll(async () => {
      await sequelize.sync();
    });

    afterAll(async () => {
      await db.Notes.destroy({ where: { text: "Test note" } });
      await sequelize.close();
    });

    test("it should respond to the GET method to retrieve all notes", async () => {
      const response = await request(app).get("/api/notes");

      expect(response.statusCode).toEqual(200);
    });

    test("it should respond to the POST method to create a note", async () => {
      const response = await request(app)
        .post("/api/notes/note")
        .send({ text: "Test note" });

      expect(response.statusCode).toEqual(200);
    });

    test("it should respond to the GET method request by ID", async () => {
      const note = await db.Notes.findOne({ where: { text: "Test note" } });
      const response = await request(app).get(`/api/notes/note/${note.id}`);

      expect(response.status).toBe(200);
      expect(response.body).toEqual(
        expect.objectContaining({ text: "Test note" })
      );
    });
  });
});
