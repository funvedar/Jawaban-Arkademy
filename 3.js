var hasil = '';
function arkademy(nilai) {
    for( var i = 1; i <= nilai; i++) {
        if (i == 1) {
            hasil += i;
        }
       else if(i % 3 == 0 && i % 7 == 0) {
           hasil += ', Arkademy';
       }
       else if(i % 3 == 0 && i % 7 != 0) {
           hasil += ', Arka';
       }
       else if(i % 7 == 0 && i % 3 != 0) {
           hasil += ', Demy';
       }
       else if(i % 7 != 0 && i % 3 != 0){
           hasil += ', ' + i;
       }
       
    }
    return hasil;
    var huruf = /^[a-zA-Z0-9]/g;
    if (nilai.match(huruf)) {
        hasil += 'Input harus angka!';
    }
    return hasil;
}
console.log(hasil);