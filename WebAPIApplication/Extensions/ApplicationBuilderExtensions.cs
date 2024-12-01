using Microsoft.EntityFrameworkCore;
using WebAPIApplication.Data;

namespace WebAPIApplication.Extensions;

public static class ApplicationBuilderExtensions
{
	public static IApplicationBuilder EnsureDatabaseCreated(this IApplicationBuilder app)
	{
		var factory = app.ApplicationServices.GetRequiredService<IDbContextFactory<ApplicationDbContext>>();

		using var context = factory.CreateDbContext();

		context.Database.EnsureCreated();

		return app;
	}
}