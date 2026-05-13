import { Component, signal } from '@angular/core'
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router'
import { Navbar } from './shared/navbar/navbar'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Navbar, RouterLink, RouterModule],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    protected readonly title = signal('portfolio')
}
