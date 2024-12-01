namespace Lesson1;

public interface IAsyncMiddleware
{
	Task InvokeAsync(HttpContext context);
}