// 카테고리 번호를 입력받으면 카테고리명, 카테고리 배경색, 텍스트색정보를 반환한다.
const getCategoryInfo = (num) => {
  const info = {}
  switch(num) {
    case 0:
      info["name"] = "공부/취업"
      info["textColor"] = "faillog_blue"
      info["bgColor"] = "faillog_light_blue"
      break;
    case 1:
      info["name"] = "사업/창업"
      info["textColor"] = "faillog_purple"
      info["bgColor"] = "faillog_light_purple"
      break;
    case 2:
      info["name"] = "인간관계"
      info["textColor"] = "faillog-red"
      info["bgColor"] = "faillog_light_red"
      break;
    case 3:
      info["name"] = "건강/루틴"
      info["textColor"] = "faillog_green"
      info["bgColor"] = "faillog_light_green"
      break;
    case 4:
      info["name"] = "기타"
      info["textColor"] = "faillog-black"
      info["bgColor"] = "faillog_gray2"
      break;
    default:
      info["name"] = "없음"
      info["textColor"] = "faillog-black"
      info["bgColor"] = "faillog_gray2"
      break;
  }

  return info;

}

export default getCategoryInfo