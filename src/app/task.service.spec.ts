import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { Firestore } from '@angular/fire/firestore';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TaskService,
        { provide: Firestore, useValue: {} }  
      ]
    });
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Pruebas de suma
  it('should correctly sum two numbers', () => {
    const result = service.calculateSum(5, 3);
    expect(result).toBe(8);
  });

  it('should handle negative numbers in sum', () => {
    const result = service.calculateSum(-5, 10);
    expect(result).toBe(5);
  });

  it('should correctly subtract two numbers', () => {
    const result = service.calculateDifference(10, 4);
    expect(result).toBe(6);
  });

  it('should handle negative result in subtraction', () => {
    const result = service.calculateDifference(4, 10);
    expect(result).toBe(-6);
  });
});
