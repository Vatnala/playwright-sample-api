export default class Utility {
    //candidate hashes
    unlockSuccess =
        'html/fa62f3ff714b28df89391488f23e8ba1194f2beae58ea6bbc17e53c9df94bad2_12012432_0_db96e3f54087cb138181e6b1efe0a79616d54599b88f7427b333085d019d733c_2029cc8c5d8c0b854288d288eedb798eddea4c15eb2bb5ec5ccd6f5c7287f2af/all/behattesting001';

    public isContentBase64(content: string): boolean {
        const base64Regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
        return base64Regex.test(content);
    }
}
