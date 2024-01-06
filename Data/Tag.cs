namespace Ekospoj.Data;

public class Tag
{
    public Guid Id { get; set; }
    public string Name { get; set; }

    // Navigation properties
    public List<Project> Projects { get; set; }
}
