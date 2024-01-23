namespace Ekospoj.Data
{
    public class Category
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string ShortName { get; set; }

        // Navigation properties
        public virtual List<Project> Projects { get; set; }
    }
}
