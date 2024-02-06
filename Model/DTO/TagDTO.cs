using Ekospoj.Data;
using Ekospoj.Model.DTO.Requests;

namespace Ekospoj.Model.DTO
{
    public class TagDTO
    {
        public string Name { get; set; }

        public TagDTO(Tag tag)
        {
            Name = tag.Name;
        }

        public TagDTO(AddTagRequestDTO tag)
        {
            Name = tag.Name;
        }

        public Tag CreateDatabaseObject()
        {
            Tag tag = new Tag()
            {
                Name = this.Name
            };
            return tag;
        }
    }
}
