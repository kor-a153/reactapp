import { useState } from 'react';
import styled from 'styled-components';
import { 
	flexCenter, 
	flexBetweenRow, 
	h4Bold, 
	h8Regular, 
	h8Bold, 
	h9Regular, 
	h9Bold 
} from '../../../styles/common';
import theme from '../../../styles/theme';
import CheckIconSrc from './create_icon/check-small.svg';

const ProjectCreateStep1Modal = ({ onClose, onNext }) => {
	const [selected, setSelected] = useState('ai');

	const handleNext = () => {
		// 선택된 타입(ai 또는 direct)을 부모에게 전달
		onNext({ creationType: selected });
	};

	return (
		<S.Overlay>
			<S.ModalWrap>
				<S.CloseBtn onClick={onClose}>✕</S.CloseBtn>

				<S.Header>
					<S.Title>CREATE PROJECT</S.Title>
					<S.Subtitle>
						새로운 프로젝트를 만들어 드릴게요.<br />
						아래에서 선택사항에 체크 해주세요
					</S.Subtitle>
				</S.Header>

				<S.OptionList>
					<S.OptionCard 
						$active={selected === 'ai'} 
						onClick={() => setSelected('ai')}
					>
						<div>
							<S.OptionLabel $active={selected === 'ai'}>AI 기능</S.OptionLabel>
							<S.OptionDesc>AI 도움을 받아 프로젝트 작성하기</S.OptionDesc>
						</div>
						<S.RadioCircle $active={selected === 'ai'}>
							{selected === 'ai' && (
								<S.CheckIcon src={CheckIconSrc} alt="check" />
							)}
						</S.RadioCircle>
					</S.OptionCard>

					<S.OptionCard 
						$active={selected === 'direct'} 
						onClick={() => setSelected('direct')}
					>
						<div>
							<S.OptionDesc>직접 프로젝트 작성하기</S.OptionDesc>
						</div>
						<S.RadioCircle $active={selected === 'direct'}>
							{selected === 'direct' && (
								<S.CheckIcon src={CheckIconSrc} alt="check" />
							)}
						</S.RadioCircle>
					</S.OptionCard>
				</S.OptionList>

				<S.SubmitBtn onClick={handleNext}>프로젝트 작성하기</S.SubmitBtn>
			</S.ModalWrap>
		</S.Overlay>
	);
};

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

S.OptionList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-bottom: 32px;
`;

S.OptionCard = styled.div`
	${flexBetweenRow}
	padding: 24px 20px;
	border-radius: 10px;
	cursor: pointer;
	border: 1px solid ${({ $active }) => ($active ? theme.PALETTE.third.main : theme.GRAYSCALE[4])};
	background: ${({ $active }) => ($active ? theme.PALETTE.third.light : theme.PALETTE.white)};
`;

S.OptionLabel = styled.p`
	${h9Bold}
	color: ${({ $active }) => ($active ? theme.PALETTE.third.main : theme.GRAYSCALE[8])};
	margin-bottom: 6px;
`;

S.OptionDesc = styled.p`
	${h8Bold}
	color: ${theme.PALETTE.black};
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

export default ProjectCreateStep1Modal;