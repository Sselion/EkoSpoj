using Ekospoj.Data;
using Ekospoj.Model.DTO.Requests;

namespace Ekospoj.Model
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

        public CategoryDTO(AddCategoryRequestDTO category)
        {
            Name = category.Name;
            ShortName = category.ShortName;
        }

        public Category CreateDatabaseObject()
        {
            Category cat = new Category()
            {
                Name = this.Name,
                ShortName = this.ShortName,
            };
            return cat;
        }
    }
}
