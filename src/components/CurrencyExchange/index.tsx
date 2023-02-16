import React, {useState} from 'react';
import styles from './index.module.css'
import {Table} from "react-bootstrap";
import {TableDataProps} from "./type";
import InputT from "../TableInput";


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
            sale: 20.00000,


        }
    ])

    const onChangeInput = (e: any, employeeId: any) => {
        const {name, value} = e.target
        console.log('name', name)
        console.log('value', value)
        console.log('employeeId', employeeId)

        const editData = data.map((item) =>
            item.itemId === employeeId && name ? {...item, [name]: value} : item
        )

        setData(editData)
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
                    data && data.map(({ccy, base_ccy, buy, sale, itemId}) => (
                        <tr key={itemId}>
                            <td>{ccy} / {base_ccy}</td>
                            <td>
                                <InputT
                                    className={'inputMain'}
                                    name="buy"
                                    value={buy}
                                    type="text"
                                    onChange={(e:any) => onChangeInput(e, itemId)}
                                    placeholder="Type Name"
                                />
                            </td>
                            <td>

                                <InputT
                                    className={'inputMain'}
                                    name="sale"
                                    value={sale}
                                    type="text"
                                    onChange={(e:any) => onChangeInput(e, itemId)}
                                    placeholder="Type Name"
                                />
                            </td>
                        </tr>))
                }
                </tbody>
            </Table>
             <InputT/>
        </div>
    );
};

export {CurrencyExchange};