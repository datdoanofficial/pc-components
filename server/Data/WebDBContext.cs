// server/Data/WebDBContext.cs
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
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }

        public override int SaveChanges()
        {
            UpdateTimestamps();
            UpdateMemberships();
            return base.SaveChanges();
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            UpdateTimestamps();
            UpdateMemberships();
            return base.SaveChangesAsync(cancellationToken);
        }

        private void UpdateTimestamps()
        {
            var entries = ChangeTracker.Entries()
                .Where(e => (e.Entity is Product || e.Entity is Customer) && (e.State == EntityState.Added || e.State == EntityState.Modified));

            foreach (var entry in entries)
            {
                var now = DateTime.UtcNow.AddHours(7); // Convert UTC to GMT+7

                if (entry.Entity is Product product)
                {
                    if (entry.State == EntityState.Added)
                    {
                        product.CreatedDate = now;
                        product.ModifiedDate = now;
                    }
                    else if (entry.State == EntityState.Modified)
                    {
                        product.ModifiedDate = now;
                    }
                }
                else if (entry.Entity is Customer customer)
                {
                    if (entry.State == EntityState.Added)
                    {
                        customer.StartDate = now;
                    }
                }
            }
        }

        private void UpdateMemberships()
        {
            var customers = ChangeTracker.Entries<Customer>()
                .Where(e => e.State == EntityState.Added || e.State == EntityState.Modified)
                .Select(e => e.Entity);

            foreach (var customer in customers)
            {
                customer.UpdateMembership();
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
                .WithMany(c => c.CategoriesList)
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

            modelBuilder.Entity<Customer>()
                .HasKey(c => c.CustomerID);

            modelBuilder.Entity<Customer>()
                .HasMany(c => c.Orders)
                .WithOne(o => o.Customer)
                .HasForeignKey(o => o.CustomerID);

            modelBuilder.Entity<Order>()
                .HasKey(o => o.OrderID);

            modelBuilder.Entity<OrderDetail>()
                .HasKey(od => od.OrderDetailID);

            modelBuilder.Entity<OrderDetail>()
                .HasOne(od => od.Order)
                .WithMany(o => o.OrderDetails)
                .HasForeignKey(od => od.OrderID);

            modelBuilder.Entity<OrderDetail>()
                .HasOne(od => od.Product)
                .WithMany()
                .HasForeignKey(od => od.ProductID);

            modelBuilder.Seed();
        }
    }
}