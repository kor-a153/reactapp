import React from 'react';
import { Outlet } from 'react-router-dom';

const ProjectMainContainer = () => {
  return (
    <div>
      <Outlet />
      프로젝트 컨테이너
    </div>
  );
};

export default ProjectMainContainer;