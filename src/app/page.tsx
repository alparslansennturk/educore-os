"use client";

import React from "react";
import { Lock, Construction } from "lucide-react";
import Link from "next/link";

export default function RootPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-linear-to-br from-base-primary-300 to-base-secondary-300">
      <div className="w-full max-w-[614px] bg-surface-white p-[56px] rounded-radius-16 shadow-2xl flex flex-col items-center text-center transition-all duration-300 2xl:scale-110">
        
        {/* Logo Bölümü */}
        <div className="text-3xl font-bold flex items-center gap-3 mb-8">
          <span className="text-designstudio-primary-500">tasarımatölyesi</span>
          <span className="text-text-primary opacity-10 font-light">|</span>
          <span className="text-text-primary uppercase tracking-[0.2em] text-sm">flex os</span>
        </div>

        <div className="w-20 h-20 bg-designstudio-primary-50/50 rounded-full flex items-center justify-center mb-6">
          <Construction size={40} className="text-designstudio-primary-500 animate-pulse" />
        </div>

        <h1 className="text-2xl font-bold text-text-primary mb-4">
          Çok Yakında Buradayız
        </h1>
        
        <p className="text-text-secondary text-sm leading-relaxed max-w-[400px] mb-10">
          Flex OS eğitim yönetim sistemi şu an geliştirme aşamasında. 
          Alparslan ve ekibi arka tarafta harikalar yaratıyor.
        </p>

        {/* Gizli Giriş Kapısı */}
        <Link 
          href="/login" 
          className="flex items-center gap-2 text-text-placeholder hover:text-designstudio-primary-500 transition-colors text-xs font-semibold uppercase tracking-widest group"
        >
          <Lock size={14} className="group-hover:rotate-12 transition-transform" />
          <span>Personel Girişi</span>
        </Link>

        <div className="absolute bottom-8 text-[11px] text-text-placeholder font-bold opacity-40 uppercase tracking-tighter">
          © 2026 TASARIM ATÖLYESİ - TÜM HAKLARI SAKLIDIR
        </div>
      </div>
    </div>
  );
}