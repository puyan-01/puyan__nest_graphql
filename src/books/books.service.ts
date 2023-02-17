import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.input';

@Injectable()
export class BooksService {
  create(createBookInput: CreateBookDto) {
    return {
      exampleField: 4,
    };
  }

  findAll() {
    return [
      {
        exampleField: 1,
      },
      { exampleField: 2 },
      { exampleField: 3 },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }
}
