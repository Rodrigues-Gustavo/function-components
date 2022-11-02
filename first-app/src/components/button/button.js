import React, {Component} from 'react'
import './button.css'

// const button = (props) => {
//     return <button className='btn'>{props.label}</button>
// }

class Button extends Component {
    render() {
        return <button className='btn'>{this.props.label}</button>
    }
}

Button.defaultProps = {
    label: 'Click Me'
}

export default Button