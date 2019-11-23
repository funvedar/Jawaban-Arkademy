<?php
    include "koneksi.php";

    $sql = "CREATE DATABASE profile";

    if($koneksi->query($sql) === TRUE) {
        echo "databe berhasil dibuat";
    } else {
        echo "database gagal dibuat";
    }
?>