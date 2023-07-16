import { STATIC_ASSETS } from '../global/staticAssets';

export const sidebarConst = [
  {
    id: 0,
    value: 'Dashboard',
    icon: STATIC_ASSETS.DASHBOARD_ICON,
    link: '/',
  },
  {
    id: 1,
    value: 'Attendance',
    icon: STATIC_ASSETS.CHECK_ICON,
    link: '/attendance',
  },
  {
    id: 2,
    value: 'Employees',
    icon: STATIC_ASSETS.EMPLOYEE_ICON,
    link: '/employees',
  },
  {
    id: 3,
    value: 'Manage',
    icon: STATIC_ASSETS.MANAGE_ICON,
    link: '/manage',
  },
];
