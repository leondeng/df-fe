import { Container } from 'inversify'
import { IApplication, Application} from './Application'
import { IDENTIFIER } from '../constants'
import { IUser, User } from '../service/api/User'

let container = new Container()

container.bind<IApplication>(IDENTIFIER.APPLICATION).to(Application)
container.bind<IUser>(IDENTIFIER.USERAPI).to(User)

export default container

