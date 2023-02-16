import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';

@Injectable()
export class BooksService {
  create(createBookInput: CreateBookInput) {
    return 'This action adds a new book';
  }

  findAll() {
    // return `This action returns all books`;
    return [
      {examp}
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }
}
