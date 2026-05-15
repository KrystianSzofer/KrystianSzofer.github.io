import { Component } from '@angular/core'
import { Tabs } from './tabs/tabs'

@Component({
    selector: 'app-projects',
    imports: [Tabs],
    templateUrl: './projects.html',
    styleUrl: './projects.scss',
})
export class Projects {}
