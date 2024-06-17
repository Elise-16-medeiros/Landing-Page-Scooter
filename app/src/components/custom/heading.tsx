type HeadingProps = {
    title: string;
    subtitle: string;
}


export default function Heading({ title, subtitle }: HeadingProps) {
    return (
      <div className="flex flex-col items-center justify-center gap-y-10">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-center">{subtitle}</p>
      </div>
    );
}
