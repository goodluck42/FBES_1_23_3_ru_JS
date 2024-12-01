using Microsoft.AspNetCore.Mvc;

namespace Lesson2.Controllers;

[ApiController]
[Route("myc/")]
public class MyApiController : ControllerBase
{
	[HttpGet("get")]
	public IResult GetSomeJson()
	{
		return Results.Json(new
		{
			SomeData = 42,
			Key = "Value"
		});
	}

	[HttpGet("loadfile/{filename}")]
	public IResult GetFile(string filename)
	{
		if (!System.IO.File.Exists(filename))
		{
			return Results.NotFound();
		}

		var file = System.IO.File.OpenRead(filename);
		
		return Results.File(file, MimeTypes.GetMimeType(filename));
	}
}