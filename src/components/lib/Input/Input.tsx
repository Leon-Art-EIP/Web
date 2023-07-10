import React from 'react';

export interface InputProps {
    value: string;
    type: string;
    name: string;
    placeholder: string;
    onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ value, type, name, placeholder, onChange }) => {
    return (
      <input 
        value={value} 
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-full bg-gray-200 px-8 py-3 text-black font-semibold"
      />
    );
};

export default Input;
