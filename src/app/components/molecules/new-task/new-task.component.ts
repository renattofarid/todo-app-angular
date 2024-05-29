import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { addTask, AppState, selectUser } from '../../../redux';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../../models';

@Component({
  selector: 'new-task',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId: string = '';

  form = this.fb.group({
    title: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select(selectUser).subscribe((user: User | null) => {
      if (user) {
        this.userId = user.id;
      }
    });
  }

  createTask() {
    if (!this.form.valid) return;

    const { title } = this.form.value;

    if (title && this.userId) {
      this.store.dispatch(
        addTask({
          task: {
            title,
            id: uuidv4(),
            isFinished: false,
          },
          userId: this.userId,
        })
      );
      this.form.reset();
    } else {
      console.log('Title is missing');
    }
  }
}
