using System.Collections.Generic;

namespace server.Models
{
    public class Categories
    {
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }

        // Navigation property
        public ICollection<CategoriesList> CategoriesList { get; set; }
    }
}