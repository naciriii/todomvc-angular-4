import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  /**
   *
   * @param key
   * @returns Object
   */
  public getItem(key: string): any {
    const item = localStorage.getItem('todo.' + key) || undefined;
    try {
      return JSON.parse(item as string);
    } catch (error) {
      return item;
    }
  }

  /**
   *
   * @param key
   * @param value
   * @returns void
   */
  public setItem(key: string, value: any): void {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    return localStorage.setItem('todo.' + key, value);
  }

  /**
   * Reset Localstorage
   */
  public restore(): void {
    localStorage.clear();
  }
}
