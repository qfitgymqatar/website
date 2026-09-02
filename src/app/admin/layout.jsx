"use client";

import AdminLayout from '@/admin/AdminLayout';

export default function AdminRootLayout({ children }) {
  // We use the existing AdminLayout component which handles the sidebar and auth
  return (
    <AdminLayout>
      {children}
    </AdminLayout>
  );
}
