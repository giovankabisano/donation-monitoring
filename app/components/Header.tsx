"use client";

import { useSidebar } from "./SidebarProvider";

export default function Header() {
    const { toggleSidebar } = useSidebar();

    return (
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="md:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>
                <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                        Dashboard Overview
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                        Monitoring Amplop Prapaskah Tahun 2026
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-white dark:bg-[#1f1e2e] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm cursor-pointer">
                    <span className="material-symbols-outlined text-[20px]">
                        calendar_today
                    </span>
                    <span>Feb - Apr 2026</span>
                </button>
                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm shadow-primary/30 flex items-center gap-2 cursor-pointer">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    Input Amplop Baru
                </button>
            </div>
        </header>
    );
}
