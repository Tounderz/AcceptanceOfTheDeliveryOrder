import axiosApi from './axiosApi'

export const fetchOrders = async () => {
    const {data} = await axiosApi.get(`/orders/list`);
    return data;
}

export const createOrder = async (senderСity, senderAddress, recipientCity, recipientAddress, cargoWeight, dateOfPickUp) => {
    const {data} = await axiosApi.post(`/orders/create`, { 
        SenderСity: senderСity, SenderAddress: senderAddress, 
        RecipientCity: recipientCity, RecipientAddress: recipientAddress, 
        CargoWeight: cargoWeight, DateOfPickUp: dateOfPickUp
    });
    return data;
}