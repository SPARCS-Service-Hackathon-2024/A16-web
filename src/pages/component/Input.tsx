import React, { useState } from 'react';

type InputProps = {
  text: string;
  type: string;
  label?: string;
  className?: string;
  errorMessage?: string;
};

const Input = ({
  type,
  text,
  label,
  className,
  errorMessage,
  ...inputProps
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [value, setValue] = useState<string>('');
  const [typeInput, setTypeInput] = useState<string>(type);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const togglePasswordVisibility = () => {
    setTypeInput(typeInput === 'text' ? 'password' : 'text');
  };

  return (
    <div className={`${className} mb-[8px]`}>
      {label && <h3 className="leading-[30px]">{label}</h3>}
      <div
        className={`w-[100%] h-[48px] flex justify-between pl-3 leading-[48px] rounded-lg border border-[#E5E5E5] bg-[#F7F8F9]`}
      >
        <input
          {...inputProps}
          type={typeInput}
          value={value}
          onChange={handleChange}
          className={`${
            type == 'text' ? 'w-[98%]' : 'w-[85%]'
          } h-[48px] text-base mb-[4px] outline-none placeholder-[#CECED1] bg-[#F7F8F9]`}
          placeholder={text}
        />
        {type == 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="bg-transparent outline-none h-[24px] w-[24px] m-auto"
          >
            <img
              src={
                typeInput == 'text' ? '/assets/show.png' : '/assets/hide.png'
              }
              alt="eye"
              className="object-cover w-full h-full"
            />
          </button>
        )}
      </div>
      {errorMessage && (
        <p className="text-[#FF0000] text-sm leading-[24px]">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
