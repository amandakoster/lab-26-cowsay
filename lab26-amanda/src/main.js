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
        <h1> counter </h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'hello world',
      content: 'cowsay',
    }

    // force handle click to use the current instances context
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState((state) => {
      return {
        content: faker.lorem.words()
      }
    })
  }

  render(){
    return (
      <div>
        <Navbar />
        <button onClick={this.handleClick}></button>
        <pre>{cowsay.say({text: this.state.content})}</pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
