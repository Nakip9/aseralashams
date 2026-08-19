"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Category, Product, Project } from "./types";
import { DEFAULT_CATEGORIES, DEFAULT_PRODUCTS, DEFAULT_PROJECTS } from "./seed-data";

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";

interface StoreState {
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;

  categories: Category[];
  products: Product[];
  projects: Project[];

  addCategory: (cat: Omit<Category, "id" | "order">) => void;
  updateCategory: (id: string, cat: Partial<Category>) => void;
  deleteCategory: (id: string) => void;

  addProduct: (prod: Omit<Product, "id" | "order">) => void;
  updateProduct: (id: string, prod: Partial<Product>) => void;
  deleteProduct: (id: string) => void;

  addProject: (proj: Omit<Project, "id" | "order">) => void;
  updateProject: (id: string, proj: Partial<Project>) => void;
  deleteProject: (id: string) => void;

  resetToDefaults: () => void;
}

function genId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      isAdmin: false,
      login: (password) => {
        if (password === ADMIN_PASSWORD) {
          set({ isAdmin: true });
          return true;
        }
        return false;
      },
      logout: () => set({ isAdmin: false }),

      categories: DEFAULT_CATEGORIES,
      products: DEFAULT_PRODUCTS,
      projects: DEFAULT_PROJECTS,

      addCategory: (cat) =>
        set((s) => ({
          categories: [...s.categories, { ...cat, id: genId("cat"), order: s.categories.length + 1 }],
        })),
      updateCategory: (id, cat) =>
        set((s) => ({
          categories: s.categories.map((c) => (c.id === id ? { ...c, ...cat } : c)),
        })),
      deleteCategory: (id) =>
        set((s) => ({
          categories: s.categories.filter((c) => c.id !== id),
          products: s.products.filter((p) => p.categoryId !== id),
        })),

      addProduct: (prod) =>
        set((s) => ({
          products: [...s.products, { ...prod, id: genId("prod"), order: s.products.length + 1 }],
        })),
      updateProduct: (id, prod) =>
        set((s) => ({
          products: s.products.map((p) => (p.id === id ? { ...p, ...prod } : p)),
        })),
      deleteProduct: (id) =>
        set((s) => ({
          products: s.products.filter((p) => p.id !== id),
        })),

      addProject: (proj) =>
        set((s) => ({
          projects: [...s.projects, { ...proj, id: genId("proj"), order: s.projects.length + 1 }],
        })),
      updateProject: (id, proj) =>
        set((s) => ({
          projects: s.projects.map((p) => (p.id === id ? { ...p, ...proj } : p)),
        })),
      deleteProject: (id) =>
        set((s) => ({
          projects: s.projects.filter((p) => p.id !== id),
        })),

      resetToDefaults: () =>
        set({
          categories: DEFAULT_CATEGORIES,
          products: DEFAULT_PRODUCTS,
          projects: DEFAULT_PROJECTS,
        }),
    }),
    {
      name: "asr-al-shams-store",
      version: 6,
      partialize: (s) => ({
        isAdmin: s.isAdmin,
        categories: s.categories,
        products: s.products,
        projects: s.projects,
      }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        if (!state.categories || state.categories.length === 0) state.categories = DEFAULT_CATEGORIES;
        if (!state.products || state.products.length === 0) state.products = DEFAULT_PRODUCTS;
        if (!state.projects || state.projects.length === 0) state.projects = DEFAULT_PROJECTS;
      },
      migrate: (persistedState: any, version: number) => {
        if (version < 6) {
          return {
            ...persistedState,
            categories: DEFAULT_CATEGORIES,
            products: DEFAULT_PRODUCTS,
            projects: DEFAULT_PROJECTS,
          };
        }
        return persistedState;
      },
    }
  )
);
