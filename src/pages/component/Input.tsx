import React, { forwardRef, useState } from 'react';

type InputProps = {
  text: string;
  type: string;
  label?: string;
  className?: string;
  errorMessage?: string;
  trailing?: React.ReactNode;
};

const Input = forwardRef<
  HTMLInputElement,
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    { type, text, label, className, errorMessage, trailing, ...inputProps },
    ref,
  ) => {
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
      <div className={className}>
        {label && <h3 className="leading-[30px]">{label}</h3>}
        <div
          className={`h-[48px] flex justify-between leading-[48px] rounded-lg items-end gap-4`}
        >
          <div className="relative flex-1">
            <input
              {...inputProps}
              ref={ref}
              type={typeInput}
              value={value}
              onChange={handleChange}
              className={`h-[48px] w-full text-base px-2 outline-none border border-[#E5E5E5] placeholder-[#CECED1] bg-[#F7F8F9] ${
                type === 'password' ? 'pr-10' : ''
              }`}
              placeholder={text}
            />
            {type === 'password' && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="bg-transparent outline-none h-[24px] w-[24px] m-auto absolute right-2 top-1/2 -translate-y-1/2"
              >
                <img
                  src={
                    typeInput == 'text'
                      ? '/assets/show.png'
                      : '/assets/hide.png'
                  }
                  alt="eye"
                  className="object-cover w-full h-full"
                />
              </button>
            )}
          </div>
          {trailing}
        </div>
        {errorMessage && (
          <p className="text-[#FF0000] text-sm leading-[24px]">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

export default Input;
