import { compose } from '@reduxjs/toolkit';
import { withProviders } from '../with-providers';

export const withCommonHocs = (Component: any) => compose(withProviders)(Component);
