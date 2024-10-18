using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data
{
    public class WebDBContext : DbContext
    {
        public WebDBContext(DbContextOptions<WebDBContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
    }
}