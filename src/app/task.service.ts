import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, setDoc, updateDoc, deleteDoc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Task {
  id?: string;
  title: string;
  description: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskCollection = collection(this.firestore, 'tasks');

  constructor(private firestore: Firestore) {}

  addTask(task: Task) {
    const id = doc(this.taskCollection).id;
    const newTask = { ...task, id };
    return setDoc(doc(this.taskCollection, id), newTask);
  }

  // obtener tareas
  getTasks(): Observable<Task[]> {
    return collectionData(this.taskCollection, { idField: 'id' }) as Observable<Task[]>;
  }

  // tarea por id
  getTaskById(id: string): Observable<Task> {
    return docData(doc(this.firestore, `tasks/${id}`)) as Observable<Task>;
  }

  // actualizar tarea
  updateTask(task: Task) {
    const taskRef = doc(this.firestore, `tasks/${task.id}`);
    return updateDoc(taskRef, { ...task });
  }

  //  Eliminar una tarea
  deleteTask(id: string) {
    const taskRef = doc(this.firestore, `tasks/${id}`);
    return deleteDoc(taskRef);
  }
}
