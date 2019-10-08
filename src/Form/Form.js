import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      quote: "",
      rank:"",
      nameErr: false,
      quoteErr: false,
      rankErr: false
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  handleSubmit = () => {
    if (!this.state.name) {
      this.setState({nameErr: true})
    }

    if (!this.state.quote) {
      this.setState({quoteErr: true})
    }

    if(!this.state.rank) {
      this.setState({rankErr: true})
    }

    if(this.state.name && this.state.quote && this.state.rank) {
      console.log('submit')
    }
  }

  render() {
    const {name, quote, rank, nameErr, quoteErr, rankErr} = this.state
    return(
      <form>
        <label htmlFor="name">Name</label>
        <input value={name} id="name" onChange={this.handleChange}/>
        {nameErr && <p>No Name</p>}
        <label htmlFor="quote">Favorite Quote</label>
        <input value={quote} id="quote" onChange={this.handleChange}/>
        {quoteErr && <p>No Quote</p>}
        <label htmlFor="rank">Rank</label>
        <select value={rank} onChange={this.handleChange} id="rank">
          <option value="">Choose A Rank</option>
          <option value="Padawan">Padawan</option>
          <option value="Jedi Knight">Jedi Knight</option>
          <option value="Jedi Master">Jedi Master</option>
        </select>
        {rankErr && <p>No Rank</p>}
        <button type="button" onClick={ this.handleSubmit }>May The Force Be With You</button>
      </form>
    )
  }

}

export default Form;