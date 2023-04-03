
interface AppEnv {
  app_host: string;
  app_port: number;
  mongo_uri: string;
}

// App environment variables
export const env: AppEnv = {
  app_host: 'localhost', // stock-service.io
  app_port: 3001,
  mongo_uri: 'mongodb://admin:123456@localhost:27017',
};
