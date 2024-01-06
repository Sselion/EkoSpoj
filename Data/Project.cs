namespace Ekospoj.Data;

public class Project
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }

    // Navigation properties
    public List<Tag> Tags { get; set; }
    public List<Category> Categories { get; set; }
    public List<Contact> Contacts { get; set; }
}
