const solanaWeb3 = require('@solana/web3.js');

async function cekSaldo() {
    console.log("=========================================");
    console.log("📡 Menghubungkan ke Jaringan Utama Solana...");
    
    const connection = new solanaWeb3.Connection(
        solanaWeb3.clusterApiUrl('mainnet-beta'), 
        'confirmed'
    );

    // Ini adalah alamat dompet publik acak sebagai contoh percobaan
    const alamatDompet = 'vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg'; 

    try {
        const publicKey = new solanaWeb3.PublicKey(alamatDompet);
        
        console.log(`🔍 Mengecek saldo untuk alamat: ${alamatDompet}`);
        
        // Mengambil saldo (dalam satuan terkecil bernama Lamports)
        const saldoLamports = await connection.getBalance(publicKey);
        
        // Mengubah Lamports menjadi satuan SOL yang mudah dibaca
        const saldoSOL = saldoLamports / solanaWeb3.LAMPORTS_PER_SOL;
        
        console.log(`💰 Total Saldo: ${saldoSOL} SOL`);
        console.log("=========================================");
        
    } catch (error) {
        console.error("❌ Gagal mengecek saldo. Pastikan alamat dompet valid.", error.message);
    }
}

cekSaldo();