 
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Author } from './../Author'
@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less'],
  providers: [HttpClient]
})
export class AdminComponent implements OnInit{ 
  constructor(private http: HttpClient) { }
  ngOnInit( ) { 
    this.update_list(); 
  }
  authors: Array<Author> = [];
  receivedData: Author;
  done: boolean = false;
  author: Author;
  str: string; 
  
  submit(name: string, surname: string, patronymic: string) {
    console.log(name, surname, patronymic)
    let author = new Author(name, surname, patronymic)
    console.log(this.author)
    this.http.post('http://localhost:5001/authors', author).subscribe(tab => {
      this.update_list();
    } 
    );
  }

  delete(id: number) {
    console.log(id)
   this.http.delete('http://localhost:5001/authors/'+ id).subscribe( tab => {
    this.update_list();
  });
  }

  update(name: string, surname: string, patronymic: string,id: number) {
    console.log(id)
    let author = new Author(name, surname, patronymic)
    let str = id
    console.log(str)
    this.http.put('http://localhost:5001/authors/upd/'+ id, author).subscribe(tab => {
      this.update_list();
    });
  }
  update_list(){
    this.http.get('http://localhost:5001/authors').subscribe((response: any) => {
      console.log("response", response);
      this.authors = [];
      response.forEach(element => {
        this.authors.push(element);
      });
    });
    console.log("debug",this.authors);
  }
}