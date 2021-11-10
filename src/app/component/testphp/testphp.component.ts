import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-testphp',
  templateUrl: './testphp.component.html',
  styleUrls: ['./testphp.component.less']
})
export class TestphpComponent implements OnInit {
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  constructor() { }

  ngOnInit() {
    this.getData();
  }
  async getData(){
   // let result = await axios.get('http://localhost:8089/api/index/quote');
  await axios.post('http://localhost/vqa/queue/getshrotestqueue',
  
    {
    orgId:'8809300F-BFD0-11EB-AEE2-0242AC110005'
   // lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

    console.log('123');
    
/*     this.quoteList = result.data.data.items;
    console.log(this.quoteList )
    this.showThings(3);
    this.tabEvent(0) */

  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];

  drop1(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    console.log(this.movies);
  }

}
