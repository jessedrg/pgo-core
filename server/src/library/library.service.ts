import { Injectable } from '@nestjs/common';
import { getAlloy } from './Form/getAlloy';
@Injectable()
export class LibraryService {}

LibraryService.prototype!.getAlloy = getAlloy;
