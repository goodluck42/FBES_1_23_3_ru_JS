using Microsoft.EntityFrameworkCore;

namespace WebAPIApplication.Data;

public sealed class ApplicationDbContextFactory(IServiceProvider serviceProvider)
	: IDbContextFactory<ApplicationDbContext>
{
	public ApplicationDbContext CreateDbContext()
	{
		return serviceProvider.GetRequiredService<ApplicationDbContext>();
	}
}