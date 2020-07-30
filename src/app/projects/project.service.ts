import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Project } from './project.model';
import { Book } from '../shared/Book.model';
import { BookShoppingListService } from '../book-list/bookshopping-list.service';

@Injectable()
export class ProjectService 
{
  projectChanged = new Subject<Project[]>();

  private projects: Project[] = [
    new Project(
      'Virtual File System',
      'This project Simulate Linux File System on any platform. We implement all file subsystems system calls and its coresponding data structures.',
      'https://i2.wp.com/catchhow.com/wp-content/uploads/2017/05/file-system.png?resize=640%2C313&ssl=1',
      [
        new Book('UNIX Internals - Bach',430),
        new Book('UNIX Internals - Bach',430)
      ]),

          new Project(
            'ProcMon - Process Monitoring Tool',
            'This project maintains record of each running process in RAM. We maintain process name, number of threads,its size,attahed DLL to the process. We  aintain per day log of this inpformation which can be used for analytical purpose.',
            'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2016/06/proclist-7.png?resize=600%2C360&quality=100&ssl=1',
            [
              new Book('Process Subsystems Guide', 320)
            ]),

            new Project(
              'Autonomous Quadraped Robot',
              'The Robot is a quadra legged Robot.Features of robot are it can cross the step,take left-right turn,climb the slope',
              'assets/rnp.png',
              [
              ])
  ];

  constructor(private slService:BookShoppingListService) 
  {}

  // Functionality provided by service

  getProjects() 
  {
    return this.projects.slice();
  }

  getProject(index: number) {
    return this.projects[index];
  }

  addBooksToShoppingList(Books: Book[]) 
  {
    this.slService.addBooks(Books);
  }

  addProject(recipe: Project) 
  {
    this.projects.push(recipe);
    this.projectChanged.next(this.projects.slice());
  }

  updateProject(index: number, newRecipe: Project) 
  {
    this.projects[index] = newRecipe;
    this.projectChanged.next(this.projects.slice());
  }

  deleteProject(index: number) 
  {
    this.projects.splice(index, 1);
    this.projectChanged.next(this.projects.slice());
  }
}
