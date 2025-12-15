// Simple UTXO structure
class UTXO {
    constructor(txId, index, owner, amount) {
        this.txId = txId;
        this.index = index;
        this.owner = owner;
        this.amount = amount;
    }
}

module.exports = UTXO;
