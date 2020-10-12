---
to: src/<%= category %>/<%= section %>/<%= name %>/<%= name %>.js
---
<% const comp = name -%>
<% if(locals.stateful) { -%>
import React, { Component } from 'react'
class <%= comp %> extends Component {
  render() {
    return <div>edit me: at components/<%= name %>/<%= name %>.js</div>
  }
}
<% } else if(locals.functional) { -%>
import React from 'react'
const <%= comp %> = props => <div>edit me: at components/<%= name %>/<%= name %>.js</div>
<% } else { -%>
import React, { PureComponent } from 'react'
class <%= comp %> extends PureComponent {
  render() {
    return <div>edit me: at components/<%= name %>/<%= name %>.js</div>
  }
}
<% } -%>

export { <%= comp %> }