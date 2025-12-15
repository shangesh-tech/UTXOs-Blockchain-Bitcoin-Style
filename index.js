const Wallet = require("./wallet/wallet");
const Blockchain = require("./block/blockchain");
const Transaction = require("./tx/transaction");
const UTXO = require("./tx/utxo");

// Create wallets
const alice = new Wallet();
const bob = new Wallet();

// Initialize blockchain
const chain = new Blockchain();

// Create coinbase transaction
const coinbaseTx = new Transaction([], [{ owner: alice.publicKey, amount: 50 }]);
chain.addBlock([coinbaseTx]);

// Alice sends 30 BTC to Bob
const tx1 = new Transaction(
    [new UTXO(coinbaseTx.id, 0, alice.publicKey, 50)],
    [{ owner: bob.publicKey, amount: 30 }, { owner: alice.publicKey, amount: 20 }]
);
tx1.sign(alice.privateKey);
chain.addBlock([tx1]);

console.log("Blockchain valid?", chain.isChainValid());
console.log(JSON.stringify(chain, null, 2));
