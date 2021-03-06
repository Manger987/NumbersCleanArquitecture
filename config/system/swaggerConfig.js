const path = require("path");
module.exports = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Numeros",
        version: "0.1.0",
        description:
          "Documentación de Microservicio Numeros",
        license: {
          name: "German",
        },
        contact: {
          name: "Desarrollo German Poblete",
        },
      },
      servers: [
        {
          url: "/api/v1/numeros",
        },
      ],
    },
    //['.routes/*.js]
    // apis: ["./numeros"],
    apis: [path.join(__dirname,"../../src/Number/infraestructura/web/routes/swagger.yaml")],//[__filename],
  };
  