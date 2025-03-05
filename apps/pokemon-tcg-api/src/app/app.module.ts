import { Module } from '@nestjs/common';
import { SetsModule } from './sets/sets.module';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [SetsModule, CardsModule],
})
export class AppModule {}
