import { element } from 'protractor';
import { Task } from './entities/app.Task';
import { Prueba } from './entities/app.prueba';
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   defaultTaskText = 'What needs to be done?';
   tasksData: Array<Task> = [];
   tasks: Array<Task> = this.tasksData;
   counterSelection = 0;
   url = 'https://gist.githubusercontent.com/jdjuan/165053e6cb479a840c88e3e94b33e724/raw/4542ef950b2b32fbe2eea0b3df0338ffe67eae12/todo.json';
   tsk: any;

   constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe(tsk => {
      this.tsk = tsk as Array<string>;

      let i = 0;
      this.tsk.forEach(element => {
        this.tasks.push(new Task(i, element));
        i++;
      });

    });
   }


   public onCreateTask(event: KeyboardEvent) {

     let inpt: any;
     inpt = event.currentTarget as HTMLInputElement;

    let tsk1: Task;
    tsk1 = new Task(this.tasks.length, inpt.value);
    this.tasksData.push(tsk1);
    this.tasks = this.tasksData;
    inpt.value = '';
   }


  // Méthod to select all tasks
  public onSelectAllItems(event: KeyboardEvent) {
    let inpt: any;
    inpt = event.currentTarget as HTMLInputElement;

    if (inpt.checked) {
      for (const entry of this.tasksData) {
        entry.setTaskSelected(true);
        this.counterSelection++;
      }
    } else {
      for (const entry of this.tasksData) {
        entry.setTaskSelected(false);
        this.counterSelection--;
      }
    }
    this.tasks = this.tasksData;
  }

// Method used to manage the selection of a task
  public onSelectItem(event: KeyboardEvent, item: Task) {

    let inpt: any;
    inpt = event.currentTarget as HTMLInputElement;

    if (inpt.checked) {
      this.tasksData[item.getTaskId()].setTaskSelected(true);
      this.counterSelection++;
    } else {
      this.tasksData[item.getTaskId()].setTaskSelected(false);
      this.counterSelection--;
    }
    this.tasks = this.tasksData;
  }

  public onGetAllTasks() {
    this.tasks = this.tasksData.filter(tsk => tsk.isTaskSelected() === true || tsk.isTaskSelected() === false);
  }

  public onGetAllActiveTasks() {
    this.tasks = this.tasksData.filter(tsk => tsk.isTaskSelected() === false);
  }

  public onGetAllCompleteTasks() {
    this.tasks = this.tasksData.filter(tsk => tsk.isTaskSelected() === true);
  }

  public onClearCompleteTasks() {
    this.tasksData = this.tasksData.filter(tsk => tsk.isTaskSelected() === false);
    this.counterSelection = 0;
    this.onGetAllCompleteTasks();
  }

  public onDeleteTasks(task: Task) {
    if (task.isTaskSelected()) {
      this.counterSelection--;
    }
    this.tasksData.splice(task.getTaskId());
    this.tasks = this.tasksData;
  }

  public onTxtEdit(event: KeyboardEvent) {
    let inpt: any;
    inpt = event.currentTarget as HTMLInputElement;
    inpt.value = '';
  }

}





