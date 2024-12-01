namespace WebAPIApplication.Entities;

public class User
{
	public int Id { get; set; }
	public string Login { get; set; } = null!;
	public byte[] Password { get; set; } = null!;
}