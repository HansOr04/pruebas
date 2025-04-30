interface FormInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  id,
  label,
  type,
  value,
  onChange,
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-lg font-bold mb-2 text-white">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-2 py-1 border-b-4 border-white bg-transparent text-white focus:outline-none focus:ring-0"
      />
    </div>
  );
}
