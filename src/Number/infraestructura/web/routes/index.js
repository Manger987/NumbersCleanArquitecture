const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const optionsSwagger = require("../../../../../config/system/swaggerConfig");

const specs = swaggerJsdoc(optionsSwagger)

module.exports = function ({ NumerosRoutes }) {
  const router = Router();
  const apiRoute = Router();

  apiRoute
    .use(cors())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(compression());

    apiRoute.use("/v1/numeros", NumerosRoutes);
    apiRoute.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs,{ explorer: true }));

    router.use("/api", apiRoute);

    return router;
};
