import {Component, View} from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'hello',
    template: `<h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div><label>id:</label> {{hero.id}}</div>
        <div><label>name:</label>
            <input type="text" [(ngModel)]="hero.name" placeholder="please input name"> 
        </div>
    `
})

export class HelloComponent { 
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}
