import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
class MultiRoute extends Component {
  render() {

    let routes = []

    this.props.routes.forEach(element => {
      routes.push(
        <Route path={element.path}>
          {element.page}
        </Route>
      )
    });

    return (
      <Switch>
        {routes}
      </Switch>
    )
  }
}

export { MultiRoute }