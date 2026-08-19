"use client";

import dynamic from "next/dynamic";

const AdminPage = dynamic(
  () => import("@/components/admin/AdminPanel").then((m) => m.AdminPage),
  { ssr: false, loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full border-4 border-brand-green/20 border-t-brand-green animate-spin" />
        <p className="text-sm text-slate-500 font-mono">Loading admin...</p>
      </div>
    </div>
  )}
);

export default function AdminRoute() {
  return <AdminPage />;
}
