"use client";

import React from "react";
import { auth } from "../lib/firebase";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-surface-50 p-8 font-inter">
      <div className="max-w-4xl mx-auto bg-white rounded-radius-16 p-10 shadow-sm border border-surface-200">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-text-primary">Dashboard'a Hoş Geldin!</h1>
            <p className="text-text-secondary mt-2">Sisteme başarıyla giriş yaptın, her şey jilet gibi.</p>
          </div>
          <button 
            onClick={handleLogout}
            className="px-6 h-11 bg-status-danger-500 text-white rounded-radius-8 font-bold hover:bg-status-danger-600 transition-colors"
          >
            Çıkış Yap
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-surface-200 rounded-radius-12 bg-surface-25">
            <h3 className="font-bold mb-2">Profil Bilgileri</h3>
            <p className="text-sm text-text-muted">{auth.currentUser?.email}</p>
          </div>
          <div className="p-6 border border-surface-200 rounded-radius-12 bg-surface-25">
            <h3 className="font-bold mb-2">Sistem Durumu</h3>
            <span className="text-xs font-bold text-status-success-600 bg-status-success-50 px-2 py-1 rounded-full">Aktif</span>
          </div>
        </div>
      </div>
    </div>
  );
}