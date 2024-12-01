namespace Lesson2;

public class Counter : ICounter
{
	private int _count = 0;

	public int Count => _count++;
}