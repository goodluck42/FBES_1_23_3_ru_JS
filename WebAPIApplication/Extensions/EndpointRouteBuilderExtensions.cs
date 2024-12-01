using WebAPIApplication.Services;

namespace WebAPIApplication.Extensions;

public static class EndpointRouteBuilderExtensions
{
	public static IEndpointRouteBuilder MapFeatureEndpoints<TFeature>(this IEndpointRouteBuilder source)
		where TFeature : IFeature
	{
		TFeature.MapEndpoints(source);

		return source;
	}
}