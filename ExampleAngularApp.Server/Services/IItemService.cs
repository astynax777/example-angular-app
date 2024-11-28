using ExampleAngularApp.Server.Entities;

namespace ExampleAngularApp.Server.Services
{
    public interface IItemService
    {
        Task<Item> Add(Item item);
        Task<IList<Item>> GetItems();
    }
}
