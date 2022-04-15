import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'githubPipe'
})
export class GithubPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
