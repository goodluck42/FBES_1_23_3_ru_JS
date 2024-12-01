using Microsoft.EntityFrameworkCore;
using WebAPIApplication.Data;
using WebAPIApplication.Dtos;
using WebAPIApplication.Entities;

namespace WebAPIApplication.Services;

public class UserManager(
	IDbContextFactory<ApplicationDbContext> dbContextFactory,
	ILogger<UserManager> logger,
	IPasswordHasher passwordHasher)
	: IUserManager
{
	public async Task<UserDto?> Add(UserDto dto)
	{
		await using var dbContext = await dbContextFactory.CreateDbContextAsync();

		try
		{
			if (dto.Password is null)
			{
				throw new Exception("Password cannot be null");
			}

			if (dto.Login is null)
			{
				throw new Exception("Login cannot be null");
			}

			var passwordHash = passwordHasher.HashPassword(dto.Password);

			var addedUser = await dbContext.Users.AddAsync(new User
			{
				Login = dto.Login,
				Password = passwordHash,
			});
			await dbContext.SaveChangesAsync();

			return new UserDto
			{
				Id = addedUser.Entity.Id,
				Login = addedUser.Entity.Login
			};
		}
		catch (Exception ex)
		{
			logger.Log(LogLevel.Error, ex.ToString());

			return null;
		}
	}

	public async Task<UserDto?> Remove(int id)
	{
		await using var dbContext = await dbContextFactory.CreateDbContextAsync();

		try
		{
			var result = dbContext.Users.Remove(new User { Id = id });
			await dbContext.SaveChangesAsync();

			return new UserDto
			{
				Id = result.Entity.Id,
				Login = result.Entity.Login
			};
		}
		catch (Exception ex)
		{
			logger.Log(LogLevel.Error, ex.ToString());

			return null;
		}
	}

	public async Task<UserDto?> GetById(int id)
	{
		await using var dbContext = await dbContextFactory.CreateDbContextAsync();

		try
		{
			var result = dbContext.Users.FirstOrDefault(u => u.Id == id);

			if (result is null)
			{
				throw new Exception("User not found");
			}

			return new UserDto
			{
				Id = result.Id,
				Login = result.Login
			};
		}
		catch (Exception ex)
		{
			logger.Log(LogLevel.Error, ex.ToString());

			return null;
		}
	}

	public async Task<IEnumerable<UserDto>?> GetAll()
	{
		await using var dbContext = await dbContextFactory.CreateDbContextAsync();

		try
		{
			return dbContext.Users.ToArray().Select(x => new UserDto
			{
				Id = x.Id,
				Login = x.Login,
			});
		}
		catch (Exception ex)
		{
			logger.Log(LogLevel.Error, ex.ToString());

			return null;
		}
	}
}