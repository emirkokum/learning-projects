using System;

namespace MultiTenancyDemo.Services;

public interface ITenantProvider
{
    string GetTenantId();
}
