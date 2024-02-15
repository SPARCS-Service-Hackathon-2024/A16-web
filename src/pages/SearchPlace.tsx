import React from 'react';
import SearchBar from './component/SearchBar';
import Btn from './component/Btn';
import CategoryChoice from './component/CategoryChoice';
import { GrMap } from "react-icons/gr";
import { GoPerson } from "react-icons/go";


export default function SearchPlace() {
    return (
        <div className='min-h-[100vh] '>
            <SearchBar type="place" />
            <div className='pt-[56px] h-[100%] relative bg-[#f5f5f5] text-center pb-[80px]'>
                <h1 className='text-2xl font-bold leading-[50px]'>검색하기 막막하시나요?</h1>
                <p className='text-sm'>키워드 선택만 하시면 저희가 적합한 장소를 찾아드릴게요!</p>
                <CategoryChoice icon={<GrMap className='mr-[10px]'/>} title="지역을 선택해주세요" category={["동구", "대덕구", "유성구", "중구", "서구"]} className='w-[50%]'/>
                <CategoryChoice icon={<GoPerson className='mr-[10px]'/>} not={true}  title="누구와 함께 가나요?" category={[ "혼자", "가족", "친구", "단체 모임", "연인", "부모님"]} className='w-[70%]'/>
                <CategoryChoice title="지역을 선택해주세요" not={true} category={["데이트 코스", "맛집", "디저트", "교육적인", "추억만들기", "대전의 명물", "감성적인", "혼자서도 좋아요", "가족적인"]} className='w-[80%]'/>
                <Btn text="적합한 장소 검색하기!" className="bg-[#2E83F2] text-[#ffffff] absolute bottom-[50px] left-[50%] translate-x-[-50%] w-[90%]"/>
            </div>
        </div>
    );
}

