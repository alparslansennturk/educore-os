// src/app/lib/messages.ts

import { MessageType } from './constants';

export interface FlexMessage {
  text: string;
  type: MessageType;
}

/**
 * FLEX OS - Merkezi Mesaj Sözlüğü
 * Buradaki key'ler (sol taraftakiler) Firebase'den veya sistemden gelen kodlardır.
 * Değerler ise senin belirlediğin samimi metinler ve renk tipleridir.
 */
export const FLEX_MESSAGES: Record<string, FlexMessage> = {
  // --- AUTH HATALARI (Kırmızı - error) ---
  'auth/invalid-email': {
    text: 'Alparslan, yazdığın e-posta formatı biraz garip geldi, kontrol eder misin?',
    type: 'error'
  },
  'auth/user-not-found': {
    text: 'Böyle bir kullanıcı bulamadık. Kayıt olduğuna emin misin?',
    type: 'error'
  },
  'auth/wrong-password': {
    text: 'Şifreni yanlış girdin kanka, bir daha dene istersen.',
    type: 'error'
  },
  'auth/too-many-requests': {
    text: 'Çok fazla deneme yaptın, sistem kendini korumaya aldı. Biraz bekle istersen.',
    type: 'error'
  },

  // --- UYARILAR (Turuncu - warning) ---
  'auth/weak-password': {
    text: 'Bu şifre biraz zayıf kalmış, daha sağlam bir şey mi seçsek?',
    type: 'warning'
  },
  'system/unauthorized': {
    text: 'Buraya girmeye yetkin yok gibi görünüyor, Admin ile bir konuşalım.',
    type: 'warning'
  },

  // --- BİLGİLER (Mavi - info) ---
  'auth/network-request-failed': {
    text: 'İnternet bağlantında bir sorun var, Flex OS dünyaya bağlanamıyor.',
    type: 'info'
  },

  // --- BAŞARI (Yeşil - success) ---
  'auth/login-success': {
    text: 'Harika! Giriş başarılı. Flex OS seni bekliyordu, hoş geldin!',
    type: 'success'
  }
};

/**
 * Yardımcı Fonksiyon: Gelen koda göre mesajı döner.
 * Eğer kod sözlükte yoksa genel bir hata mesajı verir.
 */
export const getFlexMessage = (code: string): FlexMessage => {
  return FLEX_MESSAGES[code] || { 
    text: 'Beklenmedik bir durum oluştu, ama halledeceğiz!', 
    type: 'error' 
  };
};