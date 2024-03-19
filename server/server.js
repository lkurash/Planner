const app = require("./app");

const PORT = process.env.API_PORT;

let server;

const start = async () => {
  try {
    server = app.listen(PORT, () =>
      console.log(`App listening on port ${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

const stop = async () => {
  if (server) {
    server.close();
  }
};

start();

module.exports = { start, stop };
