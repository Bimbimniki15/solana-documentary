// Mengaktifkan sistem pembaca brankas rahasia .env
require('dotenv').config();
const solanaWeb3 = require('@solana/web3.js');

async function mulaiDasborKripto() {
    console.log("======================================================");
    console.log("🛡️  SOLANA SECURE DASHBOARD ACTIVATED (ANTI-LEAK)  🛡️");
    console.log("======================================================");

    // Mengambil konfigurasi dari Brankas .env
    const rpcUrl = process.env.SOLANA_RPC_URL || "https://api.mainnet-beta.solana.com";
    const dompetTarget = process.env.ALAMAT_DOMPET_KAMU;

    if (!dompetTarget) {
        console.error("❌ ERROR: Alamat dompet belum diisi di file .env!");
        console.log("💡 Silakan buka file .env di VS Code dan isi ALAMAT_DOMPET_KAMU");
        console.log("======================================================");
        return;
    }

    console.log(`📡 Koneksi Jaringan : ${rpcUrl}`);
    console.log(`🔍 Memantau Dompet  : ${dompetTarget}`);
    console.log("------------------------------------------------------");

    try {
        const connection = new solanaWeb3.Connection(rpcUrl, 'confirmed');
        const publicKey = new solanaWeb3.PublicKey(dompetTarget);

        // 1. CEK SALDO UTAMA (SOL)
        console.log("⏳ Mengambil data saldo...");
        const saldoLamports = await connection.getBalance(publicKey);
        const saldoSOL = saldoLamports / solanaWeb3.LAMPORTS_PER_SOL;
        console.log(`💰 SALDO UTAMA     : ${saldoSOL} SOL`);

        // 2. CEK STAKE ACCOUNTS (INVESTIGASI STAKING)
        console.log("⏳ Memeriksa program Staking/Earn pada dompet ini...");
        const akunStake = await connection.getProgramAccounts(
            new solanaWeb3.PublicKey('Stake11111111111111111111111111111111111111'),
            {
                filters: [{ memcmp: { offset: 12, bytes: dompetTarget } }]
            }
        );

        console.log(`🥩 AKUN STAKE       : Ditemukan ${akunStake.length} posisi staking.`);
        if (akunStake.length > 0) {
            akunStake.forEach((akun, index) => {
                console.log(`   └─ [Staking #${index + 1}] Balance: ${akun.account.lamports / solanaWeb3.LAMPORTS_PER_SOL} SOL`);
            });
        }

        // 3. INFORMASI REWARD / BLOCK TIME
        const slotSaatIni = await connection.getSlot();
        console.log(`📊 SLOT BLOCKCHAIN  : Jaringan Aktif di Slot #${slotSaatIni}`);
        console.log("🔒 STATUS FILES     : 100% Terlokalisasi di Laptop (Aman Dari Kebocoran)");

    } catch (error) {
        console.error("❌ Terjadi kesalahan pada saat membaca jaringan:", error.message);
    }
    console.log("======================================================");
}

mulaiDasborKripto();