import { Column, DataType, Model, Table } from 'sequelize-typescript';

import {
  IClassroom,
  IClassroomCreate,
} from '../interfaces/classroom.service.interface';

@Table({
  tableName: 'classrooms',
})
export class Classroom extends Model<IClassroom, IClassroomCreate> {
  @Column
  name: string;

  @Column
  course: string;

  @Column(DataType.ARRAY(DataType.STRING))
  teacher: string[];

  @Column(DataType.ARRAY(DataType.STRING))
  students: string[];

  @Column(DataType.ARRAY(DataType.STRING))
  daysInWeek: string[];

  @Column
  hoursInDay: string;

  @Column
  dateStart: number;

  @Column
  dateEnd: number;

  @Column
  status: string;
}
