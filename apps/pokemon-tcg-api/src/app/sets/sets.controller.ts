import { Controller, Get, Param } from '@nestjs/common';
import { SetsService } from './sets.service';

@Controller('sets')
export class SetsController {
  constructor(private readonly setsService: SetsService) {}

  @Get()
  findAll() {
    return this.setsService.findAll();
  }

  @Get(':id/cards')
  async findBySet(@Param('id') id: string) {
    return this.setsService.findBySet(id);
  }
}
