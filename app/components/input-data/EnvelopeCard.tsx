"use client";

import { useMemo } from "react";

interface EnvelopeCardProps {
    id: number;
    label: string;
    color: string;
    icon: string;
    values: { [key: string]: number };
    onChange: (id: number, denomination: string, value: number) => void;
}

const DENOMINATIONS = [
    { label: "Rp 100rb", value: 100000, key: "100000" },
    { label: "Rp 50rb", value: 50000, key: "50000" },
    { label: "Rp 20rb", value: 20000, key: "20000" },
    { label: "Rp 10rb", value: 10000, key: "10000" },
    { label: "Rp 5rb", value: 5000, key: "5000" },
    { label: "Rp 2rb", value: 2000, key: "2000" },
    { label: "Rp 1rb", value: 1000, key: "1000" },
    { label: "Rp 500", value: 500, key: "500" },
];

export default function EnvelopeCard({
    id,
    label,
    color,
    icon,
    values,
    onChange,
}: EnvelopeCardProps) {

    const total = useMemo(() => {
        return Object.entries(values).reduce((acc, [key, count]) => {
            const denomValue = parseInt(key);
            return acc + (denomValue * (count || 0));
        }, 0);
    }, [values]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(val);
    };

    return (
        <div className={`bg-white dark:bg-[#1e1c3a] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-full group focus-within:ring-2 focus-within:ring-${color.replace('bg-', '')} focus-within:border-${color.replace('bg-', '')} transition-all`}>
            <div className={`${color} p-4 text-white flex justify-between items-center`}>
                <div>
                    <span className="text-xs font-medium opacity-80 uppercase tracking-wider">
                        Amplop {id}
                    </span>
                    <h3 className="text-lg font-bold">{label}</h3>
                </div>
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-sm">
                        {icon}
                    </span>
                </div>
            </div>
            <div className="p-4 flex-1">
                <div className="space-y-3">
                    <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                        <div className="col-span-5">Nominal</div>
                        <div className="col-span-3 text-center">Jml</div>
                        <div className="col-span-4 text-right">Subtotal</div>
                    </div>
                    {DENOMINATIONS.map((denom) => {
                        const count = values[denom.key] || "";
                        const subtotal = (typeof count === 'number' ? count : 0) * denom.value;

                        return (
                            <div key={denom.key} className="grid grid-cols-12 gap-2 items-center text-sm">
                                <div className="col-span-5 text-slate-600 dark:text-slate-400 font-medium">
                                    {denom.label}
                                </div>
                                <div className="col-span-3">
                                    <input
                                        className="w-full px-2 py-1 text-center bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-900 dark:text-white"
                                        placeholder="0"
                                        type="number"
                                        min="0"
                                        value={count}
                                        onChange={(e) => onChange(id, denom.key, parseInt(e.target.value) || 0)}
                                    />
                                </div>
                                <div className="col-span-4 text-right font-mono text-slate-400">
                                    {subtotal > 0 ? formatCurrency(subtotal).replace('Rp', '').trim() : '0'}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center mt-auto">
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Total {label.includes("Minggu") ? label.replace("Minggu ", "Minggu ") : label}
                </span>
                <span className="text-lg font-bold text-slate-900 dark:text-white font-mono">
                    {formatCurrency(total)}
                </span>
            </div>
        </div>
    );
}
