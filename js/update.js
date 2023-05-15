// Ambil data dari URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// Ambil elemen formulir
const form = document.getElementById("contact-form");
const namalengkapInput = document.getElementById("nama_lengkap");
const nikInput = document.getElementById("nik");
const jeniskelaminInput = document.getElementById("jenis_kelamin");
const tempatlahirInput = document.getElementById("tempat_lahir");
const tanggallahirInput = document.getElementById("tanggal_lahir");
const alamatInput = document.getElementById("alamat");
const nohpInput = document.getElementById("no_hp");
// Isi formulir dengan data dari server berdasarkan ID
fetch(`http://127.0.0.1:3000/api/belajar/${id}`)
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    const pasien = data.data;
    namalengkapInput.value = pasien.nama_lengkap;
    nikInput.value = pasien.nik;
    jeniskelaminInput.value = pasien.jenis_kelamin;
    tempatlahirInput.value = pasien.tempat_lahir;
    tanggallahirInput.value = pasien.tanggal_lahir;
    alamatInput.value = pasien.alamat;
    nohpInput.value = pasien.no_hp;
  });
// Fungsi untuk mengirim data ke server
function updateData() {
  // Buat objek data yang akan dikirim ke server
  const data = {
    nama_lengkap: namalengkapInput.value,
    nik: parseInt(nikInput.value),
    jenis_kelamin: jeniskelaminInput.value,
    tempat_lahir: tempatlahirInput.value,
    tanggal_lahir: tanggallahirInput.value,
    alamat: alamatInput.value,
    no_hp: nohpInput.value,
  };
  // Buat konfigurasi untuk request
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  // Kirim request ke server
  fetch(`http://127.0.0.1:3000/api/belajar/${id}`, options)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      alert("Data berhasil diupdate");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error(error);
      alert("Data gagal diupdate");
    });
}
// Tambahkan event listener pada tombol Edit
const editButton = document.querySelector(".btn-success");
editButton.addEventListener("click", updateData);
