import React, { useState } from 'react';
import classNames from 'classnames';

interface AlertProps {
    className?: string,
    type?: string,
    children?: React.ReactNode,
    size?: string,
}

const Alert: React.FC<AlertProps> = (props) => {
    const {className, type, children, size} = props;
    const [isShow, setIsShow] = useState(true);
    return <div 
        className={classNames('alert', className, {
            [`alert-${type}`]: type,
            [`alert-${size}`]: size,
            "hide": !isShow,
        })}
    >
        <div>
            {children}
        </div>
        <div className="close-icon" onClick={() => setIsShow(false)}>X</div>
    </div>
}

export default Alert;