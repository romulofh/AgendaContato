import { Injectable } from '@angular/core';

import { Contato } from './contato.model';
import { Contatos } from './contatos-mock';

@Injectable()
export class ContatoService {

    getContatos(): Promise<Contato[]>{
        return Promise.resolve(Contatos);
    }

    getContato(id: Number): Promise<Contato>{
        return this.getContatos().
            then((contatos: Contato[]) => contatos.find(contato => contato.id === id));
    }

}