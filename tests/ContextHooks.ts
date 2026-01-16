import { request } from '@playwright/test';

let baseAuthURL;

if (process.env.BRANCH_NAME) {
    // baseAuthURL = 'https://api-' + process.env.BRANCH_NAME + '
} else {
    baseAuthURL = process.env.baseURL;
}

export async function baseApiURL() {
    if (process.env.BRANCH_NAME) {
        baseAuthURL = 'https://api-' + process.env.BRANCH_NAME;
    } else {
        baseAuthURL = process.env.baseURL;
    }
    return baseAuthURL;
}

export async function getApiContext() {
    return await request.newContext({
        baseURL: baseAuthURL,
        extraHTTPHeaders: {
            Accept: 'application/json',
            'Content-Type': `application/json`,
        },
    });
}

export async function getNewContext() {
    return await request.newContext({
        extraHTTPHeaders: {
            Accept: 'application/json',
            'Content-Type': `application/json`,
        },
    });
}
