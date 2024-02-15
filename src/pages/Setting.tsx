import React from 'react';
import Header from './component/Header';
import SettingText from './component/SettingText';

export default function Store() {
  return (
    <div>
      <Header text="설정" back border />
      <SettingText text="내 개인정보 수정"></SettingText>
      <SettingText text="비밀번호 변경"></SettingText>
      <SettingText text="알림 설정"></SettingText>
      <SettingText text="내 포인트 확인 및 교환하기" icon border></SettingText>
      <SettingText text="와유가 궁금해요"></SettingText>
      <SettingText text="공지사항"></SettingText>
      <SettingText text="자주 묻는 질문"></SettingText>
      <SettingText text="의견 보내기"></SettingText>
      <SettingText text="서비스이용약관"></SettingText>
      <SettingText text="개인정보처리방침"></SettingText>
      <SettingText text="버전 정보" border></SettingText>
      <SettingText text="로그아웃"></SettingText>
    </div>
  );
}
