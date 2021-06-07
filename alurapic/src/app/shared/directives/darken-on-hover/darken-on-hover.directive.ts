import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[apDarkenOnHover]',
})
export class DarkenOnHoverDirective {
  @Input() brightness = '90%';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover')
  darkenOn() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'filter',
      `brightness(${this.brightness})`
    );
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'filter',
      'brightness(100%)'
    );
  }
}
