import { useState } from 'react';
import ProjectCreateModal from '../create/ProjectCreateModal';
import ProjectCreateStep1Modal from '../create/ProjectCreateStep1Modal';
import ProjectCreateStep2Modal from '../create/ProjectCreateStep2Modal';
import ProjectEditModal from '../edit/ProjectEditModal';
import useProjectStore from '../../../../store/projectStore';

const ProjectSelectAllContainer = () => {
  const { projects, addProject, updateProject } = useProjectStore();
  const [expandedId, setExpandedId] = useState(null);
  const [step, setStep] = useState(null);
  const [projectData, setProjectData] = useState({});
  const [editingProject, setEditingProject] = useState(null);

  const handleStep1Next = (data) => {
    setProjectData(data);
    setStep('step2');
  };

  const handleCreate = (data) => {
    addProject({ ...projectData, ...data });
    setStep(null);
    setProjectData({});
  };

  const handleEditOpen = (project) => {
    setEditingProject(project);
    setStep('edit');
  };

  const handleUpdate = (data) => {
    updateProject(editingProject.id, {
      name: data.projectName,
      startDate: data.startDate,
      endDate: data.endDate,
      isActive: data.isActive,
    });
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
        <ProjectCreateModal onClose={handleClose} onNext={() => setStep('step1')} />
      )}
      {step === 'step1' && (
        <ProjectCreateStep1Modal onClose={handleClose} onNext={handleStep1Next} />
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

      <h1>PROJECT LIST</h1>
      <p>현재 진행 중인 프로젝트, 오늘 해야 할 액션, 누적 성공률, 최근 실패 패턴을 한눈에 보는 페이지입니다.</p>

      {projects.map((project) => (
        <div key={project.id}>
          <div>
            <h2>{project.name}</h2>
            <p>{project.startDate} ~ {project.endDate}</p>
            <p>{project.description}</p>
          </div>

          {expandedId === project.id && (
            <div>
              {project.checklists.map((item) => (
                <div key={item.id}>
                  <input type="checkbox" />
                  <div>
                    <p>{item.title}</p>
                    <p>{item.desc}</p>
                  </div>
                  <span>{item.priority}</span>
                </div>
              ))}
            </div>
          )}

          <div>
            <button onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}>
              {expandedId === project.id ? '∧' : '∨'}
            </button>
            <button onClick={() => handleEditOpen(project)}>프로젝트 수정</button>
            <button onClick={() => setStep('select')}>새 프로젝트 생성</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSelectAllContainer;
