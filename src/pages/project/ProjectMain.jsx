import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCreateModal from './create/ProjectCreateModal';
import ProjectCreateStep1Modal from './create/ProjectCreateStep1Modal';
import ProjectCreateStep2Modal from './create/ProjectCreateStep2Modal';
import ProjectEditModal from './edit/ProjectEditModal';
import useProjectStore from '../../../store/projectStore';

const ProjectMain = () => {
  const navigate = useNavigate();
  const { projects, addProject, updateProject } = useProjectStore();
  const [step, setStep] = useState(null);
  const [projectData, setProjectData] = useState({});
  const [editingProject, setEditingProject] = useState(null);

  const activeProject = projects.find((p) => p.isActive) || projects[0];

  const handleStep1Next = (data) => {
    setProjectData(data);
    setStep('step2');
  };

  const handleCreate = (data) => {
    addProject({ ...projectData, ...data });
    setStep(null);
    setProjectData({});
  };

  const handleEditOpen = () => {
    if (activeProject) {
      setEditingProject(activeProject);
      setStep('edit');
    }
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
    setStep(null);
    setEditingProject(null);
  };

  const handleClose = () => {
    setStep(null);
    setEditingProject(null);
    setProjectData({});
  };

  return (
    <div>
        {step === 'select' && (
          <ProjectCreateModal
            onClose={handleClose}
            onNext={() => setStep('step1')}
          />
        )}
        {step === 'step1' && (
          <ProjectCreateStep1Modal
            onClose={handleClose}
            onNext={handleStep1Next}
          />
        )}
        {step === 'step2' && (
          <ProjectCreateStep2Modal
            onClose={handleClose}
            onSubmit={handleCreate}
            projectName={projectData.projectName}
            isActive={projectData.isActive}
          />
        )}
        {step === 'edit' && (
          <ProjectEditModal
            onClose={handleClose}
            onSubmit={handleUpdate}
            initialData={editingProject ? {
              projectName: editingProject.name,
              startDate: editingProject.startDate,
              endDate: editingProject.endDate,
              isActive: editingProject.isActive,
            } : {}}
          />
        )}
        <p>your vision</p>
        <p>비전 제목</p>
        <button onClick={() => navigate('/vision/edit')}>수정</button>
        <div>
            <p>Project</p>
            <button onClick={handleEditOpen}>프로젝트 수정</button>
            <button onClick={() => setStep('select')}>새 프로젝트 생성</button>

        </div>
        <div>
            <p>DAILY CHECKLIST</p>

            <button onClick={() => navigate('/checklist/edit')}>새항목 추가</button>
        </div>

        <div>
            <p>빠른이동</p>

            <button onClick={() => navigate('/log/result')}>실패 분석 보기</button>
            <button onClick={() => navigate('/chronology')}>성장 연대기</button>
            <button onClick={() => navigate('/project/list')}>프로젝트 모아보기</button>
        </div>
    </div>
    )
};

export default ProjectMain;