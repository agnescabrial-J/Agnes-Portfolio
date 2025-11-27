import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ title, children, isOpen, onOpenChange }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay
          className="fixed inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
        />

        {/* Content */}
        <Dialog.Content
          className={cn(
            "fixed top-1/2 left-1/2 max-w-lg w-full p-6 rounded-2xl border border-[var(--color-border)]",
            "bg-[var(--color-bg-surface)]/95 backdrop-blur-xl shadow-lg transform -translate-x-1/2 -translate-y-1/2",
            "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-to)] animate-scale-in"
          )}
          onInteractOutside={(event) => event.preventDefault()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-lg sm:text-xl font-semibold text-[var(--color-text-primary)]">
              {title}
            </Dialog.Title>
            <Dialog.Close
              className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-primary-to)] transition focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-to)]"
              aria-label="Close"
            >
              <X size={20} />
            </Dialog.Close>
          </div>

          {/* Body */}
          <div className="space-y-4 text-sm sm:text-base text-[var(--color-text-primary)]">
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
