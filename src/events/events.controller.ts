import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('events')
export class EventsController {
  @Get()
  findAll() {
    return [
      { id: 1, name: 'event 1' },
      { id: 2, name: 'event 2' },
      { id: 3, name: 'event 3' },
    ];
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return { id: 1, name: 'event 1' };
  }

  @Post()
  create(@Body() input: CreateEventDto) {
    return input;
  }

  @Put(':id')
  update(@Param('id') id, @Body() input: UpdateEventDto) {
    return input;
  }

  @Delete(':id')
  remove(@Param('id') id, @Body() input) {
    return input;
  }
}
