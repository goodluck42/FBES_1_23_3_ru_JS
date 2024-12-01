using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Lesson2.Models;

namespace Lesson2.Controllers;

public class HomeController(ICounter counter) : Controller
{
	public IActionResult Index()
	{
		var account = new Account
		{
			Password = "123456",
			Username = "admin",
		};
		
		return View(account);
		//return RedirectToAction(nameof(HomeController.Index), nameof(HomeController).Replace(nameof(Controller), string.Empty));
	}

	public IActionResult AjaxPage()
	{
		return PartialView("AjaxPage");
	}
	
	public IActionResult Privacy() => View(model: counter.Count.ToString());
	

	[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
	public IActionResult Error()
	{
		return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
	}
}