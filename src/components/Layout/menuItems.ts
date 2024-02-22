// components/layout/menuItems.ts

export const menuItems = [
    {
      title: 'Home',
      path: '/',
      submenus: [
        { title: 'Contact', path: '/contact' },
        { title: 'Calendar', path: '/calender' },
        { title: 'Login', path: '/login' },
        { title: 'Home', path: '/' },
      ],
    },
    {
      title: 'Posts',
      path: '/posts',
      submenus: [
        { title: 'All Posts', path: '/posts' },
      ],
    },
    {
      title: 'Dashboard',
      path: '/dashboard',
      submenus: [
        { title: 'Dashboard', path: '/dashboard' },
        { title: '404 Page', path: '/404' },
      ],
    },
    // {
    //   title: 'Login',
    //   path: '/login',
    // },
  ];
  