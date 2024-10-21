import { DynamicModule, ForwardReference, Module, Type } from '@nestjs/common';
import { RouterModule as NestJsRouterModule } from '@nestjs/core';

import { RouterClassroomModule } from './routes/routers.classroom.module';

@Module({})
export class RouterModule {
  static forRoot(): DynamicModule {
    const imports: (
      | DynamicModule
      | Type<any>
      | Promise<DynamicModule>
      | ForwardReference<any>
    )[] = [];

    // import router modules
    imports.push(RouterClassroomModule);
    const routes = [
      {
        path: '/',
        module: RouterClassroomModule,
      },
    ];

    imports.push(NestJsRouterModule.register(routes));

    return {
      module: RouterModule,
      providers: [],
      exports: [],
      controllers: [],
      imports,
    };
  }
}
