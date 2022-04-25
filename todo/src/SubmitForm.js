import { Component } from 'react';

class SubmitForm extends Component {
    state = {
        text: ""
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.text);
        this.setState({text: ''})
    }
    render() {
        return (
            <form onSumbit ={this.handleSubmit}>
                <input type='text' className='input'placeholder='Enter Item'
                value={this.state.text} 
                onChange={(event) => this.setState({text: event.target.value})}
                />
                <button className='button'> Submit</button>
            </form>
        )
    }
}
export default SubmitForm;