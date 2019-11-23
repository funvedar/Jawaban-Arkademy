<?php
    include "koneksi.php";

    $sql = "CREATE TABLE user(
        id int PRIMARY KEY,
        name varchar(50),
        price int,
        id_category int,
        id_cashier int
    )";

    if($koneksi->query($sql) == TRUE) {
        echo "tabel berhasil dibuat";
    } else {
        echo "tabel gagal dibuat";
    }
?>