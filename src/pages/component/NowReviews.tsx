import { useQuery } from '@tanstack/react-query';
import NowReview from './NowReview';

type NowReviews = {
  link: string;
  title: string;
  address: string;
  img: string;
};
const NowReviews = () => {
  const { data } = useQuery({ queryKey: ['/reviews/recommended'] });
  return (
    <div className={`w-[100%] px-[5%] mx-auto mt-[10px] max-w-[480px] `}>
      <h1 className="text-xl">오늘의 추천 리뷰</h1>
      <div className="flex flex-wrap">
        {data?.list.map((review) => (
          <NowReview
            key={review.id}
            link={`/review/${review.id}`}
            title={review.place.name}
            address={review.user.nickname}
            img={review.files[0].thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default NowReviews;
