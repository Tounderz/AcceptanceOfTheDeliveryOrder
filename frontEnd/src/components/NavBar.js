import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { HOME_ROUTE, ORDERS_LIST_ROUTE } from '../utils/const';
import { Context } from '../index';
import { fetchOrders } from '../http/ordersApi'
import CreateOrder from './CreateOrder';

const NavBar = observer(() => {
    const {order} = useContext(Context);
    const [createVisible, setCreateVisible] = useState(false);
    const navigate = useNavigate();

    const orderList = async () => {
        const data = await fetchOrders();
            order.setOrders(data.orders)
            navigate(ORDERS_LIST_ROUTE);
    }

    const onClick = () => {
        navigate(HOME_ROUTE);
    }

    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-4'>
            
                <Link 
                    className='navbar-brand m-2'
                    to={HOME_ROUTE}
                    onClick={onClick}
                >
                    Home
                </Link>
                <Link 
                    className='navbar-brand m-2'
                    to={ORDERS_LIST_ROUTE}
                    onClick={orderList}
                >
                    Orders List
                </Link>
                <button 
                    className='btn btn-outline-success m-2'
                    style={{
                        cursor: 'pointer',
                        borderRadius: '5px',
                    }}
                    onClick={() => setCreateVisible(true)}
                >
                    New Order
                </button>
            
            <CreateOrder show={createVisible} onHide={() => setCreateVisible(false)}/>
        </nav>
    );
});

export default NavBar;