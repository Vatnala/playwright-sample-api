import { defineConfig } from '@playwright/test';
import { config } from 'dotenv';

/**
 * This allows you to pass in a `test_env` environment variable
 * to specify which environment you want to run the tests against
 */
if (process.env.test_env) {
    config({
        path: `.env.${process.env.test_env}`,
        override: true,
    });
} else {
    config({
        path: `.env.staging`,
    });
}

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: './tests',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.RETRY_COUNT ? 1 : 0,
    /* Opt out of parallel tests on CI. */
    //please don't update this parallel count. Discuss with Automation team
    workers: process.env.PARALLEL_COUNT ? 1 : 4,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [['html'], ['junit', { outputFile: 'results/index.xml', embedAnnotationsAsProperties: true }]],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        // // All requests we send go to this API endpoint.
        //baseURL: 'http://auth-service.localhost.com',
        // extraHTTPHeaders: {
        //   // We set this header per GitHub guidelines.
        //   'Accept': 'application/json',
        //   'Content-type': 'application/json',
        //   // Add authorization token to all requests.
        //   // Assuming personal access token available in the environment.
        //   'X-API-KEY': `${process.env.API_TOKEN}`,
        // },

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
    },
});
