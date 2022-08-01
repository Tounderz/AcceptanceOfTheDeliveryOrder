import React, { useContext, useState } from 'react';
import { Modal, Form, FormControl } from 'react-bootstrap';
import { Context } from '../index';
import { createOrder } from '../http/ordersApi';
import { useInput } from '../http/validateApi';

const CreateOrder = ({show, onHide}) => {
    const {order} = useContext(Context);
    const senderСity = useInput('', {minLength: { value: 2, name: 'Sender Сity' } } );
    const senderAddress = useInput('', {minLength: {value: 8, name: 'Sender Address'}});
    const recipientCity = useInput('', {minLength: {value: 2, name: 'Recipient City'}});
    const recipientAddress  = useInput('', {minLength: {value: 8, name: 'Recipient Address'}});
    const cargoWeight = useInput(0, {isNumber: { name: 'Cargo Weight' } });
    const dateOfPickUp = useInput(new Date(), {date: {name: 'Date Of Pick-Up'}});
    const [messageError, setMessageError] = useState('')

    const click = async () => {
        try {
            const data = await createOrder(
                senderСity.value, senderAddress.value, recipientCity.value, 
                recipientAddress.value, cargoWeight.value, dateOfPickUp.value
                );
                
                order.setOrders(data.orders);
                setMessageError('');
                onHide();
        } catch (e) {
            setMessageError(e.response.data.message);
        } finally{
            senderСity.onChange('');
            senderAddress.onChange('');
            recipientCity.onChange('');
            recipientAddress.onChange('');
            cargoWeight.onChange(0);
            dateOfPickUp.onChange(new Date());
        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Order
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 style={{color: 'red'}}>{messageError}</h5>
                <Form>
                    {(senderСity.isDirty && senderСity.minLengthError) && <div className='mt-3' style={{color: 'red'}}>{senderСity.messageError}</div>}
                    <FormControl
                        className='mt-3' 
                        value={senderСity.value}
                        onChange={e => senderСity.onChange(e)}
                        onBlur={e => senderСity.onBlur(e)}
                        placeholder={'Sender`s City'}
                    />

                    {(senderAddress.isDirty && senderAddress.minLengthError) && <div className='mt-3' style={{color: 'red'}}>{senderAddress.messageError}</div>}
                    <FormControl
                        className='mt-3'
                        value={senderAddress.value}
                        onChange={e => senderAddress.onChange(e)}
                        onBlur={e => senderAddress.onBlur(e)}
                        placeholder={'Sender`s Address'}
                    />

                    {(recipientCity.isDirty && recipientCity.minLengthError) && <div className='mt-3' style={{color: 'red'}}>{recipientCity.messageError}</div>}
                    <FormControl
                        className='mt-3'
                        value={recipientCity.value}
                        onChange={e => recipientCity.onChange(e)}
                        onBlur={e => recipientCity.onBlur(e)}
                        placeholder={'Recipient City'}
                    />

                    {(recipientAddress.isDirty && recipientAddress.minLengthError) && <div className='mt-3' style={{color: 'red'}}>{recipientAddress.messageError}</div>}
                    <FormControl
                        className='mt-3'
                        value={recipientAddress.value}
                        onChange={e => recipientAddress.onChange(e)}
                        onBlur={e => recipientAddress.onBlur(e)}
                        placeholder={'Recipient Address'}
                    />

                    {(cargoWeight.isDirty && cargoWeight.isNumber) && <div className='mt-3' style={{color: 'red'}}>{cargoWeight.messageError}</div>}
                    <FormControl
                        className='mt-3'
                        value={cargoWeight.value}
                        onChange={e => cargoWeight.onChange(e)}
                        onBlur={e => cargoWeight.onBlur(e)}
                        placeholder={'Cargo Weight'}
                    />

                    {(dateOfPickUp.isDirty && dateOfPickUp.dateError) && <div className='mt-3' style={{color: 'red'}}>{dateOfPickUp.messageError}</div>}
                    <FormControl
                        className='mt-3'
                        value={dateOfPickUp.value}
                        type='date'
                        onChange={e => dateOfPickUp.onChange(e)}
                        onBlur={e => dateOfPickUp.onBlur(e)}
                        placeholder={'Date Of Pick-Up'}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <button
                    className="btn-primary m-2"
                    variant={'outline-success'}
                    style={{
                        cursor: 'pointer',
                        borderRadius: '5px'
                    }}
                    disabled={!senderСity.inputValid || !senderAddress.inputValid || !recipientCity.inputValid || !recipientAddress.inputValid || !cargoWeight.inputValid || !dateOfPickUp.inputValid}
                    onClick={click}
                >
                    New Order
                </button>
                <button 
                    className="btn-danger"
                    variant={'outline-success'}
                    style={{
                        cursor: 'pointer',
                        borderRadius: '5px'
                    }}
                    onClick={onHide}
                >
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateOrder;