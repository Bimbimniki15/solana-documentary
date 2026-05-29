require('dotenv').config();
const { Connection, Keypair, PublicKey } = require('@solana/web3.js');
const fs = require('fs');

async function addMetadata() {
    console.log("=== PROSES BRANDING TOKEN ===");
    console.log("Token: " + process.env.TOKEN_MINT);
    console.log("Status: Metadata sedang dipersiapkan...");
    
    // Di sini Anda bisa mendefinisikan Nama dan Simbol
    const name = "Proyek Solana Utama";
    const symbol = "PSU";
    
    console.log("Nama Token: " + name);
    console.log("Simbol Token: " + symbol);
    console.log("Catatan: Untuk eksekusi on-chain sepenuhnya, gunakan Metaplex CLI.");
}

addMetadata();
