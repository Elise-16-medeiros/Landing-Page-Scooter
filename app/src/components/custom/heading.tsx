type HeadingProps = {
    title: string;
    subtitle: string;
}


export default function Heading({ title, subtitle }: HeadingProps) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p>{subtitle}</p>
      </div>
    );
}
