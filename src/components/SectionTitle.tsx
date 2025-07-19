interface SectionTitleProps {
  title: string
  className?: string
  description?: string
}

export default function SectionTitle({
  title,
  className = '',
  description = '',
}: SectionTitleProps) {
  return (
    <div className="mb-10 flex flex-col items-center">
      <p className={`text-[30px] text-[400] text-black md:text-[40px] ${className}`}>
        {title}
      </p>
      {description && (
        <p className="w-[50%] text-[#333333] max-md:w-full">
          {description}
        </p>
      )}
    </div>
  );
}
