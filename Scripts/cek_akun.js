const { Connection, PublicKey, clusterApiUrl } = require('@solana/web3.js');

async function main() {
    const connection = new Connection(clusterApiUrl('devnet'));
    const publicKey = new PublicKey('BeT6T3Pms6tEfYTy7bZqTzQsE1jN4Fo5cxRipEXRSasq');

    const accountInfo = await connection.getAccountInfo(publicKey);
    const balance = await connection.getBalance(publicKey);

    console.log("--- Detail Akun ---");
    console.log("Alamat:", publicKey.toBase58());
    console.log("Saldo (SOL):", balance / 1e9);
    console.log("Data Length:", accountInfo ? accountInfo.data.length : 0, "bytes");
}

main();
