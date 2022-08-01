import React from 'react';

const OrderItem = ({order}) => {
  
    return (
        <tbody>
            <tr key={order.id}>
                <th scope="row">{order.id}</th>
                    <td>{order.senderСity}</td>
                    <td>{order.senderAddress}</td>
                    <td>{order.recipientCity}</td>
                    <td>{order.recipientAddress}</td>
                    <td>{order.cargoWeight}</td>
                    <td>{order.dateOfPickUp.slice(0, 10)}</td>
            </tr>
        </tbody>
    );
};

export default OrderItem;