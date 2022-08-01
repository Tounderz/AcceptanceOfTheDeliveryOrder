using OrderLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OrderLibrary.Abstracts
{
    public interface IOrder
    {
        OrderModel CreateOrder(OrderModel model);
        List<OrderModel> GetOrdersList();

    }
}
