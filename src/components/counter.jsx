import React, { Component } from 'react';

class Counter extends Component {
    

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <td width="25%" ><span className={this.getBadgeClasses()}>{this.formatCount()}</span></td>
                        <td width= "45%">
                            <button onClick={() => this.props.onInc(this.props.counter)} className = "btn btn-secondary btn-sm">
                                Increment
                            </button>
                        </td>
                        <td><button onClick={() => this.props.onDelete(this.props.counter.id)} className = "btn btn-danger btn-sm">Delete</button></td>
                    </tbody>
                </table>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value == 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        return this.props.counter.count == 0 ? 'zero' : this.props.counter.value;
    }
}
 
export default Counter;