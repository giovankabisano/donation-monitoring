import Header from "../../components/Header";
import StatsCards from "../../components/dashboard/StatsCards";
import RegionBreakdown from "../../components/dashboard/RegionBreakdown";

export default function Dashboard() {
    return (
        <main className="flex-1 p-8 overflow-y-auto h-screen w-full">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                <Header />

                {/* Filters */}
                <div className="bg-white dark:bg-[#1f1e2e] p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col lg:flex-row gap-4 lg:items-end">
                    <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-slate-400">
                                qr_code_scanner
                            </span>
                        </div>
                        <input
                            className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 dark:border-slate-600 rounded-lg leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-shadow"
                            placeholder="Search by ID KK or Barcode..."
                            type="text"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 lg:w-1/2">
                        <div className="relative flex-1">
                            <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 ml-1">
                                Wilayah
                            </label>
                            <select className="block w-full pl-3 pr-10 py-2.5 text-base border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                                <option>Semua Wilayah</option>
                                <option>Wilayah I - St. Petrus</option>
                                <option>Wilayah II - St. Paulus</option>
                                <option>Wilayah III - St. Yohanes</option>
                            </select>
                        </div>
                        <div className="relative flex-1">
                            <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 ml-1">
                                Lingkungan
                            </label>
                            <select className="block w-full pl-3 pr-10 py-2.5 text-base border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                                <option>Semua Lingkungan</option>
                                <option>Lingkungan 1</option>
                                <option>Lingkungan 2</option>
                            </select>
                        </div>
                    </div>
                </div>

                <StatsCards />

                <RegionBreakdown />

                <footer className="mt-auto py-4 text-center text-xs text-slate-400">
                    <p>
                        © 2026 APP Gereja Dashboard v1.2.0 • Build with ❤️ for the
                        community
                    </p>
                </footer>
            </div>
        </main>
    );
}
