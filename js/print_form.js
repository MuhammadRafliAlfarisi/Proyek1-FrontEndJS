// Ambil nilai parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// Fetch data menggunakan ID dari URL parameter
fetch("http://127.0.0.1:3000/api/belajar/" + id)
  .then((response) => response.json())
  .then((result) => {
    // Mengatur nilai-nilai ke elemen-elemen di halaman "print_form.html"
    document.getElementById("print-nama_lengkap").textContent = result.data.nama_lengkap;
    document.getElementById("print-nik").textContent = result.data.nik;
    document.getElementById("print-jenis_kelamin").textContent = result.data.jenis_kelamin;
    document.getElementById("print-tempat_lahir").textContent = result.data.tempat_lahir;
    document.getElementById("print-tanggal_lahir").textContent = result.data.tanggal_lahir;
    document.getElementById("print-alamat").textContent = result.data.alamat;
    document.getElementById("print-no_hp").textContent = result.data.no_hp;
    document.getElementById("print-nama_dokter").textContent = result.data.nama_dokter;
    document.getElementById("print-hari").textContent = result.data.hari;
    document.getElementById("print-jam").textContent = result.data.jam;
    document.getElementById("print-ruangan").textContent = result.data.ruangan;
    document.getElementById("print-tgl_reservasi").textContent = result.data.tgl_reservasi;
  })
  .catch((error) => {
    console.error("Error:", error);
    alert("Terjadi kesalahan saat mengambil data.");
  });
