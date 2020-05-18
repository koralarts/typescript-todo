import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './styles/main.scss'

import { Layout } from './components/Layout'
import { Home } from './pages/Home'

ReactDOM.render(
    <Layout><Home /></Layout>,
    document.getElementById('app')
)
