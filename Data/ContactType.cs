namespace Ekospoj.Data;

public class ContactType
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    //public string Type { get; set; }
    public string IconPath { get; set; }

    // Navigation properties
    public virtual List<Contact>? Contacts { get; set; }
}
