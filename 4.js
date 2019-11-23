var hurufBesar = /[A-Z]/g;
function abbreviation(singkatan) {
    var found = singkatan.match(hurufBesar);
    console.log(found.join(""));
}