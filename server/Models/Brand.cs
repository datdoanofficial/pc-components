using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Brand
    {
        public int BrandID { get; set; }
        public string BrandName { get; set; }
        public string BrandLogo { get; set; }
        public string Description { get; set; }
    }
}