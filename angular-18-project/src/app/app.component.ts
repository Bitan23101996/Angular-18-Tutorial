import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { MenuModel } from './models/menu.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-18-project';
  menuList: MenuModel[] = [
    {
    menuTitle: 'Add Employee',
    menuId: 1,
    isActive: true,
    isDisplay: 'N',
    menuUrl: 'add-emp'
  },
  {
    menuTitle: 'Employee List',
    menuId: 2,
    isActive: true,
    isDisplay: 'N',
    menuUrl: 'emp-list'
  },
  {
    menuTitle: 'Data Binding',
    menuId: 3,
    isActive: true,
    isDisplay: 'N',
    menuUrl: 'data-binding'
  },
  {
    menuTitle: 'Directives',
    menuId: 4,
    isActive: true,
    isDisplay: 'N',
    menuUrl: 'directive'
  },
  {
    menuTitle: 'Pipes',
    menuId: 5,
    isActive: true,
    isDisplay: 'N',
    menuUrl: 'pipes'
  },
  {
    menuTitle: 'Template Driven Form',
    menuId: 6,
    isActive: true,
    isDisplay: 'Y',
    menuUrl: 'template-driven'
  },
  {
    menuTitle: 'Reactive Form',
    menuId: 7,
    isActive: true,
    isDisplay: 'Y',
    menuUrl: 'reactive'
  },
  {
    menuTitle: 'Signal',
    menuId: 8,
    isActive: true,
    isDisplay: 'Y',
    menuUrl: 'signal'
  }
];



  getMenuList() {}
}
