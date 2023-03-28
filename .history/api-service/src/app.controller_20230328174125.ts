import { Controller, Get, StreamableFile, Header, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { Logger } from 'winston';
import { AppService } from './app.service';
import Quote from './interfaces/quote.interface';
import { Symbol } from './decorators/symbol.decorator';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'text/html')
  getDoc(): StreamableFile {
    return this.appService.getDoc(); 
  }

  @Get('/quote/:symbol')
  getQuote(@Symbol() symbol: string): Promise<Quote> {
    if ( symbol.length > 0) {
      return this.appService.getQuote(symbol);
    }
    throw new HttpException("Symbol must be a valid quote.", HttpStatus.BAD_REQUEST);
  }
}
