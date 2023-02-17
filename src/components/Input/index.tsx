import React, {FC} from 'react';
import styles from './index.module.css'

interface InputProps {
   type: string
    value: any
    currencies: any
    onChange: any
    handleSelect: any
    selectValue: any
    name: string
    disabled: boolean
    iName: string
}

const Input: FC<InputProps> = ({iName, disabled, type, onChange, value, currencies, handleSelect, selectValue, name}) => {
    return (
        <div className={styles.group}>
            <input
                placeholder={'Enter here'}
                name={iName}
                disabled={disabled}
                className={styles.currencyInput}
                onChange={onChange}
                type={type} value={value}

            />
            <select name={name} className={styles.currencySelect} onChange={handleSelect}
                    value={selectValue}>
                {currencies.map((currency: string) => (
                    <option value={currency}>{currency}</option>
                ))}
            </select>

        </div>
    );
};

export {Input};