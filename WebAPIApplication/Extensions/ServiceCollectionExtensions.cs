using WebAPIApplication.Services;

namespace WebAPIApplication.Extensions;

public static class ServiceCollectionExtensions
{
	public static IServiceCollection AddFeatureServices<TFeature>(this IServiceCollection services)
		where TFeature : IFeature
	{
		TFeature.MapServices(services);

		return services;
	}
}