# Multi-Tenant Product API (.NET 9)


Bu proje, ASP.NET Core 9.0 ile geliştirilmiş basit bir multi-tenancy örneğidir.  
Amaç, her tenant'ın yalnızca kendi verilerine erişmesini sağlamaktır.

## 🚀 Özellikler

- Tenant başına veri izolasyonu
- `X-Tenant-ID` header'ı ile tenant belirleme
- In-Memory veritabanı (test için)
- Swagger desteği

## 🔧 Teknolojiler

- ASP.NET Core 9
- Entity Framework Core InMemory
- Swagger (Swashbuckle)

## 🔑 Kullanım

### Ürün Ekleme (POST)

- **Endpoint:** `/api/products`
- **Header:** `X-Tenant-ID: tenant1`
- **Body:**

### Ürün Listeleme (GET)
- **Endpoint:** `/api/products`
- **Header:** `X-Tenant-ID: tenant1`

```json
{
  "name": "Laptop",
  "price": 15000,
  "tenantId": "tenant1"
}

