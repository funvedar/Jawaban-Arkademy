<?php
    include "koneksi.php";

    $sql = "INSERT INTO user (
        id,
        name,
        price,
        id_category,
        id_cashier
    ) VALUE (
         '3',
         'Cheese cake',
         '50000',
         '1',
         '3'
    )";

    if($koneksi->query($sql) == TRUE) {
        echo "insert data berhasil";
    } else {
        echo "insert data gagal";
    }

?>