export default function StatsCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Diinput */}
            <div className="bg-white dark:bg-[#1f1e2e] rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-primary">
                        check_circle
                    </span>
                </div>
                <div className="flex flex-col gap-1 relative z-10">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        Diinput (Amplop)
                    </p>
                    <div className="flex items-baseline gap-2">
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                            1,240
                        </h3>
                        <span className="text-xs font-medium text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-0.5 rounded-full">
                            +12%
                        </span>
                    </div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
                        Dari total 1,800 KK terdaftar
                    </p>
                </div>
            </div>

            {/* Card 2: Belum Kembali */}
            <div className="bg-white dark:bg-[#1f1e2e] rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-accent-orange">
                        schedule
                    </span>
                </div>
                <div className="flex flex-col gap-1 relative z-10">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        Belum Kembali
                    </p>
                    <div className="flex items-baseline gap-2">
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                            450
                        </h3>
                        <span className="text-xs font-medium text-amber-600 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400 px-2 py-0.5 rounded-full">
                            25% Remaining
                        </span>
                    </div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
                        Amplop belum diserahkan
                    </p>
                </div>
            </div>

            {/* Card 3: Total Terkumpul */}
            <div className="bg-white dark:bg-[#1f1e2e] rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-emerald-500">
                        payments
                    </span>
                </div>
                <div className="flex flex-col gap-1 relative z-10">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        Total Terkumpul
                    </p>
                    <div className="flex items-baseline gap-2">
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                            Rp 125.000.000
                        </h3>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5 mt-4">
                        <div
                            className="bg-emerald-500 h-1.5 rounded-full"
                            style={{ width: "65%" }}
                        ></div>
                    </div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
                        65% dari target tahun lalu
                    </p>
                </div>
            </div>
        </div>
    );
}
