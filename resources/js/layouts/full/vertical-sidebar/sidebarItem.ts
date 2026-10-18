import {
  CircleIcon,
  WindmillIcon,
  TypographyIcon,
  ShadowIcon,
  PaletteIcon,
  KeyIcon,
  BugIcon,
  DashboardIcon,
  BrandChromeIcon,
  HelpIcon
} from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: object;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'Dashboard' },
  {
    title: 'Default',
    icon: DashboardIcon,
    to: '/main/dashboard/default'
  },
  { divider: true },
  { header: 'Pages' },
  {
    title: 'Authentication',
    icon: KeyIcon,
    to: '/auth',
    children: [
      {
        title: 'Login',
        icon: CircleIcon,
        to: '/login1'
      },
      {
        title: 'Register',
        icon: CircleIcon,
        to: '/register'
      }
    ]
  },
  {
    title: 'Error 404',
    icon: BugIcon,
    to: '/error'
  },
  { divider: true },
  { header: 'Utilities' },
  {
    title: 'Typography',
    icon: TypographyIcon,
    to: '/main/utils/typography'
  },
  {
    title: 'Shadows',
    icon: ShadowIcon,
    to: '/main/utils/shadows'
  },
  {
    title: 'Colors',
    icon: PaletteIcon,
    to: '/main/utils/colors'
  },

  {
    title: 'Icons',
    icon: WindmillIcon,
    to: '/forms/radio',
    children: [
      {
        title: 'Tabler Icons',
        icon: CircleIcon,
        to: '/main/icons/tabler'
      },
      {
        title: 'Material Icons',
        icon: CircleIcon,
        to: '/main/icons/material'
      }
    ]
  },
  { divider: true },
  {
    title: 'Sample Page',
    icon: BrandChromeIcon,
    to: '/main/starter'
  },
  {
    title: 'Documentation',
    icon: HelpIcon,
    to: 'https://codedthemes.gitbook.io/berry-vuetify/',
    type: 'external'
  }
];

export default sidebarItem;
