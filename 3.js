let hasil = '';
var angka = /[0-9]/g;
function arkademy(nilai) {
    for(var i = 1; i <= nilai; i++) {
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
    var data = String(nilai);
    if (data.match(angka)) {
        return hasil;
    }
    else {
        hasil += 'Input harus angka!';
        return hasil;    
    }
}
console.log(hasil);