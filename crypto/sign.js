const crypto = require("crypto");

function generateKeyPair() {
    return crypto.generateKeyPairSync("ec", {
        namedCurve: "secp256k1",
        publicKeyEncoding: { type: "spki", format: "pem" },
        privateKeyEncoding: { type: "pkcs8", format: "pem" },
    });
}

function sign(data, privateKey) {
    return crypto.sign("SHA256", Buffer.from(data), privateKey).toString("hex");
}

function verify(data, signature, publicKey) {
    return crypto.verify(
        "SHA256",
        Buffer.from(data),
        publicKey,
        Buffer.from(signature, "hex")
    );
}

module.exports = { generateKeyPair, sign, verify };
