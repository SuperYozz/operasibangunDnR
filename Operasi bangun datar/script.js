//=========================== Persegi =============================
document.getElementById('formPersegi').addEventListener('submit', function(e) {
  e.preventDefault();

  const sisiP = document.getElementById('sisiP').value;
  
  fetch('operasi.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'sisiP=' + encodeURIComponent(sisiP)
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      document.getElementById('errorPersegi').textContent = data.error;
      document.getElementById('luasP').value = '';
      document.getElementById('kelilingP').value = '';
    } else {
      document.getElementById('errorPersegi').textContent = '';
      document.getElementById('luasP').value = data.luasP + ' cm²';       // <- sesuaikan key
      document.getElementById('kelilingP').value = data.kelilingP + ' cm'; // <- sesuaikan key
    }
  })
  .catch(err => {
    document.getElementById('errorPersegi').textContent = 'Error: ' + err;
  });
});

//=========================== Segitiga =============================
document.getElementById('formSegitiga').addEventListener('submit', function(e) {
  e.preventDefault();

  const sisiS = document.getElementById('sisiS').value;

  fetch('operasi.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'sisiS=' + encodeURIComponent(sisiS)
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      document.getElementById('errorSegitiga').textContent = data.error;
      document.getElementById('luasS').value = '';
      document.getElementById('kelilingS').value = '';
    } else {
      document.getElementById('errorSegitiga').textContent = '';
      document.getElementById('luasS').value = data.luasS + ' cm²';       // <- sesuaikan key
      document.getElementById('kelilingS').value = data.kelilingS + ' cm'; // <- sesuaikan key
    }
  })
  .catch(err => {
    document.getElementById('errorSegitiga').textContent = 'Error: ' + err;
  });
});
//=========================== PersegiPanjang =============================
document.getElementById('formPersegiPanjang').addEventListener('submit', function(e) {
  e.preventDefault();

  const panjangPP = document.getElementById('panjangPP').value;
  const lebarPP = document.getElementById('lebarPP').value;

  fetch('operasi.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
     body: 
    'panjangPP=' + encodeURIComponent(panjangPP) + 
    '&lebarPP=' + encodeURIComponent(lebarPP)
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      document.getElementById('errorPersegiPanjang').textContent = data.error;
      document.getElementById('luasPP').value = '';
      document.getElementById('kelilingPP').value = '';
    } else {
      document.getElementById('errorPersegiPanjang').textContent = '';
      document.getElementById('luasPP').value = data.luasPP + ' cm²';       // <- sesuaikan key
      document.getElementById('kelilingPP').value = data.kelilingPP + ' cm'; // <- sesuaikan key
    }
  })
  .catch(err => {
    document.getElementById('errorPersegiPanjang').textContent = 'Error: ' + err;
  });
});
//=========================== BELAHKETUPAT =============================
document.getElementById('formBelahKetupat').addEventListener('submit', function(e) {
  e.preventDefault();

  const sisiBK = document.getElementById('sisiBK').value;
  const Diagonal1BK = document.getElementById('Diagonal1BK').value;
  const Diagonal2BK = document.getElementById('Diagonal2BK').value;

  fetch('operasi.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
     body: 
    'sisiBK=' + encodeURIComponent(sisiBK) + 
    '&Diagonal1BK=' + encodeURIComponent(Diagonal1BK)+
    '&Diagonal2BK=' + encodeURIComponent(Diagonal2BK)
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      document.getElementById('errorPersegiPanjang').textContent = data.error;
      document.getElementById('luasBK').value = '';
      document.getElementById('kelilingBK').value = '';
    } else {
      document.getElementById('errorPersegiPanjang').textContent = '';
      document.getElementById('luasBK').value = data.luasBK + ' cm²';       // <- sesuaikan key
      document.getElementById('kelilingBK').value = data.kelilingBK + ' cm'; // <- sesuaikan key
    }
  })
  .catch(err => {
    document.getElementById('errorBelahKetupat').textContent = 'Error: ' + err;
  });
});

//=========================== Lingkaran =============================
document.getElementById('formLingkaran').addEventListener('submit', function(e) {
  e.preventDefault();

  const rL = document.getElementById('rL').value;
  
  fetch('operasi.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'rL=' + encodeURIComponent(rL)
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      document.getElementById('errorPersegi').textContent = data.error;
      document.getElementById('luasL').value = '';
      document.getElementById('kelilingL').value = '';
    } else {
      document.getElementById('errorPersegi').textContent = '';
      document.getElementById('luasL').value = data.luasL + ' cm²';       // <- sesuaikan key
      document.getElementById('kelilingL').value = data.kelilingL + ' cm'; // <- sesuaikan key
    }
  })
  .catch(err => {
    document.getElementById('errorPersegi').textContent = 'Error: ' + err;
  });
});

//=========================== KUBUS =============================
document.getElementById('formKubus').addEventListener('submit', function(e) {
  e.preventDefault();

  const rK = document.getElementById('rK').value;
  
  fetch('operasi.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'rK=' + encodeURIComponent(rK)
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      document.getElementById('errorKubus').textContent = data.error;
      document.getElementById('VolumeK').value = '';
      document.getElementById('LuasPK').value = '';
    } else {
      document.getElementById('errorKubus').textContent = '';
      document.getElementById('VolumeK').value = data.VolumeK + 'cm³ ';     
      document.getElementById('LuasPK').value = data.LuasPK + 'cm²'; 
    }
  })
  .catch(err => {
    document.getElementById('errorKubus').textContent = 'Error: ' + err;
  });
});

//=========================== Balok =============================
document.getElementById('formBalok').addEventListener('submit', function(e) {
  e.preventDefault();

  const PanjangB = document.getElementById('PanjangB').value;
  const LebarB = document.getElementById('LebarB').value;
  const TinggiB = document.getElementById('TinggiB').value;
  
  fetch('operasi.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 
    'PanjangB=' + encodeURIComponent(PanjangB) + 
    '&LebarB=' + encodeURIComponent(LebarB)+
    '&TinggiB=' + encodeURIComponent(TinggiB)
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      document.getElementById('errorKubus').textContent = data.error;
      document.getElementById('VolumeB').value = '';
      document.getElementById('LuasPB').value = '';
    } else {
      document.getElementById('errorKubus').textContent = '';
      document.getElementById('VolumeB').value = data.VolumeB + 'cm³ ';     
      document.getElementById('LuasPB').value = data.LuasPB + 'cm²'; 
    }
  })
  .catch(err => {
    document.getElementById('errorBalok').textContent = 'Error: ' + err;
  });
});

//=========================== Kerucut =============================
document.getElementById('formKerucut').addEventListener('submit', function(e) {
  e.preventDefault();

  const rKr = document.getElementById('rKr').value;
  const GarisPKr = document.getElementById('GarisPKr').value;
  const TinggiKr = document.getElementById('TinggiKr').value;
  
  fetch('operasi.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 
    'rKr=' + encodeURIComponent(rKr) + 
    '&GarisPKr=' + encodeURIComponent(GarisPKr)+
    '&TinggiKr=' + encodeURIComponent(TinggiKr)
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      document.getElementById('errorKerucut').textContent = data.error;
      document.getElementById('VolumePKr').value = '';
      document.getElementById('LuasPKr').value = '';
    } else {
      document.getElementById('errorKerucut').textContent = '';
      document.getElementById('VolumeKr').value = data.VolumeKr + 'cm³ ';     
      document.getElementById('LuasPKr').value = data.LuasPKr + 'cm²'; 
    }
  })
  .catch(err => {
    document.getElementById('errorKerucut').textContent = 'Error: ' + err;
  });
});

//=========================== TABUNG =============================
document.getElementById('formTabung').addEventListener('submit', function(e) {
  e.preventDefault();

  const rT = document.getElementById('rT').value;
  const TinggiT = document.getElementById('TinggiT').value;
  
  fetch('operasi.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 
    'rT=' + encodeURIComponent(rT) + 
    '&TinggiT=' + encodeURIComponent(TinggiT)
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      document.getElementById('errorKerucut').textContent = data.error;
      document.getElementById('VolumeT').value = '';
      document.getElementById('LuasPT').value = '';
    } else {
      document.getElementById('errorKerucut').textContent = '';
      document.getElementById('VolumeT').value = data.VolumeT + 'cm³ ';     
      document.getElementById('LuasPT').value = data.LuasPT + 'cm²'; 
    }
  })
  .catch(err => {
    document.getElementById('errorTabung').textContent = 'Error: ' + err;
  });
});

//=========================== BOLA =============================
document.getElementById('formBola').addEventListener('submit', function(e) {
  e.preventDefault();

  const rBo = document.getElementById('rBo').value;
  
  fetch('operasi.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 
    'rBo=' + encodeURIComponent(rBo) 
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      document.getElementById('errorKerucut').textContent = data.error;
      document.getElementById('VolumeBo').value = '';
      document.getElementById('LuasPBo').value = '';
    } else {
      document.getElementById('errorKerucut').textContent = '';
      document.getElementById('VolumeBo').value = data.VolumeBo + 'cm³ ';     
      document.getElementById('LuasPBo').value = data.LuasPBo + 'cm²'; 
    }
  })
  .catch(err => {
    document.getElementById('errorBola').textContent = 'Error: ' + err;
  });
});