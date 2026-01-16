import { faker } from '@faker-js/faker';

export default class Helper {
    public getParameterFromEnvOrSysParam(name: string, defaultValue: string): string {
        if (process.env[name] != null) {
            return process.env[name]!.trim();
        } else if (process.env[defaultValue] != null) {
            return process.env[defaultValue]!.trim();
        }
        return defaultValue;
    }

    public getRandomEmail() {
        return ('Playwright+' + faker.person.firstName() + '+' + Date.now() + '@test.com').toLowerCase();
    }
}
