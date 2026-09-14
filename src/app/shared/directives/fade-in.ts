import {
    Directive,
    afterNextRender,
    inject,
    ElementRef,
    DestroyRef,
    input,
} from '@angular/core'

export type FadeDelayMode = 'quick' | 'medium' | 'slow'
export type FadeType = 'fade-in' | 'fade-left'

@Directive({
    selector: '[appFadeIn]',
    host: {
        '[class]': 'appFadeType()',
        '[style.transition-delay.ms]': 'delayByMode[appFadeIn()]',
    },
})
export class FadeIn {
    private readonly el = inject(ElementRef<HTMLElement>)
    private readonly destroyRef = inject(DestroyRef)
    readonly appFadeIn = input<FadeDelayMode>('medium')
    readonly appFadeType = input<FadeType>('fade-in')

    readonly delayByMode: Record<FadeDelayMode, number> = {
        quick: 200,
        medium: 400,
        slow: 600,
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
                { threshold: 0.5 }
            )

            observer.observe(el)
        })
    }
}
