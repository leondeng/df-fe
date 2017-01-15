import { IApplication } from '../../config'

export default class BaseApi {
  app: IApplication
  constructor(
    app: IApplication
  ) {
    this.app = app
  }
}
