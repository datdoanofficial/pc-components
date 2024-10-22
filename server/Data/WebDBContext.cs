using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data
{
    public class WebDBContext : DbContext
    {
        public WebDBContext(DbContextOptions<WebDBContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<ImageGallery> ImageGalleries { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<Categories> Categories { get; set; }
        public DbSet<CategoriesList> CategoriesLists { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ImageGallery>()
                .HasKey(ig => ig.ImageID);

            modelBuilder.Entity<ImageGallery>()
                .HasOne(ig => ig.Product)
                .WithMany(p => p.ImageGalleries)
                .HasForeignKey(ig => ig.ProductID);

            modelBuilder.Entity<Brand>()
                .HasKey(b => b.BrandID);

            modelBuilder.Entity<Categories>()
                .HasKey(c => c.CategoryID);

            modelBuilder.Entity<CategoriesList>()
                .HasKey(cl => cl.CateListID);

            modelBuilder.Entity<CategoriesList>()
                .HasOne(cl => cl.Category)
                .WithMany(c => c.CategoriesLists)
                .HasForeignKey(cl => cl.CategoryID);

            modelBuilder.Entity<Product>()
                .HasKey(p => p.ProductID);

            modelBuilder.Entity<Product>()
                .HasOne(p => p.Brand)
                .WithMany()
                .HasForeignKey(p => p.BrandID);

            modelBuilder.Entity<Product>()
                .HasOne(p => p.Category)
                .WithMany()
                .HasForeignKey(p => p.CategoryID);
        }
    }
}