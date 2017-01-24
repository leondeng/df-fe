import { expect } from 'chai';
import { container } from '../../src/config'
import { IDENTIFIER } from '../../src/constants'
import { User as UserService } from '../../src/service/api/User'
import { Application } from '../../src/config'

describe('Service', function () {
  it('Use Api should have application initialized', function () {
    let app = container.get<Application>(IDENTIFIER.APPLICATION)
    let api = new UserService(app)

    expect(api.app).to.be.an.instanceof(Application)
    expect(api.app.name).to.equal('TestApp')
    expect(api.app.env).to.equal('Test')
  })
})
