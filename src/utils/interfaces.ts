export interface LoginFormValues {
  username: string;
  password: string;
}

export interface SignUpFormValues {
  name: string;
  email: string;
  username: string;
  password: string;
}

export interface ReusableInputProps {
  id: string;
  name: string;
  type: "text" | "number" | "select" | "textarea" | "password" | "email";
  value?: string;
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  onBlur: (
    event: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  error?: string;
  placeholder?: string;
  options?: string[];
  rows?: number;
  className?: string;
}