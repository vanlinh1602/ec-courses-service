import { Controller, Get, Post } from '@nestjs/common';

import { IClassroom } from '../interfaces/classroom.service.interface';
import { ClassroomService } from '../services/classroom.service';

@Controller()
export class ClassroomApiController {
  constructor(private readonly classroomServices: ClassroomService) {}

  @Get('/get/all')
  async getClassrooms(): Promise<IClassroom[]> {
    const classrooms = await this.classroomServices.getClassrooms();
    return classrooms.map((classroom) => classroom.dataValues);
  }

  @Get('/get/:id')
  async getClassroom(id: string): Promise<IClassroom> {
    const classroom = await this.classroomServices.getClassroom({ id });
    return classroom.dataValues;
  }

  @Post('/get')
  async getClassroomByFilter(filter: Partial<IClassroom>): Promise<IClassroom> {
    const classroom = await this.classroomServices.getClassroom(filter);
    return classroom.dataValues;
  }

  @Post('/create')
  async createClassroom(data: {
    classroom: Partial<IClassroom>;
  }): Promise<IClassroom> {
    const newClassroom = await this.classroomServices.createClassroom(
      data.classroom,
    );
    return newClassroom.dataValues;
  }

  @Post('/update')
  async updateClassroom(data: {
    id: string;
    classroom: IClassroom;
  }): Promise<{ success: boolean }> {
    const success = await this.classroomServices.updateClassroom(
      data.id,
      data.classroom,
    );
    return { success };
  }

  @Post('/delete')
  async deleteClassroom(data: { id: string }): Promise<{ success: boolean }> {
    const success = await this.classroomServices.deleteClassroom(data.id);
    return { success };
  }
}
