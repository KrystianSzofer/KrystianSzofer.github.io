import { Component, signal } from '@angular/core'
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router'
import { Navbar } from './shared/navbar/navbar'
import { SocialLinks } from './shared/social-links/social-links'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Navbar, RouterLink, RouterModule, SocialLinks],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    protected readonly title = signal('portfolio')
}
