import {ApplicationConfig} from '@loopback/core';
import {AuthenticationApplication} from './application';

const PORT = 3000;
const ARGV_INDEX = 2;
/**
 * Export the OpenAPI spec from the application
 */
async function exportOpenApiSpec(): Promise<void> {
  const config: ApplicationConfig = {
    rest: {
      port: +(process.env.PORT ?? PORT),
      host: process.env.HOST ?? 'localhost',
    },
  };
  const outFile = process.argv[ARGV_INDEX] ?? './src/openapi.json';
  const app = new AuthenticationApplication(config);
  await app.boot();
  await app.exportOpenApiSpec(outFile);
}

exportOpenApiSpec()
  .then(() => {
    process.exit(0);
  })
  .catch(err => {
    console.error('Fail to export OpenAPI spec from the application.', err); //NOSONAR
    process.exit(1);
  });
