import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  handleDeleteOptions = () => {
    this.setState(() => ({options: []}))
  }
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => option != optionToRemove)
      }
    })
  }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    
    this.setState(() => ({selectedOption: option}))
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter a valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return `The option: "${option}" already exists`
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])}
    })
  }
  componentDidMount() {
    try {
      const optionsJSON = localStorage.getItem('options')
      const options = JSON.parse(optionsJSON)
      
      if (options) {
        this.setState(() => ({options: options}))
      }
    } catch (e) {
      // do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const optionsJSON = JSON.stringify(this.state.options)
      localStorage.setItem('options', optionsJSON)
    }
  }
  render() {
    const title = 'Indecision'
    const subTitle = 'Put your life in the hands of a computer'
    
    return (
      <div>
        <Header
          title = {title}
          subTitle = {subTitle}
        />
        <div className="container">

          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options = {this.state.options}
              handleDeleteOptions = {this.handleDeleteOptions}
              handleDeleteOption = {this.handleDeleteOption}
            />
            <AddOption
              handleAddOption = {this.handleAddOption}
            />
          </div>
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
          />
      </div>
    )
  }
}

export { IndecisionApp as default}