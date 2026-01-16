export default class BasicAuth {
    public getBasicAuth(username: string, password: string) {
        const httpCredentials = {
            username: username,
            password: password,
        };
        const btoa = (str: string) => Buffer.from(str).toString('base64');
        return btoa(`${httpCredentials.username}:${httpCredentials.password}`);
    }
}
