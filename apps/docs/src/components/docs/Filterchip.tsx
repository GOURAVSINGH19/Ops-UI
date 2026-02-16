import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface FilterChipProps<T extends Record<string, string[]>> {
    filterOptions: {
        group: string;
        key: keyof T;
        options: { label: string; value: string }[];
    }[];
    filters: T;
    removeValue: (groupKey: keyof T, value: string) => void;
}

export const FilterChip = <T extends Record<string, string[]>>({ filterOptions, filters, removeValue }: FilterChipProps<T>) => {
    return (
        <div className="flex gap-2 overflow-x-auto overflow-hidden">
            {filterOptions.map(group =>
                filters[group.key].map((val: string) => {
                    const opt = group.options.find((o: any) => o.value === val);
                    return (
                        <motion.div
                            key={`${String(group.key)}-${val}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex items-center gap-2 bg-white text-blue-700 px-3 py-1 rounded-full text-[11px] font-medium "
                        >
                            <span className="text-slate-400 font-normal">{group.group}:</span>
                            <span>{opt?.label || val}</span>
                            <button
                                onClick={() => removeValue(group.key, val)}
                                className="text-red-500 cursor-pointer"
                            >
                                <X size={12} />
                            </button>
                        </motion.div>
                    );
                })
            )}
        </div>
    );
};