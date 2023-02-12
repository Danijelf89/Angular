import { Component } from '@angular/core';
import { UserMenuService } from './user-menu.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent {
  constructor(private service: UserMenuService){}

  openMenu()
  {
    this.service.openUserMenu();
  }
}
