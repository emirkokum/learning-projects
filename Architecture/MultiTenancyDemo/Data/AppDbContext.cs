using System;
using Microsoft.EntityFrameworkCore;
using MultiTenancyDemo.Services;
using MultiTenantProductDemo.Models;

namespace MultiTenancyDemo.Data;

public class AppDbContext : DbContext
{
    private readonly ITenantProvider _tenantProvider;

    public AppDbContext(DbContextOptions<AppDbContext> options, ITenantProvider tenantProvider)
    : base(options)
    {
        _tenantProvider = tenantProvider;
    }

    public DbSet<Product> Products => Set<Product>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>().HasQueryFilter(p => p.TenantId == _tenantProvider.GetTenantId());
    }
}
