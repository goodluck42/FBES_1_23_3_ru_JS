using Microsoft.EntityFrameworkCore.Internal;
using WebAPIApplication.Dtos;
using WebAPIApplication.Entities;

namespace WebAPIApplication.Services;

public interface IUserManager
{
	Task<UserDto?> Add(UserDto dto);
	Task<UserDto?> Remove(int id);
	Task<UserDto?> GetById(int id);
	Task<IEnumerable<UserDto>?> GetAll();
}