import React, {FC, useEffect, useState} from 'react';
import styles from './index.module.css'
import {MdCancel, MdEdit} from "react-icons/md";
import {BsCheckLg} from "react-icons/bs";
import {TableInput} from "./type";

const InputT:FC<TableInput> = ({name, value, onChange, min, max}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [prev, setPrev] = useState<number>()

    useEffect(
        () => {
            setPrev(value)
        }, []
    )
    const handleMouseEnter = () => {
        if (isFocused) {
            setIsHovered(false)
        } else {
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
            <input type="number"
                   className={styles.inputT}
                   value={value}
                   name={name}
                   onChange={onChange}
                   placeholder="Enter your text here"
                   onFocus={handleFocus}
                   onBlur={handleBlur}
                   min={min}
                   max={max}
            />
            <span
                className={`${styles.icon} ${styles.searchIcon} ${isHovered ? styles.show : ''}`}>
                <MdEdit/>
             </span>
            <button
                // disabled={(prev && prev > max) || (prev && prev < min)}
                className={`${styles.icon} ${styles.focusIcon} ${isFocused ? styles.show : ''}`}>
                <BsCheckLg/>
            </button>
            <button className={`${styles.icon} ${styles.focusIcon} ${isFocused ? styles.show : ''}`}>
                <MdCancel/>
            </button>
        </div>
    );
}

export {InputT};