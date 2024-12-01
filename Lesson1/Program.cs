using System.Diagnostics.CodeAnalysis;
using System.Text.Json.Serialization;
using Lesson1;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddAntiforgery();

var app = builder.Build();

//app.UseMiddleware<AuthMiddleware>();
app.UseStaticFiles();
app.UseMiddleware<HttpTypeMiddleware>();
app.UseAntiforgery();
app.MapGet("/page/1", (HttpContext context) =>
{
	return $"""<div style="color: red;">First page</div>""";
});

app.MapGet("/page/2", (HttpContext context) =>
{
	return $"""<div style="color: deeppink;">Second page</div>""";
});

app.MapGet("/login", () =>
{
	return File.ReadAllText("login.html");
});

app.MapPost("/do_login", (LoginDTO dto) => {
	Console.WriteLine($"Login: {dto.Login}");
	Console.WriteLine($"Password: {dto.Password}");
});

app.Run();

public class LoginDTO
{
	public string? Login { get; set; }
	public string? Password { get; set; }
}