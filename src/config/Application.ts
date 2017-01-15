import { injectable } from 'inversify'
import 'reflect-metadata'

export interface IApplication {
  name: string
  env: string
}

@injectable()
export class Application implements IApplication {
  public name: string = 'TestApp'
  public env: string = 'Test'
}
