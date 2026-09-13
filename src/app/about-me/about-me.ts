import { Component } from '@angular/core'
import { FadeIn } from '../shared/directives/fade-in'

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
    imports: [FadeIn],
    templateUrl: './about-me.html',
    styleUrl: './about-me.scss',
})
export class AboutMe {
    logos = [...logoNames, ...logoNames]
}
