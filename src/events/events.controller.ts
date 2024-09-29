import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

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
  create(@Body() input) {
    return input;
  }

  @Put(':id')
  update(@Param('id') id, @Body() input) {
    return input;
  }

  @Delete(':id')
  remove(@Param('id') id, @Body() input) {
    return input;
  }
}
