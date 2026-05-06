import React from 'react';
import myStyle from '../../styles/CommunitySearchStyle'
import SearchComponent from './SearchComponent';
import CommunitySearchOrderComponent from './CommunitySearchOrderComponent';

const CommunitySearchComponent = () => {
  
  const select = 0;
  const search = "";

  const handleSubmit = (data) => {
    console.log("값 : " + data);
  }

// '제목', '제목+내용', '내용', '작성자', '댓글'

  const handleOnChangeDropDown = (option) => {
    switch(option) {
      case "제목":
        console.log("0");
        break;
      case "제목+내용":
        console.log("1");
        break;
      case "내용":
        console.log("2");
        break;
      case "작성자":
        console.log("3");
        break;
      case "댓글":
        console.log("4");
        break;
    }

  }

  return (
    <div>
      <myStyle.component>
        <SearchComponent onSubmit={handleSubmit}></SearchComponent>
        <CommunitySearchOrderComponent onChange={handleOnChangeDropDown}></CommunitySearchOrderComponent>
      </myStyle.component>
    </div>
  );
};

export default CommunitySearchComponent;