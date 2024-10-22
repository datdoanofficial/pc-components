using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class CategoriesList
    {
        public int CateListID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int CategoryID { get; set; }

        // Navigation property
        public Categories Category { get; set; }
    }
}