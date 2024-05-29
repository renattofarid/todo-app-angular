import { Component } from '@angular/core';
import { TasksLayoutComponent } from '../../components/templates/tasks-layout/tasks-layout.component';
import { TasksGridComponent } from '../../components/organism/tasks-grid/tasks-grid.component';
import { AppState, initializeTasks, loadTasks, selectUser } from '../../redux';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TasksLayoutComponent, TasksGridComponent],
  template: `
  <app-tasks-layout>
    <app-tasks-grid></app-tasks-grid>
  </app-tasks-layout>
`
})
export class TasksComponent {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select(selectUser).subscribe(user => {
      if (!user) return;
      this.store.dispatch(initializeTasks({ userId: user.id }));
      this.store.dispatch(loadTasks({ userId: user.id }));
    })
  }
}
