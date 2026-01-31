"use client";

import { useState, useRef, useMemo } from "react";
import EnvelopeCard from "../../components/input-data/EnvelopeCard";
import { useSidebar } from "../../components/SidebarProvider";

interface EnvelopeData {
    [key: string]: number; // denomination key -> count
}

export default function InputData() {
    const { toggleSidebar } = useSidebar();
    const [searchQuery, setSearchQuery] = useState("KK-2026-001");
    // ... rest of state
    const [showResults, setShowResults] = useState(false);

    // State for all 7 envelopes
    const [envelopes, setEnvelopes] = useState<{ [id: number]: EnvelopeData }>({
        1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}
    });

    const searchInputRef = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
        setShowResults(true);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const handleClose = () => {
        setShowResults(false);
        setSearchQuery("");
        setEnvelopes({ 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {} });
        setTimeout(() => {
            searchInputRef.current?.focus();
        }, 100);
    };

    const handleEnvelopeChange = (id: number, denomination: string, value: number) => {
        setEnvelopes(prev => ({
            ...prev,
            [id]: {
                ...prev[id],
                [denomination]: value
            }
        }));
    };

    const totalAll = useMemo(() => {
        let grandTotal = 0;
        Object.values(envelopes).forEach(env => {
            Object.entries(env).forEach(([denom, count]) => {
                grandTotal += parseInt(denom) * count;
            });
        });
        return grandTotal;
    }, [envelopes]);

    const filledCount = useMemo(() => {
        return Object.values(envelopes).filter(env => {
            // Check if envelope has any non-zero values
            return Object.values(env).some(val => val > 0);
        }).length;
    }, [envelopes]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(val);
    };

    const envelopeConfig = [
        { id: 1, label: "Minggu 1", color: "bg-purple-900", icon: "calendar_today" },
        { id: 2, label: "Minggu 2", color: "bg-purple-600", icon: "calendar_today" },
        { id: 3, label: "Minggu 3 (Laetare)", color: "bg-rose-500", icon: "favorite" },
        { id: 4, label: "Minggu 4", color: "bg-purple-400", icon: "calendar_today" },
        { id: 5, label: "Minggu Palma", color: "bg-red-600", icon: "eco" },
        { id: 6, label: "Jumat Agung", color: "bg-red-900", icon: "church" },
        { id: 7, label: "Minggu Paskah", color: "bg-yellow-500", icon: "wb_sunny" }
    ];

    return (
        <div className="flex-1 flex flex-col h-full relative overflow-hidden w-full">
            {/* Header */}
            <header className="flex-shrink-0 sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#1e1c3a]/80 backdrop-blur-md">
                <div className="px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleSidebar}
                            className="md:hidden flex items-center justify-center p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        <div className="flex flex-col">
                            <h1 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">Input Amplop Prapaskah</h1>
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Periode 2026</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div
                            className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center ring-2 ring-slate-100 dark:ring-slate-800 cursor-pointer"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbd4skSIpSHv3mTXexZwOxf2Fhqe3igv2xP8IdbbEQth7IQF9dmfUbA0ZAbj38uUYd6b7veC6RNVVZmqpho8sRRMTtLXNT3s5_i_F21TU09_zbhsf9Fdra9zwNz7FEcb3uTlm0zP5d35MHq6lJudm26cp2iz7uXWqDCP9ZVTExtdi5z5iJnmMBEdi1dM6jxVZlZX7qxlfpUt1y6DYjzz4uyYXQQhVVr_EGeBdm2EZEU_n-XO2kJ9Evbl3soKCXTsdDVjnlOjfGoLkk')" }}
                        ></div>
                    </div>
                </div>
            </header>

            <main className="flex-1 w-full p-4 md:p-6 lg:p-8 overflow-y-auto bg-background-light dark:bg-background-dark pb-32">
                <div className="max-w-[1600px] mx-auto">
                    <div className="max-w-3xl mx-auto mb-8">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">qr_code_scanner</span>
                            </div>
                            <input
                                ref={searchInputRef}
                                className="w-full pl-12 pr-4 py-3 text-base bg-white dark:bg-[#1e1c3a] border border-slate-300 dark:border-slate-700 rounded-xl shadow-sm focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 dark:text-white"
                                placeholder="Masukkan ID KK atau Scan Barcode"
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <div className="absolute inset-y-0 right-2 flex items-center gap-2">
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-slate-600 transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-[20px]">close</span>
                                    </button>
                                )}
                                <button
                                    onClick={handleSearch}
                                    className="px-4 py-1.5 text-sm font-medium bg-primary text-white rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
                                >
                                    Cari
                                </button>
                            </div>
                        </div>
                    </div>

                    {!showResults ? (
                        <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                            <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-5xl opacity-50">search</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">Belum ada data ditampilkan</h3>
                            <p className="text-center max-w-md text-slate-500">Silakan scan barcode pada amplop atau masukkan ID Kartu Keluarga untuk memulai input data amplop.</p>
                        </div>
                    ) : (
                        <div className="animate-fade-in-up">
                            {/* Result Section */}
                            <div className="mb-8 bg-white dark:bg-[#1e1c3a] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
                                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Budi Santoso</h2>
                                            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-mono border border-slate-200 dark:border-slate-700">KK-2026-001</span>
                                        </div>
                                        <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                                            <div className="flex items-center gap-1.5">
                                                <span className="material-symbols-outlined text-[18px] text-slate-400">home_work</span>
                                                <span>Lingkungan: <strong className="text-slate-800 dark:text-slate-200">St. Petrus</strong></span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <span className="material-symbols-outlined text-[18px] text-slate-400">map</span>
                                                <span>Wilayah: <strong className="text-slate-800 dark:text-slate-200">Wilayah A</strong></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 w-full lg:w-auto">
                                        <button className="flex-1 lg:flex-none justify-center px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[18px]">history</span>
                                            Riwayat
                                        </button>
                                        <button
                                            onClick={handleClose}
                                            className="flex-1 lg:flex-none justify-center px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 dark:bg-red-900/10 dark:text-red-400 dark:hover:bg-red-900/20 border border-transparent hover:border-red-200 dark:hover:border-red-800/30 rounded-lg transition-colors flex items-center gap-2"
                                        >
                                            <span className="material-symbols-outlined text-[18px]">close</span>
                                            Reset
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Envelope Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {envelopeConfig.map((env) => (
                                    <EnvelopeCard
                                        key={env.id}
                                        {...env}
                                        values={envelopes[env.id]}
                                        onChange={handleEnvelopeChange}
                                    />
                                ))}

                                {/* Note Card */}
                                <div className="bg-slate-100 dark:bg-slate-800 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center p-6 text-center text-slate-500 h-full min-h-[320px]">
                                    <span className="material-symbols-outlined text-4xl mb-2 opacity-50">info</span>
                                    <h3 className="font-medium text-lg mb-1">Catatan Petugas</h3>
                                    <p className="text-sm max-w-[200px] mb-4">Pastikan data yang diinput sesuai dengan fisik amplop yang diterima.</p>
                                    <button className="text-sm text-primary font-medium hover:underline">Lihat Panduan</button>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[120px]">

                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Footer Actions */}
            <footer
                className={`absolute bottom-0 right-0 left-0 bg-white dark:bg-[#1e1c3a] border-t border-slate-200 dark:border-slate-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 transform transition-transform duration-300 ease-in-out ${showResults ? 'translate-y-0' : 'translate-y-full'}`}
            >
                <div className="max-w-[1600px] mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 w-full md:w-auto">
                        <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">TOTAL KESELURUHAN</div>
                        <div className="text-3xl font-bold text-slate-900 dark:text-white font-mono flex items-baseline gap-1">
                            <span className="text-lg text-slate-400 font-sans font-normal">Rp</span>
                            {formatCurrency(totalAll).replace('Rp', '').trim()}
                        </div>
                        <div className="hidden md:block h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <span className={`material-symbols-outlined text-[18px] ${filledCount > 0 ? 'text-green-500' : ''}`}>check_circle</span>
                            <span>{filledCount}/7 Amplop Terisi</span>
                        </div>
                    </div>
                    <div className="flex w-full md:w-auto gap-3">
                        <button className="hidden md:flex flex-1 md:flex-initial items-center justify-center px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            Simpan Draf
                        </button>
                        <button
                            className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-white font-bold shadow-lg hover:bg-primary/90 hover:shadow-primary/30 transition-all transform active:scale-95"
                            onClick={handleClose}
                        >
                            <span className="material-symbols-outlined">save</span>
                            SIMPAN SEMUA (7 AMPLOP)
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}
