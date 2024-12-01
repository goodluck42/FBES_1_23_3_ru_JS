using Microsoft.AspNetCore.Mvc;
using WebAPIApplication.Dtos;
using WebAPIApplication.Entities;

namespace WebAPIApplication.Services;

public sealed class UserFeature : IFeature
{
	public static void MapEndpoints(IEndpointRouteBuilder endpoints)
	{
		endpoints.MapPost("users/", async ([FromServices] IUserManager manager, UserDto dto) =>
		{
			try
			{
				var dtoResult = await manager.Add(dto);

				if (dtoResult is not null)
				{
					return Results.Created($"users/{dtoResult.Id}", dtoResult);
				}

				return Results.BadRequest();
			}
			catch (Exception ex)
			{
				return Results.BadRequest($"Failed to add user: {ex.Message}");
			}
		});
		endpoints.MapGet("users/{id}", async ([FromServices] IUserManager manager, int id) =>
		{
			try
			{
				var dto = await manager.GetById(id);

				if (dto != null)
				{
					return Results.Ok(dto);
				}

				return Results.NotFound();
			}
			catch (Exception ex)
			{
				return Results.BadRequest($"Failed to get user: {ex.Message}");
			}
		});

		endpoints.MapDelete("users/{id}", async ([FromServices] IUserManager manager, int id) =>
		{
			try
			{
				var dto = await manager.Remove(id);

				return dto != null ? Results.Ok(dto) : Results.NotFound();
			}
			catch (Exception ex)
			{
				return Results.BadRequest($"Failed to delete user: {ex.Message}");
			}
		});

		endpoints.MapGet("users/", async ([FromServices] IUserManager manager) =>
		{
			try
			{
				return Results.Ok(await manager.GetAll());
			}
			catch (Exception ex)
			{
				return Results.BadRequest($"Failed to get users: {ex.Message}");
			}
		});
	}

	public static void MapServices(IServiceCollection serviceCollection)
	{
		serviceCollection.AddTransient<IUserManager, UserManager>();
		serviceCollection.AddSingleton<IPasswordHasher, PasswordHasher>();
		// ...
	}
}