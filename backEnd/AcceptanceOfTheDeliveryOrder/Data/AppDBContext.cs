using Microsoft.EntityFrameworkCore;
using OrderLibrary.Models;

#pragma warning disable CS8618

namespace AcceptanceOfTheDeliveryOrder.Data
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options) :
           base(options)
        {
        }

        public DbSet<OrderModel> Orders { get; set; }
    }
}
