import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading: boolean = false;

  private first: boolean = true;

  constructor() { }

  setLoading(loading: boolean) {
    this.loading = loading;
    if (!loading) {
      this.first = false;
    }
  }

  getLoading(): boolean {
    return this.loading;
  }

  isFirstLoading(): boolean {
    return this.first;
  }
}
