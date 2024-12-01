using Microsoft.EntityFrameworkCore;
using WebAPIApplication.Entities;

namespace WebAPIApplication.Data;

public sealed class ApplicationDbContext(IConfiguration configuration) : DbContext
{
	protected override void OnModelCreating(ModelBuilder modelBuilder)
	{
		base.OnModelCreating(modelBuilder);

		modelBuilder.Entity<User>(entity =>
		{
			entity.HasKey(x => x.Id);
			entity.Property(x => x.Login).HasMaxLength(64);
			entity.HasIndex(x => x.Login).IsUnique();
			entity.Property(x => x.Password).HasMaxLength(32);
		});
	}

	protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
	{
		base.OnConfiguring(optionsBuilder);

		optionsBuilder.UseSqlite(configuration.GetConnectionString("Sqlite"));
	}

	public DbSet<User> Users { get; set; }
}