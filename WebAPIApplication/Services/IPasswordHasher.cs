namespace WebAPIApplication.Services;

public interface IPasswordHasher
{
	byte[] HashPassword(string password);
}