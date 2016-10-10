import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {

  aa = 'aaaaa';

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
