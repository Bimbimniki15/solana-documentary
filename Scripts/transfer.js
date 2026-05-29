const { Connection, Keypair, Transaction, SystemProgram, sendAndConfirmTransaction, clusterApiUrl, PublicKey } = require('@solana/web3.js');
const fs = require('fs');

async function transfer() {
    const connection = new Connection(clusterApiUrl('devnet'));
    
    const secretKey = Uint8Array.from(JSON.parse(fs.readFileSync('./id_baru.json', 'utf8')));
    const fromWallet = Keypair.fromSecretKey(secretKey);
    const toPublicKey = new PublicKey('BeT6T3Pms6tEfYTy7bZqTzQsE1jN4Fo5cxRipEXRSasq');

    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: fromWallet.publicKey,
            toPubkey: toPublicKey,
            lamports: 1000000,
        })
    );

    const signature = await sendAndConfirmTransaction(connection, transaction, [fromWallet]);
    console.log("Transaksi Sukses! Signature:", signature);
}

transfer();
