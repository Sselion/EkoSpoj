using Microsoft.EntityFrameworkCore;

namespace Ekospoj.Data;

public class ProjectDbContext : DbContext
{
    public ProjectDbContext(DbContextOptions option) : base(option)
    {

    }

    public DbSet<Project> Projects { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Tag> Tags { get; set; }
    public DbSet<Contact> Contacts { get; set; }
    public DbSet<ContactType> ContactTypes { get; set; }

}
