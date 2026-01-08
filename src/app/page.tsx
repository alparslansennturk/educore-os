"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Alparslan, bu dosya bizim trafik polisimiz.
 * Siteye giren herkesi direkt o ferah login ekranına paketliyoruz.
 */
export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // replace kullanarak geri tuşuna basıldığında bu boş sayfaya dönülmesini engelliyoruz.
    router.replace("/login");
  }, [router]);

  // Ekranda hiçbir şey render etmiyoruz ki o saçma görüntü oluşmasın.
  return null;
}