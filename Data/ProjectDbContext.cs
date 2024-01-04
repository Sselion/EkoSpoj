using Microsoft.EntityFrameworkCore;

namespace Ekospoj.Data;

public class ProjectDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            optionsBuilder.UseSqlServer("{ConnectionString}");
        }
        
    }

    public DbSet<Project> Projects { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Tag> Tags { get; set; }
    public DbSet<Contact> Contacts { get; set; }
    public DbSet<ContactType> ContactTypes { get; set; }

}
