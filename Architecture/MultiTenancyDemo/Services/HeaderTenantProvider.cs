using System;

namespace MultiTenancyDemo.Services;

public class HeaderTenantProvider : ITenantProvider
{
    private readonly IHttpContextAccessor _httpContextAccessor;

    public HeaderTenantProvider(IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
    }

    public string GetTenantId()
    {
        var context = _httpContextAccessor.HttpContext;

        if (context == null)
            throw new InvalidOperationException("No HTTP context available.");

        // Header uzerinden tenantId almaya calisir alamazsa exception firlatir
        if (!context.Request.Headers.TryGetValue("X-Tenant-Id", out var tenantId))
            throw new InvalidOperationException("Tenant Id header missing.");

        return tenantId;
    }
}
