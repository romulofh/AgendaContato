import { ContatoService } from './contato.service';
import { Contato } from './contato.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html',
    styles: [`
        .cursor-pointer:hover {
            cursor: pointer;
        }
    `]
})
export class ContatoBuscaComponent implements OnInit {

    contatos: Observable<Contato[]>
    private termosBusca: Subject<string> = new Subject<string>();

    constructor(
       private contatoService: ContatoService,
       private router: Router
    ){}

    ngOnInit(){
        this.contatos = this.termosBusca
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(term => {
                console.log('Fez a busca: ' + term);
                return term ? this.contatoService.search(term) : Observable.of<Contato[]>([]);
            }).catch(err => {
                console.log(err);
                return Observable.of<Contato[]>([]);
            });

    }

    search(termo: string): void {
        console.log(termo);
        this.termosBusca.next(termo);
    }

    detalhes(contato: Contato): void {
        let link = ['contato/save', contato.id];
        this.router.navigate(link);
    }

}