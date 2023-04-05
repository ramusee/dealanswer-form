import React, { FC } from 'react';
import { AppLayout } from './layouts';

import './assets/styles/normalize.css';
import './assets/styles/global.scss';
import { withCommonHocs } from './hocs/common';
import { Route, Routes } from 'react-router';
import { ExampleUiForm } from './pages/example-ui-form-page';
import { RouteNames } from './routing/routeNames';
import { SpvPage } from './pages/spv-page';
import { ProjectsPage } from './pages/project-types-page';

const AppComponent: FC = () => {
  return (
    <Routes>
      <Route path={RouteNames.root} element={<AppLayout />}>
        {/*<Route index element={<ProjectsPage />} />*/}
        <Route index element={<SpvPage />} />
        <Route path={RouteNames.exampleUiForm} element={<ExampleUiForm />} />
      </Route>
    </Routes>
  );
};

export const App = withCommonHocs(AppComponent);
