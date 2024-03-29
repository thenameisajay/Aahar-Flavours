import { BookUser, Home, MenuSquare, Star, User2 } from 'lucide-react';

export const mainNav = [
    {
        title: 'Home',
        href: '/',
        icon: <Home />,
    },
    {
        title: 'Menu',
        href: '/',
        icon: <MenuSquare />,
    },
    {
        title: 'About',
        href: '/about',
        icon: <User2 />,
    },
    {
        title: 'Reviews',
        href: '/',
        icon: <Star />,
    },
    {
        title: 'Contact',
        href: '/contact',
        icon: <BookUser />,
    },
];
