import React from 'react';
import { Menu, MenuItem, Sidebar, useProSidebar } from 'react-pro-sidebar';

const AppSidebar = () => {
  const { collapseSidebar, rtl } = useProSidebar();

  return (
    <Sidebar rtl={true}>
      <Menu>
        <MenuItem> Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export { AppSidebar };
