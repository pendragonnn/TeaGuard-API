'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('diseases', [
      {
        id: 'D-001',
        diseaseName: 'Algal Leaf',
        diseaseExplanation: 'Penyakit Algal Leaf disebabkan oleh alga hijau Cephaleuros virescens yang menyerang daun teh, menyebabkan bintik-bintik hijau kusam atau oranye pada daun.',
        diseaseRecommendation: 'Pangkas dan buang daun yang terinfeksi, pastikan tanaman mendapatkan sirkulasi udara yang baik, dan gunakan fungisida berbasis tembaga jika diperlukan.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "D-002",
        diseaseName: "Anthracnose",
        diseaseExplanation: "Anthracnose adalah penyakit yang disebabkan oleh jamur Colletotrichum yang menyerang daun, batang, dan buah tanaman teh, menyebabkan bercak hitam dan kematian jaringan tanaman.",
        diseaseRecommendation: "Pangkas bagian tanaman yang terinfeksi dan bakar untuk mencegah penyebaran, hindari penyiraman berlebihan, dan aplikasikan fungisida yang sesuai.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "D-003",
        diseaseName: "Bird Eye Spot",
        diseaseExplanation: "Penyakit Bird Eye Spot disebabkan oleh jamur Cercospora theae yang menyebabkan bercak bulat dengan pusat putih dan tepi coklat pada daun teh.",
        diseaseRecommendation: "Pangkas dan buang daun yang terinfeksi, hindari kelembapan berlebih, dan aplikasikan fungisida seperti tembaga oksiklorida.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "D-004",
        diseaseName: "Brown Blight",
        diseaseExplanation: "Brown Blight disebabkan oleh jamur Colletotrichum camelliae yang menyebabkan bercak coklat pada daun, yang kemudian dapat menyebabkan daun gugur.",
        diseaseRecommendation: "Lakukan pemangkasan daun yang terinfeksi, jaga kebersihan kebun, dan gunakan fungisida yang tepat untuk mengendalikan penyebaran.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "D-005",
        diseaseName: "Gray Light",
        diseaseExplanation: "Gray Light disebabkan oleh jamur Pestalotiopsis yang menyebabkan bercak abu-abu pada daun teh, yang dapat mengurangi kualitas dan kuantitas produksi daun teh.",
        diseaseRecommendation: "Buang daun yang terinfeksi dan jaga kebersihan kebun, aplikasikan fungisida yang sesuai, dan pastikan tanaman mendapat sinar matahari cukup.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "D-006",
        diseaseName: "Red Leaf Spot",
        diseaseExplanation: "Red Leaf Spot disebabkan oleh jamur Phyllosticta yang menyebabkan bercak merah pada daun teh, yang dapat menghambat pertumbuhan tanaman.",
        diseaseRecommendation: "Pangkas dan buang daun yang terinfeksi, pastikan tanaman mendapat cukup sirkulasi udara, dan aplikasikan fungisida jika diperlukan.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "D-007",
        diseaseName: "White Spot",
        diseaseExplanation: "Penyakit White Spot disebabkan oleh jamur Elsinoe leaf spot yang menyebabkan bercak putih pada daun teh, biasanya disertai dengan tepi berwarna coklat.",
        diseaseRecommendation: "Pangkas dan buang daun yang terinfeksi, hindari kelembapan berlebihan, dan aplikasikan fungisida yang sesuai untuk mengendalikan penyakit.",
        createdAt: new Date(),
        updatedAt: new Date(),
      }


    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('disease', null, {})
  }
};
