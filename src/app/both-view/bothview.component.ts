import '../shared/interfaces'

import { Component } from '@angular/core';

@Component({
    selector: 'both-view',
    template: `<weather></weather>
               <googlemaps></googlemaps>`
})

export class BothviewComponent {

    constructor( ) { }

}
