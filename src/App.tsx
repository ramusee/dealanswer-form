import React, { FC } from 'react';
import { AppLayout } from './layout';

import './assets/styles/normalize.css';
import './assets/styles/global.scss';
import { withCommonHocs } from './hocs/common';
import { Route, Routes } from 'react-router';
import { ExampleUiForm } from './pages/exampleUiFormPage';
import { RouteNames } from './routing/routeNames';
import { SpvPage } from './pages/spvPage';

const AppComponent: FC = () => {
  return (
    <Routes>
      <Route path={RouteNames.root} element={<AppLayout />}>
        <Route index element={<SpvPage />} />
        <Route path={RouteNames.exampleUiForm} element={<ExampleUiForm />} />
        {/*<Route path={RouteNames.mySpvDetails} element={}*/}
      </Route>
    </Routes>
  );
};

export const App = withCommonHocs(AppComponent);
