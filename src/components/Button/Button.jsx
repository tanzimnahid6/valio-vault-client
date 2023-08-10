/* eslint-disable react/prop-types */

import './button.css'
const Button = ({label}) => {
    return (
      <div>
        <button className="btn btn-outline btn-primary btn-sm">{label}</button>
      </div>
    );
};

export default Button;