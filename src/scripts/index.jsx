import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import '../stylesheets/Main.scss'

class MainComponent extends Component {
  render () {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

ReactDOM.render(<MainComponent />, document.getElementById('root'))
