import { Component, signal, input, output } from '@angular/core'

export enum Tab {
    Task,
    Design,
    Insight,
}

@Component({
    selector: 'app-tabs',
    imports: [],
    templateUrl: './tabs.html',
    styleUrl: './tabs.scss',
})
export class Tabs {
    readonly Tab = Tab

    active = input.required<Tab>()
    tabChange = output<Tab>()
}
