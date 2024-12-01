using Microsoft.AspNetCore.Mvc;
using WebAPIApplication.Data;
using WebAPIApplication.Entities;
using WebAPIApplication.Extensions;
using WebAPIApplication.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContextFactory<ApplicationDbContext>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCors();
builder.Services.AddFeatureServices<UserFeature>();
builder.Logging.AddConsole();
//builder.Services.AddLogging(config => { config.AddConsole(); });

var app = builder.Build();

app.EnsureDatabaseCreated();
app.UseHttpsRedirection();
app.UseCors(options => { options.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin(); });
app.MapFeatureEndpoints<UserFeature>();
app.Run();