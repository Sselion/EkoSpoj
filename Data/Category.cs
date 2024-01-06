namespace Ekospoj.Data
{
    public class Category
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string ShortName { get; set; }

        // Navigation properties
        public List<Project>? Projects { get; set; }
    }
}
