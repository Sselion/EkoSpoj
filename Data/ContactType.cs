namespace Ekospoj.Data;

public class ContactType
{
    public int Id { get; set; }
    public string Name { get; set; }
    //public string Type { get; set; }
    public string IconPath { get; set; }

    // Navigation properties
    public List<Contact> Contacts { get; set; }
}
