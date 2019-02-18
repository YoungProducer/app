import React, {Component}                   from 'react'
import ReactHabitat, { ContainerBuilder }   from 'react-habitat'
import { createStore }                      from 'redux'
import ReduxDomFactory                      from './components/reduxdomstore'

import HeaderBar        from './components/headerbar'
import VideoPlayer      from './components/videoplayer'
import ServicesList     from './components/services'
import combineReducers  from './reducers/reducers'
import StatementSender  from './containers/statementsender'

class App extends ReactHabitat.Bootstrapper {
    constructor() {
        super()

        const containerBuilder = new ReactHabitat.ContainerBuilder()

        const store = createStore(
            combineReducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        )

        containerBuilder.factory = new ReduxDomFactory(store)

        containerBuilder
        .register(HeaderBar)
        .as('HeaderBar')
        .withOptions({
            tag: 'section',
            className: 'header-bar'
        })
        containerBuilder.register(VideoPlayer).as('IphoneVideo')
        containerBuilder
        .register(ServicesList)
        .as('ServicesList')
        .withOptions({
            className: 'price-list'
        })
        containerBuilder.register(StatementSender).as('StatementSender')


        this.setContainer(containerBuilder.build())
    }
}

export default new App()
