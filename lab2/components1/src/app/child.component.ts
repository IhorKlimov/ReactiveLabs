import { Input, Component } from '@angular/core';
@Component({
    selector: 'child-comp',
    template: ` <ng-content></ng-content>
<p>Ім’я користувача: {{userName}}</p>
<p>Вік користувача: {{userAge}}</p>`
})
export class ChildComponent {
    @Input() userName: string = "";
    @Input() userAge: number = 0;
}
