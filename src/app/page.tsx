"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "./lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Loader2 } from "lucide-react";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Firebase'in oturum durumunu dinliyoruz
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Eğer kullanıcı tanınıyorsa (Beni Hatırla sayesinde)
        router.push("/dashboard");
      } else {
        // Eğer kullanıcı yoksa
        router.push("/login");
      }
    });

    // Sayfa kapandığında dinleyiciyi temizle
    return () => unsubscribe();
  }, [router]);

  // Firebase cevap verene kadar görünecek olan "Ferah Bekleme" ekranı
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-surface-50 font-inter">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="animate-spin text-base-primary-500" size={40} />
        <p className="text-sm font-bold tracking-widest text-text-muted uppercase italic">
          Atölye Hazırlanıyor...
        </p>
      </div>
    </div>
  );
}