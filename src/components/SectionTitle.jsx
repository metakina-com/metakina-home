export default function SectionTitle({
  title,
  className = '',
  align = 'center',
  size = 'small',
  color = 'gray-800',
  mainTitle,
}) {
  const baseClasses = 'font-bold leading-[3rem]';

  const sizeClasses = {
    small: 'text-2xl lg:text-3xl md:text-3xl',
    default: 'text-3xl lg:text-4xl md:text-4xl',
    large: 'text-4xl lg:text-5xl md:text-5xl',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const colorClasses = `text-${color}`;

  const combinedClasses = [
    baseClasses,
    sizeClasses[size],
    alignClasses[align],
    colorClasses,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className="mb-18">
      <h1 className={combinedClasses}>
        {title}
      </h1>
      {mainTitle
        && (
          <p className="text-lg text-gray-600 lg:text-xl">
            {mainTitle}
          </p>
        )}
    </div>
  );
}
