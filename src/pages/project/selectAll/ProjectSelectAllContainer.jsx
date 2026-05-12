import { useState } from 'react';
import styled from 'styled-components';
import {
	flexBetweenRow,
	flexStartRow,
	flexCenterRow,
	flexCenter,
	h3Bold,
	h4Bold,
	h5Regular,
	h6Bold,
	h8Bold,
	h8Regular,
	h9Bold,
	h9Regular,
} from '../../../styles/common';
import theme from '../../../styles/theme';
import ArrowUpIcon from '../project_icon/la_arrow-up.svg';

// 모달 및 스토어 Import
import ProjectCreateModal from '../create/ProjectCreateModal';
import ProjectCreateStep1Modal from '../create/ProjectCreateStep1Modal';
import ProjectCreateStep2Modal from '../create/ProjectCreateStep2Modal';
import ProjectEditModal from '../edit/ProjectEditModal';
import useProjectStore from '../../../store/projectStore';

// ─────────────────────────────────────────
// MOCK DATA
// ─────────────────────────────────────────
const MOCK_PROJECTS = [
	{ id: 1, name: '하루 1시간 영어 듣기 훈련', owner: '영어원주민', ownerInitial: '영', ownerColor: theme.PALETTE.third.main, dDay: 'D+45', tags: ['미드 팟캐스트 정복', '자기 전 섀도잉하기'], accentColor: theme.PALETTE.third.main },
	{ id: 2, name: '매일 새벽 5시 기상 프로젝트', owner: '영어원주민', ownerInitial: '영', ownerColor: theme.PALETTE.fifth.main, dDay: 'D+45', tags: ['새벽 기상 스터디 참여', '모닝 스트레칭'], accentColor: theme.PALETTE.fifth.main },
	{ id: 3, name: '오전 6시 기상 + 1시간 공부 루틴', owner: '영어원주민', ownerInitial: '영', ownerColor: theme.PALETTE.yellow, dDay: 'D+45', tags: ['기상 직후 루틴 프로그램', '아침 공부법'], accentColor: theme.PALETTE.yellow },
	{ id: 4, name: '주 5일 운동 + 식단 기록', owner: '영어원주민', ownerInitial: '영', ownerColor: theme.PALETTE.secondary.main, dDay: 'D+45', tags: ['기상 직후 루틴 프로그램', '아침 공부법'], accentColor: theme.PALETTE.secondary.main },
	{ id: 5, name: '한 달에 책 4권 읽기', owner: '영어원주민', ownerInitial: '영', ownerColor: theme.PALETTE.primary.main, dDay: 'D+45', tags: ['주말 도서관 투어', '자투리 시간 독서 습관화'], accentColor: theme.PALETTE.primary.main },
	{ id: 6, name: '매일 밤 10분 영상 루틴', owner: '영어원주민', ownerInitial: '영', ownerColor: theme.PALETTE.fourth.main, dDay: 'D+45', tags: ['수면 환경 최적화 세팅', '영상 100일 챌린지'], accentColor: theme.PALETTE.fourth.main },
];

// ─────────────────────────────────────────
// SUB COMPONENTS
// ─────────────────────────────────────────
const FolderIcon = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
		<path
			d="M2.5 5C2.5 4.45 2.95 4 3.5 4H6.5L7.5 5H12.5C13.05 5 13.5 5.45 13.5 6V11.5C13.5 12.05 13.05 12.5 12.5 12.5H3.5C2.95 12.5 2.5 12.05 2.5 11.5V5Z"
			stroke={theme.GRAYSCALE[10]}
			strokeWidth="1"
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="none"
		/>
	</svg>
);

const ProjectCard = ({ project, $community, onClick }) => (
	<S.CardWrapper>
		<S.Card onClick={() => !$community && onClick?.(project)}>
			<S.AccentBar $color={project.accentColor || theme.PALETTE.third.main} />
			<S.CardContent>
				<S.CardTop>
					<S.OwnerRow>
						<S.OwnerAvatar $color={project.ownerColor || theme.PALETTE.third.main}>
							{project.ownerInitial || '나'}
						</S.OwnerAvatar>
						<S.OwnerName>{project.owner || '나의 프로젝트'}</S.OwnerName>
					</S.OwnerRow>
					{!$community && <S.DDay>{project.dDay || 'D-Day'}</S.DDay>}
				</S.CardTop>
				<S.CardTitle>{project.name}</S.CardTitle>
				<S.TagRow>
					{(project.tags || []).map((tag, idx) => (
						<S.Tag key={idx}><FolderIcon />{tag}</S.Tag>
					))}
				</S.TagRow>
			</S.CardContent>
		</S.Card>
	</S.CardWrapper>
);

const Pagination = ({ minPage = 1, maxPage = 10, currentPage, onPageChange }) => {
	const groupStart = Math.floor((currentPage - minPage) / 5) * 5 + minPage;
	const pages = [];
	for (let i = groupStart; i <= Math.min(groupStart + 4, maxPage); i++) {
		pages.push(i);
	}
	const canPrev = groupStart > minPage;
	const canNext = groupStart + 5 <= maxPage;

	return (
		<S.PaginationWrapper>
			<S.NavButton onClick={() => canPrev && onPageChange(groupStart - 1)} disabled={!canPrev}>
				<svg width="8" height="14" viewBox="0 0 8 14" fill="none">
					<path d="M7 1L1 7L7 13" stroke={canPrev ? theme.GRAYSCALE[9] : theme.GRAYSCALE[4]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</S.NavButton>
			{pages.map((page) => (
				<S.PageButton key={page} $active={page === currentPage} onClick={() => onPageChange(page)}>
					<span style={{ color: page === currentPage ? theme.PALETTE.white : theme.PALETTE.black, fontWeight: page === currentPage ? 700 : 400 }}>{page}</span>
				</S.PageButton>
			))}
			<S.NavButton onClick={() => canNext && onPageChange(groupStart + 5)} disabled={!canNext}>
				<svg width="8" height="14" viewBox="0 0 8 14" fill="none">
					<path d="M1 1L7 7L1 13" stroke={canNext ? theme.GRAYSCALE[9] : theme.GRAYSCALE[4]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</S.NavButton>
		</S.PaginationWrapper>
	);
};

// ─────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────
const ProjectSelectAllContainer = () => {
	const { projects, addProject, updateProject } = useProjectStore();
	const [step, setStep] = useState(null);
	const [projectData, setProjectData] = useState({});
	const [editingProject, setEditingProject] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [carouselIndex, setCarouselIndex] = useState(0);
	const ITEMS_PER_VIEW = 6;

	const displayProjects = projects.length > 0 ? projects : MOCK_PROJECTS;
	const communityProjects = [...MOCK_PROJECTS, ...MOCK_PROJECTS].slice(0, 12);

	const handleClose = () => {
		setStep(null);
		setEditingProject(null);
		setProjectData({});
	};

	// 1단계(Faillog) -> 2단계(AI/직접)
	const handleFaillogNext = (data) => {
		setProjectData(prev => ({ ...prev, ...data }));
		setStep('step1');
	};

	// 2단계(AI/직접) -> 3단계(입력폼)
	const handleStep1Next = (data) => {
		setProjectData(prev => ({ ...prev, ...data }));
		setStep('step2');
	};

	const handleCreate = (data) => {
		addProject({ ...projectData, ...data });
		handleClose();
	};

	const handleEditOpen = (project) => {
		setEditingProject(project);
		setStep('edit');
	};

	const handleUpdate = (data) => {
		if (editingProject) {
			updateProject(editingProject.id, {
				name: data.projectName,
				startDate: data.startDate,
				endDate: data.endDate,
				isActive: data.isActive,
			});
		}
		handleClose();
	};

	const handlePrevCarousel = () => setCarouselIndex(prev => Math.max(prev - 3, 0));
	const handleNextCarousel = () => setCarouselIndex(prev => Math.min(prev + 3, Math.max(0, displayProjects.length - ITEMS_PER_VIEW)));

	return (
		<S.PageWrapper>
			{step === 'select' && <ProjectCreateModal onClose={handleClose} onNext={handleFaillogNext} />}
			{step === 'step1' && <ProjectCreateStep1Modal onClose={handleClose} onNext={handleStep1Next} />}
			{step === 'step2' && <ProjectCreateStep2Modal onClose={handleClose} onSubmit={handleCreate} projectName={projectData.projectName} />}
			{step === 'edit' && <ProjectEditModal onClose={handleClose} onSubmit={handleUpdate} initialData={editingProject ? { projectName: editingProject.name, startDate: editingProject.startDate, endDate: editingProject.endDate, isActive: editingProject.isActive } : {}} />}

			<S.Inner>
				<S.PageHeader>
					<S.PageTitle>Project</S.PageTitle>
					<S.SubtitleRow>
						<S.PageSubtitle>나의 프로젝트를 모아보세요.</S.PageSubtitle>
						<S.BtnCreate onClick={() => setStep('select')}>프로젝트 생성</S.BtnCreate>
					</S.SubtitleRow>
				</S.PageHeader>

				<S.MyProjectsSection>
					<S.CarouselWrap>
						<S.ArrowBtn onClick={handlePrevCarousel} disabled={carouselIndex === 0}>&#8249;</S.ArrowBtn>
						<S.CardGrid>
							{displayProjects.slice(carouselIndex, carouselIndex + ITEMS_PER_VIEW).map((project) => (
								<ProjectCard key={project.id} project={project} onClick={handleEditOpen} />
							))}
						</S.CardGrid>
						<S.ArrowBtn onClick={handleNextCarousel} disabled={carouselIndex + ITEMS_PER_VIEW >= displayProjects.length}>&#8250;</S.ArrowBtn>
					</S.CarouselWrap>
				</S.MyProjectsSection>
			</S.Inner>

			<S.CommunitySection>
				<S.Inner>
					<S.SearchRow>
						<S.CommunityTitle>다른 사람들과 성장과정을 공유하고 경험해보세요.</S.CommunityTitle>
						<S.SearchBoxWrap>
							<S.SearchBox>
								<S.SearchInput placeholder="다양한 성장 과정을 탐색해보세요." />
								<S.SearchBtn><S.ArrowIcon src={ArrowUpIcon} alt="search" /></S.SearchBtn>
							</S.SearchBox>
						</S.SearchBoxWrap>
					</S.SearchRow>
					<S.CommunityGrid>
						{communityProjects.map((project, idx) => (
							<ProjectCard key={idx} project={{ ...project, id: idx }} $community />
						))}
					</S.CommunityGrid>
					<Pagination currentPage={currentPage} onPageChange={setCurrentPage} maxPage={10} />
				</S.Inner>
			</S.CommunitySection>
		</S.PageWrapper>
	);
};

// ─────────────────────────────────────────
// STYLED COMPONENTS
// ─────────────────────────────────────────
const S = {};

S.PageWrapper = styled.div`
	min-height: 100vh;
	background-color: ${theme.PALETTE.white};
`;

S.Inner = styled.div`
	max-width: 1320px;
	margin: 0 auto;
	padding: 0 60px;
`;

S.PageHeader = styled.div`
	padding-top: 80px;
	padding-bottom: 28px;
`;

S.PageTitle = styled.h2`
	${h3Bold}
	color: ${theme.PALETTE.black};
	margin-bottom: 10px;
`;

S.SubtitleRow = styled.div`
	${flexBetweenRow}
	align-items: center;
`;

S.PageSubtitle = styled.p`
	${h5Regular}
	color: ${theme.GRAYSCALE[9]};
`;

S.BtnCreate = styled.button`
	${h8Bold}
	width: 120px;
	height: 40px;
	border-radius: 10px;
	border: 1px solid ${theme.GRAYSCALE[4]};
	background: ${theme.PALETTE.white};
	color: ${theme.GRAYSCALE[10]};
	transition: all 0.15s ease;
	&:hover {
		border-color: ${theme.PALETTE.third.main};
		color: ${theme.PALETTE.third.main};
	}
	&:active {
		background: ${theme.PALETTE.third.main};
		color: ${theme.PALETTE.white};
		transform: scale(0.98);
	}
`;

S.MyProjectsSection = styled.div`
	position: relative;
	padding: 40px 0 120px;
`;

S.CarouselWrap = styled.div`
	position: relative;
`;

S.CardGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 24px;
	row-gap: 50px;
`;

S.ArrowBtn = styled.button`
	${flexCenter}
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 60px;
	height: 60px;
	border-radius: 50%;
	border: 1px solid ${theme.GRAYSCALE[3]};
	background: ${theme.PALETTE.white};
	color: ${theme.GRAYSCALE[10]};
	font-size: 40px;
	z-index: 1;
	transition: all 0.15s ease;
	&:first-child { left: -100px; }
	&:last-child { right: -100px; }
	&:hover:not(:disabled) {
		background: ${theme.GRAYSCALE[1]};
		border-color: ${theme.GRAYSCALE[6]};
	}
	&:disabled { opacity: 0.3; cursor: default; }
`;

S.CardWrapper = styled.div`
	position: relative;
`;

S.Card = styled.div`
	display: flex;
	flex-direction: row;
	height: 180px;
	background: ${theme.PALETTE.white};
	border-radius: 15px;
	border: 1px solid ${theme.GRAYSCALE[4]};
	box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
	cursor: pointer;
	overflow: hidden;
	transition: transform 0.2s, box-shadow 0.2s;
	&:hover {
		transform: translateY(-8px);
		box-shadow: 0 16px 40px rgba(171, 71, 255, 0.15);
	}
`;

S.AccentBar = styled.div`
	width: 4px;
	min-width: 4px;
	background: ${({ $color }) => $color};
	flex-shrink: 0;
`;

S.CardContent = styled.div`
	flex: 1;
	padding: 18px 30px 16px 26px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

S.CardTop = styled.div`
	${flexBetweenRow}
`;

S.OwnerRow = styled.div`
	${flexStartRow}
	gap: 7px;
`;

S.OwnerAvatar = styled.div`
	${flexCenter}
	width: 32px;
	height: 32px;
	border-radius: 50%;
	border: 2px solid ${({ $color }) => $color};
	color: ${({ $color }) => $color};
	font-size: ${theme.FONT_SIZE.h11};
	font-weight: 700;
	background: ${theme.PALETTE.white};
`;

S.OwnerName = styled.span`
	${h9Bold}
	color: ${theme.PALETTE.black};
`;

S.DDay = styled.span`
	${h6Bold}
	color: ${theme.PALETTE.black};
`;

S.CardTitle = styled.p`
	${h6Bold}
	color: ${theme.PALETTE.black};
	line-height: 1.4;
	display: flex;
	align-items: center;
	flex: 1;
`;

S.TagRow = styled.div`
	${flexStartRow}
	gap: 8px;
	flex-wrap: wrap;
`;

S.Tag = styled.span`
	${flexStartRow}
	gap: 4px;
	height: 28px;
	padding: 0 8px;
	border-radius: 5px;
	background: ${theme.GRAYSCALE[1]};
	font-size: ${theme.FONT_SIZE.h10};
	color: ${theme.GRAYSCALE[10]};
`;

S.CommunitySection = styled.div`
	background-color: ${theme.GRAYSCALE[1]};
	padding: 120px 0 80px;
`;

S.SearchRow = styled.div`
	${flexBetweenRow}
	margin-bottom: 100px;
`;

S.CommunityTitle = styled.h3`
	${h4Bold}
	color: ${theme.PALETTE.black};
	line-height: 1.4;
`;

S.SearchBoxWrap = styled.div`
	width: 536px;
	height: 60px;
	border-radius: 15px;
	padding: 2px;
	background: linear-gradient(90deg, ${theme.PALETTE.primary.main}, ${theme.PALETTE.third.main});
`;

S.SearchBox = styled.div`
	${flexStartRow}
	width: 100%;
	height: 100%;
	border-radius: 13px;
	background: ${theme.PALETTE.white};
	padding: 0 12px 0 20px;
	gap: 10px;
`;

S.SearchInput = styled.input`
	border: none;
	outline: none;
	${h8Regular}
	flex: 1;
	background: transparent;
`;

S.SearchBtn = styled.button`
	${flexCenter}
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background: linear-gradient(135deg, ${theme.PALETTE.primary.main}, ${theme.PALETTE.third.main});
`;

S.ArrowIcon = styled.img`
	width: 18px;
	height: 18px;
	filter: brightness(0) invert(1);
`;

S.CommunityGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 24px;
	row-gap: 50px;
	margin-bottom: 50px;
`;

S.PaginationWrapper = styled.div`
	${flexCenterRow}
	gap: 8px;
`;

S.NavButton = styled.button`
	${flexCenter}
	width: 36px;
	height: 36px;
	&:disabled { opacity: 0.3; }
`;

S.PageButton = styled.button`
	${flexCenter}
	width: 36px;
	height: 36px;
	border-radius: 10px;
	background-color: ${({ $active }) => $active ? theme.PALETTE.third.main : 'transparent'};
`;

export default ProjectSelectAllContainer;