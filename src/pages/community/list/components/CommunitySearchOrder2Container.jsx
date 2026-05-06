import React from 'react';
import CommunitySearchOrder2Component from './CommunitySearchOrder2Component';

const CommunitySearchOrder2Container = () => {
  
  const select = 0;

  const handleOnChangeDropDown = (option) => {
    switch(option) {
      case "최신순":
        console.log("0");
        break;
      case "좋아요 순":
        console.log("1");
        break;
      case "조회 순":
        console.log("2");
        break;
    }

  }
  
  return (
    <div>
      <CommunitySearchOrder2Component onChange={handleOnChangeDropDown}></CommunitySearchOrder2Component>
    </div>
  );
};

export default CommunitySearchOrder2Container;