class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.toggleVisibility = this.toggleVisibility.bind(this)

    this.state = {
      toggle: false
    }
  }
  toggleVisibility() {
    this.setState((prevState) => {
      return {
        toggle: !prevState.toggle
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.toggle ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.toggle && (
          <div>
            <p>Hello!</p>
          </div>
        )}
      </div>
    ) 
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))