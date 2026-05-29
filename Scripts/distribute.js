require('dotenv').config();
const { Connection, PublicKey, Keypair } = require('@solana/web3.js');
const { getOrCreateAssociatedTokenAccount, transfer } = require('@solana/spl-token');
const fs = require('fs');

async function distribute() {
    const connection = new Connection('https://api.devnet.solana.com');
    const secretKey = Uint8Array.from(JSON.parse(fs.readFileSync(process.env.WALLET_PATH, 'utf8')));
    const payer = Keypair.fromSecretKey(secretKey);
    const mint = new PublicKey(process.env.TOKEN_MINT);
    const receiver = new PublicKey('BeT6T3Pms6tEfYTy7bZqTzQsE1jN4Fo5cxRipEXRSasq');

    // Membuat akun token penerima jika belum ada
    const fromTokenAccount = await getOrCreateAssociatedTokenAccount(connection, payer, mint, payer.publicKey);
    const toTokenAccount = await getOrCreateAssociatedTokenAccount(connection, payer, mint, receiver);

    const signature = await transfer(connection, payer, fromTokenAccount.address, toTokenAccount.address, payer.publicKey, 100);
    console.log("Transaksi Berhasil! Signature:", signature);
}
distribute();
