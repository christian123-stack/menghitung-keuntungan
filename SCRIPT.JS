function hitungKeuntungan() {
    const hargaBarang = parseFloat(document.getElementById('hargaBarang').value);
    const modalBarang = parseFloat(document.getElementById('modalBarang').value);
    const hargaSewa = parseFloat(document.getElementById('hargaSewa').value);
    const hargaDistribusi = parseFloat(document.getElementById('hargaDistribusi').value);
    
    // Menghitung total biaya per unit
    const totalBiayaPerUnit = modalBarang + (hargaSewa ) + (hargaDistribusi );

    // Menghitung total pendapatan dan total biaya
    const totalPendapatan = hargaBarang 
    const totalBiaya = totalBiayaPerUnit 

    // Menghitung keuntungan
    const keuntungan = totalPendapatan - totalBiaya;

    const resultElement = document.getElementById('result');
    if (keuntungan < 0) {
        resultElement.innerText = `Anda mengalami kerugian sebesar: Rp ${Math.abs(keuntungan).toFixed(2)}`;
    } else {
        resultElement.innerText = `Keuntungan yang didapat: Rp ${keuntungan.toFixed(2)}`;
    }
}


