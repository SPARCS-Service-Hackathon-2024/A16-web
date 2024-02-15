import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { FaLocationArrow } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import GStar from '../assets/GStar.png';
import YStar from '../assets/YStar.png';
import Btn from './component/Btn';
import Header from './component/Header';
import Input from './component/Input';

const withs = ['혼자', '가족', '연인', '친구', '부모님', '모임'];
const tags = [
  '맛집',
  '디저트',
  '데이트코스',
  '교육적인',
  '추억만들기',
  '대전의 명물',
  '감성적인',
  '가족적인',
  '혼자서도 좋아요',
  '과학',
  '여가',
];

export default function ReviewRegistration() {
  const navigate = useNavigate();
  const [star, setStar] = useState<number>(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    '맛집',
    '혼자',
  ]);

  const handleCategoryClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category),
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { data: searchData } = useQuery({
    queryKey: ['/places/search', { keyword: search }],
    enabled: !!search,
  });
  const [place, setPlace] = useState<{ id: string; placeName: string }>();
  const [file, setFile] = useState<File>();
  const [content, setContent] = useState<string>('');

  const submit = async () => {
    const fd = new FormData();
    fd.append('file', file as Blob);
    const uploadRes = await api.post<{ token: string }>('/files/videos', fd);
    const result = await api.post('/reviews', {
      placeId: place?.id,
      videoToken: uploadRes.data.token,
      stars: star,
      with: selectedCategories.filter((cat) => withs.includes(cat)),
      tags: selectedCategories.filter((cat) => tags.includes(cat)),
      content,
    });
    navigate(`/review/${result.data.id}`);
  };

  return (
    <div>
      <Header text="리뷰 등록하기" back border />
      <div className="bg-[#f5f5f5] w-full h-full flex flex-col gap-4 p-5">
        <button
          //   onClick={}
          className="w-full bg-white px-2 py-5 flex flex-col justify-center items-center rounded-xl"
        >
          <h3 className="text-base font-bold pb-1">
            방문한 장소의 주소를 입력해주세요
          </h3>
          <Btn className="bg-primary text-white" onClick={() => setOpen(true)}>
            {place ? place.placeName : '주소 검색하기'}
          </Btn>
          {open &&
            createPortal(
              <div className="fixed inset-0 bg-black/50 grid place-items-center">
                <div className="bg-white rounded px-8 py-4">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSearch(e.currentTarget['address'].value);
                    }}
                    className="flex gap-1"
                  >
                    <Input
                      text="주소를 입력해주세요"
                      type="text"
                      name="address"
                    />
                    <Btn className="bg-primary text-white">검색하기</Btn>
                  </form>
                  <ul className="flex flex-col gap-1 py-2">
                    {searchData?.data.documents.map((place: any) => (
                      <li key={place.id}>
                        <button
                          type="button"
                          className="flex items-center p-1 bg-primary text-white rounded"
                          onClick={() => {
                            setOpen(false);
                            return setPlace(place);
                          }}
                        >
                          <FaLocationArrow />
                          {place.placeName}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>,
              document.body,
            )}
        </button>
        <label
          htmlFor="video"
          className="w-full bg-white px-2 py-5 flex flex-col justify-between items-center rounded-xl"
        >
          <img
            className="h-[30px] object-cover"
            src="/assets/video.png"
            alt=""
          />
          <p className="flex leading-10">리뷰 영상을 업로드 해주세요</p>
          <input
            id="video"
            type="file"
            hidden
            accept=".mp4"
            onChange={(e) => setFile(e.currentTarget.files?.[0])}
          />
        </label>
        <div className="w-full bg-white px-2 py-5 flex flex-col justify-center items-center rounded-xl">
          <h3 className="text-base font-bold">방문한 장소가 어땠나요?</h3>
          <div className="flex items-center">
            <button type="button" onClick={() => setStar(1)}>
              <img
                className="h-6 w-6 mx-1"
                src={star >= 1 ? YStar : GStar}
                alt=""
              />
            </button>
            <button type="button" onClick={() => setStar(2)}>
              <img
                className="h-6 w-6 mx-1"
                src={star >= 2 ? YStar : GStar}
                alt=""
              />
            </button>
            <button type="button" onClick={() => setStar(3)}>
              <img
                className="h-6 w-6 mx-1"
                src={star >= 3 ? YStar : GStar}
                alt=""
              />
            </button>
            <button type="button" onClick={() => setStar(4)}>
              <img
                className="h-6 w-6 mx-1"
                src={star >= 4 ? YStar : GStar}
                alt=""
              />
            </button>
            <button type="button" onClick={() => setStar(5)}>
              <img
                className="h-6 w-6 mx-1"
                src={star >= 5 ? YStar : GStar}
                alt=""
              />
            </button>
            <h1 className="text-xl">{star.toFixed(1)}</h1>
          </div>
        </div>
        <div className="w-full bg-white px-2 py-5 flex flex-col justify-center items-center rounded-xl">
          <h3 className="text-base font-bold">
            방문한 장소와 어울리는
            <span className="text-[#2E83F2]">키워드</span>를 골라주세요!
          </h3>
          <p className="leading-10">누구와 방문하면 좋을 것 같나요?</p>
          <div className="flex items-center flex-wrap justify-center">
            {withs.map((e, index) => (
              <button
                type="button"
                key={index}
                className={`py-[1px] px-2 m-2 rounded-xl border ${
                  selectedCategories.includes(e)
                    ? 'border-primary text-primary'
                    : 'border-[#828282] text-[#828282]'
                }`}
                onClick={() => handleCategoryClick(e)}
              >
                #{e}
              </button>
            ))}
          </div>
          <p className="leading-10">누구와 방문한 장소는 어떘나요?</p>
          <div className="flex items-center flex-wrap justify-center">
            {tags.map((e, index) => (
              <button
                type="button"
                key={index}
                className={`py-[1px] px-2 m-2 rounded-xl border ${
                  selectedCategories.includes(e)
                    ? 'border-primary text-primary'
                    : 'border-[#828282] text-[#828282]'
                }`}
                onClick={() => handleCategoryClick(e)}
              >
                #{e}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full bg-white px-2 py-5 flex flex-col justify-center items-center rounded-xl">
          <h3 className="text-base font-bold pb-[15px]">
            방문한 장소에 대해서 작성해 주세요
          </h3>
          <textarea
            className="w-[100%] h-[172px] outline-none bg-[#F1F7FF] p-2 rounded-lg"
            placeholder="리뷰 작성하기"
            onChange={(e) => setContent(e.currentTarget.value)}
          ></textarea>
        </div>
        <Btn className="bg-primary text-white" onClick={submit}>
          등록하기
        </Btn>
      </div>
    </div>
  );
}
