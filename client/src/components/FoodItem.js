import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { timeConverter, rowColorCheck } from '../utils/format';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const FoodItem = ({ foodItem }) => {
    const { deleteFoodItem } = useContext(GlobalContext);


    return (
        <React.Fragment>
            <Row style={rowColorCheck(foodItem.date)}>
                <Col><h5 className="text-center">{foodItem.text}</h5></Col>
                <Col>
                    <Row>
                        <Col><h5 className="text-center">{timeConverter(foodItem.date)}</h5></Col>
                        <Col></Col>
                        <Col><Button onClick={() => deleteFoodItem(foodItem._id)}>DELETE</Button></Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
} 