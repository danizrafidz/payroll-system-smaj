// <!-- Program Data masuk ke rekap -->
  document.getElementById("rekap").addEventListener("click", dataMasuk);
  function dataMasuk() {

    const userInfo = {};

    // Gaji Kotor
    userInfo.nama = document.getElementById("nama").value;
    userInfo.jabatan = document.getElementById("jabatan").value;
    userInfo.masakerja = document.getElementById("masakerja").value;
    userInfo.gaji_pokok = String(document.getElementById("gaji_pokok").value.replace(/\W+/g, ''));
    userInfo.tunjangan = String(userInfo.tunjangan = document.getElementById("tunjangan").value.replace(/\W+/g, ''));
    userInfo.uang_makan = String(document.getElementById("uang_makan").value.replace(/\W+/g, ''));
    userInfo.uang_transport = String(document.getElementById("uang_transport").value.replace(/\W+/g, ''));
    userInfo.total_lembur = String(document.getElementById("total_lembur").value.replace(/\W+/g, ''));
    userInfo.bpjs_kesehatan1 = String(document.getElementById("bpjs_kesehatan1").value.replace(/\W+/g, ''));
    userInfo.bpjs_tenagakerja1 = String(document.getElementById("bpjs_tenagakerja1").value.replace(/\W+/g, ''));
    userInfo.gaji_kotor = String(document.getElementById("gaji_kotor").value.replace(/\W+/g, ''));

    // Gaji Bersih
    userInfo.no_bpjskes = String(document.getElementById("No_BPJSKes").value.replace(/\W+/g, ''));
    userInfo.no_bpjstk = String(document.getElementById("No_BPJSTK").value.replace(/\W+/g, ''));
    userInfo.bpjs_kesehatan2 = String(document.getElementById("bpjs_kesehatan2").value.replace(/\W+/g, ''));
    userInfo.bpjs_tenagakerja2 = String(document.getElementById("bpjs_tenagakerja2").value.replace(/\W+/g, ''));
    userInfo.jaminan_pensiun = String(document.getElementById("jaminan_pensiun").value.replace(/\W+/g, ''));
    userInfo.status = document.getElementById("status").value
    userInfo.jml_potongan = String(document.getElementById("jml_potongan").value.replace(/\W+/g, ''));
    userInfo.gaji_bersih = String(document.getElementById("gaji_bersih").value.replace(/\W+/g, ''));

    google.script.run.userClicked(userInfo);

    // Gaji Kotor
    document.getElementById("nama").value = "";
    document.getElementById("jabatan").value = "";
    document.getElementById("masakerja").value = "";
    document.getElementById("gaji_pokok").value = "";
    document.getElementById("tunjangan").value = "";
    document.getElementById("uang_makan").value = "";
    document.getElementById("uang_transport").value = "";
    document.getElementById("jml_lembur1").value = "";
    document.getElementById("jam_pertama").value = "";
    document.getElementById("jml_lembur2").value = "";
    document.getElementById("jam_kedua").value = "";
    document.getElementById("total_lembur").value = "";
    document.getElementById("bpjs_kesehatan1").value = "";
    document.getElementById("bpjs_tenagakerja1").value = "";
    document.getElementById("gaji_kotor").value = "";

    // Gaji Bersih
    document.getElementById("No_BPJSKes").value = "";
    document.getElementById("No_BPJSTK").value = "";
    document.getElementById("bpjs_kesehatan2").value = "";
    document.getElementById("bpjs_tenagakerja2").value = "";
    document.getElementById("jaminan_pensiun").value = "";
    document.getElementById("status").value = "";
    document.getElementById("netto_setahun").value = "";
    document.getElementById("ptkp").value = "";
    document.getElementById("kena_pajak").value = "";
    document.getElementById("jumlah_pajak").value = "";
    document.getElementById("jml_potongan").value = "";
    document.getElementById("gaji_bersih").value = "";
  }

  document.getElementById("rekap").addEventListener("click", function () {
    window.alert("Data Terekap!");
  });


// <!-- Program Kalkulasi -->

  // Gaji Pokok -----------------------------------------------
  function Gaji() {
    var GajiPokok;
    var Jabatan = document.getElementById("jabatan").value;
    if (Jabatan == "Staff") {
      GajiPokok = 4500000;
    } else if (Jabatan == "Supervisor") {
      GajiPokok = 5000000;
    } else if (Jabatan == "Manajer") {
      GajiPokok = 6000000;
    } else {
      GajiPokok = 0;
    }
    return document.getElementById("gaji_pokok").value = GajiPokok.toLocaleString();
  }

  // Hitung Tunjangan ----------------------------------------------
  function Tunjangan() {
    var GajiPokok = Gaji();
    GajiPokok = parseFloat(GajiPokok.replace(/,/g, ''))
    var Jml_Tunjangan;
    var MasaKerja = document.getElementById("masakerja").value;
    if (MasaKerja == 0) {
      Jml_Tunjangan = 0;
    } else if (MasaKerja == 1) {
      Jml_Tunjangan = GajiPokok * 3 / 100;
    } else if (MasaKerja == 2) {
      Jml_Tunjangan = GajiPokok * 5 / 100;
    } else if (MasaKerja == 3) {
      Jml_Tunjangan = GajiPokok * 7 / 100;
    } else if (MasaKerja == 4) {
      Jml_Tunjangan = GajiPokok * 9 / 100;
    } else if (MasaKerja >= 5) {
      Jml_Tunjangan = GajiPokok * 10 / 100;
    } else {
      Jml_Tunjangan = 0;
    }
    return document.getElementById("tunjangan").value = Jml_Tunjangan.toLocaleString();
  }

  // Hitung Uang Makan ----------------------------------------------
  function Makan() {
    var UangMakan;
    var Jabatan = document.getElementById("jabatan").value;
    if (Jabatan == 'Staff') {
      UangMakan = '200000';
    } else if (Jabatan == 'Supervisor') {
      UangMakan = '250000';
    } else if (Jabatan == 'Manajer') {
      UangMakan = '300000';
    } else {
      UangMakan = '0';
    }
    return document.getElementById("uang_makan").value = parseFloat(UangMakan).toLocaleString();
  }

  // Hitung Uang Transportasi -------------------------------------------------
  function Transport() {
    var UangTransport;
    var Jabatan = document.getElementById("jabatan").value;
    if (Jabatan == 'Staff') {
      UangTransport = '300000';
    } else if (Jabatan == 'Supervisor') {
      UangTransport = '400000';
    } else if (Jabatan == 'Manajer') {
      UangTransport = '500000';
    } else {
      UangTransport = '0';
    }
    return document.getElementById("uang_transport").value = parseFloat(UangTransport).toLocaleString();
  }

  // Hitung Lembur Jam Pertama -------------------------------------------------
  function Lembur1() {
    var Gaji_Pokok = Gaji();
    Gaji_Pokok = parseFloat(Gaji_Pokok.replace(/,/g, ''));
    var tunjangan = Tunjangan();
    tunjangan = parseFloat(tunjangan.replace(/,/g, ''));
    var JumlahLembur;
    var JamPertama = document.getElementById("jml_lembur1").value;
    if (JamPertama <= 0) {
      JumlahLembur = 0;
    } else {
      JumlahLembur = (Gaji_Pokok + tunjangan) * JamPertama / 173 * 1.5;
    }
    return document.getElementById("jam_pertama").value = JumlahLembur.toLocaleString(undefined, { 'maximumFractionDigits': 0 });
  }

  // Hitung Lembur Jam Kedua ----------------------------------------------------
  function Lembur2() {
    var Gaji_Pokok = Gaji();
    Gaji_Pokok = parseFloat(Gaji_Pokok.replace(/,/g, ''));
    var tunjangan = Tunjangan();
    tunjangan = parseFloat(tunjangan.replace(/,/g, ''));
    var JumlahLembur;
    var JamKedua = document.getElementById("jml_lembur2").value;
    if (JamKedua <= 0) {
      JumlahLembur = 0;
    } else {
      JumlahLembur = (Gaji_Pokok + tunjangan) * JamKedua / 173 * 2;
    }
    return document.getElementById("jam_kedua").value = JumlahLembur.toLocaleString(undefined, { 'maximumFractionDigits': 0 });
  }

  // Hitung Total Jumlah Lembur -------------------------------------------------	
  function TotalLembur() {
    var lembur1 = document.getElementById("jam_pertama").value;
    lembur1 = parseFloat(lembur1.replace(/,/g, ''));

    var lembur2 = document.getElementById("jam_kedua").value;
    lembur2 = parseFloat(lembur2.replace(/,/g, ''));
    var Total_lembur;
    Total_lembur = lembur1 + lembur2;
    document.getElementById("total_lembur").value = Total_lembur.toLocaleString();
  }

  // Hitung BPJS Kesehatan -------------------------------------------------
  function BPJSKesehatan1() {
    var Gaji_Pokok = Gaji();
    Gaji_Pokok = parseFloat(Gaji_Pokok.replace(/,/g, ''));
    var bpjs_kesehatan;
    bpjs_kesehatan = Gaji_Pokok * 4 / 100;
    return document.getElementById("bpjs_kesehatan1").value = bpjs_kesehatan.toLocaleString(undefined, { 'maximumFractionDigits': 0 });
  }

  // Hitung BPJS Ketenagakerjaan -------------------------------------------------
  function BPJSKetenagakerjaan1() {
    var Gaji_Pokok = Gaji();
    Gaji_Pokok = parseFloat(Gaji_Pokok.replace(/,/g, ''));
    var bpjs_tenagakerja;
    bpjs_tenagakerja = Gaji_Pokok * 3.7 / 100;
    return document.getElementById("bpjs_tenagakerja1").value = bpjs_tenagakerja.toLocaleString(undefined, { 'maximumFractionDigits': 0 });
  }

  // Hitung Gaji Kotor -------------------------------------------------
  function GajiKotor() {
    var Gaji_Pokok = document.getElementById("gaji_pokok").value;
    Gaji_Pokok = parseFloat(Gaji_Pokok.replace(/,/g, ''));

    var tunjangan = document.getElementById("tunjangan").value;
    tunjangan = parseFloat(tunjangan.replace(/,/g, ''));

    var makan = document.getElementById("uang_makan").value;
    makan = parseFloat(makan.replace(/,/g, ''));

    var transport = document.getElementById("uang_transport").value;
    transport = parseFloat(transport.replace(/,/g, ''));

    var Total_lembur = document.getElementById("total_lembur").value;
    Total_lembur = parseFloat(Total_lembur.replace(/,/g, ''));

    var jml_GajiKotor = document.getElementById("hitung1").value;
    jml_GajiKotor = Gaji_Pokok + tunjangan + makan + transport + Total_lembur;
    document.getElementById("gaji_kotor").value = jml_GajiKotor.toLocaleString();
  }

  // Hitung Potongan BPJS Kesehatan -------------------------------------------------
  function BPJSKesehatan2() {
    var Gaji_Pokok = Gaji();
    Gaji_Pokok = parseFloat(Gaji_Pokok.replace(/,/g, ''));
    var bpjs_kesehatan;
    bpjs_kesehatan = Gaji_Pokok * 2 / 100;
    return document.getElementById("bpjs_kesehatan2").value = bpjs_kesehatan.toLocaleString(undefined, { 'maximumFractionDigits': 0 });
  }

  // Hitung Potongan BPJS Tenagakerja -------------------------------------------------
  function BPJSKetenagakerjaan2() {
    var Gaji_Pokok = Gaji();
    Gaji_Pokok = parseFloat(Gaji_Pokok.replace(/,/g, ''));
    var bpjs_tenagakerja;
    bpjs_tenagakerja = Gaji_Pokok * 1 / 100;
    return document.getElementById("bpjs_tenagakerja2").value = bpjs_tenagakerja.toLocaleString(undefined, { 'maximumFractionDigits': 0 });
  }

  // Hitung Potongan Jaminan Pensiun -------------------------------------------------
  function JaminanPensiun() {
    var Gaji_Pokok = Gaji();
    Gaji_Pokok = parseFloat(Gaji_Pokok.replace(/,/g, ''));
    var jaminan_pensiun;
    jaminan_pensiun = Gaji_Pokok * 3 / 100;
    return document.getElementById("jaminan_pensiun").value = jaminan_pensiun.toLocaleString(undefined, { 'maximumFractionDigits': 0 });
  }

  // Hitung Penghasilan Netto Setahun -------------------------------------------------
  function NettoSetahun() {
    var Gaji_Pokok = document.getElementById("gaji_pokok").value;
    Gaji_Pokok = parseFloat(Gaji_Pokok.replace(/,/g, ''));

    var tunjangan = document.getElementById("tunjangan").value;
    tunjangan = parseFloat(tunjangan.replace(/,/g, ''));

    var makan = document.getElementById("uang_makan").value;
    makan = parseFloat(makan.replace(/,/g, ''));

    var transport = document.getElementById("uang_transport").value;
    transport = parseFloat(transport.replace(/,/g, ''));

    var Total_lembur = document.getElementById("total_lembur").value;
    Total_lembur = parseFloat(Total_lembur.replace(/,/g, ''));

    var bpjs_kesehatan = document.getElementById("bpjs_kesehatan2").value;
    bpjs_kesehatan = parseFloat(bpjs_kesehatan.replace(/,/g, ''));

    var bpjs_tenagakerja = document.getElementById("bpjs_tenagakerja2").value;
    bpjs_tenagakerja = parseFloat(bpjs_tenagakerja.replace(/,/g, ''));

    var jaminan_pensiun = document.getElementById("jaminan_pensiun").value;
    jaminan_pensiun = parseFloat(jaminan_pensiun.replace(/,/g, ''));
    var Jml_NettoSetahun;
    Jml_NettoSetahun = ((Gaji_Pokok + tunjangan + makan + transport + Total_lembur) - bpjs_kesehatan - bpjs_tenagakerja - jaminan_pensiun) * 12;
    return document.getElementById("netto_setahun").value = Jml_NettoSetahun.toLocaleString(undefined, { 'maximumFractionDigits': 0 });
  }

  // Hitung PTKP (Penghasilan Tidak Kena Pajak) -------------------------------------------------
  function PTKP() {
    var netto_setahun = document.getElementById("netto_setahun").value;
    netto_setahun = parseFloat(netto_setahun.replace(/,/g, ''));
    var ptkp;
    var status_kawin = document.getElementById("status").value;
    if (status_kawin == "Tidak Kawin") {
      ptkp = 54000000;
    } else if (status_kawin == "Kawin") {
      ptkp = 58500000;
    } else if (status_kawin == "Kawin Anak 1") {
      ptkp = 63000000;
    } else if (status_kawin == "Kawin Anak 2") {
      ptkp = 67500000;
    } else if (status_kawin == "Kawin Anak 3") {
      ptkp = 72000000;
    } else {
      ptkp = "-";
    }
    return document.getElementById("ptkp").value = ptkp.toLocaleString();
  }

  // Hitung Penghasilan Kena Pajak -------------------------------------------------
  function KenaPajak() {
    var netto_setahun = document.getElementById("netto_setahun").value;
    netto_setahun = parseFloat(netto_setahun.replace(/,/g, ''));

    var ptkp = PTKP();
    ptkp = parseFloat(ptkp.replace(/,/g, ''));
    Jml_KenaPajak = netto_setahun - ptkp;
    if (Jml_KenaPajak <= 0) {
      Jml_KenaPajak = 0;
    }
    return document.getElementById("kena_pajak").value = Jml_KenaPajak.toLocaleString(undefined, { 'maximumFractionDigits': 0 });
  }

  // Hitung Jumlah Pajak Sebulan -------------------------------------------------
  function HitungPajak() {
    var Kena_pajak = KenaPajak();
    Kena_pajak = parseFloat(Kena_pajak.replace(/,/g, ''));
    var Hitung_pajak;
    if (Kena_pajak >= 0 && Kena_pajak <= 60000000) {
      Hitung_pajak = Kena_pajak * 5 / 100 / 12;
    } else if (Kena_pajak > 60000000 && Kena_pajak <= 250000000) {
      Hitung_pajak = ((Kena_pajak - 60000000) * 15 / 100 + (60000000 * 5 / 100)) / 12;
    } else if (Kena_pajak > 250000000 && Kena_pajak <= 500000000) {
      Hitung_pajak = ((Kena_pajak - 250000000) * 25 / 100 + ((250000000 - 60000000) * 15 / 100) + (60000000 * 5 / 100)) / 12;
    } else if (Kena_pajak > 500000000 && Kena_pajak <= 5000000000) {
      Hitung_pajak = ((Kena_pajak - 500000000) * 30 / 100 + ((500000000 - 250000000) * 25 / 100) + ((250000000 - 60000000) * 15 / 100) + (60000000 * 5 / 100)) / 12;
    } else if (Kena_pajak > 5000000000) {
      Hitung_pajak = ((Kena_pajak - 5000000000) * 35 / 100 + ((5000000000 - 500000000) * 30 / 100) + ((500000000 - 250000000) * 25 / 100) +
        ((250000000 - 60000000) * 15 / 100) + (60000000 * 5 / 100)) / 12;
    } else {
      Hitung_pajak = 0;
    }
    return document.getElementById("jumlah_pajak").value = Hitung_pajak.toLocaleString(undefined, { 'maximumFractionDigits': 0 });
  }

  // Hitung Total Jumlah Potongan -------------------------------------------------
  function JumlahPotongan() {
    var bpjs_kesehatan = document.getElementById("bpjs_kesehatan2").value;
    bpjs_kesehatan = parseFloat(bpjs_kesehatan.replace(/,/g, ''));

    var bpjs_tenagakerja = document.getElementById("bpjs_tenagakerja2").value;
    bpjs_tenagakerja = parseFloat(bpjs_tenagakerja.replace(/,/g, ''));

    var jaminan_pensiun = document.getElementById("jaminan_pensiun").value;
    jaminan_pensiun = parseFloat(jaminan_pensiun.replace(/,/g, ''));

    var Jml_pajak = document.getElementById("jumlah_pajak").value;
    Jml_pajak = parseFloat(Jml_pajak.replace(/,/g, ''));

    var jml_potongan = document.getElementById("hitung2").value;
    jml_potongan = bpjs_kesehatan + bpjs_tenagakerja + jaminan_pensiun + Jml_pajak;
    document.getElementById("jml_potongan").value = jml_potongan.toLocaleString();
  }

  // Hitung Gaji Bersih -------------------------------------------------
  function GajiBersih() {
    var gaji_kotor = document.getElementById("gaji_kotor").value;
    gaji_kotor = parseFloat(gaji_kotor.replace(/,/g, ''));

    var jml_potongan = document.getElementById("jml_potongan").value;
    jml_potongan = parseFloat(jml_potongan.replace(/,/g, ''));

    var jml_GajiBersih = document.getElementById("hitung2").value;
    jml_GajiBersih = gaji_kotor - jml_potongan;
    document.getElementById("gaji_bersih").value = jml_GajiBersih.toLocaleString();
  }
