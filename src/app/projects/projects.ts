import { Component, signal } from '@angular/core'
import { Tabs } from './tabs/tabs'

enum ProjectName {
    Sitzungsverwaltungstool,
    FormAutomatisierung,
}

@Component({
    selector: 'app-projects',
    imports: [Tabs],
    templateUrl: './projects.html',
    styleUrl: './projects.scss',
})
export class Projects {
    readonly ProjectName = ProjectName
    currentProject = signal<ProjectName>(ProjectName.Sitzungsverwaltungstool)

    SetProject(project: ProjectName) {
        this.currentProject.set(project)
    }
}
