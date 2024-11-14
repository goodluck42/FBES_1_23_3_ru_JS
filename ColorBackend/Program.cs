using System.Drawing;
using System.Globalization;
using System.Net;

//
using var httpListener = new HttpListener();

httpListener.Prefixes.Add("http://localhost:8080/DataStorage/SendColor/");

httpListener.Start();

while (true)
{
	var httpContext = httpListener.GetContext();
	var requestCookie = httpContext.Request.Cookies["color"];

	if (requestCookie == null)
	{
		return;
	}

	Console.WriteLine(requestCookie.Name);
	Console.WriteLine(requestCookie.Value);
	Console.WriteLine(requestCookie.Expired);

	var invertedColor = InvertColor(requestCookie.Value);

	Console.WriteLine(invertedColor);

	// httpContext.Response.SetCookie(new Cookie("color", invertedColor));
	httpContext.Response.Headers.Add("Set-Cookie", 
		$"color={invertedColor}; expires=Thu, 27-Jan-2025 00:45:41 GMT; path=/");
	httpContext.Response.StatusCode = 200;
	httpContext.Response.Redirect("http://localhost:63342/DataStorage/index.html");
	httpContext.Response.Close();
}


string InvertColor(string myColorString)
{
	if (myColorString.StartsWith('#'))
	{
		myColorString = myColorString[1..];
	}

	int color = (int)long.Parse(myColorString, NumberStyles.HexNumber);
	int r = (color >> 16) & 0xFF;
	int g = (color >> 8) & 0xFF;
	int b = (color >> 0) & 0xFF;
	byte invertedRed = (byte)(255 - r);
	byte invertedGreen = (byte)(255 - g);
	byte invertedBlue = (byte)(255 - b);

	// var rgb = Color.FromArgb(invertedRed, invertedGreen, invertedBlue).ToString();

	return $"#{Convert.ToHexString([invertedRed, invertedGreen, invertedBlue])}";
}