import { PageTemplate } from '@/components/PageTemplate'
import { ExternalPortals } from '@/components/ExternalPortals'

export default function KajianKepuasanPelangganPage() {
  return (
    <PageTemplate
      title="Kajian Kepuasan Pelanggan"
      subtitle="Borang kajian kepuasan pelanggan"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Hubungi', href: '/hubungi' }, { name: 'Kajian Kepuasan' }]}
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-sppp-light-gray rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-sppp-dark-blue mb-4">
            Kajian Kepuasan Pelanggan
          </h2>
          <p className="text-sppp-gray">
            Maklum balas anda amat penting untuk membantu kami meningkatkan kualiti perkhidmatan yang diberikan.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ExternalPortals category="survey" title="Borang Kajian Kepuasan Online" />
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-sppp-dark-blue mb-4">
              Aspek Penilaian
            </h3>
            <ul className="space-y-2 text-sppp-gray">
              <li>• Kualiti perkhidmatan staf</li>
              <li>• Masa menunggu</li>
              <li>• Kemudahan fizikal</li>
              <li>• Proses permohonan</li>
              <li>• Kepuasan keseluruhan</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}