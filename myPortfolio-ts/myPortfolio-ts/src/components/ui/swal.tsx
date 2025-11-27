import * as Dialog from "@radix-ui/react-dialog";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";

type AlertType = "success" | "error" | "warning" | "info";

type AlertOptions = {
  title: string;
  message?: string;
  type?: AlertType;
  confirmText?: string;
  cancelText?: string;
  showCancel?: boolean;
};

let triggerAlert: ((options: AlertOptions, resolve: (val: boolean) => void) => void) | null = null;

export const showGlobalAlert = async (options: AlertOptions): Promise<boolean> => {
  return new Promise((resolve) => {
    triggerAlert?.(options, resolve);
  });
};

export const GlobalAlert = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState<AlertType>("info");
  const [confirmText, setConfirmText] = useState("OK");
  const [cancelText, setCancelText] = useState("Cancel");
  const [showCancel, setShowCancel] = useState(false);
  const [resolver, setResolver] = useState<((val: boolean) => void) | null>(null);

  const typeStyles: Record<
    AlertType,
    { iconColor: string; icon: React.ReactNode }
  > = {
    success: {
      iconColor: "text-green-500",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    error: {
      iconColor: "text-red-500",
      icon: <AlertCircle className="w-6 h-6" />,
    },
    warning: {
      iconColor: "text-yellow-500",
      icon: <AlertTriangle className="w-6 h-6" />,
    },
    info: {
      iconColor: "text-blue-500",
      icon: <Info className="w-6 h-6" />,
    },
  };

  triggerAlert = (options: AlertOptions, resolve: (val: boolean) => void) => {
    setTitle(options.title);
    setMessage(options.message || "");
    setType(options.type || "info");
    setConfirmText(options.confirmText || "OK");
    setCancelText(options.cancelText || "Cancel");
    setShowCancel(options.showCancel || false);
    setResolver(() => resolve);
    setOpen(true);
  };

  const handleConfirm = () => {
    resolver?.(true);
    setOpen(false);
  };

  const handleCancel = () => {
    resolver?.(false);
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        {/* Dim backdrop */}
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity" />

        {/* Content */}
        <Dialog.Content
          className="fixed z-[9999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[90vw] max-w-md rounded-xl border border-[color:var(--color-border)]
          bg-[color:var(--color-bg-surface)] shadow-lg transition-all duration-300"
        >
          {/* Header */}
          <div className="flex justify-between items-start p-5 pb-3 border-b border-[color:var(--color-border)]">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-md bg-[color:var(--color-bg-base)] ${typeStyles[type].iconColor}`}>
                {typeStyles[type].icon}
              </div>
              <Dialog.Title className="text-base sm:text-lg font-semibold text-[color:var(--color-text-primary)]">
                {title}
              </Dialog.Title>
            </div>
            <Dialog.Close asChild>
              <button
                className="btn-cmn text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] transition"
                onClick={handleCancel}
              >
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          {/* Message */}
          {message && (
            <Dialog.Description className="px-5 py-4 text-sm text-[color:var(--color-text-secondary)] leading-relaxed">
              <span dangerouslySetInnerHTML={{ __html: message }} />
            </Dialog.Description>
          )}

          {/* Footer */}
          <div className="px-5 py-4 flex justify-end gap-3 border-t border-[color:var(--color-border)]">
            {showCancel && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleCancel}
                className="border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] hover:bg-[color:var(--color-bg-base)]"
              >
                {cancelText}
              </Button>
            )}
            <Button
              onClick={handleConfirm}
              size="sm"
              className="bg-[color:var(--color-primary-from)] text-white hover:opacity-90 font-medium px-5 py-2 rounded-md shadow-sm transition-all duration-150"
            >
              {confirmText}
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
