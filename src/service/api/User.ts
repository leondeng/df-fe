import { inject, injectable } from 'inversify'
import BaseApi from './BaseApi'
import { IApplication } from '../../config'
import { IDENTIFIER } from '../../constants'

export interface IUser { app: IApplication }

@injectable()
export class User extends BaseApi {
  constructor(
    @inject(IDENTIFIER.APPLICATION) app: IApplication
  ) {
    super(app)
  }
}
