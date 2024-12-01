import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { AppTaskComponent } from './app-task/app-task.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, AppTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 users = DUMMY_USERS;
 selectedUserId = 'u1';

 get selectedUser() {
  return this.users.find((user) => user.id === this.selectedUserId);
 }
 onSelectUser(id: string) {
 this.selectedUserId = id;
 }
}
