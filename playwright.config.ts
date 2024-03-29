import { defineConfig } from '@playwright/test';
require('dotenv').config()

export default defineConfig({
  use: {
    // All requests we send go to this API endpoint.
    baseURL: process.env.BASE_URL,
    extraHTTPHeaders: {
      'Accept': 'application/json, text/plain, */*',
      // Add authorization token to all requests.
      // Assuming personal access token available in the environment.
      'Authorization': `Bearer ${process.env.API_TOKEN}`,
    },
  }
});