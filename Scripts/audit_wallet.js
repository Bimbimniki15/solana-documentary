const { Keypair } = require('@solana/web3.js');
const fs = require('fs');

function audit(filePath) {
    try {
        const secretKey = Uint8Array.from(JSON.parse(fs.readFileSync(filePath, 'utf8')));
        const wallet = Keypair.fromSecretKey(secretKey);
        console.log('File: ' + filePath);
        console.log('Public Key: ' + wallet.publicKey.toBase58());
        console.log('---');
    } catch (e) {
        console.log('Error membaca file ' + filePath);
    }
}

audit('./id_baru.json');
