// Ambil elemen formulir
const form = document.getElementById("contact-form");
const namalengkapInput = document.getElementById("nama_lengkap");
const nikInput = document.getElementById("nik");
const jeniskelaminInput = document.getElementById("jenis_kelamin");
const tempatlahirInput = document.getElementById("tempat_lahir");
const tanggallahirInput = document.getElementById("tanggal_lahir");
const alamatInput = document.getElementById("alamat");
const nohpInput = document.getElementById("no_hp");
// Tambahkan event listener pada tombol "Input Data"
const inputButton = document.querySelector(".btn-success");
inputButton.addEventListener("click", () => {
  // Ambil nilai input dari formulir
  const nama_lengkap = namalengkapInput.value;
  const nik = parseInt(nikInput.value);
  const jenis_kelamin = jeniskelaminInput.value;
  const tempat_lahir = tempatlahirInput.value;
  const tanggal_lahir = tanggallahirInput.value;
  const alamat = alamatInput.value;
  const no_hp = nohpInput.value;
  // Validasi input
  if (!nama_lengkap || !nik || !jenis_kelamin || !tempat_lahir || !tanggal_lahir || !alamat || !no_hp) {
    alert("Silakan lengkapi semua field");
    return;
  }
  // Buat objek data yang akan dikirim ke server
  const data = {
    nama_lengkap: nama_lengkap,
    nik: nik,
    jenis_kelamin: jenis_kelamin,
    tempat_lahir: tempat_lahir,
    tanggal_lahir: tanggal_lahir,
    alamat: alamat,
    no_hp: no_hp,
  };
  // Kirim permintaan POST ke server untuk menambahkan data
  fetch("http://127.0.0.1:3000/api/belajar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Sukses:", result);
      alert("Data berhasil ditambahkan!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat menambahkan data.");
    });
});
