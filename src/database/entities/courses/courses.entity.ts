import { Column, Model, Table } from 'sequelize-typescript';
import { ICourses, ICoursesCreate } from 'src/database/types/courses';

@Table({
  tableName: 'courses',
})
export class Courses extends Model<ICourses, ICoursesCreate> {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  duration: number;

  @Column
  level: string;

  @Column
  status: string;

  @Column
  price: number;
}
