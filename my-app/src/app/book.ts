import { Author } from './author';

export class Book {
    name: string;
    price: number;
    author: Author;
    constructor(name: string, price: number, author: Author) {
        this.name = name;
        this.price = price;
        this.author = author;
    }

}