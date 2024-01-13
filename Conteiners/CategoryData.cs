using Ekospoj.Data;

namespace EkoSpojTest4.Conteiners
{
    public class CategoryData
    {
        public string Name { get; set; }
        public string ShortName { get; set; }
        public CategoryData(Category category)
        {
            Name = category.Name;
            ShortName = category.ShortName;
        }
    }
}
