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
                name: "Customers",
                columns: table => new
                {
                    CustomerID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Birthday = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Expenditure = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Membership = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.CustomerID);
                });

            migrationBuilder.CreateTable(
                name: "CategoriesList",
                columns: table => new
                {
                    CateListID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CategoryID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoriesList", x => x.CateListID);
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
                name: "Orders",
                columns: table => new
                {
                    OrderID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustomerID = table.Column<int>(type: "int", nullable: false),
                    OrderDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ShipDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ShipAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Invoice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Destination = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MethodPayment = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Items = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.OrderID);
                    table.ForeignKey(
                        name: "FK_Orders_Customers_CustomerID",
                        column: x => x.CustomerID,
                        principalTable: "Customers",
                        principalColumn: "CustomerID",
                        onDelete: ReferentialAction.Cascade);
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

            migrationBuilder.CreateTable(
                name: "OrderDetails",
                columns: table => new
                {
                    OrderDetailID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderID = table.Column<int>(type: "int", nullable: false),
                    ProductID = table.Column<int>(type: "int", nullable: false),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    UnitPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderDetails", x => x.OrderDetailID);
                    table.ForeignKey(
                        name: "FK_OrderDetails_Orders_OrderID",
                        column: x => x.OrderID,
                        principalTable: "Orders",
                        principalColumn: "OrderID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrderDetails_Products_ProductID",
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
                table: "Customers",
                columns: new[] { "CustomerID", "Birthday", "Email", "Expenditure", "FirstName", "Gender", "LastName", "Membership", "Password", "StartDate", "Status", "Username" },
                values: new object[,]
                {
                    { 1, new DateTime(1990, 5, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "johndoe@example.com", 0m, "John", "Male", "Doe", "Basic", "password123", new DateTime(2024, 11, 27, 10, 26, 28, 322, DateTimeKind.Utc).AddTicks(1990), "Active", "johndoe" },
                    { 2, new DateTime(1985, 7, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), "janesmith@example.com", 6000m, "Jane", "Female", "Smith", "Silver", "password123", new DateTime(2024, 11, 27, 10, 26, 28, 322, DateTimeKind.Utc).AddTicks(2000), "Active", "janesmith" },
                    { 3, new DateTime(1978, 3, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "michaeljohnson@example.com", 25000m, "Michael", "Male", "Johnson", "VIP", "password123", new DateTime(2024, 11, 27, 10, 26, 28, 322, DateTimeKind.Utc).AddTicks(2000), "Active", "michaeljohnson" },
                    { 4, new DateTime(1992, 8, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), "emilydavis@example.com", 0m, "Emily", "Female", "Davis", "Basic", "password123", new DateTime(2024, 11, 27, 10, 26, 28, 322, DateTimeKind.Utc).AddTicks(2000), "Active", "emilydavis" },
                    { 5, new DateTime(1988, 11, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "davidwilson@example.com", 7000m, "David", "Male", "Wilson", "Silver", "password123", new DateTime(2024, 11, 27, 10, 26, 28, 322, DateTimeKind.Utc).AddTicks(2010), "Active", "davidwilson" },
                    { 6, new DateTime(1995, 2, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), "sophiabrown@example.com", 15000m, "Sophia", "Female", "Brown", "Silver", "password123", new DateTime(2024, 11, 27, 10, 26, 28, 322, DateTimeKind.Utc).AddTicks(2010), "Active", "sophiabrown" },
                    { 7, new DateTime(1982, 6, 13, 0, 0, 0, 0, DateTimeKind.Unspecified), "chrisevans@example.com", 30000m, "Chris", "Male", "Evans", "VIP", "password123", new DateTime(2024, 11, 27, 10, 26, 28, 322, DateTimeKind.Utc).AddTicks(2010), "Active", "chrisevans" },
                    { 8, new DateTime(1981, 6, 9, 0, 0, 0, 0, DateTimeKind.Unspecified), "natalieportman@example.com", 0m, "Natalie", "Female", "Portman", "Basic", "password123", new DateTime(2024, 11, 27, 10, 26, 28, 322, DateTimeKind.Utc).AddTicks(2020), "Active", "natalieportman" },
                    { 9, new DateTime(1965, 4, 4, 0, 0, 0, 0, DateTimeKind.Unspecified), "robertdowney@example.com", 500m, "Robert", "Male", "Downey", "Basic", "password123", new DateTime(2024, 11, 27, 10, 26, 28, 322, DateTimeKind.Utc).AddTicks(2020), "Active", "robertdowney" },
                    { 10, new DateTime(1984, 11, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "scarlettjohansson@example.com", 22000m, "Scarlett", "Female", "Johansson", "VIP", "password123", new DateTime(2024, 11, 27, 10, 26, 28, 322, DateTimeKind.Utc).AddTicks(2020), "Active", "scarlettjohansson" }
                });

            migrationBuilder.InsertData(
                table: "CategoriesList",
                columns: new[] { "CateListID", "CategoryID", "Description", "Name" },
                values: new object[,]
                {
                    { 1, 2, "Central processing units for computers", "CPUs / Processors" },
                    { 2, 2, "Main circuit boards for computers", "Motherboards" },
                    { 3, 2, "Graphics processing units for computers", "GPUs / Graphics Cards" },
                    { 4, 2, "Random access memory for computers", "Memory / RAM" },
                    { 5, 2, "Storage devices for computers", "Hard Drives & SSDs" },
                    { 6, 2, "Enclosures for computer components", "Cases" },
                    { 7, 2, "Power sources for computers", "Power Supplies" },
                    { 8, 2, "Cooling systems for computers", "Fans & Cooling" },
                    { 9, 2, "Customized liquid cooling systems for computers", "Custom Liquid Cooling" },
                    { 10, 1, "High-performance computers designed for gaming", "Gaming PC" },
                    { 11, 1, "Compact desktop computers with customizable components", "BRIX (Mini-PC Barebone)" },
                    { 12, 6, "Laptops from Apple", "Macbook" },
                    { 13, 6, "Laptops running Windows operating system", "Laptop Windows" },
                    { 14, 3, "Input devices for typing", "Keyboards" },
                    { 15, 3, "Input devices for pointing and clicking", "Mouse & MousePads" },
                    { 16, 3, "Audio devices for listening and talking", "Headsets" },
                    { 17, 3, "Audio devices for playing sound", "Speakers" },
                    { 18, 3, "Input devices for recording audio and video", "Microphone & Webcam" },
                    { 19, 3, "Devices for connecting other devices to a computer", "Hubs / Accessories" },
                    { 20, 4, "Chairs designed for comfort and posture", "Ergonomic Chairs" },
                    { 21, 4, "Chairs designed for gaming and comfort", "Gaming Chairs" },
                    { 22, 5, "Gaming consoles from Sony", "PlayStation" },
                    { 23, 5, "Gaming consoles from Microsoft", "Xbox" },
                    { 24, 5, "Portable gaming consoles", "Handhelds" },
                    { 25, 5, "Accessories for gaming consoles", "Console Accessories" },
                    { 26, 7, "Monitors designed for gaming", "Gaming Monitors" },
                    { 27, 7, "Monitors designed for graphic design", "Graphic Design Monitors" },
                    { 28, 7, "Monitors with a curved screen", "Curved Monitors" },
                    { 29, 7, "Monitors with a resolution of 1920x1080 pixels", "Full HD Monitors" },
                    { 30, 7, "Monitors with a resolution of 2560x1440 pixels", "2K Monitors" },
                    { 31, 7, "Monitors with a resolution of 3840x2160 pixels", "4K Monitors" },
                    { 32, 7, "Monitors with a resolution of 5120x2880 pixels", "6K Monitors" },
                    { 33, 7, "Monitors with a resolution of 7680x4320 pixels", "8K Monitors" }
                });

            migrationBuilder.InsertData(
                table: "Orders",
                columns: new[] { "OrderID", "CustomerID", "Destination", "Invoice", "Items", "MethodPayment", "OrderDate", "ShipAddress", "ShipDate", "Status" },
                values: new object[,]
                {
                    { 1, 1, "Domestic", 599.99m, 1, "Credit Card", new DateTime(2024, 11, 27, 10, 26, 28, 322, DateTimeKind.Utc).AddTicks(2050), "123 Main St, Anytown, USA", new DateTime(2024, 11, 29, 10, 26, 28, 322, DateTimeKind.Utc).AddTicks(2050), "Delivered" },
                    { 2, 2, "Domestic", 1200.00m, 2, "PayPal", new DateTime(2024, 11, 27, 10, 26, 28, 322, DateTimeKind.Utc).AddTicks(2060), "456 Elm St, Othertown, USA", new DateTime(2024, 11, 30, 10, 26, 28, 322, DateTimeKind.Utc).AddTicks(2060), "Dispatched" }
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductID", "Active", "BestSeller", "BrandID", "CategoryID", "CreatedDate", "Description", "Discount", "Guarantee", "ModifiedDate", "Price", "ProductCode", "ProductName", "ReturnPolicy", "TitleDescription", "UnitsInStock" },
                values: new object[] { 1, true, true, 4, 2, new DateTime(2024, 11, 27, 17, 26, 28, 322, DateTimeKind.Local).AddTicks(1940), "16-core, 24-thread processor with up to 6.0 GHz boost clock", 0m, "36 Months", new DateTime(2024, 11, 27, 17, 26, 28, 322, DateTimeKind.Local).AddTicks(1960), 599.99m, "INT-I9-14900K", "Intel Core i9-14900K", "30 days after the delivered", "Intel Core i9-14900K: Flagship desktop processor", 100 });

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

            migrationBuilder.InsertData(
                table: "OrderDetails",
                columns: new[] { "OrderDetailID", "OrderID", "ProductID", "Quantity", "UnitPrice" },
                values: new object[,]
                {
                    { 1, 1, 1, 1, 599.99m },
                    { 2, 2, 1, 2, 600.00m }
                });

            migrationBuilder.CreateIndex(
                name: "IX_CategoriesList_CategoryID",
                table: "CategoriesList",
                column: "CategoryID");

            migrationBuilder.CreateIndex(
                name: "IX_ImageGalleries_ProductID",
                table: "ImageGalleries",
                column: "ProductID");

            migrationBuilder.CreateIndex(
                name: "IX_OrderDetails_OrderID",
                table: "OrderDetails",
                column: "OrderID");

            migrationBuilder.CreateIndex(
                name: "IX_OrderDetails_ProductID",
                table: "OrderDetails",
                column: "ProductID");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_CustomerID",
                table: "Orders",
                column: "CustomerID");

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
                name: "OrderDetails");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Customers");

            migrationBuilder.DropTable(
                name: "Brand");

            migrationBuilder.DropTable(
                name: "Categories");
        }
    }
}
