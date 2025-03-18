import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonIcon, } from '@ionic/angular/standalone';
import { TaskService, Task } from '../task.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonIcon, IonicModule, CommonModule, FormsModule],
})
export class HomePage implements OnInit {
  tasks: any[]=[];
  newTask: string = '';
  task: any = {
    id: '',
    title: '',
    description: '',
    completed: false,
  }

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    // this.tasks$ = this.taskService.getTasks(); // Cargar las tareas al iniciar
  }

  //addTask() {
    // if (this.task.title.trim() !== '') {
    //   this.taskService.addTask({ ...this.task });
    //   this.task.title = ''; // Limpiar el campo después de añadir
    // }
  //}

  addTask() {
    if (this.task.title && this.task.description) {
      this.tasks.push({ ...this.task, id: Date.now() });
      this.task = { title: '', description: '', completed: false }; // Reseteo del formulario
    }
  }
  

  toggleCompleted(task: Task) {
    this.taskService.updateTask(task.id!, { completed: !task.completed });
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id);
  }
}
