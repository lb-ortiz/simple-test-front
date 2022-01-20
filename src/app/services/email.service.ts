import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Client, ClientData, Email } from '../core/interfaces/client.model';


@Injectable({ providedIn: 'root' })
export class EmailService {
    /**
     * Get list of transaction
     */
    public get email(): Email | null {
        return this._email;
    }

    /**
     * Email list
     */
    private _email!: Email;

    /**
     * Api Url
     */
    public get api(): string {
        return `http://localhost:8080/api/client`;
    }

    /**
     * @internal
     */
    constructor(
        private _router: Router,
        private _httpClient: HttpClient,
    ) {}

    /**
     * Delete Client
     * @param id: number
     */
    deleteRequest(id: number): Observable<unknown> {
        return this._httpClient.delete(`${this.api}/email/${id}`);
    }

    /**
     * Delete Client
     * @param id: number
     */
     addRequest(email: Email): Observable<unknown> {
         console.log('emial:',email)
        return this._httpClient.post(`${this.api}/email/add`, email);
    }
}
