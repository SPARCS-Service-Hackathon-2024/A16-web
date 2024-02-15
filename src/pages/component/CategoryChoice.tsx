import React, { useEffect, useState } from 'react';

type CategoryChoice = {
  title: string;
  category: string[];
  icon?: React.ReactNode;
  className?: string;
  not?: boolean;
  onChange?: (category: string[]) => void;
};

const CategoryChoice = ({
  className,
  title,
  icon,
  category,
  not,
  onChange,
}: CategoryChoice) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category),
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }

    setSelectedNot(false);
  };

  const [selectedNot, setSelectedNot] = useState<boolean>(true);

  const handleNotClick = () => {
    setSelectedCategories([]);
    setSelectedNot(true);
  };

  useEffect(() => {
    onChange && onChange(selectedCategories);
  }, [onChange, selectedCategories]);

  return (
    <div className={`min-h-[150px] pb-[10px] bg-white rounded-2xl`}>
      <div className="flex items-center justify-center h-[50px] text-xl font-bold gap-2">
        {icon}
        <h3>{title}</h3>
      </div>
      <div
        className={`flex items-center justify-center flex-wrap mx-auto ${className}`}
      >
        {not && (
          <button
            type="button"
            className={`py-2 px-3 m-2 rounded-xl ${
              selectedNot ? 'bg-primary text-white' : 'bg-[#D9D9D9]'
            }`}
            onClick={handleNotClick}
          >
            상관없음
          </button>
        )}
        {category.map((e, index) => (
          <button
            type="button"
            key={index}
            className={`py-2 px-3 m-2 rounded-xl ${
              selectedCategories.includes(e)
                ? 'bg-primary text-white'
                : 'bg-[#D9D9D9]'
            }`}
            onClick={() => handleCategoryClick(e)}
          >
            {e}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryChoice;
