using AcceptanceOfTheDeliveryOrder.Data;
using AcceptanceOfTheDeliveryOrder.Data.Repositories;
using Microsoft.EntityFrameworkCore;
using OrderLibrary.Abstracts;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDBContext>(options => options.UseSqlServer(
    builder.Configuration.GetConnectionString("Default")
    ));

builder.Services.AddCors();

builder.Services.AddControllers();

builder.Services.AddScoped<IOrder, OrderRepository>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();
app.UseDefaultFiles();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.UseCors(options => options
   .WithOrigins(new[] { "http://localhost:3000", "http://localhost:8080", "http://localhost:4200" })
   .AllowAnyHeader()
   .AllowAnyMethod()
);

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();