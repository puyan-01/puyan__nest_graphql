
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateBookInput {
    id: string;
    name: string;
    type?: Nullable<string>;
    authorId?: Nullable<string>;
}

export class CreateAuthorInput {
    id: string;
    name: string;
    gender: number;
    emall: string;
}

export abstract class IQuery {
    abstract books(): Nullable<Book>[] | Promise<Nullable<Book>[]>;

    abstract author(): Nullable<Author>[] | Promise<Nullable<Author>[]>;
}

export abstract class IMutation {
    abstract createBook(createBookInput: CreateBookInput): Book | Promise<Book>;

    abstract createAuthor(createAuthorInput: CreateAuthorInput): Author | Promise<Author>;
}

export class Book {
    id: string;
    name: string;
    type?: Nullable<string>;
    author: Author;
}

export class Author {
    id: string;
    name: string;
    gender: number;
    emall: string;
    books?: Nullable<Book[]>;
}

type Nullable<T> = T | null;
