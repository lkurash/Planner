describe("Name of the group", () => {
  let textNote = "2e2 test note";
  before(() => {
    cy.visit("/");
  });

  after(() => {
    cy.request("DELETE", "http://localhost:5500/api/notes/note/delete", {
      text: textNote,
    });
  });

  describe("notes", () => {
    it("create note", () => {
      cy.get("input[id=input-note]").type(textNote);
      cy.get("button[id=create-note]").click();
      cy.wait(1000)
      cy.get(".note-text").should("contain", textNote);
    });
  });
});
