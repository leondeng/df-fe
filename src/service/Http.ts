import { injectable } from 'inversify'

export interface IHttp {

}

@injectable()
export class Http implements IHttp {
  constructor(
    //TODO: type of {method, url, headers, data}
  ) {
    //TODO: fetch(url, {method, headers, body: data})
  }
}