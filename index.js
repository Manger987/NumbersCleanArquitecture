const container = require("./src/Number/infraestructura/container");

const application = container.resolve("app");

application.start().catch((err) => {
  console.log("Error conection: ", err);
  process.exit();
});
