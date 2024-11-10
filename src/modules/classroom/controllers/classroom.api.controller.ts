import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IClassroom } from 'src/database/types/classroom';

import { ClassroomService } from '../services/classroom.service';

@Controller()
export class ClassroomApiController {
  constructor(private readonly classroomServices: ClassroomService) {}

  @Get('/get')
  async getClassroomByFilter(
    @Param() filter: Partial<IClassroom>,
  ): Promise<IClassroom[]> {
    if (!Object.keys(filter).length) {
      const classes = await this.classroomServices.getClassrooms();
      return classes.map((c) => c.dataValues);
    } else {
      const classes = await this.classroomServices.getFilterClassroom(filter);
      return classes.map((c) => c.dataValues);
    }
  }

  @Post('/create')
  async createClassroom(
    @Body() data: { classroom: Partial<IClassroom> },
  ): Promise<IClassroom> {
    const newClassroom = await this.classroomServices.createClassroom(
      data.classroom,
    );
    return newClassroom.dataValues;
  }

  @Post('/update')
  async updateClassroom(
    @Body() data: { id: string; classroom: IClassroom },
  ): Promise<{ success: boolean }> {
    const success = await this.classroomServices.updateClassroom(
      data.id,
      data.classroom,
    );
    return { success };
  }

  @Post('/delete')
  async deleteClassroom(
    @Body() data: { id: string },
  ): Promise<{ success: boolean }> {
    const success = await this.classroomServices.deleteClassroom(data.id);
    return { success };
  }
}
