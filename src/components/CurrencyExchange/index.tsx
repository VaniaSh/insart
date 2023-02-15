import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import styles from './index.module.css'
import Input from "../Input";

export interface TableDataProps {
    itemId: number,
    ccy: string,
    base_ccy: string,
    buy: number,
    sale: number,
}

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
    const [badRequest, setBadRequest] = useState<number>(0)

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


    useEffect(() => {

        fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5', {
            credentials: "omit"
        })
            .then(res => console.log(res))
    }, [])


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
                                    name="buy"
                                    value={buy}
                                    type="text"
                                    onChange={(e) => onChangeInput(e, itemId)}
                                    placeholder="Type Name"
                                />
                            </td>
                            <td>
                                <input
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
            <div style={{display: "flex", gap: '20px'}}>
                <Input/>
                <Input/>
            </div>
        </div>
    );
};

export {CurrencyExchange};