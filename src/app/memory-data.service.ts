import { Contato } from './contatos/contato.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MemoryDataService implements InMemoryDbService {

    createDb(): {} {
        let contatos: Contato[] = [
            {id: 1, nome: 'Steven Gerrard', email: 'stevie@email.com', telefone: '(85) 5555-5555'},
            {id: 2, nome: 'Jordan Henderson', email: 'hendo@email.com', telefone: '(85) 5555-5555'},
            {id: 3, nome: 'Ian Rush', email: 'rush@email.com', telefone: '(85) 5555-5555'},
            {id: 4, nome: 'Kenny Dalglish', email: 'king@email.com', telefone: '(85) 5555-5555'},
            {id: 5, nome: 'Roberto Firmino', email: 'bobby@email.com', telefone: '(85) 5555-5555'}
        ];

        return {contatos};
    }

}