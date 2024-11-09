import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ICourses } from 'src/database/types/courses';

import { CoursesService } from '../services/courses.service';

@Controller()
export class CoursesApiController {
  constructor(private readonly coursesServices: CoursesService) {}

  @Get('/get')
  async getCourse(@Query() filter: Partial<ICourses>): Promise<ICourses[]> {
    if (!Object.keys(filter).length) {
      const classes = await this.coursesServices.getCourses();
      return classes.map((c) => c.dataValues);
    } else {
      const classes = await this.coursesServices.getFilterCourse(filter);
      return classes.map((c) => c.dataValues);
    }
  }

  @Post('/create')
  async createCourse(
    @Body() data: { course: Partial<ICourses> },
  ): Promise<ICourses> {
    const newCourse = await this.coursesServices.createCourse(data.course);
    return newCourse.dataValues;
  }

  @Post('/update')
  async updateCourse(
    @Body() data: { id: string; course: Partial<ICourses> },
  ): Promise<{ success: boolean }> {
    const success = await this.coursesServices.updateCourse(
      data.id,
      data.course,
    );
    return { success };
  }

  @Post('/delete')
  async deleteCourse(
    @Body() data: { id: string },
  ): Promise<{ success: boolean }> {
    const success = await this.coursesServices.deleteCourse(data.id);
    return { success };
  }
}
