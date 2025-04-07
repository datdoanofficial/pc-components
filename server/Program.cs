using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using server.Data;
using server.Services.Product;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

// Configure DbContext
builder.Services.AddDbContext<WebDBContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add product service
builder.Services.AddScoped<IProductService, ProductService>();

// Configure Swagger
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "PC Components API",
        Version = "v1"
    });
});

// Configure Kestrel to use HTTP
builder.WebHost.ConfigureKestrel(serverOptions =>
{
    serverOptions.ListenAnyIP(7058); // HTTP only
});

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder
            .WithOrigins("https://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "PC Components API V1");
        c.RoutePrefix = string.Empty; // This will serve Swagger UI at the root URL
    });
}

// Comment out HTTPS redirection for now
// app.UseHttpsRedirection();

// Configure pipeline
app.UseCors(); // Make sure this is before UseAuthorization
app.UseAuthorization();
app.MapControllers();

app.Run();