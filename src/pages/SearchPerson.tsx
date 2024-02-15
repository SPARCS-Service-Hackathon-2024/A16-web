import React from 'react';
import SearchBar from './component/SearchBar';

export default function SearchPerson() {
    return (
        <div className='h-[100vh]'>
            <SearchBar type="person" />
            <div className='pt-[56px] h-[100%]'>
                {/* <Parson link={} name={} img={} category={}/> */}
            </div>
        </div>
    );
}

