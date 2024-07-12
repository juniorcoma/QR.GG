interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit';
  onClick?: () => void;
  disabled: boolean;
}

export default function Button({ children, type, onClick, disabled }: ButtonProps) {
  return (
    <button className="button_style" type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
