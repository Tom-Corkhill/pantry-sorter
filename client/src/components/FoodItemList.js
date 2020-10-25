import React, { useContext, useEffect } from 'react';
import { FoodItem } from './FoodItem';
import { sortByDate } from '../utils/format';

import { GlobalContext } from '../context/GlobalState';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const FoodItemList = () => {
    const { foodItems, getFoodItems } = useContext(GlobalContext);

    useEffect(getFoodItems, []);

    sortByDate(foodItems);
  
    return (
        <React.Fragment>
            <Row className="title-pantry">
                <Col>
                    <h1 className="text-center">Food Item</h1>
                </Col>
                <Col>
                    <h1 className="text-center">Use By Date</h1>
                </Col>


            </Row>

                {foodItems.map(foodItem => (<FoodItem key={foodItem._id} foodItem={foodItem}/>))}

        </React.Fragment>
    )
}