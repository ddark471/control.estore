import React, { useState, useRef, useCallback, ChangeEvent } from 'react';
import { Input } from 'antd';
import { InputRef } from 'antd';
import style from "./loginInput.module.scss";

interface Iprops {
    prefix: string;
    placeholder: string;
    name: string;
    handleChange: (e: ChangeEvent<any>) => void;
}

const LoginInput: React.FC<Iprops> = ({ prefix, placeholder, name, handleChange }) => {
    const [status, setStatus] = useState<boolean>(false);
    const inputRef = useRef<InputRef | null>(null);
    
    const handleFocus = () => {
        setStatus(true); // Set the status to true when input is focused
    }

    const handleBlur = () => {
        setStatus(false); // Set the status to false when input loses focus
    }

    return (
        <label 
            className={style[status === true ? 'wrapper__focused' : 'wrapper']} 
            onClick={() => inputRef.current?.focus()}
        >
            <span className={style.wrapper__prefix}>{prefix}</span>
            <Input 
                placeholder={placeholder} 
                ref={inputRef} // Attach the ref to the Input component
                variant='borderless' 
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{ padding: "0" }}
                name={name}
                onChange={handleChange}
            />
        </label>
    );
}

export default LoginInput;
