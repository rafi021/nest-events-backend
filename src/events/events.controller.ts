import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

@Controller('events')
export class EventsController {
  @Get()
  findAll() {
    return 'This action returns all events.';
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return id;
  }

  @Post()
  create() {
    return 'This action creates a new event.';
  }

  @Put(':id')
  update() {
    return 'This action updates a single event.';
  }

  @Delete(':id')
  remove() {
    return 'This action removes a single event.';
  }
}
