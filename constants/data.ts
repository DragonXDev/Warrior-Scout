import { NavItem } from '@/types';

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: 'Candice Schiner',
    company: 'Dell',
    role: 'Frontend Developer',
    verified: false,
    status: 'Active'
  },
  {
    id: 2,
    name: 'John Doe',
    company: 'TechCorp',
    role: 'Backend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    company: 'WebTech',
    role: 'UI Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 4,
    name: 'David Smith',
    company: 'Innovate Inc.',
    role: 'Fullstack Developer',
    verified: false,
    status: 'Inactive'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    company: 'TechGuru',
    role: 'Product Manager',
    verified: true,
    status: 'Active'
  },
  {
    id: 6,
    name: 'James Brown',
    company: 'CodeGenius',
    role: 'QA Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 7,
    name: 'Laura White',
    company: 'SoftWorks',
    role: 'UX Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 8,
    name: 'Michael Lee',
    company: 'DevCraft',
    role: 'DevOps Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 9,
    name: 'Olivia Green',
    company: 'WebSolutions',
    role: 'Frontend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 10,
    name: 'Robert Taylor',
    company: 'DataTech',
    role: 'Data Analyst',
    verified: false,
    status: 'Active'
  }
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

export const navItems: NavItem[] = [
  {
    title: 'Overview',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['o', 'o'],
    items: []
  },
  {
    title: 'Scouting',
    url: '/dashboard/scouting',
    icon: 'scouting',
    isActive: false,
    items: [
      {
        title: 'Match Scouting',
        url: '/dashboard/scouting/match',
        icon: 'matches',
        shortcut: ['m', 's']
      },
      {
        title: 'Pit Scouting',
        url: '/dashboard/scouting/pit',
        icon: 'robot',
        shortcut: ['p', 's']
      }
    ]
  },
  {
    title: 'Analytics',
    url: '/dashboard/analytics',
    icon: 'analytics',
    isActive: false,
    items: [
      {
        title: 'Team Performance',
        url: '/dashboard/analytics/teams',
        icon: 'teams',
        shortcut: ['t', 'p']
      },
      {
        title: 'Match Analysis',
        url: '/dashboard/analytics/matches',
        icon: 'matches',
        shortcut: ['m', 'a']
      }
    ]
  },
  {
    title: 'Strategy',
    url: '/dashboard/strategy',
    icon: 'strategy',
    isActive: false,
    items: [
      {
        title: 'Alliance Selection',
        url: '/dashboard/strategy/alliance',
        icon: 'teams',
        shortcut: ['a', 's']
      },
      {
        title: 'Match Planning',
        url: '/dashboard/strategy/planning',
        icon: 'target',
        shortcut: ['m', 'p']
      }
    ]
  },
  {
    title: 'Database',
    url: '/dashboard/database',
    icon: 'database',
    isActive: false,
    items: [
      {
        title: 'Teams',
        url: '/dashboard/database/teams',
        icon: 'teams',
        shortcut: ['d', 't']
      },
      {
        title: 'Competitions',
        url: '/dashboard/database/competitions',
        icon: 'competitions',
        shortcut: ['d', 'c']
      }
    ]
  },
  {
    title: 'Settings',
    url: '/dashboard/settings',
    icon: 'settings',
    isActive: false,
    shortcut: ['s', 't'],
    items: []
  }
];
