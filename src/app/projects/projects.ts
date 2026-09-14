import { Component, signal, computed, afterNextRender } from '@angular/core'
import { Tabs, Tab } from './tabs/tabs'
import { FadeIn } from '../shared/directives/fade-in'

type ContentBlock =
    | { type: 'text'; value: string }
    | { type: 'image'; src: string; alt: string }

interface Project {
    readonly id: number
    name: string

    description: {
        task: string
        design: ContentBlock[]
        ['learning-experience']: string
    }
}

const projects: Project[] = [
    {
        id: 0,
        name: 'Sitzungsmanager',

        description: {
            task: 'Die Erstellung einer Anwendung zur Verwaltung von Sitzungen. Zum Protokollieren wird ein Markdown-Editor benötigt. Für die Speicherung ist ein Filtersystem sinnvoll. Zudem sollen Umfragen möglich sein, die von Diagrammen begleitet werden.',
            design: [
                {
                    type: 'image',
                    src: '/images/project-page/0-design.webp',
                    alt: 'Startseite mit Button zum Sitzung starten, Informationen zur letzten Sitzung und Tabelle mit letzten Aktivitäten.',
                },
                {
                    type: 'text',
                    value: 'Startseite als Dashboard im Dunkelmodus. Der Button im Header ermöglicht die Umschaltung der Darstellungsmodi. Rote Akzente sollen auffallen, weshalb sie sparsam auf die wichtigsten Funktionen eingesetzt werden.',
                },
            ],
            ['learning-experience']:
                'Wie ein Text-Editor und eigene Highlight-Styles funktionieren. Dazu kann man unterschiedliche Schriftgrößen für verschiedene Überschriften einstellen. Oder auch Tastenbefehle für das Einrücken von Text definieren. Wichtig war, dass Nutzereingaben bereinigt werden müssen, um böswilligen Code fremder zu vermeiden.\n\n Ich habe einen Einblick in Angular bekommen. Dabei habe ich mit Signals gearbeitet und Zustände verwaltet. Auch Routing ist mir nun vertraut. Für einen API-Service habe ich Dependency Injection genutzt und eigene Models mittels Interfaces gebaut.   ',
        },
    },

    {
        id: 1,
        name: 'Formularautomatisierung',

        description: {
            task: 'Entwicklung einer Softwarelösung, die einen manuellen Prozess in einer Beratungsstelle digitalisiert und automatisiert. Die Anwendung soll Daten über Eingabemasken erfassen sowie Statistiken berechnen und bereitstellen. Unterschiedliche Kontotypen mit abgestuften Berechtigungen sollen den Zugriff auf die Funktionen steuern.',
            design: [
                {
                    type: 'image',
                    src: '/images/project-page/1-design.avif',
                    alt: 'Login-Seite mit Bellis-Logo und Anmeldeformular für Benutzername und Passwort sowie einem Anmelden-Button.',
                },
                {
                    type: 'text',
                    value: 'Anmeldeseite für die Software. Ich wählte ein blaues Farbschema, da es zum Logo des Kunden passt und beruhigend wirkt. Einfache Elemente wie die abgeschnittenen Kreise und ein zentrales Rechteck tragen zu einem professionellen Erscheinungsbild bei. Die Kreise sind gelb, da diese Farbe einen Kontrast zum Blau bildet.',
                },
            ],
            ['learning-experience']:
                'In einem zehnköpfigen Team war ich für das Frontend zuständig. Dabei lernte ich, wie wichtig klare Kommunikation für den Projekterfolg ist.\n\n Das war mein Einstieg in React. Ich entwickelte eigene Komponenten. Dabei nutzte ich useState für lokale Zustände und useEffect für Datenbankabfragen.\n\n In Kundengesprächen erfsste ich die Anforderungen an die Software. Dabei war es wichtig, gezielt nachzufragen und technische Inhalte verständlich zu erklären. ',
        },
    },
]

@Component({
    selector: 'app-projects',
    imports: [Tabs, FadeIn],
    templateUrl: './projects.html',
    styleUrl: './projects.scss',
})
export class Projects {
    readonly Tab = Tab

    activeTab = signal<Tab>(Tab.Task)

    setActiveTab(tab: Tab) {
        this.activeTab.set(tab)
    }

    readonly projects = projects

    currentProjectId = signal<number>(0)

    currentProject = computed(() =>
        this.projects.find((p) => p.id === this.currentProjectId())
    )

    SetProject(id: number) {
        if (this.currentProjectId() !== id) {
            this.currentProjectId.set(id)
            this.activeTab.set(Tab.Task)
        }
    }

    constructor() {
        afterNextRender(() => {
            this.preloadAllDesignImages()
        })
    }

    private preloadAllDesignImages() {
        for (const project of this.projects) {
            for (const block of project.description.design) {
                if (block.type === 'image') {
                    const img = new Image()
                    img.src = block.src
                }
            }
        }
    }

    // readonly ProjectName = ProjectName
    // currentProject = signal<ProjectName>(ProjectName.Sitzungsverwaltungstool)

    // SetProject(project: ProjectName) {
    //     this.currentProject.set(project)
    // }
}
