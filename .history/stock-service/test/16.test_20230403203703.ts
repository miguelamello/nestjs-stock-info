import { env } from '../src/env';

describe('GET /', () => {

  const endpoint = `http://${env.app_host}:${env.app_port}/stocks/history`;

  it(
    `
      *** Integration Testing ***

      The endpoint must return an error object since the 
      Authorization header has an invalid token.

      {
        "statusCode": 401,
        "message": "Unauthorized"
      }

      ***
        Please you must enter a invalid valid token in the Authorization header.
      ***
      
      *** 
        Please verify if the test environment variables in "/src/env.ts" 
        matches your setup and also if server is running in background. 
      ***
    `, 
    async () => {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', 
          'Authorization':  'Bearer fyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvYmVydHBsYW50QGdtYWlsLmNvbSIsInN1YiI6IjY0MmI0YTgxNzhjMmM0YzliM2NjZGJkMCIsImlhdCI6MTY4MDU2NDA4OCwiZXhwIjoxNjgwNjUwNDg4fQ.PwXvBcSKOb5QhmWo1dkJg_TRtsFc39cHK0bETnNdg9g'
        }
      };
      const promisse = await fetch(endpoint, options);
      const response = await promisse.json();
      expect(response).toBeDefined();
      expect(response[0].date).toBeDefined();
      expect(response[0].name).toBeDefined();
      expect(response[0].symbol).toBeDefined();
      expect(response[0].open).toBeDefined();
      expect(response[0].high).toBeDefined();
      expect(response[0].low).toBeDefined();
      expect(response[0].close).toBeDefined();
    }
  );
  
});
