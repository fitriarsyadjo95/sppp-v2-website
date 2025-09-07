import { PageTemplate } from '@/components/PageTemplate'

export default function OrganisasiPage() {
  return (
    <PageTemplate
      title="Organisasi"
      subtitle="Struktur kepimpinan dan pengurusan"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Profil', href: '/profil' }, { name: 'Organisasi' }]}
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-sppp-light-gray rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-sppp-dark-blue mb-4">
            Organisasi
          </h2>
          <p className="text-sppp-gray">
            Struktur kepimpinan dan pengurusan
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Content sections will be added here */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-sppp-dark-blue mb-2">
              Maklumat
            </h3>
            <p className="text-sppp-gray">
              Kandungan akan dikemaskini.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
