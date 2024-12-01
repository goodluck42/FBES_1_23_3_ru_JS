using System.Security.Cryptography;
using System.Text;

namespace WebAPIApplication.Services;

public sealed class PasswordHasher : IPasswordHasher
{
	public byte[] HashPassword(string password)
	{
		return SHA256.HashData(Encoding.UTF8.GetBytes(password));
	}
}