namespace Ekospoj.Data
{
    public class Contact
    {
        public Guid Id { get; set; }
        public string Value { get; set; }

        // Navigation properties
        public List<Project> Projects { get; set; }
        public Guid ContactTypeId { get; set; }
        public ContactType ContactType { get; set; }
    }
}
