import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';

type CategoryChoice = {
    title: string;
    category: string[];
    icon?: React.ReactNode;
    className?: string;
    not?: boolean;
}

const CategoryChoice: React.FC<CategoryChoice> = ({ className, title, icon, category, not }) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleCategoryClick = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
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

    return (
        <div className={`w-[80%] min-h-[150px] pb-[10px] bg-white rounded-2xl mx-auto mt-[20px] mb-[50px]`}>
            <div className="flex items-center justify-center h-[50px] text-xl font-bold">
                {icon}
                <h3>{title}</h3>
            </div>
            <div className={`flex items-center justify-center flex-wrap mx-auto ${className}`}>
                {not && (
                    <button
                        className={`py-2 px-3 m-2 rounded-xl ${selectedNot ? 'bg-[#2E83F2] text-white' : 'bg-[#D9D9D9]'}`}
                        onClick={handleNotClick}
                    >
                        상관없음
                    </button>
                )}
                {category.map((e, index) => (
                    <button
                        key={index}
                        className={`py-2 px-3 m-2 rounded-xl ${selectedCategories.includes(e) ? 'bg-[#2E83F2] text-white' : 'bg-[#D9D9D9]'}`}
                        onClick={() => handleCategoryClick(e)}
                    >
                        {e}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CategoryChoice;
