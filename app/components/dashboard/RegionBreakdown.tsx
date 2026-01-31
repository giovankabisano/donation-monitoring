export default function RegionBreakdown() {
    return (
        <div className="bg-white dark:bg-[#1f1e2e] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        Breakdown per Wilayah
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Progress pengumpulan amplop berdasarkan wilayah.
                    </p>
                </div>
                <button className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1 cursor-pointer">
                    See All Report
                    <span className="material-symbols-outlined text-base">
                        arrow_forward
                    </span>
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/50 dark:bg-slate-800/50 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold border-b border-slate-100 dark:border-slate-700">
                            <th className="px-6 py-4">Nama Wilayah</th>
                            <th className="px-6 py-4">Partisipasi KK</th>
                            <th className="px-6 py-4">Jml. Amplop</th>
                            <th className="px-6 py-4 text-right">Total Donasi</th>
                            <th className="px-6 py-4 w-10"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {/* Row 1 */}
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                                        W1
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                                            Wilayah I - St. Petrus
                                        </p>
                                        <p className="text-xs text-slate-500">4 Lingkungan</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3 w-48">
                                    <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                                        <div
                                            className="bg-primary h-2 rounded-full"
                                            style={{ width: "85%" }}
                                        ></div>
                                    </div>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        85%
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="text-sm text-slate-600 dark:text-slate-300">
                                    420 / 495
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <span className="text-sm font-bold text-slate-900 dark:text-white">
                                    Rp 45.250.000
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <button className="text-slate-400 hover:text-primary transition-colors cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                </button>
                            </td>
                        </tr>

                        {/* Row 2 */}
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xs">
                                        W2
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                                            Wilayah II - St. Paulus
                                        </p>
                                        <p className="text-xs text-slate-500">3 Lingkungan</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3 w-48">
                                    <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                                        <div
                                            className="bg-accent-orange h-2 rounded-full"
                                            style={{ width: "45%" }}
                                        ></div>
                                    </div>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        45%
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="text-sm text-slate-600 dark:text-slate-300">
                                    180 / 400
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <span className="text-sm font-bold text-slate-900 dark:text-white">
                                    Rp 18.500.000
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <button className="text-slate-400 hover:text-primary transition-colors cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                </button>
                            </td>
                        </tr>

                        {/* Row 3 */}
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                                        W3
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                                            Wilayah III - St. Yohanes
                                        </p>
                                        <p className="text-xs text-slate-500">5 Lingkungan</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3 w-48">
                                    <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                                        <div
                                            className="bg-primary h-2 rounded-full"
                                            style={{ width: "72%" }}
                                        ></div>
                                    </div>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        72%
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="text-sm text-slate-600 dark:text-slate-300">
                                    360 / 500
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <span className="text-sm font-bold text-slate-900 dark:text-white">
                                    Rp 38.100.000
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <button className="text-slate-400 hover:text-primary transition-colors cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                </button>
                            </td>
                        </tr>

                        {/* Row 4 */}
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold text-xs">
                                        W4
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                                            Wilayah IV - St. Lukas
                                        </p>
                                        <p className="text-xs text-slate-500">3 Lingkungan</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3 w-48">
                                    <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                                        <div
                                            className="bg-primary h-2 rounded-full"
                                            style={{ width: "68%" }}
                                        ></div>
                                    </div>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        68%
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="text-sm text-slate-600 dark:text-slate-300">
                                    280 / 405
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <span className="text-sm font-bold text-slate-900 dark:text-white">
                                    Rp 23.150.000
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <button className="text-slate-400 hover:text-primary transition-colors cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
