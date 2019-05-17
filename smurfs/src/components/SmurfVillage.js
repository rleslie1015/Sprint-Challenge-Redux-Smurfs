import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import Smurf from "./Smurf";

class SmurfVillage extends React.Component {
//    componentDidMount(){
//        this.props.getSmurfs();
//    }
    render() {
        console.log(this.props.smurfs)
        return (
            <div>
                <h1>Welcome to the Smurf Village</h1>
                {this.props.fetchingSmurfs && <h1>loading...</h1>}
            {this.props.smurfs && this.props.smurfs.map(smurf => <Smurf smurf={smurf} />)}
           
            {this.props.smurfs.length === 0 && <button onClick={this.props.getSmurfs}>GET SMURFS</button>}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    error: state.error
})

export default connect(mapStateToProps, 
    { getSmurfs })(
    SmurfVillage);