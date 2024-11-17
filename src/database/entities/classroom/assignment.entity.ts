import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { IAssignment, IAssignmentCreate } from 'src/database/types/classroom';

@Table({
  tableName: 'assignment',
})
export class Assignment extends Model<IAssignment, IAssignmentCreate> {
  @PrimaryKey
  @Column(DataType.STRING)
  id: string;

  @Column
  classId: string;

  @Column
  title: string;

  @Column
  description: string;

  @Column(DataType.DATE)
  dueDate: Date;
}
