import { Component, signal } from '@angular/core'

enum Tab {
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
    currentTab = signal<Tab>(Tab.Task)

    SetTab(tab: Tab) {
        this.currentTab.set(tab)
    }
}
