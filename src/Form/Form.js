import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Form.scss';

class Form extends Component {
  constructor(getFormData) {
    super(getFormData);
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
    } else { this.setState({ nameErr: false }) }

    if (!this.state.quote) {
      this.setState({quoteErr: true})
    } else { this.setState({ quoteErr: false })}

    if(!this.state.rank) {
      this.setState({rankErr: true})
    } else { this.setState({ rankErr: false }) }

    if(this.state.name && this.state.quote && this.state.rank) {
      let user = {name:this.state.name, 
        quote:this.state.quote, 
        rank: this.state.rank}
      this.props.getFormData(user)
    }
  }

  render() {
    const {name, quote, rank, nameErr, quoteErr, rankErr} = this.state
    let nameClass = nameErr ? "error" : "";
    let quoteClass = quoteErr ? "error" : "";
    let rankClass = rankErr ? "error" : "";


    return(
      <form>
        <label htmlFor="name">Name</label>
        <input autoFocus value={name} id="name" 
        placeholder="Enter a name"
        className={nameClass}
        onChange={this.handleChange}/>
        <div>
        {nameErr && <p>No Name</p>}
        </div>
        <label htmlFor="quote">Favorite Star Wars Quote</label>
        <input value={quote} id="quote"
        className={quoteClass} 
          placeholder="Enter your favorite Quote"  
        onChange={this.handleChange}/>
        <div>
        {quoteErr && <p>No Quote</p>}
        </div>
        <label htmlFor="rank">Rank</label>
        <select value={rank} 
        className={rankClass}
        onChange={this.handleChange} id="rank">
          <option value="Padawan">Padawan</option>
          <option value="Jedi Knight">Jedi Knight</option>
          <option value="Jedi Master">Jedi Master</option>
        </select>
        <div>
        {rankErr && <p>No Rank</p>}
        </div>
        <Link to='/movies' onClick={this.handleSubmit}>
          <button type="button">May The Force Be With You</button>
        </Link>
      </form>
    )
  }
}

export default Form;

Form.propTypes = {
  getFormData: PropTypes.func.isRequired
}