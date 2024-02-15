import Header from './component/Header';

export default function Point() {
  return (
    <div className=" h-custom">
      <Header text="설정" back={true} />
      <div className="bg-[#f5f5f5] w-full h-full flex flex-col gap-4 p-5">
        <div className="flex justify-center">
          <img className="h-6 w-6 mr-3" src="/assets/Point.png" alt="" />
          <h1 className="text-xl">내 포인트 확인 및 교환하기</h1>
        </div>
        <div className="w-full bg-white px-2 py-5 flex flex-col justify-center items-center rounded-xl">
          <p>홍길동님이 현재까지 모은 포인트</p>
          <div className="flex items-center justify-center">
            <h3 className="text-[#2E83F2] text-[50px]">3,456</h3>
            <span>point</span>
          </div>
          <p className="text-sm text-[#828282]">
            *모은 포인트는 상품권으로 교환 가능해요!
          </p>
        </div>
        <div className="mt-auto">
          <h3>포인트는 어떻게 얻을 수 있나요?</h3>
          <p className="text-sm text-gray-500">
            리뷰를 업로드만 해도 포인트가 지급됩니다.
          </p>
          <p className="text-sm text-gray-500">
            리뷰의 공감 수가 늘어남에 따라 포인트가 지급됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
