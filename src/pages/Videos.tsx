import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Header from './component/Header';
import Menu from './component/Menu';
import Video from './component/Video';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../api';
import { useEffect } from 'react';
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
    navigate(`/review/${data.data.list[0].id}`);
  }, [data, id, navigate]);

  return (
    <div className="flex flex-col h-screen">
      <Header back review white text=" " fixed />
      <Swiper
        className="w-full h-full flex-1 bg-black"
        direction="vertical"
        slidesPerView={1}
        onSlideChange={(d) => console.log(JSON.stringify(d))}
      >
        {data?.data.list.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="h-full w-full">
              <Video {...review} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Menu video={true} />
    </div>
  );
}
