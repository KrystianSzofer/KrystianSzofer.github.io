import {
    Directive,
    afterNextRender,
    inject,
    ElementRef,
    DestroyRef,
    input,
} from '@angular/core'

export type FadeDelayMode = 'quick' | 'medium' | 'slow'

@Directive({
    selector: '[appFadeIn]',
    host: {
        class: 'fade-in',
        '[style.transition-delay.ms]': 'delayByMode[appFadeIn()]',
    },
})
export class FadeIn {
    private readonly el = inject(ElementRef<HTMLElement>)
    private readonly destroyRef = inject(DestroyRef)
    readonly appFadeIn = input<FadeDelayMode>('medium')

    readonly delayByMode: Record<FadeDelayMode, number> = {
        quick: 400,
        slow: 800,
        medium: 1200,
    }

    constructor() {
        let observer: IntersectionObserver | undefined

        afterNextRender(() => {
            const el = this.el.nativeElement

            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        entry.target.classList.toggle(
                            'is-visible',
                            entry.isIntersecting
                        )

                        if (entry.isIntersecting)
                            observer?.unobserve(entry.target)
                    })
                },
                { threshold: 0.3 }
            )

            observer.observe(el)
        })
    }
}
