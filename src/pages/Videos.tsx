import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Header from './component/Header';
import Menu from './component/Menu';
import Video from './component/Video';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../api';
import { useEffect, useState } from 'react';
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
  const { id } = useParams();
  const { data, error } = useQuery({
    queryKey: [
      '/reviews',
      { regions: ['서구', '중구', '유성구', '대덕구', '동구'] },
    ],
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (id) return;
    if (!data) return;
    navigate(`/review/${data.list[0].id}`);
  }, [data, id, navigate]);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col h-screen">
      <Header back review white text=" " fixed />
      <Swiper
        className="w-full h-full flex-1 bg-black"
        direction="vertical"
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {data?.list.map((review, index) => (
          <SwiperSlide key={review.id}>
            <div className="h-full w-full">
              <Video {...review} active={activeIndex === index} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Menu video={true} />
    </div>
  );
}
