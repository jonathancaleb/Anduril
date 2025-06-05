import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { Toast } from "@/components/ui/toast";
import type { ToastProps } from "@/components/ui/toast";

export interface ToastItem {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastProps["variant"];
  duration?: number;
  onClose?: () => void;
}

interface ToastContextType {
  toasts: ToastItem[];
  addToast: (toast: Omit<ToastItem, "id">) => string;
  removeToast: (id: string) => void;
  showSuccess: (
    title: string,
    description?: string,
    duration?: number
  ) => string;
  showError: (title: string, description?: string, duration?: number) => string;
  showWarning: (
    title: string,
    description?: string,
    duration?: number
  ) => string;
  showInfo: (title: string, description?: string, duration?: number) => string;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const generateId = () => {
    return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };
  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback((toast: Omit<ToastItem, "id">) => {
    const id = generateId();
    const newToast: ToastItem = { id, ...toast };

    setToasts((prev) => [...prev, newToast]);

    // Auto-remove toast after duration
    const duration =
      toast.duration ?? (toast.variant === "error" ? 8000 : 5000);
    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, duration);
    }

    return id;
  }, []);

  const showSuccess = useCallback(
    (title: string, description?: string, duration?: number) => {
      return addToast({ title, description, variant: "success", duration });
    },
    [addToast]
  );

  const showError = useCallback(
    (title: string, description?: string, duration?: number) => {
      return addToast({ title, description, variant: "error", duration });
    },
    [addToast]
  );

  const showWarning = useCallback(
    (title: string, description?: string, duration?: number) => {
      return addToast({ title, description, variant: "warning", duration });
    },
    [addToast]
  );

  const showInfo = useCallback(
    (title: string, description?: string, duration?: number) => {
      return addToast({ title, description, variant: "info", duration });
    },
    [addToast]
  );

  const value: ToastContextType = {
    toasts,
    addToast,
    removeToast,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col space-y-2 max-w-sm w-full">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          variant={toast.variant}
          title={toast.title}
          description={toast.description}
          onClose={() => {
            toast.onClose?.();
            removeToast(toast.id);
          }}
          className="animate-in slide-in-from-right-full"
        />
      ))}
    </div>
  );
};
