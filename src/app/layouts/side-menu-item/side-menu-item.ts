import { Injectable } from '@angular/core';

export interface MenuItem {
    icon: string;
    link: string;
    name: string;
}

@Injectable()
export class SideMenuItem {

    menuItems: MenuItem[] = [
        {
            icon: 'face',
            link: '/auth',
            name: 'Demo Go To Login'
        }
    ];

    getMenuItem(): MenuItem[] {
        return this.menuItems;
    }
}
