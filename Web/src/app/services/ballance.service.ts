import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BallanceService {
  private ballance!: number;

  constructor() {
    this.ballance = 0;
  }

  public getCurrentBallance(): number {
    return this.ballance;
  }
}
