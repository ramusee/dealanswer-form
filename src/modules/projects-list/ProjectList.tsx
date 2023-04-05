import React from 'react';
import { projectList } from './consts';
import { ProjectItem } from './components/ProjectItem';

const ProjectList = () => {
  return (
    <div>
      {projectList.map(({ title, description }) => (
        <ProjectItem key={title} title={title} description={description} />
      ))}
    </div>
  );
};

export { ProjectList };
