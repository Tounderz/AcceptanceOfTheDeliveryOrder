import React, { useContext, useState } from 'react';
import { Context } from '../index';
import { Container, Table } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import CreateOrder from '../components/CreateOrder';
import OrderItem from '../components/OrderItem';
import { columnNames } from '../utils/const';

const OrdersList = observer(() => {
    const {order} = useContext(Context);
    const [createVisible, setCreateVisible] = useState(false);

    return (
        <Container>
            <Table
                className='table table-bordered border-dark'
                style={{
                    marginTop: '15px'
                }}
            >
                <thead>
                    <tr key="id">
                        {columnNames.map(item => 
                            <th scope='col'>{item}</th>
                        )}
                    </tr>
                </thead>
                {order.orders.map(order => 
                    <OrderItem key={order.id} order={order}/>
                )}
            </Table>
            <button
                className='btn-primary m-2'
                variant={"outline-success"}
                style={{
                    cursor: "pointer",
                    borderRadius: "5px",
                }}
                onClick={() => setCreateVisible(true)}
            >
                New Order
            </button>
            <CreateOrder show={createVisible} onHide={() => setCreateVisible(false)}/>
        </Container>
    );
});

export default OrdersList;