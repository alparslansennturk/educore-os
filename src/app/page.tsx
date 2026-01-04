export default function DesignSystemTest() {
  return (
    <div className="p-space-40 flex flex-col gap-space-32 bg-surface-50 min-h-screen">
      
      {/* Display Test */}
      <section className="flex flex-col gap-space-12">
        <h1 className="display-md text-base-primary-600">Display XL</h1>
        <h2 className="display-md text-text-primary">Display Medium Title</h2>
      </section>

      {/* Headings Test */}
      <section className="flex flex-col gap-space-8 border-t border-surface-200 pt-space-24">
        <h1 className="h1 text-text-primary">Heading 1 - Dashboard Ana Başlık</h1>
        <h3 className="h3 text-text-secondary">Heading 3 - Alt Bölüm Başlığı</h3>
      </section>

      {/* Body ve UI Elements Test */}
      <section className="flex flex-col gap-space-16 bg-surface-white p-space-24 radius-radius-16 shadow-sm">
        <p className="body-lg text-text-primary">
          Bu bir <strong>Body Large</strong> metnidir. Sistemdeki Inter fontu ve line-height ayarları burada devreye giriyor.
        </p>
        
        <div className="flex gap-space-12 items-center">
          <span className="ui-label-default bg-base-primary-50 text-base-primary-700 px-space-12 py-space-4 radius-radius-8">
            Yeni Etiket
          </span>
          <a href="#" className="ui-link-md text-base-primary-600 hover:underline">
            Daha fazla bilgi...
          </a>
        </div>

        <p className="ui-helper-sm text-status-danger-500">
          * Bu bir hata veya yardımcı mesajdır (Helper Small).
        </p>
      </section>

      {/* Design Studio Renk Testi */}
      <section className="p-space-24 bg-designstudio-primary-500 radius-radius-12">
        <h4 className="h4 text-surface-white">Design Studio Modu Aktif</h4>
        <p className="body-sm text-surface-white opacity-90">
          Vurgu rengi ve beyaz metin uyumu testi.
        </p>
      </section>

    </div>
  );
}