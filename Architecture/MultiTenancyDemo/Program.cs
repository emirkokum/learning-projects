using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using MultiTenancyDemo.Data;
using MultiTenancyDemo.Services;

var builder = WebApplication.CreateBuilder(args);

// DB
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseInMemoryDatabase("TenantDemoDb"));

// Tenant
builder.Services.AddHttpContextAccessor();
builder.Services.AddScoped<ITenantProvider, HeaderTenantProvider>();

// Controllers
builder.Services.AddControllers();

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Multi-Tenant Product API",
        Version = "v1"
    });

    // Global header tanımı (X-Tenant-ID)
    options.AddSecurityDefinition("X-Tenant-ID", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Name = "X-Tenant-ID",
        Type = SecuritySchemeType.ApiKey,
        Description = "Tenant ID değeri örn: tenant1"
    });

    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "X-Tenant-ID"
                }
            },
            Array.Empty<string>()
        }
    });
});


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Multi-Tenant Product API V1");
    });
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
