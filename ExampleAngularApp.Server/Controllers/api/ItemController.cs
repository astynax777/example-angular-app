using ExampleAngularApp.Server.Entities;
using ExampleAngularApp.Server.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ExampleAngularApp.Server.Controllers.api
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IItemService _itemService;

        public ItemController(IItemService itemService)
        {
            _itemService = itemService;
        }

        // api/Item/Add
        [HttpPost("[action]")]
        public async Task<Item> Add(Item item)
        {
            return await _itemService.Add(item);
        }

        // api/Item/GetAll
        [HttpGet("[action]")]
        public async Task<IList<Item>> GetAll()
        {
            return await _itemService.GetItems();
        }
    }
}
