import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserContextService {
  public getRedirectPage(redirectProtocol: string = 'spa') {
    return `${redirectProtocol}:/`;
  }
}
