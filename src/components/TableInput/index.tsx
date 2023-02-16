import React, {useState} from 'react';
import styles from './index.module.css'
import {MdCancel, MdEdit} from "react-icons/md";
import {BsCheckLg} from "react-icons/bs";

const InputT = ({name, value, onChange}: any) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleMouseEnter = () => {
        if (isFocused){
            setIsHovered(false)
        }else{
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleFocus = () => {
        setIsFocused(true);
        setIsHovered(false)
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className={styles.inputWithIcon}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>
            <input type="text"
                   className={styles.inputT}
                   value={value}
                   name={name}
                   onChange={onChange}
                   placeholder="Enter your text here"
                   onFocus={handleFocus}
                   onBlur={handleBlur}/>
            <span
                className={`${styles.icon} ${styles.searchIcon} ${isHovered ? styles.show : ''}`}>
                <MdEdit/>
             </span>
            <span
                className={`${styles.icon} ${styles.focusIcon} ${isFocused ? styles.show : ''}`}>
                <BsCheckLg/>
            </span>
            <span className={`${styles.icon} ${styles.focusIcon} ${isFocused ? styles.show : ''}`}>
        <MdCancel/>
      </span>
        </div>
    );
}

export default InputT;