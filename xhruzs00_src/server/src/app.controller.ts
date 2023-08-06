// Author: Simon Peter Hruz (xhruzs00)
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/stops')
  getStops() {
    return this.prisma.stop.findMany({
      select: { label: true, connections: true },
    });
  }

  @Get('/connection/articles')
  getArticles() {
    return this.prisma.article.findMany({
      select: { id: true, label: true, descShort: true, picture: true },
    });
  }

  @Get('/connection/article/:id')
  getArticleById(@Param('id') id: string) {
    return this.prisma.article.findFirst({
      where: { id: parseInt(id) },
      select: { label: true, desc: true, picture: true },
    });
  }

  @Get('/connection/numbers')
  getConnectionNumbers() {
    return this.prisma.connection.findMany({
      select: { type: true, number: true },
    });
  }

  @Get('/connection/stops/:number')
  getConnectionStops(@Param('number') number: string) {
    return this.prisma.connection.findFirst({
      where: { number: number },
      select: { stops: true, signs: true },
    });
  }

  @Get('/connection/exclusions/:number')
  getConnectionExclusions(@Param('number') number: string) {
    return this.prisma.connection.findFirst({
      where: { number: number },
      select: { exclusion: true },
    });
  }

  @Get('/connection/timings/:number/:lastStop')
  getConnectionTimings(
    @Param('number') number: string,
    @Param('lastStop') lastStop: string,
  ) {
    return this.prisma.destination.findFirst({
      where: { number: number, lastStop: lastStop },
      select: { timings: true, signs: true },
    });
  }

  @Get('/connection/days/:number/:lastStop/workdays')
  getConnectionWorkdays(
    @Param('number') number: string,
    @Param('lastStop') lastStop: string,
  ) {
    return this.prisma.destination.findFirst({
      where: { number: number, lastStop: lastStop },
      select: { workdays: true },
    });
  }

  @Get('/connection/days/:number/:lastStop/holidays')
  getConnectionHolidays(
    @Param('number') number: string,
    @Param('lastStop') lastStop: string,
  ) {
    return this.prisma.destination.findFirst({
      where: { number: number, lastStop: lastStop },
      select: { holidays: true },
    });
  }

  @Get('/connection/days/:number/:lastStop/weekends')
  getConnectionWeekends(
    @Param('number') number: string,
    @Param('lastStop') lastStop: string,
  ) {
    return this.prisma.destination.findFirst({
      where: { number: number, lastStop: lastStop },
      select: { weekends: true },
    });
  }
}
