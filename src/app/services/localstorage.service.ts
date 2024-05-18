import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  get<T>(key: string): T {
    let value = localStorage.getItem(key);
    if (value === null) throw new Error('Not Found');
    const obj = JSON.parse(value) as T;

    return obj;
  }

  post(key: string, obj: any): boolean {
    localStorage.setItem(key, JSON.stringify(obj));
    return true;
  }

  patch<T>(key: string, callback: (obj: T) => T): void {
    const value = this.get<T>(key);
    this.post(key, callback(value));
  }

  delete(key: string): boolean {
    localStorage.removeItem(key);
    return true;
  }
}
