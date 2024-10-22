using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class ImageGallery
    {
        public int ImageID { get; set; }
        public int ProductID { get; set; }
        public required string ImagePath { get; set; }

        // Navigation property
        public required Product Product { get; set; }
    }
}