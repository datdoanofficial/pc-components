using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Product
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public string ProductCode { get; set; }
        public decimal Price { get; set; }
        public decimal? Discount { get; set; } // Nullable to allow for no discount
        public int? BrandID { get; set; } // Nullable to allow for no brand
        public int? CategoryID { get; set; } // Nullable to allow for no category
        public string Guarantee { get; set; }
        public string ReturnPolicy { get; set; }
        public string TitleDescription { get; set; }
        public string Description { get; set; }
        public int UnitsInStock { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public DateTime ModifiedDate { get; set; } = DateTime.Now;
        public bool BestSeller { get; set; } = false;
        public bool Active { get; set; } = true;

        // Navigation properties
        public Brand Brand { get; set; }
        public Categories Category { get; set; }
        public ICollection<ImageGallery> ImageGalleries { get; set; }
    }
}