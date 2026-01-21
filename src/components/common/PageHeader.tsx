interface PageHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
}

const PageHeader = ({ title, subtitle, label }: PageHeaderProps) => {
  return (
    <section className="bg-muted section-padding">
      <div className="container-custom text-center">
        {label && (
          <span className="text-primary font-sans text-sm font-medium tracking-wider uppercase">
            {label}
          </span>
        )}
        <h1 className="heading-display text-foreground mt-3 mb-4">{title}</h1>
        <div className="divider-gold mx-auto mb-6" />
        {subtitle && (
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
