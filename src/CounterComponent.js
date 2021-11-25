// import { render } from "react-dom";
import React, {Component,useState,useEffect} from "react";
import CardComponent from './CardComponent';

export default function CounterComponent(props){

    const [initialValue, setValue] = useState(5);
    const [toggle, setToggle] = useState(true);
    const handleIncrement=()=>{
        setValue(initialValue+1)
    }
    const handleReset=()=>{
        setValue(5)
    }
    const toggleFunctionality=()=>{
        setToggle(!toggle)
}
    useEffect(()=>{
        console.log("Mounting phase")
    }, [])
    useEffect(()=>{
        console.log("Mount and updating phase")
    }, [initialValue])
    useEffect(()=>{
        return()=>{
            console.log("Unmounted")
        }
    },[])
    
        return(
            <>
            {toggle?
            <>
            This is {props.componentName} component<br/>
            initial value: {initialValue}<br/>
            <button onClick={handleIncrement}>Increment</button>&nbsp;
           
            <button onClick={()=>setValue(initialValue-1)}>Decrement</button>&nbsp;
            <button onClick={handleReset}>Reset</button>&nbsp;</>:<></>
        }
            <button size="small" onClick={() => toggleFunctionality()}>Mount / UnMount</button>
            </>
        );

}