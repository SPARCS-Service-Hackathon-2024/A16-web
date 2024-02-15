import React, { useState } from 'react';
import GStar from '../../assets/GStar.png'
import YStar from '../../assets/YStar.png'
import HalfStar from '../../assets/HalfStar.png'



type GradeProps = {
    grade?: number;
}

const Grade: React.FC<GradeProps> = ({ grade = 3.5 }) => {
    const integerPart = Math.floor(grade);
    const restPart = grade % 1;

    const renderInteger = () => {
        const integerElements = [];
        for (let i = 0; i < integerPart; i++) {
            integerElements.push(<div className='w-[6%] mr-1'><img className='w-full object-cover' src={YStar} alt="" /></div>);
        }
        return integerElements;
    }


    
    const renderRest = () => {
        const restElements = [];
        if (restPart >= 0.5) {
            restElements.push(<div className='w-[6%] mr-1'><img className='w-full object-cover' src={HalfStar} alt="" /></div>);
        }else {
            restElements.push(<div className='w-[6%] mr-1'><img className='w-full object-cover' src={GStar} alt="" /></div>);
        }
        for (let i = 0; i < 4-integerPart; i++) {
            restElements.push(<div className='w-[6%] mr-1'><img className='w-full object-cover' src={GStar} alt="" /></div>);
        }
        return restElements;
    }

    return (
        <div className='flex items-center mb-[10px]'>
            {renderInteger()}
            {renderRest()}
            <p className='ml-2 text-2xl font-bold leading-[100%]'>{grade}</p>
        </div>
    );
}

export default Grade;
