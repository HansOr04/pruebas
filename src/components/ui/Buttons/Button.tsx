import { ButtonProps } from '@/src/types/components/ui.types';

export default function Button({
  content,
  variant = 'primary',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  // Estilos base compartidos
  const baseStyles =
    'px-7 py-4 font-bold rounded-3xl text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  // Estilos específicos por variante
  const variantStyles = {
    primary:
      'bg-[var(--primary-color)] text-white hover:bg-opacity-90 focus:ring-[var(--primary-color)]',
    secondary:
      'bg-transparent border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white focus:ring-[var(--primary-color)]',
  };

  // Estilos para estado disabled
  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : 'cursor-pointer';

  // Combinar todas las clases
  const finalClassName =
    `${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`.trim();

  // Si tiene href, renderizar como link
  if (href && !disabled) {
    return (
      <a href={href} className={finalClassName} onClick={onClick}>
        {content}
      </a>
    );
  }

  // Si no tiene href, renderizar como button
  return (
    <button
      type={type}
      className={finalClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
