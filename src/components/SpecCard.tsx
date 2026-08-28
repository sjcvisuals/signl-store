interface SpecCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  detail?: string;
}

export function SpecCard({ icon, title, description, detail }: SpecCardProps) {
  return (
    <div className="group p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-all">
      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted text-sm">{description}</p>
      {detail && (
        <p className="mt-2 text-xs text-muted/70">{detail}</p>
      )}
    </div>
  );
}
