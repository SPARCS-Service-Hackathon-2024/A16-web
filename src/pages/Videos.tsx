import React from 'react';
import Header from './component/Header';
import { FaLocationArrow } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Category from './component/Category'; 
import Grade from './component/Grade';
import Feel from './component/Feel'; 
import Reviews from './component/Reviews';
import Menu from './component/Menu';

// type VideosProps = {
//     type: string;
//     profileImg: string;
//     profileUrl: string;
//     name: string;
//     videoImg?: string;
//     followChk?: boolean;
//     videoUrl: string;
//     Categorys: string[];    
// }

export default function Videos() {
    return (
        <div className='h-[100vh]'>
            <Header back={true} alarm={true} />

        </div>
    );
}

