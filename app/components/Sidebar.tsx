"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "./SidebarProvider";

export default function Sidebar() {
    const pathname = usePathname();
    const { isOpen, closeSidebar } = useSidebar();

    const isActive = (path: string) => pathname === path;

    const linkBaseClass = "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors";
    const activeClass = "bg-primary/10 text-primary font-semibold";
    const inactiveClass = "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white";

    return (
        <aside className={`w-64 bg-white dark:bg-[#1f1e2e] border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between shrink-0 h-screen fixed left-0 top-0 z-50 transition-transform duration-300 md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="p-6 flex flex-col gap-8 h-full relative">
                {/* Close button for mobile */}
                <button
                    onClick={closeSidebar}
                    className="md:hidden absolute top-4 right-4 p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                {/* Logo and App Name */}
                <div className="flex items-center gap-3">
                    <div className="bg-primary/10 rounded-lg p-2 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined !text-3xl">church</span>
                    </div>
                    <div>
                        <h1 className="text-slate-900 dark:text-white font-bold text-lg leading-tight">
                            APP Gereja
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">
                            Admin Panel
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-2 flex-1">
                    <Link
                        href="/dashboard"
                        className={`${linkBaseClass} ${isActive("/dashboard") ? activeClass : inactiveClass}`}
                        onClick={() => closeSidebar()}
                    >
                        <span
                            className="material-symbols-outlined"
                            style={isActive("/dashboard") ? { fontVariationSettings: "'FILL' 1" } : {}}
                        >
                            dashboard
                        </span>
                        <span>Dashboard</span>
                    </Link>
                    <Link
                        href="/input-data"
                        className={`${linkBaseClass} ${isActive("/input-data") ? activeClass : inactiveClass}`}
                        onClick={() => closeSidebar()}
                    >
                        <span
                            className="material-symbols-outlined"
                            style={isActive("/input-data") ? { fontVariationSettings: "'FILL' 1" } : {}}
                        >
                            input
                        </span>
                        <span>Input Baru</span>
                    </Link>
                    {/* <a
                        href="#"
                        className={`${linkBaseClass} ${inactiveClass}`}
                    >
                        <span className="material-symbols-outlined">description</span>
                        <span>Rekap Data</span>
                    </a> */}
                    <Link
                        href="/export"
                        className={`${linkBaseClass} ${isActive("/export") ? activeClass : inactiveClass}`}
                        onClick={() => closeSidebar()}
                    >
                        <span
                            className="material-symbols-outlined"
                            style={isActive("/export") ? { fontVariationSettings: "'FILL' 1" } : {}}
                        >
                            download
                        </span>
                        <span>Export Data</span>
                    </Link>

                    <div className="mt-8">
                        <p className="px-4 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                            Settings
                        </p>
                        <a
                            href="#"
                            className={`${linkBaseClass} ${inactiveClass}`}
                        >
                            <span className="material-symbols-outlined">manage_accounts</span>
                            <span>User Management</span>
                        </a>
                    </div>
                </nav>

                {/* User Profile */}
                <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-auto">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                        <div
                            className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center"
                            role="img"
                            aria-label="Admin user profile picture"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwlk4kBpGdem8trdQ4mJgxjwlwT-u8671-KC52yn_7D0sdGGChmsU3tGtnb8GLHwrvMFoiWpGCFsJcDrzz2Ft2-l00RWuRH5BS1rIkqpv3a6jzP28zwteBNiU2e_1aoHZkMhB5Bfc0zbPZ0JE2S1IWStI0M8h8WGS_18EBAHUapxCKtfZLM6WnFG0tVHt7h2WW64nZd6fZzSAmZzZ9_I3g5hnuCLeXE0nTgcSzAA54ETWF-YvbqFZsfnY5GOkVQMvmA01WN5lU18_O")',
                            }}
                        ></div>
                        <div className="flex flex-col">
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                Romo Budi
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Kepala Paroki
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
