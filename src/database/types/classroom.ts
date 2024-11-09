import { Optional } from 'sequelize';

export interface IClassroom {
  id: string;
  name: string;
  course: string;
  teacher: string[];
  students: string[];
  daysInWeek: string[];
  hoursInDay: string;
  dateStart: number;
  dateEnd: number;
  status: string;
}

export type IClassroomCreate = Optional<IClassroom, 'id'>;
