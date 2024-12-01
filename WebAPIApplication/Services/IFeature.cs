namespace WebAPIApplication.Services;

public interface IFeature
{
	static abstract void MapEndpoints(IEndpointRouteBuilder endpoints);
	static abstract void MapServices(IServiceCollection serviceCollection);
}