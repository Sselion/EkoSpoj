namespace Ekospoj.Data
{
    public class Contact
    {
        public long Id { get; set; }
        public string Value { get; set; }

        // Navigation properties
        public long ProjectId { get; set; }
        public virtual Project Project { get; set; }
        public long ContactTypeId { get; set; }
        public virtual ContactType ContactType { get; set; }
    }
}
