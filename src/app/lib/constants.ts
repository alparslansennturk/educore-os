/**
 * FLEX OS - Global & Modular Product Contract
 */

export const COLLECTIONS = {
  USERS: 'users',
  DESIGN_CLASSES: 'design_classes',
  DESIGN_ASSIGNMENTS: 'design_assignments',
  DESIGN_ATTENDANCE: 'design_attendance',
} as const;

export type CollectionName = typeof COLLECTIONS[keyof typeof COLLECTIONS];

export const ROLES = {
  ADMIN: 'admin',
  TRAINER: 'trainer',
  STUDENT: 'student',
} as const;

export type UserRole = typeof ROLES[keyof typeof ROLES];

export const PERMISSIONS = {
  // Uzmanlık Alanları
  GRAPHIC_DESIGN: 'graphic_design',
  WEB_DESIGN: 'web_design',
  VIDEO_EDITING: 'video_editing',
  UI_UX: 'ui_ux',
  
  // Sistem Yetkileri
  MANAGE_USERS: 'manage_users',
  VIEW_SALES: 'view_sales',
} as const;

export type UserPermission = typeof PERMISSIONS[keyof typeof PERMISSIONS];
export type Permission = UserPermission; 

export const TASK_STATUS = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  REVIEWED: 'REVIEWED',
} as const;

export type TaskStatus = typeof TASK_STATUS[keyof typeof TASK_STATUS];

// Sadece senin renk değişkenlerinden beslenecek Mesaj Tipleri
export const MESSAGE_TYPES = {
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESS: 'success',
} as const;

export type MessageType = typeof MESSAGE_TYPES[keyof typeof MESSAGE_TYPES];