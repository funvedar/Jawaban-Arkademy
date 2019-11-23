function username(username) {
    var hurufKecil = /^[a-z]{3,5}$/;
    if(username.match(hurufKecil)) {
        return true;
    } return false;
}

function password(password) {
    var validasi = /^\(?([0-9]{3})\)?[-]?([0-9]{3})?([A-Z]{4})$/;
    if(password.match(validasi)) {
        return true;
    } return false;

}