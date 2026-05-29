const { Connection, PublicKey } = require('@solana/web3.js');

const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
const tokenMint = new PublicKey('SeSjiK91j74FGCpAKWRKbAsjCPMJx7GuCQT121hWxDD');

console.log("=== MONITORING AKTIVITAS TOKEN AKTIF ===");

connection.onAccountChange(tokenMint, (accountInfo) => {
    console.log("Ada perubahan pada akun token! Saldo/Data diperbarui.");
    console.log("Data baru:", accountInfo.data);
}, 'confirmed');
