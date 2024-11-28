using ExampleAngularApp.Server.Services;

namespace ExampleAngularApp.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();

            // Wire up dependency injection for our service here. 
            // If anything requests an IItemService we'll give them a new instance of the MockItemService
            builder.Services.AddTransient<IItemService, MockItemService>();

            var app = builder.Build();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            // Configure the HTTP request pipeline.

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}
