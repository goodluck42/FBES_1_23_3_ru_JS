namespace Lesson1;

public class HttpTypeMiddleware(RequestDelegate next) : IAsyncMiddleware
{
	public Task InvokeAsync(HttpContext context)
	{
		context.Response.ContentType = "text/html";

		return next(context);
	}
}