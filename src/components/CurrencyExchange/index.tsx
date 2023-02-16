import React, {useEffect, useState} from 'react';
import styles from './index.module.css'
import {Table} from "react-bootstrap";
import {TableDataProps} from "./type";



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
    // useEffect(() => {
    //     fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then(res => res.json()).then(res => console.log(res))
    // }, [])

    return (
        <div className={styles.container}>
            <Table striped bordered hover>
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
                                <input
                                    className={'inputMain'}
                                    name="buy"
                                    value={buy}
                                    type="text"
                                    onChange={(e) => onChangeInput(e, itemId)}
                                    placeholder="Type Name"
                                />
                            </td>
                            <td>
                                <input
                                    className={'inputMain'}

                                    name="sale"
                                    value={sale}
                                    type="text"
                                    onChange={(e) => onChangeInput(e, itemId)}
                                    placeholder="Type Name"
                                />
                            </td>
                        </tr>))
                }
                </tbody>
            </Table>
        </div>
    );
};

export {CurrencyExchange};