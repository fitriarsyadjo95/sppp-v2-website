import { PageTemplate } from '@/components/PageTemplate'
import { ExternalPortals } from '@/components/ExternalPortals'

export default function MaklumBalasPage() {
  return (
    <PageTemplate
      title="Maklum Balas"
      subtitle="Hantar maklum balas dan cadangan"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Hubungi', href: '/hubungi' }, { name: 'Maklum Balas' }]}
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-sppp-light-gray rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-sppp-dark-blue mb-4">
            Maklum Balas
          </h2>
          <p className="text-sppp-gray">
            Kami mengalu-alukan maklum balas, cadangan dan komen daripada orang ramai untuk membantu kami memberikan perkhidmatan yang lebih baik.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ExternalPortals category="feedback" title="Sistem Maklum Balas Online" />
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-sppp-dark-blue mb-4">
              Kategori Maklum Balas
            </h3>
            <ul className="space-y-2 text-sppp-gray">
              <li>• Aduan perkhidmatan</li>
              <li>• Pujian</li>
              <li>• Cadangan penambahbaikan</li>
              <li>• Pertanyaan am</li>
              <li>• Laporan masalah teknikal</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}