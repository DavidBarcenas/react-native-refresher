export interface MenuItem {
    name: string;
    icon: string;
    component: string;
    color?: string;
}

export const menuItems: MenuItem[] = [
    {
        name: 'Animations',
        icon: 'cube-outline',
        component: 'AnimationScreen'
    },
    {
        name: 'Animations 2',
        icon: 'albums-outline',
        component: 'Animation2Screen'
    },
    {
        name: 'Switches',
        icon: 'toggle-outline',
        component: 'SwitchScreen'
    },
    {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        component: 'AlertScreen'
    },
    {
        name: 'TextInput',
        icon: 'chatbox-ellipses-outline',
        component: 'TextInputScreen'
    },
    {
        name: 'Pull to refresh',
        icon: 'refresh-circle-outline',
        component: 'PullRefreshScreen'
    },
    {
        name: 'Section List',
        icon: 'list-outline',
        component: 'SectionListScreen'
    },
    {
        name: 'Modal',
        icon: 'open-outline',
        component: 'ModalScreen'
    },
    {
        name: 'Infinite Scroll',
        icon: 'download-outline',
        component: 'InfiniteScrollScreen'
    },
    {
        name: 'Slides',
        icon: 'flower-outline',
        component: 'SlideScreen'
    },
    {
        name: 'Themes',
        icon: 'flask-outline',
        component: 'ThemeScreen'
    },
]