import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SetsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.set.findMany();
  }

  async findBySet(id: string) {
    return this.prisma.card.findMany({
      where: {
        set_id: id,
      },
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
