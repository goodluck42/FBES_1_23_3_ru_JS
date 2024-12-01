namespace Lesson1;

public interface IMiddleware
{
	void Invoke(HttpContext context);
}