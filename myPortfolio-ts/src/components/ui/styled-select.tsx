import * as React from "react";
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

interface StyledSelectProps {
    label?: string;
    id: string;
    placeholder: string;
    options: string[] | any[];
    value?: string;
    onChange: (value: string) => void;
    error?: boolean;
}

export const StyledSelect: React.FC<StyledSelectProps> = ({
    id,
    placeholder,
    options,
    value,
    onChange,
    error,
}) => {
    return (
        <div className="flex flex-col">
            <Select.Root value={value ?? ""} onValueChange={onChange}>
                <Select.Trigger
                    id={id}
                    className={cn(
                        "dropdown-item inline-flex items-center justify-between rounded-md px-3 py-2 text-sm !bg-[var(--color-bg-surface)] !text-[var(--color-text-via)] !border-1 !border-[var(--color-primary-from)] w-full transition-all focus:ring-2 focus:ring-[var(--color-primary-from)] mt-[5px] data-[placeholder]:opacity-60",
                        error && "!border-red-500",
                        value && "!border-[var(--color-primary-from)] !text-[var(--color-text-secondary)] font-medium" // highlight when selected
                    )}
                >
                    <Select.Value placeholder={placeholder} />
                    <Select.Icon>
                        <ChevronDown className="w-4 h-4 text-[var(--color-text-secondary)]" />
                    </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Content
                        className="overflow-hidden z-50 bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-md shadow-xl animate-scaleIn w-[--radix-select-trigger-width]"
                        position="popper"
                        sideOffset={6}
                        align="start"
                    >
                        <Select.Viewport className="p-1 w-full min-w-[var(--radix-select-trigger-width)]">
                            {options.map((opt: any, i: number) => {
                                const itemValue =
                                    typeof opt === "object"
                                        ? String(opt.id ?? opt.role_id ?? opt.value ?? opt.display_name)
                                        : String(opt);

                                const itemLabel =
                                    typeof opt === "object"
                                        ? opt.name ?? opt.display_name ?? opt.role_name ?? String(itemValue)
                                        : opt;

                                return (
                                    <Select.Item
                                        key={i + 1}
                                        value={itemValue}
                                        className={cn(
                                            "relative flex items-center text-sm px-3 py-2 rounded-md cursor-pointer select-none transition-all min-w-[100px]",
                                            "text-[var(--color-text-primary)] hover:bg-[var(--color-border)]",
                                            "data-[state=checked]:bg-[var(--color-primary-from)] data-[state=checked]:text-white"
                                        )}
                                    >
                                        <Select.ItemText>{itemLabel}</Select.ItemText>
                                        <Select.ItemIndicator className="absolute right-3">
                                            <Check className="w-4 h-4" />
                                        </Select.ItemIndicator>
                                    </Select.Item>
                                );
                            })}

                        </Select.Viewport>
                    </Select.Content>
                </Select.Portal>

            </Select.Root>
        </div>
    );
};
