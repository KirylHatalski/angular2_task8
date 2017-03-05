
import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef, ChangeDetectorRef, OnInit } from '@angular/core';
const template  = require('./wind.template.html')

@Directive({ selector: '[wind]' })

export class WindDirective implements OnInit {

  constructor(private el: ElementRef){};

  ngOnInit() {
     this.el.nativeElement.style=`transform: rotate(${-90 + this.direction}deg)`;
  }
   @Input() direction: number;
}
