require('dotenv').config();
const { Connection, PublicKey, clusterApiUrl } = require('@solana/web3.js');
const { getAccount } = require('@solana/spl-token');
const fs = require('fs');

async function dashboard() {
    const connection = new Connection(clusterApiUrl('devnet'));
    const secretKey = Uint8Array.from(JSON.parse(fs.readFileSync(process.env.WALLET_PATH, 'utf8')));
    const wallet = new PublicKey('J5zqhTKDHRgxYnVAADZyqeqiETZA4PZoSBiY6o2PoR6K'); // Alamat wallet Anda
    const tokenMint = new PublicKey(process.env.TOKEN_MINT);
    
    const balance = await connection.getBalance(wallet);
    console.log("=== PUSAT KOMANDO ASET SOLANA ===");
    console.log("Saldo SOL: " + (balance / 1e9) + " SOL");
    console.log("Token Mint: " + tokenMint.toBase58());
}
dashboard();
