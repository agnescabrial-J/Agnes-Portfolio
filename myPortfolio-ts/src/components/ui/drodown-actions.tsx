// src/components/ui/dropdown-actions.tsx
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import type { JSX } from "react";

type DropdownAction = {
  label: string;
  onClick: () => void;
  icon: JSX.Element;
};

type DropdownMenuProps = {
  actions: DropdownAction[];
};

export const DropdownActions: React.FC<DropdownMenuProps> = ({ actions }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>       
          <EllipsisVertical className="w-5 h-5 cursor-pointer ounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-primary-via)] transition-colors duration-150 hover:bg-[var(--color-bg-base)] focus:outline-none inline-block" aria-label="More actions"/> 
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={6}
          className="z-50 w-40 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-surface)] shadow-[0_4px_14px_rgba(0,0,0,0.12)] p-1.5
          transition-all duration-100 ease-out
          data-[state=open]:opacity-100 data-[state=open]:translate-y-0
          data-[state=closed]:opacity-0 data-[state=closed]:-translate-y-1"
        >
          {actions.map((action, index) => (
            <DropdownMenu.Item
              key={index}
              onSelect={action.onClick}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-[var(--color-text-primary)] cursor-pointer 
                         hover:bg-[var(--color-border)] active:scale-[0.98] transition-all duration-100"
            >
              {action.icon}
              {action.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
