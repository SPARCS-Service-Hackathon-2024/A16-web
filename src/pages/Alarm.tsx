import React from 'react';
import Header from './component/Header';
import AlarmLine from './component/AlarmLine';

export default function Alarm() {
  return (
    <div className="h-[100%] w-[100%]">
      <Header text="알림" back={true} border={true} />
      <div className="relative mx-[10%] h-[100%]">
        {/* <AlarmLine type="" /> */}
      </div>
    </div>
  );
}
