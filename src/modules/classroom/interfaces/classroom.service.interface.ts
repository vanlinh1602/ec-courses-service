import { Classroom } from '../database/classroom.entity';

export interface IClassroom {
  id: string;
  name: string;
  description: string;
}

export interface IClassroomService {
  createClassroom: (classroom: IClassroom) => Promise<Classroom>;
  getClassroom: (classroomId: string) => Promise<Classroom>;
  // updateClassroom: (classroom: Classroom) => Promise<Classroom>;
  // deleteClassroom: (classroomId: string) => Promise<boolean>;
}
