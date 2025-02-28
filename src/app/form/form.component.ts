import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
          num1: number = 0;
          num2: number = 0;
          sun : number = 0;

          onClickSomar(){
            this.sun = this.num1 + this.num2;
          }
          onClickSubtrair(){
            this.sun = this.num1 - this.num2;
          }
          onClickDividir(){
            this.sun = this.num1 / this.num2;
          }
          onClickMult(){
            this.sun = this.num1 * this.num2;
          }
          onClickPoten(){
            this.sun = this.num1 ** this.num2;
          }
          onClickMod(){
            this.sun = this.num1 % this.num2;
          }
}
