import { useState } from 'react';
import styled from 'styled-components';
import { 
    flexCenter, 
    flexBetweenRow, 
    flexStartRow, 
    h4Bold, 
    h8Regular, 
    h8Bold, 
    h9Regular, 
    h9Bold, 
    h11Regular 
} from '../../../styles/common';
import theme from '../../../styles/theme';
import CheckIconSrc from './create_icon/check-small.svg';

const MOCK_FAILLOGS = [
    { id: 1, category: '사업/창업', title: 'B 투자사 미팅 거절', desc: '미팅 성공으로 수출액 올리기', date: '2024.03.15 작성' },
    { id: 2, category: '사업/창업', title: 'A 투자사 미팅 거절', desc: '미팅 성공으로 수출액 올리기', date: '2023.11.02 작성' },
    { id: 3, category: '사업/창업', title: 'C 투자사 미팅 거절', desc: '미팅 성공으로 수출액 올리기', date: '2023.11.02 작성' },
];
const CATEGORIES = ['사업/창업', '공부/취업', '인간관계', '건강/루틴', '기타'];

const ProjectCreateModal = ({ onClose, onNext }) => {
    const [selectedCategory, setSelectedCategory] = useState('사업/창업');
    const [selectedLogId, setSelectedLogId] = useState(1);

    const handleSubmit = () => {
        onNext({ faillogId: selectedLogId });
    };

    return (
        <S.Overlay>
            <S.ModalWrap>
                <S.CloseBtn onClick={onClose}>✕</S.CloseBtn>

                <S.TitleRow>
                    <S.Title>어떤 페일로그의 프로젝트를 생성할 계획인가요?</S.Title>
                </S.TitleRow>

                <S.CategoryRow>
                    {CATEGORIES.map((cat) => (
                        <S.CategoryChip 
                            key={cat} 
                            $active={selectedCategory === cat}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </S.CategoryChip>
                    ))}
                </S.CategoryRow>

                <S.LogList>
                    {MOCK_FAILLOGS.map((log) => (
                        <S.LogCard 
                            key={log.id} 
                            $active={selectedLogId === log.id}
                            onClick={() => setSelectedLogId(log.id)}
                        >
                            <div>
                                <S.LogCategory>{log.category}</S.LogCategory>
                                <S.LogTitle>
                                    <strong>{log.title}</strong> - {log.desc}
                                </S.LogTitle>
                                <S.LogDate>{log.date}</S.LogDate>
                            </div>
                            <S.RadioCircle $active={selectedLogId === log.id}>
                                {selectedLogId === log.id && (
                                    <S.CheckIcon src={CheckIconSrc} alt="check" />
                                )}
                            </S.RadioCircle>
                        </S.LogCard>
                    ))}
                </S.LogList>

                <S.SubmitBtn onClick={handleSubmit}>이 로그의 프로젝트 생성하기</S.SubmitBtn>
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
    width: 520px;
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

S.TitleRow = styled.div`
    margin-bottom: 24px;
`;

S.Title = styled.h2`
    ${h4Bold}
    color: ${theme.PALETTE.black};
`;

S.CategoryRow = styled.div`
    ${flexStartRow}
    gap: 8px;
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${theme.GRAYSCALE[3]};
`;

S.CategoryChip = styled.button`
    padding: 8px 16px;
    border-radius: 10px;
    ${h9Bold}
    background: ${({ $active }) => ($active ? theme.PALETTE.third.main : theme.PALETTE.white)};
    color: ${({ $active }) => ($active ? theme.PALETTE.white : theme.GRAYSCALE[9])};
    border: 1px solid ${({ $active }) => ($active ? theme.PALETTE.third.main : theme.GRAYSCALE[4])};
`;

S.LogList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 32px;
`;

S.LogCard = styled.div`
    ${flexBetweenRow}
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid ${({ $active }) => ($active ? theme.PALETTE.third.main : theme.GRAYSCALE[4])};
    background: ${theme.PALETTE.white};
`;

S.LogCategory = styled.span`
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    ${h11Regular}
    background: ${theme.PALETTE.third.light};
    color: ${theme.PALETTE.third.main};
    margin-bottom: 8px;
`;

S.LogTitle = styled.p`
    ${h8Regular}
    color: ${theme.GRAYSCALE[9]};
    margin-bottom: 8px;

    strong {
        ${h8Bold}
        color: ${theme.PALETTE.black};
    }
`;

S.LogDate = styled.p`
    ${h9Regular}
    color: ${theme.GRAYSCALE[7]};
`;

S.RadioCircle = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    ${flexCenter}
    border: 1px solid ${({ $active }) => ($active ? theme.PALETTE.third.main : theme.GRAYSCALE[4])};
    background-color: ${({ $active }) => ($active ? theme.PALETTE.third.main : theme.PALETTE.white)};
`;

S.CheckIcon = styled.img`
    width: 14px;
    height: 14px;
    filter: brightness(0) invert(1);
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

export default ProjectCreateModal;