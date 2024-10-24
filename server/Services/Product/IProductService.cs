using server.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace server.Services.Product
{
    public interface IProductService
    {
        Task<IEnumerable<server.Models.Product>> GetProductsAsync();
        Task<server.Models.Product> GetProductByIdAsync(int id);
        Task<server.Models.Product> CreateProductAsync(server.Models.Product product);
        Task<bool> UpdateProductAsync(int id, server.Models.Product product);
        Task<bool> DeleteProductAsync(int id);
    }
}