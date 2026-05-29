const { Keypair } = require("@solana/web3.js");
const fs = require("fs");

try {
    const data = fs.readFileSync("id.json", "utf8");
    const secretKeyArray = JSON.parse(data);
    const keypair = Keypair.fromSecretKey(Uint8Array.from(secretKeyArray));
    console.log("-----------------------------------------");
    console.log("ALAMAT PUBLIK ANDA ADALAH:");
    console.log(keypair.publicKey.toBase58());
    console.log("-----------------------------------------");
} catch (err) {
    console.log("Gagal membaca id.json atau file rusak.");
    console.log("Error detail:", err.message);
}