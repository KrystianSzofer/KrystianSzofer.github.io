import { Component, signal, computed, afterNextRender } from '@angular/core'
import { Tabs, Tab } from './tabs/tabs'

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
        name: 'Sitzungsverwaltungstool',

        description: {
            task: 'Die Fachschaftsräte an der Universität benötigten eine moderne Version des aktullen Sitzungstool, dass zur Protokollierung von Sitzungen benutzt wird. Dabei braucht es ein moderenes Design, neue verständliche Icons und die Unterstützung von gleichzeitiger Bearbeitung in einem Markdown Editor.',
            design: [
                {
                    type: 'image',
                    src: '/images/project-page/0-design.webp',
                    alt: 'Startseite mit Button zum Sitzung starten, Informationen zur letzten Sitzung und Tabelle mit letzten Aktivitäten.',
                },
                {
                    type: 'text',
                    value: 'Zu sehen ist die Home-Seite im dark mode.',
                },
            ],
            ['learning-experience']:
                'Eine sehr große Aufgabe war die Umsetzung eines Markdown Editors. Dabei lernte ich wichtige Grundprinzipien (Parsing, Highlighting, Keymaps) solcher Editoren. Auch war es das erste Projekt, wo ich Dev Ops allein übernommen habe, um es auf GitLab mittels einer Pipeline sowie eines Runners zum Laufen zu bringen.',
        },
    },

    {
        id: 1,
        name: 'Formautomatisierung',

        description: {
            task: 'Im Rahmen des Software Engineering Moduls beauftragte uns der Bellis e.V. mit der Entwicklung einer Softwarelösung, die sich mit der Automatisierung von Statistiken und Formularen befassen soll. Dabei soll die händische Arbeit von den Mitarbeitern deutlich vereinfacht werden mittels der App. Filtersysteme, Nutzerkonten, Statistiken und vieles mehr umfasste die Aufgabenstellung.',
            design: [
                {
                    type: 'image',
                    src: '/images/project-page/1-design.avif',
                    alt: 'Login-Seite mit Bellis-Logo und Anmeldeformular für Benutzername und Passwort sowie einem Anmelden-Button.',
                },
                {
                    type: 'text',
                    value: 'Mein zentriertes Login-Design aus der Entwicklungsphase. Minimalistisch gehalten, um professioneller zu wirken. Klassisch in der Mitte, da dort der User Fokus liegt.',
                },
            ],
            ['learning-experience']:
                'Das Projekt lehrte mich die Zusammenarbeit in einem 10-köpfigen Team. Denn umso größer die Team Größe, desto mehr Koordination und Kommunikation ist nötig, um ein gutes Produkt auf die Beine zu stellen. Außerdem war es mein erster Berührungspunkt mit der React-Technologie.',
        },
    },
]

@Component({
    selector: 'app-projects',
    imports: [Tabs],
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
