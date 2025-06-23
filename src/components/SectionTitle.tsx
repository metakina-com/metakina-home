interface SectionTitleProps {
  title: string
  className?: string
}

export default function SectionTitle({
  title,
  className = '',
}: SectionTitleProps) {
  return (
    <div>
      <p className={`text-[30px] text-[400] text-black md:text-[40px] mb-10 ${className}`}>
        {title}
      </p>
    </div>
  );
}
