import "./Content.css";

const Content = () => {
  return (
    <div className="container">
      <div className="satu">
        <div className="kiri"></div>
        <div className="kanan">
          <h1>Selamat datang para pelajar!</h1>
          <p>
            Di sini, kami percaya bahwa setiap siswa memiliki potensi untuk
            belajar secara efektif. <br /> Kami menyediakan berbagai tips dan
            teknik yang dapat membantu Anda mengelola waktu dengan bijak,serta
            memaksimalkan metode belajar yang sesuai dengan gaya belajar Anda.
            <br /> Mari eksplorasi cara-cara inovatif untuk mencapai tujuan
            akademis Anda dan membuat proses belajar menjadi lebih menyenangkan!
          </p>
        </div>
      </div>
      <div className="dua">
        <div className="right">
          <h1>Cara Belajar yang Efektif</h1>
          <ul>
            <li>
              Tetapkan Tujuan yang Jelas : <br /> Buat tujuan spesifik untuk
              setiap sesi belajar. Ini membantu Anda tetap fokus.
            </li>
            <li>
              Variasikan Metode : <br /> Gunakan berbagai teknik seperti
              membaca, mendengarkan, dan diskusi. Mencoba cara baru dapat
              memperkuat pemahaman.
            </li>
          </ul>
        </div>
        <div className="left"></div>
      </div>

      <div className="tiga">
        <div className="one">
          <h1>Manajemen Waktu</h1>
          <ul>
            <li>
              Buat Jadwal Belajar : <br /> Alokasikan waktu untuk setiap mata
              pelajaran. Pastikan untuk menyertakan waktu untuk istirahat.
            </li>
            <li>
              Gunakan Teknik Pomodoro : <br /> Belajar selama 25 menit, lalu
              istirahat selama 5 menit. Ini meningkatkan fokus dan mencegah
              kelelahan.
            </li>
          </ul>
        </div>
        <div className="two"></div>
      </div>

      <div className="empat">
        <div className="first">
          <h1>Teknik Belajar untuk Siswa</h1>
          <ul>
            <li>
              Catat dengan Efektif : <br /> Gunakan metode seperti Cornell atau
              mind mapping untuk menyusun informasi.
            </li>
            <li>
              Ulangi Materi Secara Berkala : <br /> Tinjau kembali catatan dan
              bahan pelajaran setiap beberapa hari untuk memperkuat ingatan.
            </li>
          </ul>
        </div>
        <div className="second"></div>
      </div>

    <center>
        <div className="box">

      <div className="bawah">
        <h1>Kesimpulan</h1>
        <p>
        Dengan menerapkan tips ini, Anda dapat meningkatkan efektivitas belajar dan manajemen waktu. Cobalah berbagai teknik untuk menemukan yang paling cocok bagi Anda, dan jangan lupa untuk menjaga kesehatan fisik dan mental!
        </p>
      </div>
        </div>
    </center>
    </div>
  );
};

export default Content;
