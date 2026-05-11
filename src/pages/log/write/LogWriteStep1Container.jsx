import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const LogWriteStep1Container = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [vision, setVision] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isVisionListOpen, setIsVisionListOpen] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const fileInputRef = useRef(null);

  const categories = [
    "사업/창업",
    "공부/취업",
    "인간관계",
    "건강/루틴",
    "기타"
  ];

  const visions = [
    "올해 안에 정보처리기사 자격증 따기",
    "네이버 입사하기",
    "살 15키로 빼기",
    "한달에 책 2권씩 읽기"
  ];

  const handleNext = () => {
    navigate("/logs/new/step2");
  };

  const handleVisionSelect = (selectedVision) => {
    setVision(selectedVision);
    setIsVisionListOpen(false);
  };

  const categoryRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
      if (visionRef.current && !visionRef.current.contains(event.target)) {
        setIsVisionListOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Header>
          <S.Title>Write Fail Log</S.Title>
          <S.SubTitle>로그 작성 가이드에 맞게 페일 로그 작성</S.SubTitle>
        </S.Header>

        <S.StepInfo>
          <S.StepBadgeRow>
            <S.StepBadge>Step 1</S.StepBadge>
            <S.StepTitle>비전, 제목, 카테고리, 썸네일 설정하기</S.StepTitle>
          </S.StepBadgeRow>
          <S.StepDesc>로그의 제목과 달성하고 싶은 최종 목표, 목표 태그, 로그 썸네일 사진을 설정해주세요.</S.StepDesc>
        </S.StepInfo>
        <S.ButtonRow>
          <S.NextButton onClick={handleNext}>다음</S.NextButton>
        </S.ButtonRow>

        <S.FormContainer>
          <S.FormRow>
            <S.FormGroup $flex={1.5}>
              <S.Label>로그 제목</S.Label>
              <S.Input
                placeholder="예) 정보처리기사 자격증 필기 도전기"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </S.FormGroup>

            <S.FormGroup $flex={1.2} ref={categoryRef}>
              <S.Label>카테고리</S.Label>
              <S.DropdownWrapper>
                <S.DropdownHeader $isOpen={isCategoryOpen} onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                  <S.DropdownText $hasValue={!!category}>{category || "카테고리를 선택해주세요."}</S.DropdownText>
                  <S.ArrowIcon $isOpen={isCategoryOpen} />
                </S.DropdownHeader>
                {isCategoryOpen && (
                  <S.FloatingList>
                    {categories.map((cat, idx) => (
                      <S.FloatingItem
                        key={idx}
                        $isSelected={category === cat}
                        onClick={() => {
                          setCategory(cat);
                          setIsCategoryOpen(false);
                        }}
                      >
                        {cat}
                      </S.FloatingItem>
                    ))}
                  </S.FloatingList>
                )}
              </S.DropdownWrapper>
            </S.FormGroup>
          </S.FormRow>

          <S.FormGroup ref={visionRef}>
            <S.LabelRow>
              <S.Label>이루고 싶은 비전</S.Label>
              <S.LoadVisionButton $isOpen={isVisionListOpen} type="button" onClick={() => setIsVisionListOpen(!isVisionListOpen)}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.6499 3.98242H13.3166M2.6499 7.98242H13.3166M2.6499 11.9824H13.3166" stroke="currentColor" strokeWidth="1.88235" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                기존 비전 불러오기
              </S.LoadVisionButton>
            </S.LabelRow>
            <S.Input
              placeholder="예) 정보처리기사 취득하기"
              value={vision}
              onChange={(e) => setVision(e.target.value)}
            />

            {isVisionListOpen && (
              <S.FloatingList>
                {visions.length > 0 ? (
                  visions.map((pv, idx) => (
                    <S.FloatingItem
                      key={idx}
                      $isSelected={vision === pv}
                      onClick={() => handleVisionSelect(pv)}
                    >
                      {pv}
                    </S.FloatingItem>
                  ))
                ) : (
                  <S.EmptyVision>
                    아직 작성된 비전이 없습니다.<br />
                    새로운 비전을 작성해주세요.
                  </S.EmptyVision>
                )}
              </S.FloatingList>
            )}
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>로그 썸네일 사진 첨부</S.Label>
            <S.ThumbnailRow>
              <S.UploadButtonArea onClick={() => fileInputRef.current?.click()}>
                <S.UploadIcon>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5001 9.51076C14.6327 9.51076 14.7599 9.56857 14.8536 9.67147C14.9473 9.77437 15 9.91394 15 10.0595V12.2543C15 12.9819 14.7371 13.6809 14.2682 14.1967C13.7993 14.7114 13.1685 15 12.4987 15H2.50133C1.83851 15 1.20168 14.7114 0.731806 14.1967C0.499498 13.9416 0.315288 13.6388 0.189717 13.3055C0.0641453 12.9722 -0.00032275 12.615 1.21494e-06 12.2543V10.0595C1.21494e-06 9.91394 0.0526656 9.77437 0.146409 9.67147C0.240152 9.56857 0.367295 9.51076 0.499868 9.51076C0.632441 9.51076 0.759584 9.56857 0.853327 9.67147C0.94707 9.77437 0.999735 9.91394 0.999735 10.0595V12.2543C0.999999 12.6905 1.15797 13.1087 1.43896 13.4172C1.71994 13.7256 2.10096 13.899 2.49833 13.8993H12.4957C12.893 13.899 13.2741 13.7256 13.555 13.4172C13.836 13.1087 13.994 12.6905 13.9943 12.2543V10.0595C13.9943 9.91394 14.0469 9.77437 14.1407 9.67147C14.2344 9.56857 14.3616 9.51076 14.4941 9.51076H14.5001ZM7.50963 12.066C7.37706 12.066 7.24991 12.0082 7.15617 11.9053C7.06243 11.8024 7.00976 11.6628 7.00976 11.5173L7.00976 1.87108L4.86033 4.23051C4.81386 4.28153 4.75868 4.32199 4.69796 4.3496C4.63724 4.37721 4.57216 4.39142 4.50643 4.39142C4.4407 4.39142 4.37562 4.37721 4.3149 4.3496C4.25417 4.32199 4.199 4.28153 4.15252 4.23051C4.10605 4.17949 4.06918 4.11893 4.04403 4.05227C4.01888 3.98562 4.00593 3.91417 4.00593 3.84203C4.00593 3.76988 4.01888 3.69844 4.04403 3.63178C4.06918 3.56513 4.10605 3.50456 4.15252 3.45354L7.15172 0.16132C7.19815 0.1102 7.25331 0.0696368 7.31403 0.0419549C7.37476 0.0142729 7.43987 1.52858e-05 7.50563 0C7.57139 1.52984e-05 7.6365 0.014273 7.69722 0.0419549C7.75795 0.0696369 7.81311 0.1102 7.85953 0.16132L10.8587 3.45354C10.9054 3.50549 10.9417 3.56475 10.9677 3.63133C11.0067 3.73119 11.0057 3.7696 11.0057 3.84203C11.0059 3.95079 10.9766 4.05716 10.9216 4.14763C10.8666 4.2381 10.7883 4.30858 10.6968 4.35013C10.6359 4.3779 10.5707 4.39219 10.5048 4.39219C10.4389 4.39219 10.3737 4.3779 10.3129 4.35013C10.2523 4.32233 10.1972 4.28168 10.1509 4.23051L8.0015 1.87108L8.0015 11.5173C8.0015 11.6628 7.94883 11.8024 7.85509 11.9053C7.76135 12.0082 7.6342 12.066 7.50163 12.066H7.50963Z" fill="currentColor" />
                  </svg>
                </S.UploadIcon>
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
                  <S.FileNameContainer>
                    <S.PreviewFileName>{thumbnail.name}</S.PreviewFileName>
                  </S.FileNameContainer>
                  <S.DeleteIcon onClick={handleDeleteImage}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </S.DeleteIcon>
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #F8F9FA;
`;

S.ContentWrapper = styled.div`
  width: 100%;
  max-width: 872px;
`;

S.Header = styled.div`
  text-align: left;
  margin-bottom: 50px;
`;

S.Title = styled.h1`
  font-size: 60px;
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.TEXT_COLOR.basic};
`;

S.SubTitle = styled.p`
  font-size: ${theme.FONT_SIZE.h8};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.TEXT_COLOR.basic};
`;

S.StepInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;
`;

S.ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
`;


S.StepBadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

S.StepBadge = styled.span`
  color: ${theme.PALETTE.third.main};
  font-size: ${theme.FONT_SIZE.h5};
  font-weight: ${theme.FONT_WEIGHT.bold};
  white-space: nowrap;
`;

S.StepTitle = styled.h2`
  font-size: ${theme.FONT_SIZE.h5};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
`;

S.StepDesc = styled.p`
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.GRAYSCALE[9]};
`;

S.NextButton = styled.button`
  padding: 10px 28px;
  background-color: ${theme.PALETTE.white};
  color: ${theme.GRAYSCALE[9]};
  border: 1px solid ${theme.GRAYSCALE[4]};
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
  background-color: ${theme.PALETTE.white};
  border-radius: 16px;
  padding: 40px 50px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 36px;
  border: 1px solid ${theme.GRAYSCALE[4]};

  /* The left purple bar */
  &::before {
    content: '';
    position: absolute;
    top: 24px;
    bottom: 24px;
    left: 0px;
    width: 5px;
    background-color: ${theme.PALETTE.third.main};
    border-radius: 0 4px 4px 0;
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
  align-items: flex-end;
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
  font-family: inherit;
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.TEXT_COLOR.basic};
  outline: none;
  background-color: ${theme.PALETTE.white};

  &::placeholder {
    color: ${theme.GRAYSCALE[9]};
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
  font-weight: ${theme.FONT_WEIGHT.regular};
  background-color: ${theme.PALETTE.white};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: border-color 0.2s;
`;

S.DropdownText = styled.span`
  color: ${({ $hasValue }) => $hasValue ? theme.TEXT_COLOR.basic : theme.GRAYSCALE[9]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

S.FloatingList = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${theme.PALETTE.white};
  border: 1px solid ${theme.GRAYSCALE[3]};
  border-radius: 8px;
  overflow: hidden;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

S.FloatingItem = styled.li`
  padding: 14px 20px;
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.TEXT_COLOR.basic};
  cursor: pointer;
  background-color: ${({ $isSelected }) => ($isSelected ? theme.PALETTE.third.light : 'transparent')};
  
  /* Prevent layout shift by using a transparent border initially */
  border: 1.5px solid transparent;
  border-bottom: 1px solid ${theme.GRAYSCALE[2]};
  position: relative;
  transition: border-color 0.1s ease;

  &:last-child {
    border-bottom: 1.5px solid transparent;
  }

  &:hover {
    border: 1.5px solid ${theme.PALETTE.third.main};
    border-radius: 8px;
    z-index: 1;
    /* Maintain background color as per user request */
    background-color: ${({ $isSelected }) => ($isSelected ? theme.PALETTE.third.light : 'transparent')};
  }

  /* Apply the same border for selected items as seen in the photo */
  ${({ $isSelected }) => $isSelected && `
    border: 1.5px solid ${theme.PALETTE.third.main};
    border-radius: 8px;
    z-index: 1;
  `}
`;

S.LoadVisionButton = styled.button`
  padding: 10px 16px;
  border: 1px solid ${({ $isOpen }) => $isOpen ? theme.PALETTE.third.main : theme.GRAYSCALE[3]};
  background-color: ${theme.PALETTE.white};
  border-radius: 6px;
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${({ $isOpen }) => $isOpen ? theme.PALETTE.third.main : theme.GRAYSCALE[9]};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  transition: border-color 0.2s, color 0.2s, background-color 0.2s;

  &:hover {
    background-color: ${theme.PALETTE.white};
  }

  &:active {
    border-color: ${theme.PALETTE.third.main};
    color: ${theme.PALETTE.third.main};
  }
`;

S.EmptyVision = styled.li`
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
    background-color: ${theme.PALETTE.white};
  }

  &:active {
    border-color: ${theme.PALETTE.third.main};
    background-color: ${theme.PALETTE.white};
  }
`;

S.UploadIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.GRAYSCALE[9]};
`;

S.UploadIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.GRAYSCALE[9]};
`;

S.UploadText = styled.span`
  font-size: ${theme.FONT_SIZE.h8};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.GRAYSCALE[9]};
`;

S.PreviewWrapper = styled.div`
  flex: 1; /* aligns with category input area */
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 200px;
  border: 1.5px solid ${theme.GRAYSCALE[2]};
  border-radius: 12px;
  background-color: ${theme.PALETTE.white};
`;

S.PreviewImage = styled.img`
  width: 100%;
  height: 110px;
  object-fit: cover;
  border-radius: 11px 11px 0 0;
`;

S.FileNameContainer = styled.div`
  padding: 12px 16px;
  width: 100%;
  box-sizing: border-box;
`;

S.PreviewFileName = styled.span`
  font-size: ${theme.FONT_SIZE.h11};
  color: ${theme.PALETTE.primary.main};
  text-decoration: underline;
  text-underline-offset: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  width: 100%;
`;

S.DeleteIcon = styled.div`
  position: absolute;
  top: -24px;
  right: 0;
  cursor: pointer;
  z-index: 10;
  color: ${theme.TEXT_COLOR.basic};
  transition: transform 0.2s, color 0.2s;

  &:hover {
    transform: scale(1.1);
    color: ${theme.PALETTE.fourth.main};
  }
`;

export default LogWriteStep1Container;
