using Microsoft.EntityFrameworkCore;
using server.Models;
using server.Seeders;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace server.Data
{
    public class WebDBContext : DbContext
    {
        public WebDBContext(DbContextOptions<WebDBContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<ImageGallery> ImageGalleries { get; set; }
        public DbSet<Brand> Brand { get; set; }
        public DbSet<Categories> Categories { get; set; }
        public DbSet<CategoriesList> CategoriesList { get; set; }

        public override int SaveChanges()
        {
            UpdateTimestamps();
            return base.SaveChanges();
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            UpdateTimestamps();
            return base.SaveChangesAsync(cancellationToken);
        }

        private void UpdateTimestamps()
        {
            var entries = ChangeTracker.Entries()
                .Where(e => e.Entity is Product && (e.State == EntityState.Added || e.State == EntityState.Modified));

            foreach (var entry in entries)
            {
                var now = DateTime.UtcNow.AddHours(7); // Convert UTC to GMT+7

                if (entry.State == EntityState.Added)
                {
                    ((Product)entry.Entity).CreatedDate = now;
                    ((Product)entry.Entity).ModifiedDate = now;
                }
                else if (entry.State == EntityState.Modified)
                {
                    ((Product)entry.Entity).ModifiedDate = now;
                }
            }
        }

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
                .WithMany()
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

            modelBuilder.Seed();
        }
    }
}