import { Client } from './../features/client-list/client-list.component';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ClientListService {
    /**
     * Client
     */
    private _client!: Client;

    /**
     * Client list
     */
    private _clientList!: {};

    /**
     * @internal
     */
    constructor(
        private _router: Router,
        private _httpClient: HttpClient,

    ) {}

    /**
     * Get transaction list
     * @returns {Observable<ClientListResponse>} data
     */
    // public getTransactionList(): Observable<ClientListResponse> {
    //     return this._httpClient
    //     .get<ClientListResponse>(``)
    //     .pipe(
    //         tap(
    //         clientList => (this._clientList = clientList.data.attributes)
    //         )
    //     );
    // }

    /**
     * Navigate to client details
     * @param {Client} client
     */
    public openClientDetails(client: Client): void {
        this._client = client;
        void this._router.navigate([`/client-list/item`]);
    }
}
