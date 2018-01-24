import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Contato } from './contato.model';
import { Contatos } from './contatos-mock';

@Injectable()
export class ContatoService {

    private apiUrl: string = 'app/contatos';
    private headers: Headers = new Headers({'Content-type': 'application/json'});

    constructor(
        private http: Http
    ){}

    getContatos(): Promise<Contato[]>{
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json().data as Contato[])
            .catch(this.handleError);
    }

    getContato(id: Number): Promise<Contato>{
        return this.getContatos().
            then((contatos: Contato[]) => contatos.find(contato => contato.id === id));
    }

    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err);
    } 

    create(contato: Contato): Promise<Contato> {
        return this.http.post(this.apiUrl, JSON.stringify(contato), {headers: this.headers})
        .toPromise()
        .then((response: Response) => response.json().data as Contato)
        .catch(this.handleError);
    }

    update(contato: Contato): Promise<Contato> {
        const urlUpdate = `${this.apiUrl}/${contato.id}`;
        return this.http.put(urlUpdate, JSON.stringify(contato), {headers: this.headers})
        .toPromise()
        .then(() => contato as Contato)
        .catch(this.handleError);
    }

    delete(contato: Contato): Promise<Contato> {
        const urlDelete = `${this.apiUrl}/${contato.id}`;
        return this.http.delete(urlDelete, {headers: this.headers})
        .toPromise()
        .then(() => contato as Contato)
        .catch(this.handleError);        
    }

}