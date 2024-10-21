import { Inject, Injectable } from '@nestjs/common';

import { Classroom } from '../database/classroom.entity';
import {
  IClassroom,
  IClassroomService,
} from '../interfaces/classroom.service.interface';

@Injectable()
export class ClassroomService implements IClassroomService {
  constructor(
    @Inject('CLASSROOM_REPOSITORY')
    private classroomRepository: typeof Classroom,
  ) {}

  async createClassroom(classroom: Partial<IClassroom>): Promise<Classroom> {
    return this.classroomRepository.create({ ...classroom });
  }

  async getClassroom(classroomId: string): Promise<Classroom> {
    return this.classroomRepository.findOne({
      where: {
        id: classroomId,
      },
    });
  }
}
