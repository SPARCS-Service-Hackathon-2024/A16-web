import { SubmitHandler, useForm } from 'react-hook-form';
import { GoPerson } from 'react-icons/go';
import { GrMap } from 'react-icons/gr';
import Btn from './component/Btn';
import CategoryChoice from './component/CategoryChoice';
import SearchBar from './component/SearchBar';
import { useNavigate } from 'react-router-dom';

interface SearchPlaceProps {
  query: string;
  regions: string[];
  withs: string[];
  tags: string[];
}

export default function SearchPlace() {
  const { register, setValue, handleSubmit } = useForm<SearchPlaceProps>();
  const navigate = useNavigate();

  const search: SubmitHandler<SearchPlaceProps> = (data) => {
    navigate(
      `/map?query=${data.query}&withs=${data.withs}&regions=${data.regions}&tags=${data.tags}`,
    );
  };

  return (
    <form
      onSubmit={handleSubmit(search)}
      className="min-h-[100vh] bg-[#f5f5f5]"
    >
      <SearchBar type="place" {...register('query')} />
      <div className="h-[100%] text-center flex flex-col gap-4 px-5">
        <h1 className="text-2xl font-bold leading-[50px]">
          검색하기 막막하시나요?
        </h1>
        <p className="text-sm">
          키워드 선택만 하시면 저희가 적합한 장소를 찾아드릴게요!
        </p>
        <CategoryChoice
          icon={<GrMap />}
          title="지역을 선택해주세요"
          not
          category={['동구', '대덕구', '유성구', '중구', '서구']}
          className="w-[50%]"
          onChange={(v) => setValue('regions', v)}
        />
        <CategoryChoice
          icon={<GoPerson />}
          not
          title="누구와 함께 가나요?"
          category={['혼자', '가족', '친구', '단체 모임', '연인', '부모님']}
          className="w-[70%]"
          onChange={(v) =>
            setValue(
              'withs',
              v.map((v) => v.split(' ').reverse()[0]),
            )
          }
        />
        <CategoryChoice
          title="지역을 선택해주세요"
          not
          category={[
            '데이트 코스',
            '맛집',
            '디저트',
            '교육적인',
            '추억만들기',
            '대전의 명물',
            '감성적인',
            '혼자서도 좋아요',
            '가족적인',
          ]}
          className="w-[80%]"
          onChange={(v) => setValue('tags', v)}
        />
        <div className="w-full px-8 pb-4">
          <Btn className="bg-primary text-white w-full">
            적합한 장소 검색하기!
          </Btn>
        </div>
      </div>
    </form>
  );
}
