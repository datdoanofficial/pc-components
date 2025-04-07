using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    public class Customer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CustomerID { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public DateTime StartDate { get; set; } = DateTime.UtcNow;

        [Required]
        public DateTime Birthday { get; set; }

        [Required]
        public string Gender { get; set; }

        [Required]
        [Range(0, double.MaxValue)]
        public decimal Expenditure { get; set; } = 0;

        [Required]
        public string Membership { get; set; } = "Basic";

        [Required]
        public string Status { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
        public ICollection<Order> Orders { get; set; } = new List<Order>();

        public void UpdateMembership()
        {
            if (Expenditure > 20000)
            {
                Membership = "VIP";
            }
            else if (Expenditure > 5000)
            {
                Membership = "Silver";
            }
            else
            {
                Membership = "Basic";
            }
        }
    }
}