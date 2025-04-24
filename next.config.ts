import type { NextConfig } from "next";
import { useRef } from "react";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
export default function CVPage() {
  const cvRef = useRef();

  return (
    <div className= "bg-gray-200 min-h-screen py-10 px-4 flex flex-col items-center text-black font-serif" >
    {/* Tombol Kembali */ }
    < div className = "mb-4 space-x-4 print:hidden" >
      <a
                    href="/"
  className = "inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
    >
                    ← Kembali
    </a>
    </div>

  {/* Mockup Kertas A4 */ }
  <div
                ref={ cvRef }
  className = "bg-white w-[794px] min-h-[1123px] shadow-xl p-10 text-sm print:w-auto print:min-h-0 print:shadow-none"
    >
    {/* Header */ }
    < div className = "flex items-center gap-4 mb-6 border-b pb-4" >
      <img
                        src="/images/profile.jpg"
  alt = "Foto Profil"
  className = "w-24 h-24 object-cover rounded-md border" />
    <div className="w-px h-24 bg-gray-300" > </div>
      < div >
      <h1 className="text-3xl font-bold" > Michelle Sonata </h1>
        < p className = "text-lg mb-1" > Digital Marketing Enthusiast </p>
          </div>
          </div>

          < div className = "flex flex-col md:flex-row gap-8" >
            {/* Sidebar Kiri */ }
            < div className = "w-full md:w-1/3 space-y-6" >
              <section>
              <h2 className="font-bold text-base uppercase border-b border-gray-300 mb-1" > Contact </h2>
                < p > Surabaya </p>
                < p > +62809 - 8765 - 4321 </p>
                < p > sonatam@gmail.com</p>
                  < p >
                  <a href="https://linkedin.com/in/michelle-123" className = "text-blue-600 underline" >
                    linkedin.com /in/michelle-123
                    </a>
                    </p>
                    </section>

                    < section >
                    <h2 className="font-bold text-base uppercase border-b border-gray-300 mb-1" > Education </h2>
                      < p className = "font-semibold" > Gadjah Mada University(2014–2018) </p>
                        < p > Sastra Rusia – IPK 3.65 </p>
                          < p className = "italic text-xs mt-1" >
                            Mahasiswa Berprestasi 2016 – Penghargaan karya ilmiah terbaik tingkat nasional.
                            </p>
                              </section>

                              < section >
                              <h2 className="font-bold text-base uppercase border-b border-gray-300 mb-1" > Skills & Certifications </h2>
                                < p className = "font-semibold underline" > Hard Skills </p>
                                  < ul className = "list-disc list-inside" >
                                    <li>Paid Ads: Google, Facebook, Shopee, TikTok </li>
                                      < li > Social Media: Instagram, X, TikTok </li>
                                        < li > SEO Tools: Ahrefs, SEMrush, Screaming Frog </li>
                                          < li > Analytics: Google Analytics, Data Studio </li>
                                            < li > Tools: Mailchimp, Photoshop, Illustrator </li>
                                              </ul>
                                              < p className = "font-semibold underline mt-2" > Soft Skills & Certifications </p>
                                                < ul className = "list-disc list-inside" >
                                                  <li>Kepemimpinan, komunikasi, riset, manajemen waktu </li>
                                                    < li > Google Ads Search Certificate(exp. 12 / 23) </li>
                                                      < li > Google Analytics IQ(exp. 01 / 24) </li>
                                                        < li > Selling With Empathy – James Gwee </li>
                                                          </ul>
                                                          </section>
                                                          </div>

  {/* Konten Kanan */ }
  <div className="w-full md:w-2/3 space-y-6" >
    <section>
    <h2 className="font-bold text-base uppercase border-b border-gray-300 mb-1" > Summary </h2>
      <p>
                                Seorang Digital Marketing enthusiast dengan pengalaman lebih dari 5 tahun.Pernah bekerja sama dengan beberapa akun Kementerian RI(Kemenperin, Kemendikbud, Kemenparekraf) serta brand luar negeri untuk meningkatkan traffic media sosial mereka.
                            </p>
    </section>

    < section >
    <h2 className="font-bold text-base uppercase border-b border-gray-300 mb-1" > Experience </h2>
      < div className = "mb-3" >
        <p className="font-semibold" > PT A – Singapore </p>
          < p className = "italic text-sm" > Assistant Manager — Juni 2020–sekarang </p>
            < ul className = "list-disc list-inside mt-1" >
              <li>Menginisiasi brand "House of Brand".</li>
                < li > Meningkatkan traffic dari 80.000 ke 500.000 users / bulan dalam 3 bulan.</li>
                  < li > Supervisi kampanye tahunan perusahaan.</li>
                    </ul>
                    </div>
                    < div >
                    <p className="font-semibold" > PT B – Jakarta </p>
                      < p className = "italic text-sm" > Brand Activation Officer — Jan 2019–Mar 2020 </p>
                        < ul className = "list-disc list-inside mt-1" >
                          <li>Manajemen media sosial: 100.000 → 2.000.000 + impresi.</li>
                            < li > Memimpin campaign Sustainability Business.</li>
                              < li > Supervisi konten magang: 50 + konten / bulan.</li>
                                </ul>
                                </div>
                                </section>
                                </div>
                                </div>

  {/* Footer */ }
  <div className="mt-10 text-center text-gray-400 text-xs print:hidden" >
    Dicetak dari versi digital
      </div>
      </div>
      </div>
    );
}
