import { Directive, ElementRef, AfterViewInit, Input } from "@angular/core";

@Directive({
    selector: "[mydrpfocus]"
})

export class FocusDirective implements AfterViewInit {
    @Input("mydrpfocus") value: string;

    constructor(private el: ElementRef) {}

    // Focus to element: if value 0 = don't set focus, 1 = set only focus
    ngAfterViewInit() {
        if (this.value === "0") {
            return;
        }
        this.el.nativeElement.focus();
    }
}