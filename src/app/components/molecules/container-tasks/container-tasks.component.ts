import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectUser } from '../../../redux';
import { Task } from '../../../models';
import { selectTasksFromUser } from '../../../redux/tasks/selectors';
import { CommonModule } from '@angular/common';
import { TaskTypes } from '../../../constants/TaksTypes';
import { ItemTaskComponent } from '../item-task/item-task.component';

@Component({
  selector: 'app-container-tasks',
  standalone: true,
  imports: [CommonModule, ItemTaskComponent],
  templateUrl: './container-tasks.component.html',
  styleUrl: './container-tasks.component.css',
})
export class ContainerTasksComponent {
  @Input()
  type: string = '';

  tasks: Task[] = [];
  userId: string = '';
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select(selectUser).subscribe((user) => {
      if (user) {
        this.userId = user.id;
      }
    });
    this.store.select(selectTasksFromUser(this.userId)).subscribe((tasks) => {
      this.tasks = tasks.filter((task) =>
        this.type === TaskTypes.TODO ? !task.isFinished : task.isFinished
      );
    });
  }
}
