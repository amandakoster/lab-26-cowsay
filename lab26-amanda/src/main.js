import './style/main.scss'
import React from 'react' // use jsx
import ReactDom from 'react-dom' //  render jsx
import cowsay from 'cowsay-browser'
import faker from 'faker'

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <header className='hello-navbar'>
        <h1> Generate Cowsay Lorem </h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'hello world',
      content: 'Cow say WHAT?',
    }

    // force handle click to use the current instances context
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState((state) => {
      return {
        content: faker.hacker.phrase()
      }
    })
  }

  render(){
    return (
      <div>
        <Navbar />
        <button onClick={this.handleClick}>click me</button>
        <pre>{cowsay.say({text: this.state.content})}</pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
