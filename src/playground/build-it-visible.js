class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            buttonState: false
        }
    }
    
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                buttonState: !prevState.buttonState
            }
        })
    }
    
    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
            {this.state.buttonState ? 'Hide Details' : 'Show Details'}
            </button>
            { this.state.buttonState && <p>'Hey, These are some details you can now see.'</p>}
        </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
