import { SecretsManager } from '@aws-sdk/client-secrets-manager';
import Helper from '../utils/helper/Helper';
const client = new SecretsManager({ region: 'us-east-1' });
const secretString = 'rl-staging/selenium-tests/credentials';
let secretToReturn: string;
const helper = new Helper();

const getMySecret = async (SecretId: string, secretKey: string): Promise<string> => {
    const s = await client.getSecretValue({ SecretId });
    const results = JSON.parse(s.SecretString!);
    parseObject(results);

    function parseObject(obj) {
        for (const key in obj) {
            if (secretKey == key) {
                secretToReturn = obj[key];
            }
            if (obj[key] instanceof Object) {
                parseObject(obj[key]);
            }
        }
    }
    return secretToReturn;
};

export const getSecret = async (secretKey): Promise<string> => {
    if (helper.getParameterFromEnvOrSysParam(secretKey, '')) {
        return helper.getParameterFromEnvOrSysParam(secretKey, '');
    }
    const secretvalue = getMySecret(secretString, secretKey);
    return await secretvalue;
};
