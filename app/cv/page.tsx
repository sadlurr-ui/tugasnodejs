import "@/app/globals.css";

export default function CVPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-6 text-black font-serif">
      <div className="bg-white px-6 md:px-10 py-10 md:py-12 max-w-[900px] mx-auto text-sm print:text-xs print:leading-tight print:bg-white print:text-black">

        {/* Header */}
        <div className="flex items-center gap-4 md:gap-6 mb-6 border-b border-gray-300 pb-4">
          <img
            src="/images/profile.jpg"
            alt="Foto Profil"
            className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md border border-gray-300"
          />
          <div className="w-px h-20 md:h-24 bg-gray-300"></div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Michelle Sonata</h1>
            <p className="text-base md:text-lg mb-1">Digital Marketing Enthusiast</p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar kiri */}
          <div className="w-full md:w-1/3 space-y-6">

            {/* Kontak */}
            <section>
              <h2 className="font-bold text-base uppercase border-b mb-1 border-gray-300">Contact</h2>
              <div className="text-sm leading-relaxed">
                <p>Surabaya</p>
                <p>+62809-8765-4321</p>
                <p>sonatam@gmail.com</p>
                <p>
                  <a
                    href="https://linkedin.com/in/michelle-123"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/michelle-123
                  </a>
                </p>
              </div>
            </section>

            {/* Pendidikan */}
            <section>
              <h2 className="font-bold text-base uppercase border-b mb-1 border-gray-300">Education</h2>
              <div className="text-sm leading-relaxed">
                <p className="font-semibold">Gadjah Mada University (2014–2018)</p>
                <p>Sastra Rusia – IPK 3.65</p>
                <p className="italic text-xs mt-1">
                  Mahasiswa Berprestasi 2016 – Penghargaan karya ilmiah terbaik tingkat nasional.
                </p>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="font-bold text-base uppercase border-b mb-1 border-gray-300">Skills & Certifications</h2>

              <div className="mt-2 space-y-3 text-sm">
                <div>
                  <p className="font-semibold underline">Hard Skills</p>
                  <ul className="ml-4 list-[circle] space-y-1">
                    <li>Paid Ads: Google, Facebook, Shopee, TikTok</li>
                    <li>Social Media: Instagram, X, TikTok</li>
                    <li>SEO Tools: Ahrefs, SEMrush, Screaming Frog</li>
                    <li>Analytics: Google Analytics, Data Studio</li>
                    <li>Tools: Mailchimp, Photoshop, Illustrator</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold underline">Soft Skills & Certifications</p>
                  <ul className="ml-4 list-[circle] space-y-1">
                    <li>Kepemimpinan, komunikasi, riset, manajemen waktu</li>
                    <li>Google Ads Search Certificate (exp. 12/23)</li>
                    <li>Google Analytics IQ (exp. 01/24)</li>
                    <li>Selling With Empathy – James Gwee</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Kolom kanan */}
          <div className="w-full md:w-2/3 space-y-6">

            {/* Ringkasan */}
            <section>
              <h2 className="font-bold text-base uppercase border-b mb-1 border-gray-300">Summary</h2>
              <p className="leading-relaxed text-sm">
                Seorang Digital Marketing enthusiast dengan pengalaman lebih dari 5 tahun. Pernah bekerja sama dengan beberapa akun Kementerian RI (Kemenperin, Kemendikbud, Kemenparekraf) serta brand luar negeri untuk meningkatkan traffic media sosial mereka. Memiliki sertifikasi Digital Marketer resmi dari Google dan berbagai lembaga course Digital Marketing internasional.
              </p>
            </section>

            {/* Pengalaman */}
            <section>
              <h2 className="font-bold text-base uppercase border-b mb-1 border-gray-300">Experience</h2>

              <div className="mb-3">
                <p className="font-semibold">PT A – Singapore</p>
                <p className="italic text-sm">Assistant Manager (Digital Marketing Team) — Juni 2020–sekarang</p>
                <ul className="ml-4 list-[circle] mt-1 space-y-1">
                  <li>Menginisiasi dan mengelola brand "House of Brand".</li>
                  <li>Meningkatkan traffic dari 80.000 ke 500.000 users/bulan dalam 3 bulan.</li>
                  <li>Supervisi konten kampanye tahunan perusahaan.</li>
                  <li>Peningkatan 150% kunjungan website klien F&B dalam 2 bulan.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">PT B – Jakarta, Indonesia</p>
                <p className="italic text-sm">Brand Activation Officer — Januari 2019–Maret 2020</p>
                <ul className="ml-4 list-[circle] mt-1 space-y-1">
                  <li>Manajemen media sosial: peningkatan dari 100.000 ke 2.000.000+ impresi.</li>
                  <li>Memimpin campaign bertema Sustainability Business.</li>
                  <li>Supervisi konten magang: 50+ konten/bulan untuk klien UMKM F&B.</li>
                </ul>
              </div>
            </section>
          </div>
        </div>

        {/* Footer cetak */}
        <div className="mt-10 text-center text-gray-400 text-xs print:hidden">
          Dicetak dari versi digital
        </div>
      </div>

      {/* Tombol kembali */}
      <div className="max-w-[900px] mx-auto mt-6 print:hidden text-left">
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
        >
          ← Kembali ke Halaman Utama
        </a>
      </div>
    </div>
  );
}
