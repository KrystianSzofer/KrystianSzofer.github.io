import { Component } from '@angular/core'

const logoNames = [
    'HTML5',
    'CSS3',
    'TS',
    'Angular',
    'React',
    'Cplusplus',
    'Csharp',
    'Blender',
    'Gimp',
    'Canva',
    'Figma',
    'Java',
    'GitLab',
    'Jira',
]

@Component({
    selector: 'app-about-me',
    imports: [],
    templateUrl: './about-me.html',
    styleUrl: './about-me.scss',
})
export class AboutMe {
    logos = [...logoNames, ...logoNames]
}
