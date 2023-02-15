import React from 'react';
import styles from './index.module.css'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {DropdownButton} from "react-bootstrap";

const Input = () => {
    return (
        <InputGroup className="mb-3">
            <Form.Control aria-label="Text input with dropdown button" />

            <DropdownButton
                variant="outline-secondary"
                title="Dropdown"
                id="input-group-dropdown-2"
                align="end"
            >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
        </InputGroup>
    );
};

export default Input;