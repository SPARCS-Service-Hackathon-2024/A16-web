import React from 'react';
import Header from './component/Header';
import { FaLocationArrow } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Category from './component/Category'; 
import Grade from './component/Grade';
import Feel from './component/Feel'; 
import Reviews from './component/Reviews';
import Menu from './component/Menu';
import Video from './component/Video';
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
        <div className='h-[100vh] mb-[60px]'>
            <Header back={true} review={true} white={true} text=' ' />
            <Video  />
            <Video  />
            <Video  />
            <Video  />
            <Menu video={true}/>
        </div>
    );
}

