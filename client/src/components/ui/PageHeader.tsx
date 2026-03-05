import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="py-16 md:py-24 max-w-4xl mx-auto text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 text-balance">
        {title}
      </h1>
      {description && (
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}
