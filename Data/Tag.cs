namespace Ekospoj.Data;

public class Tag
{
    public Guid Id { get; set; }
    public string Name { get; set; }

    // Navigation properties
    public virtual List<Project>? Projects { get; set; }
}
