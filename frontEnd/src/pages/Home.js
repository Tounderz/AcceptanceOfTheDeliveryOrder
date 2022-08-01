import React from 'react';
import { Image } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import orderTask from '../img/orderTast.jpg'

const Home = observer(() => {

    return (
        <Image
                src={orderTask}
                style={{
                    maxWidth: '100%',
                }}
            />
    );
});

export default Home;