"use client";

import { useSidebar } from "../../components/SidebarProvider";

export default function ExportPage() {
    const { toggleSidebar } = useSidebar();

    return (
        <main className="flex-1 overflow-y-auto h-screen w-full">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex items-start gap-4 mb-6">
                    <button
                        onClick={toggleSidebar}
                        className="md:hidden mt-1 p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <a className="hover:text-primary transition-colors" href="#">
                            Home
                        </a>
                        <span className="material-symbols-outlined text-[14px]">
                            chevron_right
                        </span>
                        <a className="hover:text-primary transition-colors" href="#">
                            Admin
                        </a>
                        <span className="material-symbols-outlined text-[14px]">
                            chevron_right
                        </span>
                        <span className="font-medium text-slate-900 dark:text-white">
                            Export
                        </span>
                    </div>
                </div>

                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Export Lenten Envelope Data
                    </h1>
                    <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
                        Generate reports for donation analysis and accounting purposes.
                    </p>
                </div>

                {/* Main Layout Grid */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Left Column: Filters & Actions */}
                    <div className="flex flex-col gap-6 lg:col-span-1">
                        {/* Filter Card */}
                        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 dark:bg-slate-800 dark:ring-slate-700">
                            <div className="mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">
                                    filter_list
                                </span>
                                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                                    Filter Criteria
                                </h2>
                            </div>
                            <form className="flex flex-col gap-4">
                                {/* Date Range */}
                                <div>
                                    <label
                                        className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                                        htmlFor="date-range"
                                    >
                                        Date Range
                                    </label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <span className="material-symbols-outlined text-slate-400 text-[18px]">
                                                calendar_today
                                            </span>
                                        </div>
                                        <input
                                            className="block w-full rounded-lg border-slate-300 py-2.5 pl-10 text-sm focus:border-primary focus:ring-primary dark:bg-slate-900 dark:border-slate-700 dark:text-white"
                                            id="date-range"
                                            name="date-range"
                                            placeholder="Select date range"
                                            type="text"
                                            defaultValue="Feb 22, 2023 - Apr 08, 2023"
                                        />
                                    </div>
                                </div>
                                {/* Wilayah Dropdown */}
                                <div>
                                    <label
                                        className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                                        htmlFor="wilayah"
                                    >
                                        Wilayah (Zone)
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="block w-full appearance-none rounded-lg border-slate-300 py-2.5 pl-3 pr-10 text-sm focus:border-primary focus:ring-primary dark:bg-slate-900 dark:border-slate-700 dark:text-white"
                                            id="wilayah"
                                            name="wilayah"
                                        >
                                            <option>All Wilayahs</option>
                                            <option>Wilayah 1 - North</option>
                                            <option>Wilayah 2 - East</option>
                                            <option>Wilayah 3 - South</option>
                                            <option>Wilayah 4 - West</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                                            <span className="material-symbols-outlined text-[18px]">
                                                expand_more
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="mt-2 w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all cursor-pointer"
                                    type="button"
                                >
                                    Apply Filters
                                </button>
                            </form>
                        </div>

                        {/* Export Actions Card */}
                        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 dark:bg-slate-800 dark:ring-slate-700">
                            <div className="mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">
                                    download
                                </span>
                                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                                    Export Actions
                                </h2>
                            </div>
                            <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
                                Download the filtered dataset. Please protect donor privacy when
                                sharing files.
                            </p>
                            <div className="flex flex-col gap-3">
                                <button className="group flex w-full items-center justify-between rounded-lg border border-slate-200 bg-white p-4 text-left hover:border-primary hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800/50 transition-all cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                                            <span className="material-symbols-outlined">
                                                table_view
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900 dark:text-white">
                                                Export to CSV
                                            </p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                Best for database imports
                                            </p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">
                                        arrow_forward
                                    </span>
                                </button>
                                <button className="group flex w-full items-center justify-between rounded-lg border border-slate-200 bg-white p-4 text-left hover:border-primary hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800/50 transition-all cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                            <span className="material-symbols-outlined">
                                                description
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900 dark:text-white">
                                                Export to Excel
                                            </p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                Formatted for reporting
                                            </p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">
                                        arrow_forward
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Data Preview */}
                    <div className="lg:col-span-2">
                        <div className="flex h-full flex-col rounded-xl bg-white shadow-sm ring-1 ring-slate-900/5 dark:bg-slate-800 dark:ring-slate-700">
                            <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-700">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                                            Data Preview
                                        </h2>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">
                                            Showing first 10 rows matching criteria
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                                            Total: 428 records
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 overflow-x-auto">
                                <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                                    <thead className="bg-slate-50 dark:bg-slate-900/50">
                                        <tr>
                                            <th
                                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400"
                                                scope="col"
                                            >
                                                Date
                                            </th>
                                            <th
                                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400"
                                                scope="col"
                                            >
                                                Env #
                                            </th>
                                            <th
                                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400"
                                                scope="col"
                                            >
                                                Donor Name
                                            </th>
                                            <th
                                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400"
                                                scope="col"
                                            >
                                                Wilayah
                                            </th>
                                            <th
                                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400"
                                                scope="col"
                                            >
                                                Amount
                                            </th>
                                            <th
                                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400"
                                                scope="col"
                                            >
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-700 dark:bg-slate-800">
                                        {/* Row 1 */}
                                        <tr>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                                                Mar 12, 2023
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                L-042
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-900 dark:text-white">
                                                Sarah Jenkins
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                                                Wilayah 1
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                $50.00
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm">
                                                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                                    Processed
                                                </span>
                                            </td>
                                        </tr>
                                        {/* Row 2 */}
                                        <tr>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                                                Mar 12, 2023
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                L-089
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-900 dark:text-white">
                                                Robert Chen
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                                                Wilayah 2
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                $120.00
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm">
                                                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                                    Processed
                                                </span>
                                            </td>
                                        </tr>
                                        {/* Row 3 */}
                                        <tr>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                                                Mar 11, 2023
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                L-112
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-900 dark:text-white">
                                                Maria Rodriguez
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                                                Wilayah 1
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                $75.00
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm">
                                                <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                                                    Pending
                                                </span>
                                            </td>
                                        </tr>
                                        {/* Row 4 */}
                                        <tr>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                                                Mar 11, 2023
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                L-015
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-900 dark:text-white">
                                                James Wilson
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                                                Wilayah 3
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                $200.00
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm">
                                                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                                    Processed
                                                </span>
                                            </td>
                                        </tr>
                                        {/* Row 5 */}
                                        <tr>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                                                Mar 10, 2023
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                L-221
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-900 dark:text-white">
                                                Anita Patel
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                                                Wilayah 2
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                $50.00
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm">
                                                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                                    Processed
                                                </span>
                                            </td>
                                        </tr>
                                        {/* Row 6 */}
                                        <tr>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                                                Mar 09, 2023
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                L-156
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-900 dark:text-white">
                                                Thomas Anderson
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                                                Wilayah 4
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                $100.00
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm">
                                                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                                    Processed
                                                </span>
                                            </td>
                                        </tr>
                                        {/* Row 7 */}
                                        <tr>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                                                Mar 08, 2023
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                L-099
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-900 dark:text-white">
                                                Emma Thompson
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                                                Wilayah 1
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                $25.00
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm">
                                                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                                    Processed
                                                </span>
                                            </td>
                                        </tr>
                                        {/* Row 8 */}
                                        <tr>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                                                Mar 08, 2023
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                L-301
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-900 dark:text-white">
                                                David Kim
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                                                Wilayah 3
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                $150.00
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm">
                                                <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-400">
                                                    Flagged
                                                </span>
                                            </td>
                                        </tr>
                                        {/* Row 9 */}
                                        <tr>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                                                Mar 07, 2023
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                L-005
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-900 dark:text-white">
                                                Lisa Wong
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                                                Wilayah 2
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                $60.00
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm">
                                                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                                    Processed
                                                </span>
                                            </td>
                                        </tr>
                                        {/* Row 10 */}
                                        <tr>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                                                Mar 07, 2023
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                L-188
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-900 dark:text-white">
                                                Michael O&apos;Connor
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                                                Wilayah 1
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                $100.00
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm">
                                                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                                    Processed
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="border-t border-slate-200 bg-slate-50 px-6 py-3 dark:border-slate-700 dark:bg-slate-900/50 rounded-b-xl">
                                <p className="text-xs text-slate-500 dark:text-slate-400 text-center italic">
                                    Only displaying the first 10 rows for preview. Full data
                                    will be included in the export.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
