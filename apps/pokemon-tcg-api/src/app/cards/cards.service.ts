import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CardsService {
  constructor(private prisma: PrismaService) {}

  findOne(id: string) {
    return this.prisma.card.findUnique({
      where: { id },
      select: {
        name: true,
        supertype: true,
        subtypes: true,
        types: true,
        set_id: true,
        number: true,
        rarity: true,
        image: {
          select: {
            card_id: true,
            url: true,
            type: true,
          },
        },
        market: {
          select: {
            card_id: true,
            url: true,
            updated_at: true,
            market: true,
          },
        },
      },
    });
  }
}
