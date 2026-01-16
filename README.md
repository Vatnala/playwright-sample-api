# Name of the repository

playwright-sample-api

## Content

In this file you will find information about this project like: installation, structure and how to run the tests.

### What is this repository for?

This repository serves the purpose of creating test scripts for the RL API

### How do I get set up?

-   Clone or download the project
-   Extract and open in the VS-Code
-   `npm i` to install the dependencies
-   `npm install -D @playwright/test@latest` to install playwright

### How to run

-   To run the tests on dev environment: `npm run test:dev`
-   To run the tests on staging environment: `npm run test:staging`
-   To run a specific tag: `npx playwright test --grep @tagname`
-   To run a test on specific branch `BRANCH_NAME=release-greensite npx playwright test --grep @tagname`

### To run from Testmo Cli

`npx testmo automation:run:submit --instance https://cv-library.testmo.net --project-id 5 --name "PROD-1478" --source "monolith-api" --results results/*.xml -- playwright test --grep @LoginUser`

### RL monolith Admin permissions

`In case tests are failed because 422 no credits left then follow the below process`

-   Go to https://admin-master.ci.resume-library.com
-   Login and navigate to https://admin-master.ci.resume-library.com/account/update_product_balances_job_postings/1478
-   Add credits to Job Posting credits textbox and save

`In case tests are failed because of 403 Partner don't have access to api then follow the below process`

-   Go to https://admin-master.ci.resume-library.com
-   Login and navigate to https://admin-master.ci.resume-library.com/partners/view/975192
-   Edit the partner and give required access and save
-   Do the same for any test partner we are using within our tests

### Project structure

-   In the tests folder for each groupings of endpoints a folder must be created under which spec.ts files will be created for each individual endpoint.

### Additional paragraph

-   API information can be found in https://api-master.ci.resume-library.com/

### Checks if files are formatted

`pnpm prettier --check .`

### Formats all the files

`pnpm prettier --write .`
