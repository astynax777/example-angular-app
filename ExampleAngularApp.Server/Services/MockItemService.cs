using ExampleAngularApp.Server.Entities;

namespace ExampleAngularApp.Server.Services
{
    public class MockItemService : IItemService
    {
        private readonly List<Item> _items = new List<Item>
        {
            new Item 
            { 
                Id = 1, 
                Name = "Playstation 5",
                Description = "The best console.",
                Price = 499.99M
            },
            new Item
            {
                Id = 2,
                Name = "Final Fantasy 7 Remake",
                Description = "It's a pretty fun game",
                Price = 69.99M
            }
        };

        public async Task<Item> Add(Item item)
        {
            // Simulate server delay
            await Task.Delay(TimeSpan.FromSeconds(3));
            
            item.Id = Random.Shared.Next(3, 100);
            return item;
        }

        public async Task<IList<Item>> GetItems()
        {
            // Simulate server delay
            await Task.Delay(TimeSpan.FromSeconds(3));
            return _items;
        }
    }
}
