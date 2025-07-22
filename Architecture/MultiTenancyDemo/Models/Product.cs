namespace MultiTenantProductDemo.Models;

public class Product
{
    public int Id { get; set; }

    public string Name { get; set; } = default!;

    public decimal Price { get; set; }

    // TenantId: Hangi tenant'a ait olduğunu belirtir
    public string TenantId { get; set; } = default!;
}
