import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
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
  @PrimaryKey
  @Column
  course: string;

  @Column(DataType.JSON)
  styllabus: {
    id: string;
    week: number;
    description: string;
  }[];
}
