const { generateKeyPair, sign } = require("../crypto/sign");

class Wallet {
    constructor() {
        const { publicKey, privateKey } = generateKeyPair();
        this.publicKey = publicKey;
        this.privateKey = privateKey;
    }

    signData(data) {
        return sign(data, this.privateKey);
    }
}

module.exports = Wallet;
