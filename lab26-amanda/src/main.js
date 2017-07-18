import './style/main.scss'
import React from 'react' // use jsx
import ReactDom from 'react-dom' //  render jsx
import cowsay from 'cowsay-browser'
import faker from 'faker'

class PokemonForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokeName:''
    }
    
    this.handlePokeNameChange = this.handlePokeNameChange.bind(this)
  }

  handlePokeNameChange(){
  }

  render(){
    return (
      <form>
      <input
      type = 'text'
      name = 'pokeName'
      placeholder = 'poke name'
      value = {this.state.pokeName}
      onChange={this.handlePokeNameChange}
      />
      </form>
    )
  }
}

handel

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content:'',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({
      content: cowsay.say({text: faker.hacker.phrase}),
    })
  }

render(){
  return (
    <div>
    <h1>Hello World</h1>
    <button onClick={this.handleClick}>clicke me</button>
    <pre> {this.state.content}</pre>
    </div>
    )
  }
}

const container = document.createElement('div')
document.body.appendChild(container)
ReactDom.render(<App />,container)
