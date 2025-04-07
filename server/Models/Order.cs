// server/Models/Order.cs
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    public class Order
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int OrderID { get; set; }

        [ForeignKey("Customer")]
        public int CustomerID { get; set; }
        public required Customer Customer { get; set; }

        [Required]
        public DateTime OrderDate { get; set; } = DateTime.UtcNow;

        public DateTime? ShipDate { get; set; }

        [Required]
        public required string ShipAddress { get; set; }

        [Required]
        [Range(0, double.MaxValue)]
        public decimal Invoice { get; set; } = 0;

        [Required]
        public required string Destination { get; set; } // Domestic or International

        [Required]
        public required string MethodPayment { get; set; }

        [Required]
        [Range(0, int.MaxValue)]
        public int Items { get; set; } = 0;

        [Required]
        public required string Status { get; set; } // accepted, rejected, dispatched, delivered, cancelled

        public ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();
    }
}