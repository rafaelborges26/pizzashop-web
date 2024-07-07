import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './test', // onde ficaram os
  testMatch: /.*\.e2e-spec.ts$/,
  fullyParallel: true, // rodar testes em paralelo
  forbidOnly: !!process.env.CI, // so roda um teste
  retries: process.env.CI ? 2 : 0, // deixar 2 pq é normal falhar as vezes
  workers: process.env.CI ? 1 : undefined,
  // reporter: 'html',
  use: {
    baseURL: 'http://localhost:50789',
  },

  webServer: {
    command: 'npm run dev:test',
    url: 'http://localhost:50789',
    reuseExistingServer: !process.env.CI, // n subir o servidor a cada teste
  },

  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },
  //
  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },
  //
  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   },
  //
  //   /* Test against mobile viewports. */
  //   // {
  //   //   name: 'Mobile Chrome',
  //   //   use: { ...devices['Pixel 5'] },
  //   // },
  //   // {
  //   //   name: 'Mobile Safari',
  //   //   use: { ...devices['iPhone 12'] },
  //   // },
  //
  //   /* Test against branded browsers. */
  //   // {
  //   //   name: 'Microsoft Edge',
  //   //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
  //   // },
  //   // {
  //   //   name: 'Google Chrome',
  //   //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  //   // },
  // ],
})
