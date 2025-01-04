import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  ClipboardList,
  UserPlus,
  BarChart
} from 'lucide-react';

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/dashboard',
          label: 'Overview',
          active: pathname === '/dashboard' || pathname.includes('/dashboard/overview'),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: 'Scouting Management',
      menus: [
        {
          href: '/dashboard/assignments',
          label: 'Assignments',
          active: pathname.includes('/dashboard/assignments'),
          icon: ClipboardList,
          submenus: []
        },
        {
          href: '/dashboard/team-management',
          label: 'Team Management',
          active: pathname.includes('/dashboard/team-management'),
          icon: UserPlus,
          submenus: []
        },
        {
          href: '/dashboard/analytics',
          label: 'Analytics',
          active: pathname.includes('/dashboard/analytics'),
          icon: BarChart,
          submenus: []
        }
      ]
    },
    {
      groupLabel: 'Settings',
      menus: [
        {
          href: '/dashboard/settings',
          label: 'Settings',
          active: pathname.includes('/settings'),
          icon: Settings,
          submenus: []
        }
      ]
    }
  ];
}
