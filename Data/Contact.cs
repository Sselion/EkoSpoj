namespace Ekospoj.Data
{
    public class Contact
    {
        public int Id { get; set; }
        public string Value { get; set; }

        // Navigation properties
        public List<Project> Projects { get; set; }
        public int ContactTypeId { get; set; }
        public ContactType ContactType { get; set; }
    }
}
