import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const LogWriteStep1Container = () => {
  const navigate = useNavigate();
  
  // State
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [vision, setVision] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isVisionListOpen, setIsVisionListOpen] = useState(false);
  const [thumbnail, setThumbnail] = useState(null); // { url, name }
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setThumbnail({ url, name: file.name });
  };

  const handleDeleteImage = () => {
    setThumbnail(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Hardcoded mock data for past visions
  const pastVisions = [
    "올해 안에 정보처리기사 자격증 따기",
    "네이버 입사하기",
    "살 15키로 빼기",
    "한달에 책 2권씩 읽기"
  ];

  const categories = [
    "나눔/정보",
    "공부/개발",
    "진로/선택",
    "진로/취업",
    "기타"
  ];

  const handleNext = () => {
    // Validate if needed, then navigate
    navigate("/logs/new/step2");
  };

  const handleVisionSelect = (selectedVision) => {
    setVision(selectedVision);
    setIsVisionListOpen(false);
  };

  // Close category dropdown when clicking outside
  const categoryRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Header>
          <S.Title>Write Fail Log</S.Title>
          <S.SubTitle>로그 작성 가이드에 맞게 페일 로그 작성</S.SubTitle>
        </S.Header>

        <S.TopArea>
          <S.StepInfo>
            <S.StepBadge>Step 1</S.StepBadge>
            <S.StepTitle>비전, 제목, 카테고리, 썸네일 설정하기</S.StepTitle>
            <S.StepDesc>로그의 목적과 달성하고 싶은 비전, 목표, 카테고리, 썸네일 사진을 설정해 주세요.</S.StepDesc>
          </S.StepInfo>
          <S.NextButton onClick={handleNext}>다음</S.NextButton>
        </S.TopArea>

        <S.FormContainer>
          <S.FormRow>
            <S.FormGroup $flex={2}>
              <S.Label>로그 제목</S.Label>
              <S.Input 
                placeholder="예) 정보처리기사 자격증 필기 도전기" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </S.FormGroup>

            <S.FormGroup $flex={1} ref={categoryRef}>
              <S.Label>카테고리</S.Label>
              <S.DropdownWrapper>
                <S.DropdownHeader $isOpen={isCategoryOpen} onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                  <S.DropdownText $hasValue={!!category}>{category || "카테고리를 선택해주세요."}</S.DropdownText>
                  <S.ArrowIcon $isOpen={isCategoryOpen} />
                </S.DropdownHeader>
                {isCategoryOpen && (
                  <S.DropdownList>
                    {categories.map((cat, idx) => (
                      <S.DropdownItem 
                        key={idx} 
                        $isSelected={category === cat}
                        onClick={() => {
                          setCategory(cat);
                          setIsCategoryOpen(false);
                        }}
                      >
                        {cat}
                      </S.DropdownItem>
                    ))}
                  </S.DropdownList>
                )}
              </S.DropdownWrapper>
            </S.FormGroup>
          </S.FormRow>

          <S.FormGroup>
            <S.LabelRow>
              <S.Label>이루고 싶은 비전</S.Label>
              <S.LoadVisionButton $isOpen={isVisionListOpen} type="button" onClick={() => setIsVisionListOpen(!isVisionListOpen)}>
                ≡ 기존 비전 불러오기
              </S.LoadVisionButton>
            </S.LabelRow>
            <S.Input 
              placeholder="예) 정보처리기사 취득하기" 
              value={vision}
              onChange={(e) => setVision(e.target.value)}
            />
            
            {isVisionListOpen && (
              <S.PastVisionContainer>
                {pastVisions.length > 0 ? (
                  <S.PastVisionList>
                    {pastVisions.map((pv, idx) => (
                      <S.PastVisionItem key={idx} onClick={() => handleVisionSelect(pv)}>
                        {pv}
                      </S.PastVisionItem>
                    ))}
                  </S.PastVisionList>
                ) : (
                  <S.EmptyVision>
                    아직 작성된 비전이 없습니다.<br/>
                    새로운 비전을 작성해주세요.
                  </S.EmptyVision>
                )}
              </S.PastVisionContainer>
            )}
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>로그 썸네일 사진 첨부</S.Label>
            <S.ThumbnailRow>
              <S.UploadButtonArea onClick={() => fileInputRef.current?.click()}>
                <S.UploadIcon>↑</S.UploadIcon>
                <S.UploadText>클릭해서 사진 업로드 (JPG, PNG / 최대 5MB)</S.UploadText>
              </S.UploadButtonArea>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
              
              {thumbnail && (
                <S.PreviewWrapper>
                  <S.PreviewImage src={thumbnail.url} alt="thumbnail" />
                  <S.DeleteIcon onClick={handleDeleteImage}>×</S.DeleteIcon>
                  <S.PreviewFileName>{thumbnail.name}</S.PreviewFileName>
                </S.PreviewWrapper>
              )}
            </S.ThumbnailRow>
          </S.FormGroup>
        </S.FormContainer>

      </S.ContentWrapper>
    </S.Wrapper>
  );
};

const S = {};

S.Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
`;

S.ContentWrapper = styled.div`
  width: 100%;
  max-width: 900px; /* Increased slightly to match proportions in image */
`;

S.Header = styled.div`
  text-align: left;
  margin-bottom: 40px;
`;

S.Title = styled.h1`
  font-size: ${theme.FONT_SIZE.h2};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
  margin-bottom: 12px;
`;

S.SubTitle = styled.p`
  font-size: ${theme.FONT_SIZE.h9};
  color: ${theme.GRAYSCALE[6]};
`;

S.TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

S.StepInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

S.StepBadge = styled.span`
  color: ${theme.PALETTE.third.main};
  font-size: ${theme.FONT_SIZE.h6};
  font-weight: ${theme.FONT_WEIGHT.bold};
  margin-right: 15px;
`;

S.StepTitle = styled.h2`
  font-size: ${theme.FONT_SIZE.h6};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
  margin-right: 15px;
`;

S.StepDesc = styled.p`
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.GRAYSCALE[5]};
`;

S.NextButton = styled.button`
  padding: 10px 28px;
  background-color: ${theme.PALETTE.white};
  color: ${theme.TEXT_COLOR.basic};
  border: 1px solid ${theme.GRAYSCALE[3]};
  border-radius: 8px;
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.bold};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background-color: ${theme.PALETTE.third.main};
    color: ${theme.PALETTE.white};
    border-color: ${theme.PALETTE.third.main};
  }
`;

S.FormContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${theme.PALETTE.white}; /* Changed to match image */
  border-radius: 12px;
  padding: 50px 60px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 45px;
  border: 1px solid ${theme.GRAYSCALE[2]};

  /* The left purple bar floating inside */
  &::before {
    content: '';
    position: absolute;
    top: 30px;
    bottom: 30px;
    left: -1px;
    width: 6px;
    background-color: ${theme.PALETTE.third.main};
    border-radius: 4px;
  }
`;

S.FormRow = styled.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

S.FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: ${({ $flex }) => $flex || 1};
  position: relative;
`;

S.LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

S.Label = styled.label`
  font-size: ${theme.FONT_SIZE.h8};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
`;

S.Input = styled.input`
  width: 100%;
  padding: 18px 24px;
  border: 1px solid ${theme.GRAYSCALE[3]};
  border-radius: 8px;
  font-size: ${theme.FONT_SIZE.h9};
  outline: none;
  background-color: ${theme.PALETTE.white};

  &::placeholder {
    color: ${theme.GRAYSCALE[5]};
  }

  &:focus {
    border-color: ${theme.PALETTE.third.main};
  }
`;

S.DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
`;

S.DropdownHeader = styled.div`
  width: 100%;
  padding: 18px 24px;
  border: 1px solid ${({ $isOpen }) => $isOpen ? theme.PALETTE.third.main : theme.GRAYSCALE[3]};
  border-radius: 8px;
  font-size: ${theme.FONT_SIZE.h9};
  background-color: ${theme.PALETTE.white};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: border-color 0.2s;
`;

S.DropdownText = styled.span`
  color: ${({ $hasValue }) => $hasValue ? theme.TEXT_COLOR.basic : theme.GRAYSCALE[5]};
`;

S.ArrowIcon = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-right: 2px solid ${({ $isOpen }) => $isOpen ? theme.PALETTE.third.main : theme.GRAYSCALE[5]};
  border-bottom: 2px solid ${({ $isOpen }) => $isOpen ? theme.PALETTE.third.main : theme.GRAYSCALE[5]};
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(-135deg) translateY(3px)' : 'rotate(45deg) translateY(-3px)'};
  transition: transform 0.3s ease, border-color 0.2s;
  flex-shrink: 0;
  margin-bottom: ${({ $isOpen }) => $isOpen ? '-4px' : '4px'};
`;

S.DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 8px;
  background-color: ${theme.PALETTE.white};
  border: 1px solid ${theme.GRAYSCALE[3]};
  border-radius: 8px;
  overflow: hidden;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

S.DropdownItem = styled.li`
  padding: 14px 20px;
  font-size: ${theme.FONT_SIZE.h9};
  cursor: pointer;
  color: ${theme.TEXT_COLOR.basic};
  background-color: ${({ $isSelected }) => ($isSelected ? theme.PALETTE.third.light : 'transparent')};

  &:hover {
    background-color: ${({ $isSelected }) => ($isSelected ? theme.PALETTE.third.light : theme.GRAYSCALE[0])};
  }
`;

S.LoadVisionButton = styled.button`
  padding: 10px 16px;
  border: 1px solid ${({ $isOpen }) => $isOpen ? theme.PALETTE.third.main : theme.GRAYSCALE[3]};
  background-color: ${theme.PALETTE.white};
  border-radius: 6px;
  font-size: ${theme.FONT_SIZE.h10};
  color: ${({ $isOpen }) => $isOpen ? theme.PALETTE.third.main : theme.GRAYSCALE[6]};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  transition: border-color 0.2s, color 0.2s, background-color 0.2s;

  &:hover {
    background-color: ${theme.GRAYSCALE[0]};
  }

  &:active {
    border-color: ${theme.PALETTE.third.main};
    color: ${theme.PALETTE.third.main};
  }
`;

S.PastVisionContainer = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  border: 1px solid ${theme.GRAYSCALE[3]};
  border-radius: 8px;
  background-color: ${theme.PALETTE.white};
  overflow: hidden;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

S.PastVisionList = styled.ul`
  display: flex;
  flex-direction: column;
`;

S.PastVisionItem = styled.li`
  padding: 16px 24px;
  font-size: ${theme.FONT_SIZE.h9};
  color: ${theme.TEXT_COLOR.basic};
  cursor: pointer;
  border-bottom: 1px solid ${theme.GRAYSCALE[1]};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${theme.GRAYSCALE[0]};
  }
`;

S.EmptyVision = styled.div`
  padding: 50px 20px;
  text-align: center;
  color: ${theme.GRAYSCALE[5]};
  font-size: ${theme.FONT_SIZE.h9};
  line-height: 1.6;
`;

S.ThumbnailRow = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
`;

S.UploadButtonArea = styled.div`
  flex: 2; /* aligns width with Title input */
  height: 64px;
  border: 1px solid ${theme.GRAYSCALE[3]};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.PALETTE.white};
  cursor: pointer;
  gap: 10px;
  transition: border-color 0.2s, background-color 0.2s;

  &:hover {
    background-color: ${theme.GRAYSCALE[0]};
  }

  &:active {
    border-color: ${theme.PALETTE.third.main};
    background-color: ${theme.PALETTE.white};
  }
`;

S.UploadIcon = styled.div`
  font-size: 20px;
  color: ${theme.GRAYSCALE[5]};
`;

S.UploadText = styled.span`
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.GRAYSCALE[6]};
`;

S.PreviewWrapper = styled.div`
  flex: 1; /* aligns with category input area */
  display: flex;
  flex-direction: column;
  position: relative;
  width: max-content;
  align-items: flex-start;
`;

S.PreviewImage = styled.img`
  width: 140px;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid ${theme.GRAYSCALE[2]};
`;

S.DeleteIcon = styled.div`
  position: absolute;
  top: -8px;
  left: 130px;
  width: 20px;
  height: 20px;
  background-color: ${theme.PALETTE.white};
  border: 1px solid ${theme.GRAYSCALE[3]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  color: ${theme.TEXT_COLOR.basic};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  &:hover {
    background-color: ${theme.GRAYSCALE[0]};
  }
`;

S.PreviewFileName = styled.a`
  margin-top: 8px;
  font-size: 12px;
  color: ${theme.PALETTE.primary.main};
  text-decoration: underline;
  cursor: pointer;
`;

export default LogWriteStep1Container;
