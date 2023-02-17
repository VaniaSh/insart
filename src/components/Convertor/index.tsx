import React, {useEffect, useState} from "react";
import axios from "axios";
import {Input} from "../Input";

jest.mock('axios')

const Convertor = () => {
    const [initialState, setState] = useState<any>({
        currencies: ["USD", "GBR", "EUR", "CAD", 'UAH', 'BTC'],
        base: "USD",
        amount: "",
        convertTo: "UAH",
        result: "",
    });

    const {currencies, base, amount, convertTo, result} = initialState;

    useEffect(() => {
        if (amount === isNaN) {
            return;
        } else {
            const getCurrency = async () => {
                const response = await axios.get(
                    `https://api.exchangerate.host/latest?base=${base}`
                );
                const result = (response.data.rates[convertTo] * amount).toFixed(3);
                setState({
                    ...initialState,
                    result,
                });
            };
            getCurrency();
        }
    }, [amount, base, convertTo]);

    const onChangeInput = (e: any) => {
        setState({
            ...initialState,
            amount: e.target.value,
            result: null,
        });
    };
    const handleSelect = (e: any) => {
        setState({
            ...initialState,
            [e.target.name]: e.target.value,
            result: null,
        });
    };

    const handleSwap = (e: any) => {
        e.preventDefault();
        setState({
            ...initialState,
            convertTo: base,
            base: convertTo,
            result: null,
        });
    };

    return (
        <div style={{maxWidth: 800, width: '100%'}} className="container ml-5">
            <div style={{textAlign: 'center'}}>
                <h5>
                    {amount} {base} is equivalent to{" "}
                </h5>
                <h3>
                    {amount === ""
                        ? "0"
                        : result === null
                            ? "Calculating ..."
                            : result}
                    {convertTo}
                </h3>
            </div>
            <div className="row">
                        <div className="row-lg-10">
                            <Input
                                iName={'1'}
                                disabled={false}
                                name={'base'}
                                type="number"
                                value={amount}
                                currencies={currencies}
                                onChange={onChangeInput}
                                selectValue={base}
                                handleSelect={handleSelect}/>

                            <div
                                style={{fontSize: 40, textAlign: 'center'}}>
                                <span data-testingid={'r'} onClick={handleSwap}>&#8595;&#8593;</span>
                            </div>
                            <Input
                                disabled={true}
                                iName={'2'}
                                type="number"
                                name={'convertTo'}
                                value={
                                    amount === ""
                                        ? "0"
                                        : result === null
                                            ? "Calculating..."
                                            : result
                                } currencies={currencies}
                                onChange={onChangeInput}
                                selectValue={convertTo}
                                handleSelect={handleSelect}/>
                        </div>


            </div>
            </div>
    );
};

export {Convertor};
