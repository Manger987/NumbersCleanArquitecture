/**
 * IoC (PATRON DE DISEÑO)
 */

const { asClass, createContainer, asFunction, asValue } = require("awilix");
const StartUp = require("../../../config/system/startup");
const Server = require("../../../config/system/server");

const Routes = require("./web/routes");
const config = require("../../../config/environments");

const { NumerosController } = require('./controllers/v1');
const NumerosRoutes = require('./web/routes/numeros.routes');
const dataDictionary = require("../application/dataDictionary");

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
  })
  .register({
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    dataDictionary: asValue(dataDictionary),
  })
  .register({
    NumerosRoutes: asFunction(NumerosRoutes).singleton(),
  })
  .register({
    NumerosController: asClass(NumerosController).singleton(), //singleton(Unica Instancia).
  })
  
module.exports = container;