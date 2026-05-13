import { Component } from '@angular/core'
import { Navbar } from '../shared/navbar/navbar'

@Component({
    selector: 'app-hero',
    imports: [Navbar],
    templateUrl: './hero.html',
    styleUrl: './hero.scss',
})
export class Hero {}
