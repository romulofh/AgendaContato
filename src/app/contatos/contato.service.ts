import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Contato } from './contato.model';
import { Contatos } from './contatos-mock';

@Injectable()
export class ContatoService {

    private apiUrl: string = 'app/contatos';

    constructor(
        private http: Http
    ){}

    getContatos(): Promise<Contato[]>{
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json().data as Contato[]);
    }

    getContato(id: Number): Promise<Contato>{
        return this.getContatos().
            then((contatos: Contato[]) => contatos.find(contato => contato.id === id));
    }

}