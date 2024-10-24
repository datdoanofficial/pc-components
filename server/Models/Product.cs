using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    public class Product
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProductID { get; set; }

        [Required]
        public string ProductName { get; set; } = string.Empty;

        [Required]
        public string ProductCode { get; set; } = string.Empty;

        [Range(0, double.MaxValue)]
        public decimal Price { get; set; }

        public decimal? Discount { get; set; }

        public int? BrandID { get; set; }

        public int? CategoryID { get; set; }

        [Required]
        public string Guarantee { get; set; } = string.Empty;

        [Required]
        public string ReturnPolicy { get; set; } = string.Empty;

        [Required]
        public string TitleDescription { get; set; } = string.Empty;

        [Required]
        public string Description { get; set; } = string.Empty;

        [Range(0, int.MaxValue)]
        public int UnitsInStock { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime CreatedDate { get; set; }

        public DateTime ModifiedDate { get; set; }

        public bool BestSeller { get; set; } = false;

        public bool Active { get; set; } = true;

        // Navigation properties
        public Brand? Brand { get; set; }
        public Categories? Category { get; set; }
        public ICollection<ImageGallery> ImageGalleries { get; set; } = new List<ImageGallery>();
    }
}