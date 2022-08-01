using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OrderLibrary.Models
{
    public class OrderModel
    {
        public int Id { get; set; }
        public string? SenderСity { get; set; }
        public string? SenderAddress { get; set; }
        public string? RecipientCity { get; set; }
        public string? RecipientAddress { get; set; }
        public int CargoWeight { get; set; }
        public DateTime DateOfPickUp { get; set; }
    }
}
