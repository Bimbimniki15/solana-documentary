const solanaWeb3 = require('@solana/web3.js');

async function main() {
    console.log("=========================================");
    console.log("🚀 Memulai Inisiasi ke Jaringan Solana...");
    
    // Membuat koneksi ke jaringan utama (Mainnet) Solana
    const connection = new solanaWeb3.Connection(
        solanaWeb3.clusterApiUrl('mainnet-beta'), 
        'confirmed'
    );

    try {
        // Mengambil nomor block (slot) terbaru di jaringan
        const currentSlot = await connection.getSlot();
        console.log("✅ Berhasil terhubung ke Blockchain Solana!");
        console.log(`📦 Nomor Block (Slot) terbaru saat ini: ${currentSlot}`);
        
        // Mengambil waktu jaringan
        const blockTime = await connection.getBlockTime(currentSlot);
        const date = new Date(blockTime * 1000);
        console.log(`⏰ Waktu Jaringan: ${date.toLocaleString()}`);
        console.log("=========================================");
        
    } catch (error) {
        console.error("❌ Gagal terhubung. Cek koneksi internet Anda.", error);
    }
}

// Menjalankan fungsi utama
main();