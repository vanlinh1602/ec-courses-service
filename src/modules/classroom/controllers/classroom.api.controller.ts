import { Controller, Get } from '@nestjs/common';

import { ClassroomService } from '../services/classroom.service';

@Controller({
  path: '/classroom',
})
export class ClassroomApiController {
  constructor(private readonly classroomServices: ClassroomService) {}

  @Get('/')
  async getHello(): Promise<string> {
    const classroom = await this.classroomServices.createClassroom({
      name: 'Classroom 1',
      description: 'This is the first classroom',
    });
    return `Welcome to the Classroom API! ${classroom.name}`;
  }
}
