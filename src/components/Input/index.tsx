import React, {FC} from 'react';
import styles from './index.module.css'
import {InputProps} from "./type";


const Input: FC<InputProps> = ({iName, error, disabled, type, onChange, value, currencies, handleSelect, selectValue, name}) => {
    return (
        <div className={styles.group}>
            <input
                placeholder={'Enter here'}
                name={iName}
                disabled={disabled}
                className={styles.currencyInput}
                onChange={onChange}
                type={type}
                value={error ? 0: value}
                min={0}

            />
            <select name={name} className={styles.currencySelect} onChange={handleSelect}
                    value={selectValue}>
                {currencies.map((currency: string, key: number) => (
                    <option key={key} value={currency}>{currency}</option>
                ))}
            </select>

        </div>
    );
};

export {Input};