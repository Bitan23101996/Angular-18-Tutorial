import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AngularDirectiveComponent } from './components/angular-directive/angular-directive.component';
import { AngularPipeComponent } from './components/angular-pipe/angular-pipe.component';
import { TemplateDrivenComponent } from './components/forms/template-driven/template-driven.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { SignalComponent } from './components/signal/signal.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';

export const routes: Routes = [
    {
        path: 'add-emp',
        component: AddEmployeeComponent
    },
    {
        path: 'emp-list',
        component: EmployeeListComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'directive',
        component: AngularDirectiveComponent
    },
    {
        path: 'pipes',
        component: AngularPipeComponent
    },
    {
        path: 'template-driven',
        component: TemplateDrivenComponent
    },
    {
        path: 'reactive',
        component: ReactiveComponent
    },
    {
        path: 'signal',
        component: SignalComponent
    },
    {
        path: 'linked-signal',
        component: LinkedSignalComponent
    }
];
