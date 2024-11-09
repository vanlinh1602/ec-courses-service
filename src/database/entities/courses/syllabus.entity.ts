import { Column, DataType, Model, Table } from 'sequelize-typescript';
import {
  ICourseSyllabus,
  ICourseSyllabusCreate,
} from 'src/database/types/courses';

@Table({
  tableName: 'course-syllabus',
})
export class CourseSyllabus extends Model<
  ICourseSyllabus,
  ICourseSyllabusCreate
> {
  @Column
  course: string;

  @Column(DataType.JSON)
  styllabus: {
    week: number;
    description: string;
  }[];
}
