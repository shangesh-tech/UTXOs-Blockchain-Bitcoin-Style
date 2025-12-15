const { sha256 } = require("../crypto/hash");
const { verify } = require("../crypto/sign");

class Transaction {
    constructor(inputs, outputs) {
        this.inputs = inputs; // array of UTXO
        this.outputs = outputs; // array of { owner, amount }
        this.signature = "";
        this.id = sha256(JSON.stringify(inputs) + JSON.stringify(outputs));
    }

    sign(privateKey) {
        const { sign } = require("../crypto/sign");
        this.signature = sign(this.id, privateKey);
    }

    isValid() {
        if (this.inputs.length === 0) return true; // coinbase
        return this.inputs.every((utxo) => verify(this.id, this.signature, utxo.owner));
    }
}

module.exports = Transaction;
