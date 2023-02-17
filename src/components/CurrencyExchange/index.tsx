import React, {useState} from 'react';
import styles from './index.module.css'
import {Table} from "react-bootstrap";
import {TableDataProps} from "./type";
import {InputT} from "../TableInput";


const CurrencyExchange = () => {
    const [data, setData] = useState<TableDataProps[]>([
        {
            itemId: 1,
            ccy: 'USD',
            base_ccy: 'UAH',
            buy: 15.50000,
            sale: 15.85000,


        },
        {
            itemId: 2,
            ccy: 'EUR',
            base_ccy: 'UAH',
            buy: 19.20000,
            sale: 20.1000,


        }
    ])
    const onChangeInput = (e: any, employeeId: any) => {
        const {name, value} = e.target
        const editData = data.map((item) =>
            item.itemId === employeeId && name ? {...item, [name]: value} : item
        )

        setData(editData)
    }
    const calculateMin =(variable: number) => {
        return  variable - variable * 0.1
    }
    const calculateMax =(variable: number) => {
        return  variable + variable * 0.1
    }
    return (
        <div className={styles.container}>
            <Table bordered>
                <thead>
                <tr>
                    <th>Currency/Current Date</th>
                    <th>Buy</th>
                    <th>Sell</th>
                </tr>
                </thead>
                <tbody>
                {
                    data && data.map(({ccy, base_ccy, buy, sale, itemId},key) => (
                        <tr key={key.toString()}>
                            <td>{ccy} / {base_ccy}</td>
                            <td>
                                <InputT
                                    name="buy"
                                    value={buy}
                                    onChange={(e: any) => onChangeInput(e, itemId)}
                                    min={calculateMin(buy)}
                                    max={calculateMax(buy)}
                                />
                            </td>
                            <td>
                                <InputT
                                    name="sale"
                                    value={sale}
                                    onChange={(e: any) => onChangeInput(e, itemId)}
                                    min={calculateMin(sale)}
                                    max={calculateMax(sale)}
                                />
                            </td>
                        </tr>)
                    )
                }
                </tbody>
            </Table>
        </div>
    );
};

export {CurrencyExchange};