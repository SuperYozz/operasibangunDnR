<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $response = [];

    // ===================== PERSEGI =====================
    if (!empty($_POST['sisiP'])) {
        $sisiP = $_POST['sisiP'];
        if (!is_numeric($sisiP) || $sisiP <= 0) {
            $response['error'] = 'Sisi persegi harus berupa angka positif';
        } else {
            $response['luasP'] = $sisiP * $sisiP;
            $response['kelilingP'] = 4 * $sisiP;
        }
    }

    // =================== SEGITIGA SAMA SISI ===================
    if (!empty($_POST['sisiS'])) {
        $sisiS = $_POST['sisiS'];
        if (!is_numeric($sisiS) || $sisiS <= 0) {
            $response['error'] = 'Sisi segitiga harus berupa angka positif';
        } else {
            $response['luasS'] = (sqrt(3) / 4) * $sisiS * $sisiS;
            $response['kelilingS'] = 3 * $sisiS;
        }
    }
      // ===================== PERSEGI PANJANG =====================
    if (!empty($_POST['panjangPP']) && !empty($_POST['lebarPP'])) {
    $panjangPP = $_POST['panjangPP'];
    $lebarPP = $_POST['lebarPP'];

    if (!is_numeric($panjangPP) || $panjangPP <= 0 || !is_numeric($lebarPP) || $lebarPP <= 0) {
        $response['error'] = 'Panjang dan lebar harus berupa angka positif';
    } else {
        $response['luasPP'] = $panjangPP * $lebarPP;
        $response['kelilingPP'] = 2 * ($panjangPP + $lebarPP);
    }
}
      // ===================== BELAH KETUPAT =====================
    if (!empty($_POST['sisiBK']) && !empty($_POST['Diagonal1BK']) && !empty($_POST['Diagonal2BK'])) {
    $sisiBK = $_POST['sisiBK'];
    $Diagonal1BK = $_POST['Diagonal1BK'];
    $Diagonal2BK = $_POST['Diagonal2BK'];

    if (!is_numeric($sisiBK) || $sisiBK <= 0 || !is_numeric($Diagonal1BK) || $Diagonal1BK <= 0 || !is_numeric($Diagonal2BK) || $Diagonal2BK <= 0) {
        $response['error'] = 'Sisi,Diagonal1 dan Diagonal2 harus berupa angka positif';
    } else {
        $response['luasBK'] = ($Diagonal1BK * $Diagonal2BK)/2;
        $response['kelilingBK'] = 4 * $sisiBK;
    }
}

    // ===================== LINGKARAN =====================
    if (!empty($_POST['rL'])) {  
        $rL = $_POST['rL'];
        if (!is_numeric($rL) || $rL <= 0) {
            $response['error'] = 'Jari-jari lingkaran harus angka positif';
        } else {
            $response['luasL'] = pi() * $rL * $rL;
            $response['kelilingL'] = 2 * pi() * $rL;
        }
    }
    // ===================== KUBUS =====================
    if (!empty($_POST['rK'])) {  // perbaikan di sini
        $rK = $_POST['rK'];
        if (!is_numeric($rK) || $rK <= 0) {
            $response['error'] = 'Rusuk lingkaran harus angka positif';
        } else {
            $response['VolumeK'] = $rK * $rK * $rK;
            $response['LuasPK'] = 6 *($rK* $rK);
        }
    }
        // ===================== BALOK =====================
    if (!empty($_POST['PanjangB']) && !empty($_POST['LebarB']) && !empty($_POST['TinggiB'])){  // perbaikan di sini
        $PanjangB = $_POST['PanjangB'];
        $LebarB = $_POST['LebarB'];
        $TinggiB = $_POST['TinggiB'];
        if (!is_numeric($PanjangB) || $PanjangB <= 0 || !is_numeric($LebarB) || $LebarB <= 0 || !is_numeric($TinggiB) || $TinggiB <= 0) {
            $response['error'] = 'Rusuk lingkaran harus angka positif';
        } else {
            $response['VolumeB'] = $PanjangB * $LebarB * $TinggiB;
            $response['LuasPB'] = 6 *($PanjangB * $LebarB + $PanjangB * $TinggiB + $LebarB * $TinggiB);
        }
    }

        // ===================== KERUCUT =====================
    if (!empty($_POST['rKr']) && !empty($_POST['GarisPKr']) && !empty($_POST['TinggiKr'])){  // perbaikan di sini
        $rKr = $_POST['rKr'];
        $GarisPKr = $_POST['GarisPKr'];
        $TinggiKr = $_POST['TinggiKr'];
        if (!is_numeric($rKr) || $rKr <= 0 || !is_numeric($GarisPKr) || $GarisPKr <= 0 || !is_numeric($TinggiKr) || $TinggiKr <= 0) {
            $response['error'] = 'jari jari, tinnggi dan garis pelukis Kerucut harus angka positif';
        } else {
            $response['VolumeKr'] = 1/3 * pi() * $rKr * $rKr * $TinggiKr;
            $response['LuasPKr'] = pi()* $rKr*( $rKr + $GarisPKr);
        }
    }

        // ===================== TABUNG =====================
    if (!empty($_POST['rT']) && !empty($_POST['TinggiT'])){  // perbaikan di sini
        $rT = $_POST['rT'];
        $TinggiT = $_POST['TinggiT'];
        if (!is_numeric($rT) || $rT <= 0 || !is_numeric($TinggiT) || $TinggiT <= 0) {
            $response['error'] = 'jari jari, tinnggi Tabung harus angka positif';
        } else {
            $response['VolumeT'] = pi() * $rT * $rT * $TinggiT;
            $response['LuasPT'] = 2 * pi()* $rT*( $rT + $TinggiT);
        }
    }
        // ===================== BOLA =====================
    if (!empty($_POST['rBo'])){  // perbaikan di sini
        $rBo = $_POST['rBo'];
        if (!is_numeric($rBo) || $rBo <= 0 ) {
            $response['error'] = 'jari jari Bola harus angka positif';
        } else {
            $response['VolumeBo'] = 4/3 *pi() * $rBo * $rBo * $rBo;
            $response['LuasPBo'] = 4 * pi() * $rBo * $rBo ;
        }
    }
    echo json_encode($response);
    exit;
}
 
echo json_encode(['errorBola' => 'Metode request tidak valid']);
exit;


