using OrderLibrary.Abstracts;
using OrderLibrary.Models;

namespace AcceptanceOfTheDeliveryOrder.Data.Repositories
{
    public class OrderRepository : IOrder
    {
        private readonly AppDBContext _context;

        public OrderRepository(AppDBContext context)
        {
            _context = context;
        }

        public OrderModel CreateOrder(OrderModel model)
        {
            var order = new OrderModel
            {
                SenderСity = model.SenderСity,
                SenderAddress = model.SenderAddress,
                RecipientCity = model.RecipientCity,
                RecipientAddress = model.RecipientAddress,
                CargoWeight = model.CargoWeight,
                DateOfPickUp = model.DateOfPickUp,
            };

            _context.Add(order);
            _context.SaveChanges();
            return order;
        }

        public List<OrderModel> GetOrdersList()
        {
            var orders = _context.Orders.ToList();
            return orders;
        }
    }
}
