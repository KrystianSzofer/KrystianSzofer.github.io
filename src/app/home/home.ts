import { Component } from '@angular/core'
import { Navbar } from '../shared/navbar/navbar'
import { Hero } from '../hero/hero'
import { AboutMe } from '../about-me/about-me'
import { Projects } from '../projects/projects'
import { RouterLink, RouterModule } from '@angular/router'
import { SocialLinks } from '../shared/social-links/social-links'

@Component({
    selector: 'app-home',
    imports: [
        Navbar,
        Hero,
        AboutMe,
        Projects,
        RouterLink,
        RouterModule,
        SocialLinks,
    ],
    templateUrl: './home.html',
    styleUrl: './home.scss',
})
export class Home {}
