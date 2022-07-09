import { Component } from '@angular/core';

import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  widthImg = 10;

  name = 'Gonzalo';
  age = 23;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  register = {
    name: '',
    email: '',
    password: ''
  };

  person = {
    name: 'Samuel',
    age: 23,
    avatar: 'https://source.unsplash.com/random'
  }

  names: string[] = ["Gonzalo", "Samuel", "Fernanda"];
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };
  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 856,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Coleción de albumnes',
      price: 25,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Mis libros',
      price: 48,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Casa para perro',
      price: 896,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Gafas',
      price: 2365,
      image: 'https://source.unsplash.com/random'
    }
  ]

  // Métodos
  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  onRegister() {
    console.log(this.register);
  }
}
