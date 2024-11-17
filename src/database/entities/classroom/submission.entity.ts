import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { ISubmission, ISubmissionCreate } from 'src/database/types/classroom';

@Table({
  tableName: 'submission',
})
export class Submission extends Model<ISubmission, ISubmissionCreate> {
  @PrimaryKey
  @Column
  assignmentId: string;

  @PrimaryKey
  @Column
  studentId: string;

  @Column
  submission: string;

  @Column
  path: string;
}
