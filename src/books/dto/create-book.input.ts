import { Min } from 'class-validator';
import { CreateBookInput } from '../../graphql';

export class CreateBookDto extends CreateBookInput {
  @Min(1)
  name: string;
}
