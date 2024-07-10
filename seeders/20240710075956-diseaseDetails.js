'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('diseaseDetails', [
      {
        id: 'D-001',
        diseaseName: 'Algal Leaf',
        diseaseImgPreview: '/publics/AlgalLeaf-preview.png',
        diseaseImgDetail: '/publics/AlgalLeaf-detail.png',
        diseaseExplanation: 'Algal leaf, atau penyakit daun alga, adalah penyakit yang disebabkan oleh alga parasitik, biasanya dari genus Cephaleuros. Pada tanaman teh, penyakit ini ditandai dengan adanya bercak-bercak hijau atau oranye pada daun, yang kemudian dapat berubah menjadi cokelat atau merah. Bercak ini dapat mengurangi kemampuan fotosintesis tanaman, sehingga menghambat pertumbuhan dan produksi daun teh. Penyakit ini sering terjadi di lingkungan yang lembap dan teduh, di mana alga dapat berkembang biak dengan cepat.',
        diseasePrevention: 'Untuk mencegah penyakit daun alga pada tanaman teh, penting untuk menjaga kebersihan kebun dan memastikan sirkulasi udara yang baik di antara tanaman. Pemangkasan rutin untuk menghilangkan daun yang terinfeksi dan mengurangi kelembapan berlebih juga dapat membantu mencegah penyebaran alga. Penggunaan fungisida yang mengandung tembaga juga efektif untuk mengendalikan penyakit ini, tetapi harus digunakan dengan hati-hati agar tidak merusak tanaman.',
        diseaseRecommendation: 'Rekomendasi untuk pengelolaan penyakit ini meliputi pemantauan rutin kondisi tanaman dan lingkungan sekitar. Jika ditemukan tanda-tanda awal infeksi, segera lakukan tindakan pencegahan seperti pemangkasan dan penyemprotan fungisida. Selain itu, meningkatkan drainase tanah dan menghindari penanaman terlalu rapat juga dapat membantu mengurangi risiko infeksi. Pengelolaan yang baik dan tindakan pencegahan yang tepat dapat membantu menjaga kesehatan tanaman teh dan meningkatkan produktivitas kebun.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'D-002',
        diseaseName: 'Anthracnose',
        diseaseImgPreview: '/publics/Anthracnose-preview.png',
        diseaseImgDetail: '/publics/Anthracnose-detail.png',
        diseaseExplanation: 'Anthracnose pada daun teh disebabkan oleh jamur Colletotrichum spp., yang menimbulkan bercak-bercak coklat atau hitam pada daun. Bercak-bercak ini dapat menyebabkan daun gugur, mengurangi fotosintesis, dan menurunkan kualitas serta kuantitas hasil panen. Gejala awal meliputi bintik-bintik kecil yang kemudian berkembang menjadi bercak besar dengan tepi yang lebih gelap. Penyakit ini biasanya berkembang dengan cepat di kondisi lingkungan yang hangat dan lembap. ',
        diseasePrevention: 'Pencegahan Anthracnose pada daun teh mencakup beberapa langkah penting. Pertama, penerapan praktik sanitasi yang baik sangat krusial, seperti membuang daun yang terinfeksi dan membersihkan sisa-sisa tanaman di sekitar kebun. Kedua, rotasi tanaman dan penggunaan varietas teh yang tahan terhadap penyakit ini dapat membantu mengurangi risiko infeksi. Ketiga, pengelolaan kelembapan lingkungan dengan pengaturan jarak tanam yang baik dan pemangkasan untuk meningkatkan sirkulasi udara di antara tanaman. ',
        diseaseRecommendation: 'Rekomendasi untuk mengatasi dan mencegah Anthracnose meliputi penggunaan fungisida yang sesuai dan terdaftar untuk tanaman teh. Fungisida berbasis tembaga atau formulasi lainnya yang direkomendasikan oleh ahli pertanian setempat bisa digunakan sebagai tindakan pencegahan dan pengendalian. Selain itu, penting untuk memantau tanaman secara rutin untuk mendeteksi gejala awal infeksi sehingga tindakan bisa segera diambil. Edukasi petani mengenai praktik-praktik pertanian yang baik dan pentingnya menjaga kebersihan kebun juga dapat meningkatkan efektivitas pencegahan penyakit ini. Dengan pendekatan terpadu ini, dampak negatif Anthracnose pada produksi teh dapat diminimalkan.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'D-003',
        diseaseName: 'Bird Eye Spot',
        diseaseImgPreview: '/publics/BirdEyeSpot-preview.png',
        diseaseImgDetail: '/publics/BirdEyeSpot-detail.png',
        diseaseExplanation: 'Penyakit bird eye spot pada tanaman teh disebabkan oleh jamur Cercospora, yang menyebabkan bercak-bercak kecil berwarna cokelat muda dengan pinggiran berwarna gelap pada daun tanaman teh. Bercak ini mirip dengan mata burung (bird eye), sehingga penyakit ini dikenal sebagai bird eye spot. Infeksi biasanya terjadi di musim hujan atau saat kondisi kelembapan tinggi.',
        diseasePrevention: 'Untuk mencegah penyakit bird eye spot pada tanaman teh, penting untuk menjaga kebersihan kebun, termasuk menghilangkan daun-daun yang jatuh yang dapat menjadi tempat berkembang biaknya jamur. Selain itu, mengatur pola penanaman dan jarak tanam yang cukup antara tanaman dapat membantu meningkatkan sirkulasi udara di kebun, sehingga mengurangi kelembapan yang memungkinkan pertumbuhan jamur.',
        diseaseRecommendation: 'Rekomendasi untuk pengelolaan penyakit ini meliputi penggunaan fungisida yang efektif untuk mengontrol jamur Cercospora, dengan mengikuti petunjuk penggunaan yang disarankan. Praktik pengairan yang baik, seperti menghindari basahan air di daun tanaman dan lebih memilih penyiraman di pagi hari agar daun cepat kering, juga dapat membantu mengurangi risiko infeksi. Pemantauan rutin kondisi tanaman dan tindakan pencegahan yang konsisten adalah kunci untuk mengelola penyakit bird eye spot secara efektif dan menjaga kesehatan tanaman teh.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'D-004',
        diseaseName: 'Brown Blight',
        diseaseImgPreview: '/publics/BrownBlight-preview.png',
        diseaseImgDetail: '/publics/BrownBlight-detail.png',
        diseaseExplanation: 'Penyakit brown blight adalah jenis penyakit tanaman teh yang disebabkan oleh jamur C. scoparium dan G. cingulate. Penyakit ini menyerang tanaman teh pada tahap pembibitan dan dapat menyebabkan kematian stek teh. Gejalanya akan timbul bercak-bercak coklat pada daun induknya, dimulai dari bagian ujung atau dari ketiak daun.',
        diseasePrevention: 'Untuk mencegah penyakit Brown Blight, penting untuk menjaga kebersihan kebun dengan memangkas dan membuang daun atau ranting yang terinfeksi. Melakukan rotasi tanaman dan menghindari penanaman teh secara monokultur juga dapat membantu mengurangi risiko penyebaran penyakit. Selain itu, memastikan drainase yang baik dan mengurangi kelembaban berlebih di kebun teh dapat mencegah pertumbuhan jamur penyebab penyakit ini.',
        diseaseRecommendation: 'Penggunaan fungisida yang tepat dan sesuai anjuran dapat membantu mengendalikan penyakit Brown Blight. Disarankan untuk memilih varietas tanaman teh yang tahan terhadap penyakit ini sebagai langkah pencegahan. Petani juga perlu rutin memantau kondisi tanaman dan segera mengambil tindakan jika gejala penyakit terdeteksi. Pendidikan dan pelatihan bagi petani mengenai manajemen penyakit tanaman penting untuk meningkatkan pengetahuan dan keterampilan dalam mengelola kebun teh secara efektif dan berkelanjutan.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'D-005',
        diseaseName: 'Gray Light',
        diseaseImgPreview: '/publics/GrayLight-preview.png',
        diseaseImgDetail: '/publics/GrayLight-detail.png',
        diseaseExplanation: 'Penyakit gray blight adalah jenis penyakit tanaman teh yang disebabkan oleh jamur Pestalotia longiseta. Gejala pada daun dimulai bercak kecil berwarna coklat yang kemudian melebar. Bercak tersebut memiliki pusat berwarna abu-abu dengan tepi berwarna coklat. Penyakit ini akan muncul pada tanaman yang mengalami kekurangan unsur hara, dipetik secara berlebihan, mengalami kekeringan, terpapar angin kencang, dan terkena sinar matahari yang intens.',
        diseasePrevention: 'Pencegahan penyakit Gray Light pada tanaman teh dapat dilakukan dengan berbagai cara. Pertama, menjaga kebersihan kebun dengan membersihkan daun-daun yang terinfeksi dan memangkas bagian tanaman yang terkena. Kedua, melakukan rotasi tanaman dan menghindari penanaman teh secara monokultur untuk mengurangi penyebaran jamur. Ketiga, menjaga kondisi lingkungan kebun tetap optimal dengan memastikan drainase yang baik dan menghindari kelembaban berlebih yang dapat mendukung pertumbuhan jamur.',
        diseaseRecommendation: 'Untuk mengendalikan penyakit Gray Light, disarankan untuk menggunakan fungisida yang efektif dan sesuai anjuran. Selain itu, memilih varietas tanaman teh yang tahan terhadap penyakit ini dapat menjadi langkah preventif yang baik. Petani juga disarankan untuk rutin memantau kondisi tanaman dan segera mengambil tindakan jika gejala penyakit terdeteksi. Pendidikan dan pelatihan bagi petani mengenai manajemen penyakit tanaman juga penting untuk meningkatkan kesadaran dan pengetahuan dalam mengelola kebun teh secara berkelanjutan.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'D-006',
        diseaseName: 'Red Leaf Spot',
        diseaseImgPreview: '/publics/RedLeafSpot-preview.png',
        diseaseImgDetail: '/publics/RedLeafSpot-detail.png',
        diseaseExplanation: 'Penyakit red leaf spot Penyakit ini dikenal sebagai penyakit akar boria teh. Gejala awalnya ditandai dengan daun yang menguning, kemudian layu, dan kemudian melekat pada batang selama beberapa hari setelah mati dengan daun atmosfer lebat. Infeksi biasanya terjadi di musim hujan atau saat kelembaban udara tinggi, yang mendukung pertumbuhan jamur ini. Penyakit ini dapat mengurangi kemampuan tanaman untuk melakukan fotosintesis dan mengganggu pertumbuhan yang sehat.',
        diseasePrevention: 'Pencegahan penyakit red leaf spot meliputi praktik sanitasi yang baik, seperti membersihkan sisa-sisa tanaman yang terinfeksi dan menjaga kebersihan area sekitar tanaman teh. Penggunaan sistem irigasi yang tidak membasahi daun juga dapat membantu mengurangi kelembaban yang mendukung pertumbuhan jamur. Pemupukan yang seimbang dan pengelolaan nutrisi yang baik juga dapat memperkuat tanaman sehingga lebih tahan terhadap infeksi.',
        diseaseRecommendation: 'Rekomendasi untuk pengendalian penyakit red leaf spot termasuk penggunaan fungisida yang disetujui secara tepat waktu, terutama saat kondisi lingkungan mendukung perkembangan penyakit. Monitoring rutin untuk mendeteksi gejala awal dan tindakan cepat untuk mengisolasi tanaman yang terinfeksi juga penting untuk mencegah penyebaran lebih lanjut. Dengan penerapan tindakan preventif dan responsif, manajemen yang efektif terhadap penyakit ini dapat membantu menjaga kesehatan dan produktivitas tanaman teh.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'D-007',
        diseaseName: 'White Spot',
        diseaseImgPreview: '/publics/WhiteSpot-preview.png',
        diseaseImgDetail: '/publics/WhiteSpot-detail.png',
        diseaseExplanation: 'Penyakit white leaf spot merupakan salah satu jenis penyakit tanaman teh yang disebabkan oleh infeksi jamur Pestalotiopsis theae. Gejala awal terlihat bintik-bintik kecil tembus cahaya, kemudian bercak tersebut akan melebar dengan pusat yang tidak berwarna dan dibatasi oleh cincin berwarna putih. Dalam beberapa kasus, gejala bercak daun putih disebabkan oleh kekurangan unsur hara pada tanaman seperti Calcium (Ca), Nitrogen (N) dan Kalium (K). Penyakit ini terlihat seperti terbakar yang memperlihatkan ciri seperti ada bercak putih, daun menggulung dan permukaan daun menjadi kering',
        diseasePrevention: 'Pencegahan penyakit white spot dapat dilakukan dengan menjaga kebersihan kebun, mengurangi kelembaban berlebih melalui pengelolaan jarak tanam dan sirkulasi udara yang baik, serta melakukan pemangkasan teratur untuk menghilangkan daun yang terinfeksi. Selain itu, penerapan rotasi tanaman dan penggunaan varietas teh yang tahan terhadap infeksi jamur juga dapat membantu. ',
        diseaseRecommendation: 'Untuk penanganan, penggunaan fungisida yang mengandung mancozeb, copper oxychloride, atau chlorothalonil efektif dalam mengendalikan penyakit ini. Biopestisida yang mengandung agen pengendali hayati seperti *Trichoderma* atau *Bacillus subtilis* juga dapat digunakan. Monitoring rutin diperlukan untuk mendeteksi gejala awal infeksi sehingga tindakan segera dapat dilakukan. Peningkatan nutrisi tanaman, terutama kalium dan fosfor, penting untuk meningkatkan ketahanan tanaman terhadap penyakit. Edukasi dan pelatihan kepada petani mengenai pengenalan gejala, pencegahan, dan penanganan penyakit white spot sangat penting agar penanganan di lapangan lebih efektif. Dengan langkah-langkah ini, diharapkan penyakit white spot pada tanaman teh dapat dikendalikan dan dampaknya terhadap produksi teh diminimalkan.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('diseaseDetails', null, {});
  }
};
