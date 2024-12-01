namespace Lesson1;

public class AuthMiddleware(RequestDelegate next)
{
	public Task InvokeAsync(HttpContext context)
	{
		if (!context.Request.Query.TryGetValue("token", out var token))
		{
			HandleReject(context, "Token is missing");

			return Task.CompletedTask;
		}

		var tokenValue = token.ToString();

		if (tokenValue != "123")
		{
			HandleReject(context, "Invalid token");

			return Task.CompletedTask;
		}

		return next(context);
	}

	private void HandleReject(HttpContext context, string reason)
	{
		context.Response.StatusCode = 401;
		context.Response.ContentType = "text/html";
		context.Response.WriteAsync($"<h1>401 Unauthorized</h1><div>Reason: {reason}</div>");
	}
}