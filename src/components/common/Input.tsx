import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps {
  labelText: string;
  id: string;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  error?: FieldError;
  placeholder: string;
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ labelText, onChange, onBlur, name, id, error, placeholder }, ref) => (
    <div className="relative">
      <label htmlFor={id} className="text-[2.0rem] text-white mb-8 focus-within:text-color-main-01">
        {labelText}
      </label>
      <input
        className="signup-input-style"
        type="text"
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        placeholder={placeholder}
      />
      {error && <span className="text-color-main-04 text-[1.2rem] absolute right-2 bottom-4">{error.message}</span>}
    </div>
  ),
);

export default Input;
