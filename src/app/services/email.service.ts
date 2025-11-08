import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface EmailRequest {
  name: string;
  email: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  messageId: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = `${environment.baseURL}api/email/shivholic`;

  constructor(private http: HttpClient) { }

  sendEmail(emailData: EmailRequest): Observable<EmailResponse> {
    return this.http.post<EmailResponse>(this.apiUrl, emailData);
  }
}
