"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _core = require("@nestjs/core");
const _swagger = require("@nestjs/swagger");
const _nestjsprisma = require("nestjs-prisma");
const _appmodule = require("./app.module");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    // Validation
    app.useGlobalPipes(new _common.ValidationPipe());
    // enable shutdown hook
    app.enableShutdownHooks();
    // Prisma Client Exception Filter for unhandled exceptions
    const { httpAdapter } = app.get(_core.HttpAdapterHost);
    app.useGlobalFilters(new _nestjsprisma.PrismaClientExceptionFilter(httpAdapter));
    const configService = app.get(_config.ConfigService);
    const nestConfig = configService.get('nest');
    const corsConfig = configService.get('cors');
    const swaggerConfig = configService.get('swagger');
    // const firebaseConfig: ServiceAccount = {
    //   projectId: configService.get<string>('stikombanyuwangiapp-sim'),
    //   privateKey: configService
    //     .get<string>(
    //       '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDUbT+/Uae/cxwO\n+YfdqiKjNi5ThwovjIRUpTCiAYYXcFczvLNizdxZK1y3qwNVI+CtbtMgkkmisEkO\nK5d04HHQMEQRKeN8Xh9uod9pPkSTyNd1hWJy0JzKfdvHZ4q9dUDXZqEfRedM1GWo\nnSQYmLEcz6AjzMNPL6G+G+Jg6YzTq1HK5GnT9vq30Jmf7QnX6xSKS5ZUNZi2YLA3\nKF49zDvf4rWsWjpoHi2i52/jJX27eOtbexhhmjmrpTmudgQnunYu2onNNoSAc9dH\nvpKZ0zyUjg12zgYAu6miiBGxu6uuOSNz1cn4dStjqz5Y0W7Z5yJcBGc3FIXpXpzK\nWONV0YZjAgMBAAECggEAHqyd6WsJnZAqK5FlyKDyOn4u51nXIzGXxD9MTACLU+Qh\ne3OStcBDQs8Lpuv3Ybp6DaE0tH3bSzZIflbWGob0eFsX4SCa3FEdGdUfFSvsLCjy\nz+IQasLr+SN+codlleESGWiU+JaYBVSgT15NoY2e+amTlsfRJiSbJwAQyuy+rKvL\njHLEB4LH2G2WoUyb93IkOnLECq7DLkK3h6wS5tT9fIQ5gbkyH7C+wuf2BBcnZDPg\nTsSWRHiW3jJoZ6RjkhS1lksAneyoBbJaqNDc8t+gnBqzrplo72XUHhF8aR+mip3b\nclVOTL8XVNpmvTKmqQ9cPKHY5SXZvd5MTdS9UbmnAQKBgQDzsVsRDOxbHs6ZSp85\nIPSYY1NAtuLz8SyS+XFebylelkJKITyTWjhxPm+ay3Yho6Sj4kuEOK70d1iwBPuu\nXKO5lewSoWqQiSUIuQq7d7kw6KS1H+XJgREZJTdb50cHBouzKuDYQAEZszj8SE1X\neNwTnXadyuw3VE7csjctVsdbYwKBgQDfJ6mNTbwttMAvFLZm5uv/dPISg+Lpc/Uv\nXlKHWatWHLBP5f08Vwi92WC4Gwxc080tjej12qLtDMUCCfm2xeaijAMYNZ9Yykw9\nqoK4uJz1+FmdH2+dFy/fcQf7tyqZa+WYbIk1dKANaqlDr1ZPkovoj8emF/eXLpqI\nTCZw2qSZAQKBgQCrTZAbgz8eqqBGR5t3uD/YY3Hheu481tsjke9sl624DN4aaBTB\n7Fji2iXv5XhsGzGf9nJpRsNNnBue2FHndr2stsPVMNzNL2r2H8V4lKd8xv0JSZvp\nMy5Gw8+PbhuSx7oqP0kBGrTrUP4M8fJUO+RQcY8xSrUUC9LH9wssduT6ywKBgDzZ\n5OtKSkkwY8Oy4zZWO/5yFlykKCk+3JopH1oXQph9xDpVXeOpXBHhB/XMMmfRvb5x\nVxhLoWgAtmwi6jxD5OtoQKPGY4hjybx7FaBnfy23pkApRVdR7lUAzot+XBhwCrCw\n0A2KmuZtsnBpjKCwNoSZSHjrSjGonK0UDttxU7cBAoGBANYKIOQcGP5zdNnBmjAo\nf4nZgP9Rl2/jkDl7s1JgRadBEDO43czf0QySVAHuS0dk5RfDsQBkzJJY2FB8o74+\nd7jzVOvShFBS/1REQ93VSau/lSZm4jbDxPT4aAhIw9sKR1/dvAo+k3C3VPcXfjBh\n1pITv57xEEPKnT8z3P/CkDG+\n-----END PRIVATE KEY-----\n',
    //     )
    //     .replace(/\\n/g, '\n'),
    //   clientEmail: configService.get<string>(
    //     'firebase-adminsdk-6jqoo@stikombanyuwangiapp-sim.iam.gserviceaccount.com',
    //   ),
    // };
    // // Initialize the firebase admin app
    // admin.initializeApp({
    //   credential: admin.credential.cert(firebaseConfig),
    //   databaseURL:
    //     'https://stikombanyuwangiapp-sim-default-rtdb.asia-southeast1.firebasedatabase.app',
    // });
    // Swagger Api
    if (swaggerConfig.enabled) {
        const options = new _swagger.DocumentBuilder().setTitle(swaggerConfig.title || 'Nestjs').setDescription(swaggerConfig.description || 'The nestjs API description').setVersion(swaggerConfig.version || '1.0').build();
        const document = _swagger.SwaggerModule.createDocument(app, options);
        _swagger.SwaggerModule.setup(swaggerConfig.path || 'api', app, document);
    }
    // Cors
    if (corsConfig.enabled) {
        app.enableCors();
    }
    await app.listen(process.env.PORT || nestConfig.port || 3333);
}
bootstrap();
