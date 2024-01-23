namespace Ekospoj.Data;

public class Project
{
    public long Id { get; set; }
    public string Name { get; set; }
    public string ShortDescription { get; set; }
    public string Description { get; set; }
    public string logoPath { get; set; }

    // Navigation properties
    public virtual List<Tag> Tags { get; set; }
    public virtual List<Category> Categories { get; set; }
    public virtual List<Contact> Contacts { get; set; }
}
