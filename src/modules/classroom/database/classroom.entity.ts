import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'classrooms',
})
export class Classroom extends Model {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  createdAt: Date;
}
