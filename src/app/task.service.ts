import { Injectable } from '@angular/core'; 
import { Firestore, collection, collectionData, doc, updateDoc, deleteDoc, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Task {
  id: string;
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
    return addDoc(this.taskCollection, task);
  }

  getTasks(): Observable<Task[]> {
    return collectionData(this.taskCollection, { idField: 'id'}) as Observable<Task[]>;
  }

  updateTask(id: string, data: Partial<Task>) {
    const taskDoc = doc(this.firestore, `tasks/${id}`);
    return updateDoc(taskDoc, data);
  }

  deleteTask(id: string) {
    const taskDoc = doc(this.firestore, `tasks/${id}`);
    return deleteDoc(taskDoc);
  }

  calculateSum(a: number, b: number): number {
    return a + b;
  }

  calculateDifference(a: number, b: number): number {
    return a - b;
  }
}
