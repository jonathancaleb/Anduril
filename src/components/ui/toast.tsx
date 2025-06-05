import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-lg border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full",
  {
    variants: {
      variant: {
        default:
          "border-brand-primary/20 bg-brand-neutral text-brand-neutral-foreground",
        success:
          "border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-900/20 dark:text-green-100",
        error:
          "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-900/20 dark:text-red-100",
        warning:
          "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-100",
        info: "border-brand-accent/20 bg-brand-accent/10 text-brand-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const iconVariants = cva("h-5 w-5 flex-shrink-0", {
  variants: {
    variant: {
      default: "text-brand-primary",
      success: "text-green-600 dark:text-green-400",
      error: "text-red-600 dark:text-red-400",
      warning: "text-amber-600 dark:text-amber-400",
      info: "text-brand-accent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
  onClose?: () => void;
  title?: string;
  description?: string;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    { className, variant, onClose, title, description, children, ...props },
    ref
  ) => {
    const getIcon = () => {
      switch (variant) {
        case "success":
          return <CheckCircle className={iconVariants({ variant })} />;
        case "error":
          return <AlertCircle className={iconVariants({ variant })} />;
        case "warning":
          return <AlertTriangle className={iconVariants({ variant })} />;
        case "info":
          return <Info className={iconVariants({ variant })} />;
        default:
          return <Info className={iconVariants({ variant })} />;
      }
    };

    return (
      <div
        ref={ref}
        className={cn(toastVariants({ variant }), className)}
        {...props}
      >
        <div className="flex items-start space-x-3 flex-1">
          {getIcon()}
          <div className="flex-1 min-w-0">
            {title && (
              <div className="text-sm font-semibold leading-none mb-1">
                {title}
              </div>
            )}
            {description && (
              <div className="text-sm opacity-90 leading-relaxed">
                {description}
              </div>
            )}
            {children}
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            aria-label="Close notification"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);
Toast.displayName = "Toast";

export { Toast, toastVariants };
