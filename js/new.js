let data = [
  {
    id: 1,
    image: "./assets/image/abay.jpg",
    image_zoom: "/assets/image/abay2.png",
    title: "Zulkifli",
    nim: "3312201069",
    jabatan: "Ketua Kelas",
  },
  {
    id: 2,
    image: "./assets/image/sephira.jpg",
    image_zoom: "/assets/image/sephira.jpg",
    title: "Sephira",
    nim: "3312201075",
    jabatan: "Wakil ketua Kelas",
  },
  {
    id: 3,
    image: "./assets/image/hadi.jpg",
    image_zoom: "/assets/image/hadi2.jpg",
    title: "Nurhadi",
    nim: "3312201082",
    jabatan: "Anggota Kelas",
    quotes:
      "Sukses kan kuraih apabila diri ini telah berusaha dan berdoa, tak kan ku pungkiri bahwa rahmat tuhan lah yang ku cari. Tatkala diri ini harus merasakan ujiannya hidup, sudah pastilah bertambah kuat tubuh yang ku rangkul ini.",
  },
  {
    image: "./assets/image/noviati.jpg",
    title: "Noviati Saliha",
    nim: "3312201076",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/jessica.jpg",
    title: "Jessica Intan Kinasih",
    nim: "3312201063",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/hery.jpeg",
    title: "Hery Swando Sinaga",
    nim: "3312201085",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/hugo.jpg",
    title: "Hugo Hamonangan",
    nim: "3312201066",
    jabatan: "Anggota Kelas",
  },
  {
    id: 8,
    image: "./assets/image/sherina.jpg",
    title: "Sherina Nur Syabania",
    nim: "3312201078",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/dhea.jpg",
    title: "Dhea Salsabila Yustin",
    nim: "3312201065",
    jabatan: "Anggota Kelas",
  },
  {
    id: 10,
    image: "./assets/image/afif.jpeg",
    image_zoom: "/assets/image/afif2.jpg",
    title: "Rizqi Ammar Afif",
    nim: "3312201084",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/athallah.jpg",
    title: "M. Rizki Putro Athallah",
    nim: "3312201074",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/hairul.jpg",
    title: "Hairul Anwar Salfindi",
    nim: "3312201089",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/rido.jpg",
    title: "Rido Wahyu Tambunan",
    nim: "3312201070",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/rahmad.jpeg",
    title: "Rahmad Kurniawan",
    nim: "3312201073",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/janrianto.jfif",
    title: "Janrianto Rizki",
    nim: "3312201077",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/thariq.jpg",
    title: "M. farhan Thariq",
    nim: "3312201072",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/aulia.jpg",
    title: "Aulia Nabila Husnah",
    nim: "3312201088",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/anggi.jpg",
    title: "Anggi Eunika Simanjuntak",
    nim: "3312201087",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/josefhin.jpg",
    title: "Josefhin Apryanto",
    nim: "3312201081",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/feni.jpg",
    title: "Feni Debora Siregar",
    nim: "3312201086",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/fitri.jpeg",
    title: "Fitri Rahmadilla",
    nim: "3312201080",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/yazid.jpeg",
    title: "Muhammad Yazid Al Farisy",
    nim: "3312201079",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/andre.jpg",
    title: "Andre Prasasti",
    nim: "3312201083",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/fatimah.jpeg",
    title: "Fatimah Azzahra",
    nim: "3312201071",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/abdillah.jpg",
    title: "M Abdillah",
    nim: "3312201080",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/ihsan.jpg",
    title: "Muhammad Ihsan Nabawi",
    nim: "3312201068",
    jabatan: "Anggota Kelas",
  },
  {
    id: 27,
    image: "./assets/image/febriadi.jfif",
    image_zoom: "/assets/image/febriadi2.jpeg",
    title: "Febriadi Lesmana",
    nim: "3312201062",
    jabatan: "Anggota Kelas",
  },
  {
    image: "./assets/image/balqis.jpg",
    title: "Nabila Arisya Balqis",
    nim: "3312201090",
    jabatan: "Anggota Kelas",
  },
];

let mydata = data.sort((d1, d2) => (d1.nim > d2.nim) ? 1 : (d1.nim < d2.nim) ? -1 : 0);

console.log(mydata)