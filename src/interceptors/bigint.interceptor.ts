import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class BigIntInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        if (data === undefined || data === null) {
          return data;
        }

        const json = JSON.stringify(data, (_, value) =>
          typeof value === 'bigint' ? value.toString() : value
        );

        return JSON.parse(json);
      }),
    );
  }
}
