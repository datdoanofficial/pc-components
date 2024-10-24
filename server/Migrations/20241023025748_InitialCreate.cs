using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Brand",
                columns: table => new
                {
                    BrandID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BrandName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BrandLogo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Brand", x => x.BrandID);
                });

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    CategoryID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CategoryName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.CategoryID);
                });

            migrationBuilder.CreateTable(
                name: "CategoriesList",
                columns: table => new
                {
                    CateListID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CategoryID = table.Column<int>(type: "int", nullable: false),
                    CategoriesCategoryID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoriesList", x => x.CateListID);
                    table.ForeignKey(
                        name: "FK_CategoriesList_Categories_CategoriesCategoryID",
                        column: x => x.CategoriesCategoryID,
                        principalTable: "Categories",
                        principalColumn: "CategoryID");
                    table.ForeignKey(
                        name: "FK_CategoriesList_Categories_CategoryID",
                        column: x => x.CategoryID,
                        principalTable: "Categories",
                        principalColumn: "CategoryID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    ProductID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProductCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Discount = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    BrandID = table.Column<int>(type: "int", nullable: true),
                    CategoryID = table.Column<int>(type: "int", nullable: true),
                    Guarantee = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ReturnPolicy = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TitleDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UnitsInStock = table.Column<int>(type: "int", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ModifiedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    BestSeller = table.Column<bool>(type: "bit", nullable: false),
                    Active = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.ProductID);
                    table.ForeignKey(
                        name: "FK_Products_Brand_BrandID",
                        column: x => x.BrandID,
                        principalTable: "Brand",
                        principalColumn: "BrandID");
                    table.ForeignKey(
                        name: "FK_Products_Categories_CategoryID",
                        column: x => x.CategoryID,
                        principalTable: "Categories",
                        principalColumn: "CategoryID");
                });

            migrationBuilder.CreateTable(
                name: "ImageGalleries",
                columns: table => new
                {
                    ImageID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductID = table.Column<int>(type: "int", nullable: false),
                    ImagePath = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImageGalleries", x => x.ImageID);
                    table.ForeignKey(
                        name: "FK_ImageGalleries_Products_ProductID",
                        column: x => x.ProductID,
                        principalTable: "Products",
                        principalColumn: "ProductID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Brand",
                columns: new[] { "BrandID", "BrandLogo", "BrandName", "Description" },
                values: new object[,]
                {
                    { 1, "", "AORUS", "A gaming brand from Gigabyte" },
                    { 2, "", "Asus ROG", "The Republic of Gamers line from Asus" },
                    { 3, "", "Razer", "A gaming brand known for its peripherals and laptops" },
                    { 4, "", "Intel", "A leading manufacturer of computer processors and other technologies" }
                });

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "CategoryID", "CategoryName", "Description" },
                values: new object[,]
                {
                    { 1, "Desktop Computer", "Various types of desktop computers" },
                    { 2, "PC Components", "Individual parts for building a computer" },
                    { 3, "Gaming Peripherals", "Devices used for gaming, like keyboards and mice" },
                    { 4, "Ergonomic & Gaming Chairs", "Chairs designed for comfort and gaming" },
                    { 5, "PlayStation & Xbox Consoles", "Gaming consoles from Sony and Microsoft" },
                    { 6, "Laptops & Notebook", "Portable computers" },
                    { 7, "Monitors", "Display devices for computers" }
                });

            migrationBuilder.InsertData(
                table: "CategoriesList",
                columns: new[] { "CateListID", "CategoriesCategoryID", "CategoryID", "Description", "Name" },
                values: new object[,]
                {
                    { 1, null, 2, "Central processing units for computers", "CPUs / Processors" },
                    { 2, null, 2, "Main circuit boards for computers", "Motherboards" },
                    { 3, null, 2, "Graphics processing units for computers", "GPUs / Graphics Cards" },
                    { 4, null, 2, "Random access memory for computers", "Memory / RAM" },
                    { 5, null, 2, "Storage devices for computers", "Hard Drives & SSDs" },
                    { 6, null, 2, "Enclosures for computer components", "Cases" },
                    { 7, null, 2, "Power sources for computers", "Power Supplies" },
                    { 8, null, 2, "Cooling systems for computers", "Fans & Cooling" },
                    { 9, null, 2, "Customized liquid cooling systems for computers", "Custom Liquid Cooling" },
                    { 10, null, 1, "High-performance computers designed for gaming", "Gaming PC" },
                    { 11, null, 1, "Compact desktop computers with customizable components", "BRIX (Mini-PC Barebone)" },
                    { 12, null, 6, "Laptops from Apple", "Macbook" },
                    { 13, null, 6, "Laptops running Windows operating system", "Laptop Windows" },
                    { 14, null, 3, "Input devices for typing", "Keyboards" },
                    { 15, null, 3, "Input devices for pointing and clicking", "Mouse & MousePads" },
                    { 16, null, 3, "Audio devices for listening and talking", "Headsets" },
                    { 17, null, 3, "Audio devices for playing sound", "Speakers" },
                    { 18, null, 3, "Input devices for recording audio and video", "Microphone & Webcam" },
                    { 19, null, 3, "Devices for connecting other devices to a computer", "Hubs / Accessories" },
                    { 20, null, 4, "Chairs designed for comfort and posture", "Ergonomic Chairs" },
                    { 21, null, 4, "Chairs designed for gaming and comfort", "Gaming Chairs" },
                    { 22, null, 5, "Gaming consoles from Sony", "PlayStation" },
                    { 23, null, 5, "Gaming consoles from Microsoft", "Xbox" },
                    { 24, null, 5, "Portable gaming consoles", "Handhelds" },
                    { 25, null, 5, "Accessories for gaming consoles", "Console Accessories" },
                    { 26, null, 7, "Monitors designed for gaming", "Gaming Monitors" },
                    { 27, null, 7, "Monitors designed for graphic design", "Graphic Design Monitors" },
                    { 28, null, 7, "Monitors with a curved screen", "Curved Monitors" },
                    { 29, null, 7, "Monitors with a resolution of 1920x1080 pixels", "Full HD Monitors" },
                    { 30, null, 7, "Monitors with a resolution of 2560x1440 pixels", "2K Monitors" },
                    { 31, null, 7, "Monitors with a resolution of 3840x2160 pixels", "4K Monitors" },
                    { 32, null, 7, "Monitors with a resolution of 5120x2880 pixels", "6K Monitors" },
                    { 33, null, 7, "Monitors with a resolution of 7680x4320 pixels", "8K Monitors" }
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductID", "Active", "BestSeller", "BrandID", "CategoryID", "CreatedDate", "Description", "Discount", "Guarantee", "ModifiedDate", "Price", "ProductCode", "ProductName", "ReturnPolicy", "TitleDescription", "UnitsInStock" },
                values: new object[] { 1, true, true, 4, 2, new DateTime(2024, 10, 23, 9, 57, 48, 738, DateTimeKind.Local).AddTicks(6970), "16-core, 24-thread processor with up to 6.0 GHz boost clock", 0m, "36 Months", new DateTime(2024, 10, 23, 9, 57, 48, 738, DateTimeKind.Local).AddTicks(6970), 599.99m, "INT-I9-14900K", "Intel Core i9-14900K", "30 days after the delivered", "Intel Core i9-14900K: Flagship desktop processor", 100 });

            migrationBuilder.InsertData(
                table: "ImageGalleries",
                columns: new[] { "ImageID", "ImagePath", "ProductID" },
                values: new object[,]
                {
                    { 1, "images/products/product1/image1.jpg", 1 },
                    { 2, "images/products/product1/image2.jpg", 1 },
                    { 3, "images/products/product2/image1.jpg", 1 },
                    { 4, "images/products/product2/image2.jpg", 1 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_CategoriesList_CategoriesCategoryID",
                table: "CategoriesList",
                column: "CategoriesCategoryID");

            migrationBuilder.CreateIndex(
                name: "IX_CategoriesList_CategoryID",
                table: "CategoriesList",
                column: "CategoryID");

            migrationBuilder.CreateIndex(
                name: "IX_ImageGalleries_ProductID",
                table: "ImageGalleries",
                column: "ProductID");

            migrationBuilder.CreateIndex(
                name: "IX_Products_BrandID",
                table: "Products",
                column: "BrandID");

            migrationBuilder.CreateIndex(
                name: "IX_Products_CategoryID",
                table: "Products",
                column: "CategoryID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CategoriesList");

            migrationBuilder.DropTable(
                name: "ImageGalleries");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Brand");

            migrationBuilder.DropTable(
                name: "Categories");
        }
    }
}
