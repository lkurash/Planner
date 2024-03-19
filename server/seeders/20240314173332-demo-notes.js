"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Notes",
      [
        {
          title: "First Note",
          text: "Hello world",
          note_date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Notes",
      [
        {
          title: "Two Note",
          text: "Checking mail",
          note_date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Notes", null, {});
  },
};
