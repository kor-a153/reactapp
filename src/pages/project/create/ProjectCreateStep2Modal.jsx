import { useState } from 'react';
import styled from 'styled-components';
import { 
    flexCenter, 
    h4Bold, 
    h8Regular, 
    h8Bold, 
    h9Regular 
} from '../../../styles/common';
import theme from '../../../styles/theme';

const ProjectCreateStep2Modal = ({ onClose, onSubmit, projectName: initialName, isActive: initialActive }) => {
    const [projectName, setProjectName] = useState(initialName || '');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isActive, setIsActive] = useState(initialActive ?? true);

    const handleSubmit = () => {
        onSubmit({ projectName, startDate, endDate, isActive });
    };

    return (
        <S.Overlay>
            <S.ModalWrap>
                <S.CloseBtn onClick={onClose}>✕</S.CloseBtn>

                <S.Header>
                    <S.Title>CREATE PROJECT</S.Title>
                    <S.Subtitle>
                        AI로 프로젝트를 생성합니다.<br />
                        원활한 프로젝트 생성을 위해 프로젝트의 이름을 기입해 주세요
                    </S.Subtitle>
                </S.Header>

                <S.Form>
                    <S.InputGroup>
                        <S.Label>프로젝트 이름</S.Label>
                        <S.Input 
                            type="text" 
                            placeholder="프로젝트 이름을 입력해주세요." 
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                        />
                    </S.InputGroup>

                    <S.InputGroup>
                        <S.Label>시작일</S.Label>
                        <S.InputWrapper>
                            <S.Input 
                                type="date" 
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </S.InputWrapper>
                    </S.InputGroup>

                    <S.InputGroup>
                        <S.Label>종료일</S.Label>
                        <S.InputWrapper>
                            <S.Input 
                                type="date" 
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </S.InputWrapper>
                    </S.InputGroup>
                </S.Form>

                <S.SubmitBtn onClick={handleSubmit}>생성하기</S.SubmitBtn>
            </S.ModalWrap>
        </S.Overlay>
    );
};

// --- Styled Components ---
const S = {};

S.Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1000;
    ${flexCenter}
`;

S.ModalWrap = styled.div`
    width: 480px;
    background: ${theme.PALETTE.white};
    border-radius: 15px;
    padding: 40px;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

S.CloseBtn = styled.button`
    position: absolute;
    top: 24px;
    right: 24px;
    font-size: 20px;
    color: ${theme.GRAYSCALE[7]};
`;

S.Header = styled.div`
    margin-bottom: 32px;
`;

S.Title = styled.h2`
    ${h4Bold}
    color: ${theme.PALETTE.black};
    margin-bottom: 12px;
`;

S.Subtitle = styled.p`
    ${h9Regular}
    color: ${theme.GRAYSCALE[8]};
    line-height: 1.4;
`;

S.Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 36px;
`;

S.InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

S.Label = styled.label`
    ${h8Bold}
    color: ${theme.PALETTE.black};
`;

S.InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

S.Input = styled.input`
    width: 100%;
    height: 48px;
    border-radius: 10px;
    border: 1px solid ${theme.GRAYSCALE[4]};
    padding: 0 16px;
    ${h9Regular}
    color: ${theme.PALETTE.black};
    outline: none;
    font-family: 'pretendard', sans-serif;

    &::placeholder {
        color: ${theme.GRAYSCALE[6]};
    }

    &:focus {
        border-color: ${theme.PALETTE.third.main};
    }
`;

S.SubmitBtn = styled.button`
    width: 100%;
    height: 52px;
    border-radius: 10px;
    background: ${theme.PALETTE.third.main};
    color: ${theme.PALETTE.white};
    ${h8Bold}

    &:hover {
        background: #9333ea;
    }
`;

export default ProjectCreateStep2Modal;