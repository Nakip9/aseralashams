"use client";

import { useState } from "react";
import {
  X, Lock, LayoutDashboard, FolderTree, Package, Briefcase,
  Plus, Edit2, Trash2, Save, RotateCcw, LogOut, Home,
} from "lucide-react";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import type { Category, Product, Project } from "@/lib/types";

const ICONS = ["Sun", "Zap", "BatteryCharging", "Cable", "Lightbulb", "Wrench", "Factory", "Home", "Award", "Users", "Handshake", "Headphones"];
const ACCENTS = [
  { label: "Green → Blue", value: "from-emerald-500 to-brand-blue" },
  { label: "Blue → Indigo", value: "from-brand-blue to-indigo-600" },
  { label: "Emerald → Teal", value: "from-emerald-400 to-teal-600" },
  { label: "Cyan → Blue", value: "from-cyan-500 to-brand-blue" },
  { label: "Orange → Red", value: "from-orange-500 to-red-600" },
  { label: "Slate", value: "from-slate-500 to-slate-700" },
];

export function AdminPage() {
  const isAdmin = useStore((s) => s.isAdmin);
  const logout = useStore((s) => s.logout);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-30 bg-gradient-to-r from-brand-green to-brand-blue text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white shadow-lg ring-1 ring-white/30 overflow-hidden flex items-center justify-center">
              <img src="/brand/logo.png" alt="Asr Al-Shams" className="w-full h-full object-cover" width={40} height={40} />
            </div>
            <div>
              <h1 className="font-heading font-bold text-base sm:text-lg leading-tight">لوحة التحكم</h1>
              <p className="text-[10px] text-white/70 font-mono tracking-wider uppercase">Asr Al-Shams Admin</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isAdmin && (
              <button onClick={() => { logout(); toast.success("تم تسجيل الخروج"); }} className="inline-flex items-center gap-1.5 rounded-lg bg-white/15 hover:bg-white/25 px-3 py-2 text-xs sm:text-sm font-medium transition-colors">
                <LogOut className="w-3.5 h-3.5" /><span className="hidden sm:inline">خروج</span>
              </button>
            )}
            <Link href="/" className="inline-flex items-center gap-1.5 rounded-lg bg-white/15 hover:bg-white/25 px-3 py-2 text-xs sm:text-sm font-medium transition-colors">
              <Home className="w-3.5 h-3.5" /><span className="hidden sm:inline">الموقع</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {!isAdmin ? <LoginScreen /> : <Dashboard />}
      </main>
    </div>
  );
}

function LoginScreen() {
  const login = useStore((s) => s.login);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) toast.success("مرحباً بك!");
    else setError(true);
  };
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <form onSubmit={submit} className="w-full max-w-sm space-y-4">
        <div className="text-center mb-6">
          <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-green to-brand-blue items-center justify-center mb-4 shadow-lg shadow-brand-green/30">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900">تسجيل الدخول</h3>
          <p className="text-sm text-slate-500 mt-1">أدخل كلمة المرور للوصول إلى لوحة التحكم</p>
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700 block mb-1.5">كلمة المرور</label>
          <Input type="password" value={password} onChange={(e) => { setPassword(e.target.value); setError(false); }} autoFocus className={`bg-white ${error ? "border-red-500" : "border-slate-300"}`} placeholder="••••••••" />
          {error && <p className="text-xs text-red-500 mt-1">كلمة المرور غير صحيحة</p>}
          <p className="text-xs text-slate-400 mt-1.5">كلمة المرور الافتراضية: admin123</p>
        </div>
        <Button type="submit" className="w-full h-11 bg-gradient-to-r from-brand-green to-brand-blue hover:opacity-90 text-white font-semibold">دخول</Button>
      </form>
    </div>
  );
}

function Dashboard() {
  const [tab, setTab] = useState<"dashboard" | "categories" | "products" | "projects">("dashboard");
  const categories = useStore((s) => s.categories);
  const products = useStore((s) => s.products);
  const projects = useStore((s) => s.projects);
  const tabs = [
    { id: "dashboard" as const, label: "الرئيسية", icon: LayoutDashboard },
    { id: "categories" as const, label: "الأقسام", icon: FolderTree },
    { id: "products" as const, label: "المنتجات", icon: Package },
    { id: "projects" as const, label: "المشاريع", icon: Briefcase },
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <aside className="lg:w-60 flex-shrink-0">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-2 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <button key={t.id} onClick={() => setTab(t.id)} className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 lg:w-full ${tab === t.id ? "bg-gradient-to-r from-brand-green to-brand-blue text-white shadow-md" : "text-slate-600 hover:bg-slate-100"}`}>
                <Icon className="w-4 h-4 flex-shrink-0" />{t.label}
              </button>
            );
          })}
        </div>
      </aside>
      <div className="flex-1 min-w-0">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6">
          {tab === "dashboard" && <DashboardHome />}
          {tab === "categories" && <CategoriesManager />}
          {tab === "products" && <ProductsManager />}
          {tab === "projects" && <ProjectsManager />}
        </div>
      </div>
    </div>
  );
}

function DashboardHome() {
  const categories = useStore((s) => s.categories);
  const products = useStore((s) => s.products);
  const projects = useStore((s) => s.projects);
  const resetToDefaults = useStore((s) => s.resetToDefaults);
  const stats = [
    { label: "الأقسام", count: categories.length, icon: FolderTree, color: "from-emerald-500 to-brand-green" },
    { label: "المنتجات", count: products.length, icon: Package, color: "from-brand-blue to-indigo-500" },
    { label: "المشاريع", count: projects.length, icon: Briefcase, color: "from-brand-green to-emerald-600" },
  ];
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-heading font-bold text-2xl text-slate-900 mb-1">مرحباً بك في لوحة التحكم</h3>
        <p className="text-slate-500 text-sm">من هنا يمكنك إدارة الأقسام والمنتجات والمشاريع بشكل كامل.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="rounded-2xl p-5 bg-gradient-to-br from-slate-50 to-white border border-slate-200">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3 shadow-md`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-heading font-extrabold text-slate-900">{s.count}</div>
              <div className="text-sm text-slate-500 mt-0.5">{s.label}</div>
            </div>
          );
        })}
      </div>
      <div className="pt-4 border-t border-slate-200">
        <button onClick={() => { if (confirm("هل أنت متأكد؟ سيتم استعادة البيانات الافتراضية.")) { resetToDefaults(); toast.success("تم إعادة التعيين"); } }} className="inline-flex items-center gap-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 text-sm font-medium transition-colors">
          <RotateCcw className="w-4 h-4" />إعادة تعيين البيانات
        </button>
      </div>
    </div>
  );
}

// ─── Categories ─────────────────────────────────────────
function CategoriesManager() {
  const categories = useStore((s) => s.categories);
  const [editing, setEditing] = useState<Category | null>(null);
  const [showForm, setShowForm] = useState(false);
  if (showForm || editing) return <CategoryForm category={editing} onClose={() => { setEditing(null); setShowForm(false); }} />;
  return (
    <div>
      <ManagerHeader title="الأقسام" count={categories.length} onAdd={() => setShowForm(true)} />
      {categories.length === 0 ? <EmptyState message="لا توجد أقسام" /> : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[...categories].sort((a, b) => a.order - b.order).map((cat) => <CategoryCard key={cat.id} category={cat} onEdit={() => setEditing(cat)} />)}
        </div>
      )}
    </div>
  );
}

function CategoryCard({ category, onEdit }: { category: Category; onEdit: () => void }) {
  const deleteCategory = useStore((s) => s.deleteCategory);
  return (
    <div className="rounded-xl p-4 flex items-start gap-3 bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center flex-shrink-0">
        <FolderTree className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-heading font-bold text-slate-900 truncate">{category.name}</h4>
        <p className="text-xs text-slate-500 line-clamp-2 mt-0.5">{category.description}</p>
      </div>
      <div className="flex gap-1 flex-shrink-0">
        <button onClick={onEdit} className="w-8 h-8 rounded-lg bg-white hover:bg-brand-green hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-colors"><Edit2 className="w-3.5 h-3.5" /></button>
        <button onClick={() => { if (confirm("هل أنت متأكد من الحذف؟")) { deleteCategory(category.id); toast.success("تم الحذف"); } }} className="w-8 h-8 rounded-lg bg-white hover:bg-red-500 hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
      </div>
    </div>
  );
}

function CategoryForm({ category, onClose }: { category: Category | null; onClose: () => void }) {
  const addCategory = useStore((s) => s.addCategory);
  const updateCategory = useStore((s) => s.updateCategory);
  const [name, setName] = useState(category?.name || "");
  const [description, setDescription] = useState(category?.description || "");
  const [icon, setIcon] = useState(category?.icon || "Sun");
  const [image, setImage] = useState(category?.image || "");
  const save = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { name, description, icon, image };
    if (category) { updateCategory(category.id, data); toast.success("تم التحديث"); }
    else { addCategory(data); toast.success("تمت الإضافة"); }
    onClose();
  };
  return (
    <form onSubmit={save} className="max-w-2xl space-y-4">
      <FormHeader title={category ? "تعديل" : "إضافة جديد"} onClose={onClose} />
      <FormField label="الاسم"><Input value={name} onChange={(e) => setName(e.target.value)} required dir="rtl" className="bg-white border-slate-300" /></FormField>
      <FormField label="الوصف"><Textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows={2} dir="rtl" className="bg-white border-slate-300 resize-none" /></FormField>
      <FormField label="الأيقونة"><select value={icon} onChange={(e) => setIcon(e.target.value)} className="w-full h-10 rounded-md bg-white border border-slate-300 px-3 text-sm">{ICONS.map((ic) => <option key={ic} value={ic}>{ic}</option>)}</select></FormField>
      <ImageURLField value={image} onChange={setImage} />
      <FormActions onCancel={onClose} />
    </form>
  );
}

// ─── Products ───────────────────────────────────────────
function ProductsManager() {
  const products = useStore((s) => s.products);
  const categories = useStore((s) => s.categories);
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  if (showForm || editing) return <ProductForm product={editing} onClose={() => { setEditing(null); setShowForm(false); }} />;
  return (
    <div>
      <ManagerHeader title="المنتجات" count={products.length} onAdd={() => setShowForm(true)} />
      {products.length === 0 ? <EmptyState message="لا توجد منتجات" /> : (
        <div className="space-y-2">
          {[...products].sort((a, b) => a.order - b.order).map((prod) => <ProductRow key={prod.id} product={prod} categoryName={categories.find((c) => c.id === prod.categoryId)?.name || "—"} onEdit={() => setEditing(prod)} />)}
        </div>
      )}
    </div>
  );
}

function ProductRow({ product, categoryName, onEdit }: { product: Product; categoryName: string; onEdit: () => void }) {
  const deleteProduct = useStore((s) => s.deleteProduct);
  return (
    <div className="rounded-xl p-3 flex items-center gap-3 bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
      {product.image ? (
        <img src={product.image} alt="" className="w-12 h-12 rounded-lg object-contain bg-white p-1 flex-shrink-0" />
      ) : (
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.accent} flex items-center justify-center flex-shrink-0`}><Package className="w-6 h-6 text-white" /></div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-heading font-bold text-slate-900 truncate">{product.name}</h4>
          <span className="text-[10px] text-brand-green-dark bg-brand-green/10 px-1.5 py-0.5 rounded font-mono">{categoryName}</span>
        </div>
        <p className="text-xs text-slate-500 truncate">{product.brand} · {product.features.length} مميزات</p>
      </div>
      <div className="flex gap-1 flex-shrink-0">
        <button onClick={onEdit} className="w-8 h-8 rounded-lg bg-white hover:bg-brand-green hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-colors"><Edit2 className="w-3.5 h-3.5" /></button>
        <button onClick={() => { if (confirm("هل أنت متأكد من الحذف؟")) { deleteProduct(product.id); toast.success("تم الحذف"); } }} className="w-8 h-8 rounded-lg bg-white hover:bg-red-500 hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
      </div>
    </div>
  );
}

function ProductForm({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const addProduct = useStore((s) => s.addProduct);
  const updateProduct = useStore((s) => s.updateProduct);
  const categories = useStore((s) => s.categories);
  const [name, setName] = useState(product?.name || "");
  const [brand, setBrand] = useState(product?.brand || "");
  const [description, setDescription] = useState(product?.description || "");
  const [categoryId, setCategoryId] = useState(product?.categoryId || categories[0]?.id || "");
  const [image, setImage] = useState(product?.image || "");
  const [accent, setAccent] = useState(product?.accent || ACCENTS[0].value);
  const [features, setFeatures] = useState<string[]>(product?.features || [""]);
  const save = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { name, brand, description, categoryId, image, accent, features: features.filter((f) => f.trim()) };
    if (product) { updateProduct(product.id, data); toast.success("تم التحديث"); }
    else { addProduct(data); toast.success("تمت الإضافة"); }
    onClose();
  };
  return (
    <form onSubmit={save} className="max-w-2xl space-y-4">
      <FormHeader title={product ? "تعديل" : "إضافة جديد"} onClose={onClose} />
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField label="الاسم"><Input value={name} onChange={(e) => setName(e.target.value)} required dir="rtl" className="bg-white border-slate-300" /></FormField>
        <FormField label="العلامة التجارية"><Input value={brand} onChange={(e) => setBrand(e.target.value)} required className="bg-white border-slate-300" /></FormField>
      </div>
      <FormField label="القسم"><select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className="w-full h-10 rounded-md bg-white border border-slate-300 px-3 text-sm">{categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></FormField>
      <FormField label="الوصف"><Textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows={2} dir="rtl" className="bg-white border-slate-300 resize-none" /></FormField>
      <FormField label="المميزات">
        <div className="space-y-2">
          {features.map((f, i) => (
            <div key={i} className="flex gap-2">
              <Input value={f} onChange={(e) => setFeatures((prev) => prev.map((p, j) => j === i ? e.target.value : p))} placeholder="ميزة" dir="rtl" className="bg-white border-slate-300 text-sm" />
              <button type="button" onClick={() => setFeatures((prev) => prev.filter((_, j) => j !== i))} className="w-9 h-9 rounded-lg bg-white hover:bg-red-500 hover:text-white text-slate-500 border border-slate-200 flex items-center justify-center transition-colors flex-shrink-0"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          ))}
          <button type="button" onClick={() => setFeatures((prev) => [...prev, ""])} className="inline-flex items-center gap-1.5 text-sm text-brand-green-dark hover:text-brand-green font-medium"><Plus className="w-4 h-4" />إضافة ميزة</button>
        </div>
      </FormField>
      <FormField label="لون التدرج">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {ACCENTS.map((a) => (
            <button key={a.value} type="button" onClick={() => setAccent(a.value)} className={`flex items-center gap-2 p-2 rounded-lg border-2 transition-all ${accent === a.value ? "border-brand-green shadow-md" : "border-slate-200 hover:border-slate-300"}`}>
              <div className={`w-8 h-8 rounded bg-gradient-to-br ${a.value} flex-shrink-0`} /><span className="text-xs text-slate-600 truncate">{a.label}</span>
            </button>
          ))}
        </div>
      </FormField>
      <ImageURLField value={image} onChange={setImage} />
      <FormActions onCancel={onClose} />
    </form>
  );
}

// ─── Projects ───────────────────────────────────────────
function ProjectsManager() {
  const projects = useStore((s) => s.projects);
  const [editing, setEditing] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState(false);
  if (showForm || editing) return <ProjectForm project={editing} onClose={() => { setEditing(null); setShowForm(false); }} />;
  return (
    <div>
      <ManagerHeader title="المشاريع" count={projects.length} onAdd={() => setShowForm(true)} />
      {projects.length === 0 ? <EmptyState message="لا توجد مشاريع" /> : (
        <div className="space-y-2">
          {[...projects].sort((a, b) => a.order - b.order).map((proj) => <ProjectRow key={proj.id} project={proj} onEdit={() => setEditing(proj)} />)}
        </div>
      )}
    </div>
  );
}

function ProjectRow({ project, onEdit }: { project: Project; onEdit: () => void }) {
  const deleteProject = useStore((s) => s.deleteProject);
  return (
    <div className="rounded-xl p-3 flex items-center gap-3 bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
      {project.image ? (
        <img src={project.image} alt="" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
      ) : (
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.accent} flex items-center justify-center flex-shrink-0`}><Briefcase className="w-6 h-6 text-white" /></div>
      )}
      <div className="flex-1 min-w-0">
        <h4 className="font-heading font-bold text-slate-900 truncate">{project.title}</h4>
        <p className="text-xs text-slate-500 truncate"><span className="ltr-nums inline-block">{project.capacity}</span> {project.unit} · {project.location}</p>
      </div>
      <div className="flex gap-1 flex-shrink-0">
        <button onClick={onEdit} className="w-8 h-8 rounded-lg bg-white hover:bg-brand-green hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-colors"><Edit2 className="w-3.5 h-3.5" /></button>
        <button onClick={() => { if (confirm("هل أنت متأكد من الحذف؟")) { deleteProject(project.id); toast.success("تم الحذف"); } }} className="w-8 h-8 rounded-lg bg-white hover:bg-red-500 hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
      </div>
    </div>
  );
}

function ProjectForm({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const addProject = useStore((s) => s.addProject);
  const updateProject = useStore((s) => s.updateProject);
  const [title, setTitle] = useState(project?.title || "");
  const [type, setType] = useState(project?.type || "");
  const [capacity, setCapacity] = useState(project?.capacity || "");
  const [unit, setUnit] = useState(project?.unit || "كيلوواط");
  const [location, setLocation] = useState(project?.location || "");
  const [description, setDescription] = useState(project?.description || "");
  const [date, setDate] = useState(project?.date || "");
  const [image, setImage] = useState(project?.image || "");
  const [accent, setAccent] = useState(project?.accent || ACCENTS[0].value);
  const save = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { title, type, capacity, unit, location, description, date, image, accent };
    if (project) { updateProject(project.id, data); toast.success("تم التحديث"); }
    else { addProject(data); toast.success("تمت الإضافة"); }
    onClose();
  };
  return (
    <form onSubmit={save} className="max-w-2xl space-y-4">
      <FormHeader title={project ? "تعديل" : "إضافة جديد"} onClose={onClose} />
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField label="العنوان"><Input value={title} onChange={(e) => setTitle(e.target.value)} required dir="rtl" className="bg-white border-slate-300" /></FormField>
        <FormField label="النوع"><Input value={type} onChange={(e) => setType(e.target.value)} required dir="rtl" className="bg-white border-slate-300" /></FormField>
      </div>
      <FormField label="الوصف"><Textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows={2} dir="rtl" className="bg-white border-slate-300 resize-none" /></FormField>
      <div className="grid sm:grid-cols-3 gap-4">
        <FormField label="السعة"><Input value={capacity} onChange={(e) => setCapacity(e.target.value)} required className="bg-white border-slate-300 ltr-nums" dir="ltr" /></FormField>
        <FormField label="الوحدة"><Input value={unit} onChange={(e) => setUnit(e.target.value)} required dir="rtl" className="bg-white border-slate-300" /></FormField>
        <FormField label="الموقع"><Input value={location} onChange={(e) => setLocation(e.target.value)} required dir="rtl" className="bg-white border-slate-300" /></FormField>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField label="التاريخ"><Input value={date} onChange={(e) => setDate(e.target.value)} placeholder="2024" className="bg-white border-slate-300 ltr-nums" dir="ltr" /></FormField>
      </div>
      <FormField label="لون التدرج">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {ACCENTS.map((a) => (
            <button key={a.value} type="button" onClick={() => setAccent(a.value)} className={`flex items-center gap-2 p-2 rounded-lg border-2 transition-all ${accent === a.value ? "border-brand-green shadow-md" : "border-slate-200 hover:border-slate-300"}`}>
              <div className={`w-8 h-8 rounded bg-gradient-to-br ${a.value} flex-shrink-0`} /><span className="text-xs text-slate-600 truncate">{a.label}</span>
            </button>
          ))}
        </div>
      </FormField>
      <ImageURLField value={image} onChange={setImage} />
      <FormActions onCancel={onClose} />
    </form>
  );
}

// ─── Shared ─────────────────────────────────────────────
function ManagerHeader({ title, count, onAdd }: { title: string; count: number; onAdd: () => void }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2"><h3 className="font-heading font-bold text-xl text-slate-900">{title}</h3><span className="text-sm text-slate-400 font-mono">({count})</span></div>
      <button onClick={onAdd} className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-brand-green to-brand-blue px-3 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"><Plus className="w-4 h-4" />إضافة جديد</button>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return <div className="text-center py-12 text-slate-400"><Package className="w-12 h-12 mx-auto mb-3 opacity-30" /><p className="text-sm">{message}</p></div>;
}

function FormHeader({ title, onClose }: { title: string; onClose: () => void }) {
  return <div className="flex items-center justify-between mb-2"><h3 className="font-heading font-bold text-xl text-slate-900">{title}</h3><button onClick={onClose} className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"><X className="w-4 h-4 text-slate-600" /></button></div>;
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="space-y-1.5"><label className="text-sm font-medium text-slate-700 block">{label}</label>{children}</div>;
}

function ImageURLField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <FormField label="رابط الصورة">
      <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder="https://example.com/image.jpg" dir="ltr" className="bg-white border-slate-300" />
      {value && (
        <div className="mt-2">
          <p className="text-xs text-slate-400 mb-1">معاينة الصورة</p>
          <div className="relative w-full h-32 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
            <img src={value} alt="preview" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          </div>
        </div>
      )}
    </FormField>
  );
}

function FormActions({ onCancel }: { onCancel: () => void }) {
  return (
    <div className="flex gap-2 pt-2">
      <Button type="submit" className="flex-1 h-11 bg-gradient-to-r from-brand-green to-brand-blue hover:opacity-90 text-white font-semibold"><Save className="w-4 h-4 mr-2" />حفظ</Button>
      <Button type="button" onClick={onCancel} variant="outline" className="h-11 px-6">إلغاء</Button>
    </div>
  );
}
