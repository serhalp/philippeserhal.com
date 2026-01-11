import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  use: {
    baseURL: "http://localhost:4321",
  },
  webServer: {
    command: "npx http-server dist -p 4321 -s",
    url: "http://localhost:4321",
    reuseExistingServer: !process.env.CI,
  },
});
