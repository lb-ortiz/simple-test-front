import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Client, ClientData } from '../core/interfaces/client.model';


@Injectable({ providedIn: 'root' })
export class ClientListService {
    /**
     * Get list of transaction
     */
    public get clientList(): ClientData | null {
        return this._clientList;
    }

    /**
     * Client list
     */
    private _clientList!: ClientData;

    /**
   * Get client
   */
  public get client(): Client {
    if (!this._client) {
      void this._router.navigate([`/client-list`]);
    }

    return this._client;
  }

    /**
     * Client
     */
     private _client!: Client;

    /**
     * Api Url
     */
    public get api(): string {
        return `http://localhost:8080`;
    }

    /**
     * @internal
     */
    constructor(
        private _router: Router,
        private _httpClient: HttpClient,
    ) {}

    /**
     * Get client list
     * @returns {Observable<ClientData>} data
     */
    public getClientList():  Observable<ClientData> {
        return this._httpClient.get<ClientData>(`http://localhost:8080/api/client`)
        .pipe(
            tap(
                clientList => (this._clientList = clientList)
            )
        );
    }

    /**
     * Navigate to client details
     * @param {Client} client
     */
    public openClientDetails(client: Client): void {
        this._client = client;
        void this._router.navigate([`/client-list/item`]);
    }
}
