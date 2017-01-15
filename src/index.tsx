import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { container, Application } from './config'
import { IDENTIFIER } from './constants'

import {Hello} from './components/Hello'

let app = container.get<Application>(IDENTIFIER.APPLICATION)

ReactDOM.render(
    <Hello compiler={app.name} framework={app.env} />,
    document.getElementById('example')
)
