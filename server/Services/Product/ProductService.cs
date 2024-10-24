using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using server.Services.Product; // Add this using directive
using System.Collections.Generic;
using System.Threading.Tasks;

namespace server.Services.Product
{
    public class ProductService : IProductService
    {
        private readonly WebDBContext _context;

        public ProductService(WebDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<server.Models.Product>> GetProductsAsync()
        {
            return await _context.Products.ToListAsync();
        }

        public async Task<server.Models.Product> GetProductByIdAsync(int id)
        {
            return await _context.Products.FindAsync(id);
        }

        public async Task<server.Models.Product> CreateProductAsync(server.Models.Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
            return product;
        }

        public async Task<bool> UpdateProductAsync(int id, server.Models.Product product)
        {
            var existingProduct = await _context.Products.FindAsync(id);
            if (existingProduct == null)
            {
                return false;
            }

            existingProduct.ProductName = product.ProductName;
            existingProduct.ProductCode = product.ProductCode;
            existingProduct.Price = product.Price;
            existingProduct.Discount = product.Discount;
            existingProduct.BrandID = product.BrandID;
            existingProduct.CategoryID = product.CategoryID;
            existingProduct.Guarantee = product.Guarantee;
            existingProduct.ReturnPolicy = product.ReturnPolicy;
            existingProduct.TitleDescription = product.TitleDescription;
            existingProduct.Description = product.Description;
            existingProduct.UnitsInStock = product.UnitsInStock;
            existingProduct.BestSeller = product.BestSeller;
            existingProduct.Active = product.Active;
            existingProduct.ModifiedDate = DateTime.UtcNow;

            _context.Entry(existingProduct).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteProductAsync(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return false;
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}