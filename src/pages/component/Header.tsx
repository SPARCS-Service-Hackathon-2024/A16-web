import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import alarmSrc from '../../assets/alarm.png';
import SearchMenu from './SearchMenu';

type HeaderProps = {
  text?: string;
  back?: boolean;
  alarm?: boolean;
  review?: boolean;
  search?: boolean;
  setting?: boolean;
  className?: string;
  border?: boolean;
  white?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  text,
  back,
  alarm,
  review,
  search,
  className,
  setting,
  border,
  white,
}) => {
  const navigate = useNavigate();

  const toBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <div
        className={`max-w-screen-sm w-[100%] h-[56px] left-50% px-5 z-50 sticky top-0 flex justify-between items-center pl-3 leading-[56px] ${
          white ? 'bg-inherit' : 'bg-white'
        } ${border && 'border-b border-[#E5E5E5]'} ${className}`}
      >
        <div className="w-[100px]">
          {back && (
            <button
              type="button"
              onClick={toBackClick}
              className="bg-transparent outline-none h-[24px] w-[24px] flex items-center"
            >
              <img
                src={white ? '/assets/back_white.png' : '/assets/back.png'}
                alt="back"
                className={`object-cover w-auto h-full`}
              />
            </button>
          )}
        </div>
        <div className="flex justify-center">
          {text ? (
            <p>{text}</p>
          ) : (
            <Link
              to={'/'}
              onClick={toBackClick}
              className="bg-transparent outline-none h-[48px] flex justify-end"
            >
              <img
                src="/assets/logo.png"
                alt="back"
                className="object-cover w-auto h-full"
              />
            </Link>
          )}
        </div>
        <div className="flex w-[100px] justify-end">
          {alarm && (
            <Link
              to={'/Alarm'}
              className="bg-transparent outline-none h-[24px] w-[48px] flex justify-end"
            >
              <img
                src={alarmSrc}
                alt="back"
                className={`object-cover w-auto h-full`}
              />
            </Link>
          )}
          {review && (
            <Link
              to={'/Review'}
              className="bg-transparent outline-none h-[24px] w-[48px] flex justify-end"
            >
              <img
                src={white ? '/assets/review_white.png' : '/assets/review.png'}
                alt="back"
                className={`object-cover w-auto h-full`}
              />
            </Link>
          )}
          {setting && (
            <Link
              to={'/Setting'}
              className="bg-transparent outline-none h-[24px] w-[48px] flex justify-end"
            >
              <img
                src="/assets/setting.png"
                alt="back"
                className={`object-cover w-auto h-full`}
              />
            </Link>
          )}
        </div>
      </div>
      {search && <SearchMenu />}
    </div>
  );
};

export default Header;
