import { Component } from '@angular/core';
import { NewTaskComponent } from '../../molecules/new-task/new-task.component';
import { ContainerTasksComponent } from '../../molecules/container-tasks/container-tasks.component';
import { TaskTypes } from '../../../constants/TaksTypes';

@Component({
  selector: 'app-tasks-grid',
  standalone: true,
  imports: [NewTaskComponent, ContainerTasksComponent],
  templateUrl: './tasks-grid.component.html',
  styleUrl: './tasks-grid.component.css'
})
export class TasksGridComponent {

  todo = TaskTypes.TODO;
  done = TaskTypes.DONE;

}
