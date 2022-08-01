using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OrderLibrary.Abstracts;
using OrderLibrary.Models;

namespace AcceptanceOfTheDeliveryOrder.Controllers
{
    [Route("orders")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrder _order;

        public OrdersController(IOrder order)
        {
            _order = order;
        }

        [HttpGet("list")]
        public IActionResult GetOrdersList()
        {
            var orders = _order.GetOrdersList();
            return Ok(new { orders = orders });
        }

        [HttpPost("create")]
        public IActionResult CreateOrder(OrderModel model)
        {
            var order = _order.CreateOrder(model);
            if (order == null)
            {
                return BadRequest(new { message = "Error" } );
            }

            var orders = _order.GetOrdersList();

            return Ok(new { orders = orders });
        }
    }
}
