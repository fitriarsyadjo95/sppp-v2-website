import { PageTemplate } from '@/components/PageTemplate'

export default function VisiMisiPage() {
  return (
    <PageTemplate
      title="Visi & Misi"
      subtitle="Visi, misi dan objektif organisasi SPPP"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Profil', href: '/profil' }, { name: 'Visi & Misi' }]}
    >
      <div className="max-w-none">
        {/* Vision Section */}
        <div className="bg-gradient-to-r from-sppp-blue to-sppp-dark-blue rounded-lg p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">
            VISI
          </h2>
          <blockquote className="text-xl italic text-center leading-relaxed">
&ldquo;PELABUHAN PULAU PINANG SEBAGAI PINTU MASUK MARITIM, HAB LOGISTIK DAN KRUIS BAGI WILAYAH UTARA&rdquo;
          </blockquote>
          <p className="text-lg text-center mt-4 text-white/90">
            (Penang Port as the Maritime Gateway, Logistics Hub and Cruise Hub for the Northern Region)
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white border-2 border-sppp-blue rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-sppp-dark-blue">
            MISI
          </h2>
          <blockquote className="text-xl italic text-center leading-relaxed text-sppp-dark-blue">
            &ldquo;MEMACU DAN MEMPERKASA PERSEKITARAN PELABUHAN YANG PINTAR, MAMPAN DAN BERDAYA SAING&rdquo;
          </blockquote>
          <p className="text-lg text-center mt-4 text-sppp-gray">
            (Drive and Empower a Smart, Sustainable and Competitive Port Environment)
          </p>
        </div>

        {/* Motto Section */}
        <div className="bg-sppp-light-gray rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-sppp-dark-blue">
            MOTO
          </h2>
          <blockquote className="text-xl italic text-center leading-relaxed text-sppp-dark-blue">
            &ldquo;GERBANG UTARA KE PERSADA DUNIA&rdquo;
          </blockquote>
          <p className="text-lg text-center mt-4 text-sppp-gray">
            (Northern Gateway to the World Stage)
          </p>
        </div>

        {/* Strategic Objectives */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-sppp-blue">
            <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4">
              🎯 Objektif Strategik
            </h3>
            <ul className="space-y-3 text-sppp-gray">
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Memposisikan Pelabuhan Pulau Pinang sebagai hab maritim utara
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Membangunkan persekitaran pelabuhan yang pintar dan mampan
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Meningkatkan daya saing dalam industri maritim dan logistik
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Memperkasa peranan sebagai pemacu ekonomi wilayah utara
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-sppp-accent">
            <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4">
              🚢 Fokus Utama
            </h3>
            <ul className="space-y-3 text-sppp-gray">
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Terminal kontena dan kargo pukal
              </li>
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Perkhidmatan terminal kapal persiaran
              </li>
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Perkhidmatan feri dan pengangkutan maritim
              </li>
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Zon Komersil Bebas dan kemudahan logistik
              </li>
            </ul>
          </div>
        </div>

        {/* Vision Explanation */}
        <div className="bg-white rounded-lg shadow-md p-8 mt-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-4">
            Penjelasan Visi & Misi
          </h3>
          <div className="prose prose-lg text-sppp-gray">
            <p>
              Visi SPPP menekankan peranan strategik Pelabuhan Pulau Pinang sebagai pintu masuk maritim, 
              hab logistik dan terminal kapal persiaran untuk wilayah utara. Ini mencerminkan komitmen 
              untuk menjadikan pelabuhan sebagai penghubung utama dalam rantaian bekalan global.
            </p>
            <p>
              Misi pula memfokuskan kepada pembangunan persekitaran pelabuhan yang menggunakan teknologi 
              pintar, mampan dari segi alam sekitar, dan berdaya saing di peringkat antarabangsa. 
              Ini selaras dengan Revolusi Industri 4.0 dan keperluan kelestarian alam sekitar.
            </p>
            <p>
              Moto &ldquo;Gerbang Utara ke Persada Dunia&rdquo; mencerminkan aspirasi untuk menjadikan pelabuhan 
              sebagai pintu masuk utama bagi wilayah utara Malaysia dalam perdagangan antarabangsa.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
