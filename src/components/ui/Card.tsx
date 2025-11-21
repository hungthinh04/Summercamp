import { cn } from "@/lib/utils";
import type { BaseComponentProps } from "@/types";

interface CardProps extends BaseComponentProps {
  variant?: "default" | "bordered" | "elevated";
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = "default",
}) => {
  const variants = {
    default: "bg-white dark:bg-gray-800",
    bordered: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
    elevated: "bg-white dark:bg-gray-800 shadow-lg",
  };

  return (
    <div
      className={cn(
        "rounded-lg p-6",
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<BaseComponentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<BaseComponentProps> = ({
  children,
  className,
}) => {
  return (
    <h3 className={cn("text-xl font-semibold text-gray-900 dark:text-gray-100", className)}>
      {children}
    </h3>
  );
};

export const CardDescription: React.FC<BaseComponentProps> = ({
  children,
  className,
}) => {
  return (
    <p className={cn("text-sm text-gray-600 dark:text-gray-400", className)}>
      {children}
    </p>
  );
};

export const CardContent: React.FC<BaseComponentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  );
};
