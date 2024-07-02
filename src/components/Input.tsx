import { useEffect, useRef } from 'react';
import { FieldPath, FieldValues, UseControllerProps, useController } from 'react-hook-form';

interface InputProps {
  labelText: string;
  type: 'text';
  id: string;
  placeholder: string;
  focus?: boolean;
}

export default function Input<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  labelText,
  type,
  id,
  placeholder,
  focus,
  ...controllerProps
}: InputProps & UseControllerProps<TFieldValues, TName>) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController(controllerProps);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);
  return (
    <div>
      <label className="text-[1.4rem] font-[500] mb-2" htmlFor={id}>
        {labelText}
      </label>
      <input
        className={` text-[1.4rem] bg-[white] w-full px-4 py-[1.2rem] rounded-lg border-[1.5px] border-[#cdcdcd] focus:border-primary-700 outline-none ${
          error && `border-red-500`
        }`}
        type={type}
        id={id}
        placeholder={placeholder}
        ref={inputRef}
        value={value}
        onChange={onChange}
      />
      <span className="inline-block text-[1.2rem] text-red-600 mt-1 min-h-5">{error?.message}</span>
    </div>
  );
}
