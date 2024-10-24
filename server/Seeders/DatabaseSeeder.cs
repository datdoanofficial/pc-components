using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using server.Data;
using server.Models;
using System;
using System.Linq;

namespace server.Seeders
{
    public static class DatabaseSeeder
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Categories>().HasData(
                new Categories { CategoryID = 1, CategoryName = "Desktop Computer", Description = "Various types of desktop computers" },
                new Categories { CategoryID = 2, CategoryName = "PC Components", Description = "Individual parts for building a computer" },
                new Categories { CategoryID = 3, CategoryName = "Gaming Peripherals", Description = "Devices used for gaming, like keyboards and mice" },
                new Categories { CategoryID = 4, CategoryName = "Ergonomic & Gaming Chairs", Description = "Chairs designed for comfort and gaming" },
                new Categories { CategoryID = 5, CategoryName = "PlayStation & Xbox Consoles", Description = "Gaming consoles from Sony and Microsoft" },
                new Categories { CategoryID = 6, CategoryName = "Laptops & Notebook", Description = "Portable computers" },
                new Categories { CategoryID = 7, CategoryName = "Monitors", Description = "Display devices for computers" }
            );

            // Seed data for CategoriesList table
            modelBuilder.Entity<CategoriesList>().HasData(
                new CategoriesList { CateListID = 1, Name = "CPUs / Processors", Description = "Central processing units for computers", CategoryID = 2 },
                new CategoriesList { CateListID = 2, Name = "Motherboards", Description = "Main circuit boards for computers", CategoryID = 2 },
                new CategoriesList { CateListID = 3, Name = "GPUs / Graphics Cards", Description = "Graphics processing units for computers", CategoryID = 2 },
                new CategoriesList { CateListID = 4, Name = "Memory / RAM", Description = "Random access memory for computers", CategoryID = 2 },
                new CategoriesList { CateListID = 5, Name = "Hard Drives & SSDs", Description = "Storage devices for computers", CategoryID = 2 },
                new CategoriesList { CateListID = 6, Name = "Cases", Description = "Enclosures for computer components", CategoryID = 2 },
                new CategoriesList { CateListID = 7, Name = "Power Supplies", Description = "Power sources for computers", CategoryID = 2 },
                new CategoriesList { CateListID = 8, Name = "Fans & Cooling", Description = "Cooling systems for computers", CategoryID = 2 },
                new CategoriesList { CateListID = 9, Name = "Custom Liquid Cooling", Description = "Customized liquid cooling systems for computers", CategoryID = 2 },
                new CategoriesList { CateListID = 10, Name = "Gaming PC", Description = "High-performance computers designed for gaming", CategoryID = 1 },
                new CategoriesList { CateListID = 11, Name = "BRIX (Mini-PC Barebone)", Description = "Compact desktop computers with customizable components", CategoryID = 1 },
                new CategoriesList { CateListID = 12, Name = "Macbook", Description = "Laptops from Apple", CategoryID = 6 },
                new CategoriesList { CateListID = 13, Name = "Laptop Windows", Description = "Laptops running Windows operating system", CategoryID = 6 },
                new CategoriesList { CateListID = 14, Name = "Keyboards", Description = "Input devices for typing", CategoryID = 3 },
                new CategoriesList { CateListID = 15, Name = "Mouse & MousePads", Description = "Input devices for pointing and clicking", CategoryID = 3 },
                new CategoriesList { CateListID = 16, Name = "Headsets", Description = "Audio devices for listening and talking", CategoryID = 3 },
                new CategoriesList { CateListID = 17, Name = "Speakers", Description = "Audio devices for playing sound", CategoryID = 3 },
                new CategoriesList { CateListID = 18, Name = "Microphone & Webcam", Description = "Input devices for recording audio and video", CategoryID = 3 },
                new CategoriesList { CateListID = 19, Name = "Hubs / Accessories", Description = "Devices for connecting other devices to a computer", CategoryID = 3 },
                new CategoriesList { CateListID = 20, Name = "Ergonomic Chairs", Description = "Chairs designed for comfort and posture", CategoryID = 4 },
                new CategoriesList { CateListID = 21, Name = "Gaming Chairs", Description = "Chairs designed for gaming and comfort", CategoryID = 4 },
                new CategoriesList { CateListID = 22, Name = "PlayStation", Description = "Gaming consoles from Sony", CategoryID = 5 },
                new CategoriesList { CateListID = 23, Name = "Xbox", Description = "Gaming consoles from Microsoft", CategoryID = 5 },
                new CategoriesList { CateListID = 24, Name = "Handhelds", Description = "Portable gaming consoles", CategoryID = 5 },
                new CategoriesList { CateListID = 25, Name = "Console Accessories", Description = "Accessories for gaming consoles", CategoryID = 5 },
                new CategoriesList { CateListID = 26, Name = "Gaming Monitors", Description = "Monitors designed for gaming", CategoryID = 7 },
                new CategoriesList { CateListID = 27, Name = "Graphic Design Monitors", Description = "Monitors designed for graphic design", CategoryID = 7 },
                new CategoriesList { CateListID = 28, Name = "Curved Monitors", Description = "Monitors with a curved screen", CategoryID = 7 },
                new CategoriesList { CateListID = 29, Name = "Full HD Monitors", Description = "Monitors with a resolution of 1920x1080 pixels", CategoryID = 7 },
                new CategoriesList { CateListID = 30, Name = "2K Monitors", Description = "Monitors with a resolution of 2560x1440 pixels", CategoryID = 7 },
                new CategoriesList { CateListID = 31, Name = "4K Monitors", Description = "Monitors with a resolution of 3840x2160 pixels", CategoryID = 7 },
                new CategoriesList { CateListID = 32, Name = "6K Monitors", Description = "Monitors with a resolution of 5120x2880 pixels", CategoryID = 7 },
                new CategoriesList { CateListID = 33, Name = "8K Monitors", Description = "Monitors with a resolution of 7680x4320 pixels", CategoryID = 7 }
            );

            modelBuilder.Entity<Brand>().HasData(
                new Brand { BrandID = 1, BrandName = "AORUS", BrandLogo = "", Description = "A gaming brand from Gigabyte" },
                new Brand { BrandID = 2, BrandName = "Asus ROG", BrandLogo = "", Description = "The Republic of Gamers line from Asus" },
                new Brand { BrandID = 3, BrandName = "Razer", BrandLogo = "", Description = "A gaming brand known for its peripherals and laptops" },
                new Brand { BrandID = 4, BrandName = "Intel", BrandLogo = "", Description = "A leading manufacturer of computer processors and other technologies" }
            );

            modelBuilder.Entity<Product>().HasData(
                new Product
                {
                    ProductID = 1,
                    ProductName = "Intel Core i9-14900K",
                    ProductCode = "INT-I9-14900K",
                    Price = 599.99m,
                    Discount = 0,
                    BrandID = 4, // Intel
                    CategoryID = 2, // PC Components
                    Guarantee = "36 Months",
                    ReturnPolicy = "30 days after the delivered",
                    TitleDescription = "Intel Core i9-14900K: Flagship desktop processor",
                    Description = "16-core, 24-thread processor with up to 6.0 GHz boost clock",
                    UnitsInStock = 100,
                    CreatedDate = DateTime.Now,
                    ModifiedDate = DateTime.Now,
                    BestSeller = true,
                    Active = true
                }
            );

            modelBuilder.Entity<ImageGallery>().HasData(
                new ImageGallery { ImageID = 1, ProductID = 1, ImagePath = "images/products/product1/image1.jpg" },
                new ImageGallery { ImageID = 2, ProductID = 1, ImagePath = "images/products/product1/image2.jpg" },
                new ImageGallery { ImageID = 3, ProductID = 1, ImagePath = "images/products/product2/image1.jpg" },
                new ImageGallery { ImageID = 4, ProductID = 1, ImagePath = "images/products/product2/image2.jpg" }
            );
        }
    }
}