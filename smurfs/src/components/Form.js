import React from "react";
import { addSmurf } from "../actions";
import { connect } from "react-redux";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }
    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
            const smurf = {
                name: this.state.name,
                age: this.state.age,
                height: this.state.height
            }
        this.props.addSmurf(smurf);
    }
    render(){
        return (
            <div>
                <form>
                    <input
                        name='name'
                        type='text'
                        value={this.state.name}
                        placeholder='NAME'
                        onChange={this.handleChanges}
                    />
                   <input
                        name='age'
                        type='number'
                        value={this.state.age}
                        placeholder='AGE'
                        onChange={this.handleChanges}
                    />
                    <input
                        name='height'
                        type='text'
                        value={this.state.height}
                        placeholder='HEIGHT'
                        onChange={this.handleChanges}
                    />
                </form>
                <button onClick={this.handleSubmit}>Add a Smurf</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(state.smurfs);
    return {
        smurfs: state.smurfs
    };
};

export default connect(mapStateToProps, { addSmurf })(Form);