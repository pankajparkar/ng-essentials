import { Routes } from "@angular/router";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserListComponent } from "./user-list/user-list.component";

export const routes: Routes = [
    {
        path: 'user', children: [
            { path: 'list', component: UserListComponent },
            { path: 'details/:id', component: UserDetailsComponent },
            { path: 'edit/:id', component: UserEditComponent },
        ],
    },
    { path: '**', redirectTo: 'user/list' },
];