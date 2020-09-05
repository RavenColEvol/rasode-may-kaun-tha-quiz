import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import { Home, Quiz, Result, NotFound } from './components';

import './style.scss'

const { Content, Header } = Layout;

const routes = [
    { path: '/', Component: Home },
    { path: '/quiz', Component: Quiz },
    { path: '/result', Component: Result },
]

export default () => {
    return (
        <Layout>
            <HashRouter>

                <Header>
                    <span className='logo'>
                        RasodeMayKaunTha?
                    </span>
                </Header>
                
                <Content className='bg-white fullscreen'>
                    <Switch>
                        {
                            routes.map(route => <Route key={route['path']} exact path={route['path']}> <route.Component /> </Route>)
                        }
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </Content>

            </HashRouter>
        </Layout>
    )
}
