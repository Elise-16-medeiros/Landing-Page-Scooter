type HeadingProps = {
    title: string;
    subtitle?: string;
}


export default function Heading({ title, subtitle }: HeadingProps) {
    return (
      <div className="flex flex-col items-center justify-center gap-y-8 container">
        <h1 className="text-3xl font-semibold text-center">{title}</h1>
        <p className="text-center">{subtitle}</p>
      </div>
    );
}
