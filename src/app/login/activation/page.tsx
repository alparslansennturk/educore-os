"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Loader2, ShieldCheck, Check, ChevronRight } from "lucide-react";
import { getFlexMessage } from "../../lib/messages";

export default function ActivatePage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // GÖRSEL TEST: Şu an her şeyi canlı görmen için açık (Normalde false olacak)
  const [isSuccess, setIsSuccess] = useState(true); 
  const [error, setError] = useState("parola kriterleri karşılanmıyor");
  const [shouldShake, setShouldShake] = useState(false);

  const handleActivate = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setShouldShake(false);
    setIsLoading(true);

    // 1 saniyelik "Kontrol Ediliyor..."Loader sekansı
    setTimeout(() => {
      setIsLoading(false);
      // Hata simülasyonu ve titreme
      setError(getFlexMessage('auth/password-criteria-failed').text);
      setShouldShake(true);
      setTimeout(() => setShouldShake(false), 500);
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-linear-to-br from-base-primary-300 to-base-secondary-300 font-inter antialiased" style={{ color: 'var(--color-text-primary)' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fast-shake {
          0% { transform: translateX(0); }
          20% { transform: translateX(-12px); }
          40% { transform: translateX(12px); }
          60% { transform: translateX(-12px); }
          80% { transform: translateX(12px); }
          100% { transform: translateX(0); }
        }
        .animate-fast-shake { animation: fast-shake 0.15s ease-in-out; }
      ` }} />

      <div className={`w-full max-w-[614px] bg-surface-white p-[56px] rounded-radius-16 shadow-2xl flex flex-col relative transition-all duration-300 origin-center 2xl:scale-110 ${shouldShake ? "animate-fast-shake" : ""}`}>
        
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--color-text-primary)' }}>Hesabı Aktifleştir</h2>
          <div className="w-12 h-12 bg-designstudio-primary-50 rounded-full flex items-center justify-center shadow-inner" style={{ color: 'var(--color-designstudio-primary-500)' }}>
            <ShieldCheck size={24} />
          </div>
        </div>

        <form onSubmit={handleActivate} className="w-full flex flex-col font-inter">
          <div className="flex flex-col gap-6">
            
            {/* Yeni Parola Alanı */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end h-5">
                <label className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>Yeni Parola</label>
                {error && (
                  <span className="ui-helper-sm animate-in fade-in duration-200 font-semibold" style={{ color: 'var(--color-status-danger-500)' }}>
                    {error}
                  </span>
                )}
              </div>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full h-12 pl-4 pr-12 border rounded-radius-8 text-sm outline-none transition-all duration-200"
                  style={{ 
                    borderColor: error ? 'var(--color-status-danger-500)' : 'var(--color-surface-200)',
                    backgroundColor: error ? 'var(--color-status-danger-50)' : 'var(--color-surface-50)',
                    color: error ? 'var(--color-status-danger-900)' : 'var(--color-text-primary)'
                  }}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer transition-colors" style={{ color: error ? 'var(--color-status-danger-500)' : 'var(--color-text-placeholder)' }}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              
              {/* KRİTER METNİ: 12.5px base -> 13.7px scaled. Renk: #9BA9B1. */}
              <p 
                className="text-[12.5px] leading-normal text-right italic font-medium opacity-100 tracking-tight"
                style={{ color: 'var(--color-text-muted)' }} 
              >
                Parola en az 8 karakter olmalı, en az 1 büyük harf ve 1 rakam içermelidir.
              </p>
            </div>

            {/* Parola Tekrar Alanı */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>Yeni Parola (Tekrar)</label>
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full h-12 px-4 border rounded-radius-8 text-sm outline-none transition-all duration-200 font-inter"
                style={{ 
                  borderColor: error ? 'var(--color-status-danger-500)' : 'var(--color-surface-200)',
                  backgroundColor: error ? 'var(--color-status-danger-50)' : 'var(--color-surface-50)',
                  color: error ? 'var(--color-status-danger-900)' : 'var(--color-text-primary)'
                }}
              />
            </div>

            {/* Buton ve Başarı Mesajı */}
            <div className="flex flex-col items-start pt-2">
              <button 
                type="submit" 
                disabled={isLoading} 
                className="w-full h-12 rounded-radius-8 font-bold text-base flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg active:scale-[0.98] disabled:opacity-80"
                style={{ 
                  backgroundColor: 'var(--color-designstudio-primary-500)', 
                  color: 'var(--color-text-inverse)',
                  boxShadow: '0 10px 15px -3px var(--color-designstudio-primary-500-20)' 
                }}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="animate-spin" size={20} />
                    <span className="ui-helper-sm tracking-wide">Kontrol Ediliyor...</span>
                  </div>
                ) : (
                  <>
                    <span>Parolayı Oluştur</span>
                    <ChevronRight size={18} />
                  </>
                )}
              </button>

              {/* SUCCESS: Tam 24px (mt-6) aşağıda, 14px semibold, sade Check */}
              {isSuccess && (
                <div className="mt-6 flex items-center gap-2.5 animate-in fade-in slide-in-from-top-2 font-inter" style={{ color: 'var(--color-status-success-500)' }}>
                  <Check size={18} strokeWidth={3} className="shrink-0" />
                  <span className="text-[14px] font-semibold tracking-tight leading-none">
                    {getFlexMessage('auth/activation-success').text}
                  </span>
                </div>
              )}
            </div>
          </div>
        </form>

        {/* Footer: Sadece v2.0 */}
        <div className="absolute right-[56px] bottom-[16px] text-[11px] font-bold opacity-40 uppercase tracking-[0.2em] italic" style={{ color: 'var(--color-text-placeholder)' }}>v2.0</div>
      </div>
    </div>
  );
}