using Ekospoj.Data;

namespace EkoSpojTest4.Conteiners
{
    public class CategoryDTO
    {
        public string Name { get; set; }
        public string ShortName { get; set; }
        public CategoryDTO(Category category)
        {
            Name = category.Name;
            ShortName = category.ShortName;
        }
    }
}
