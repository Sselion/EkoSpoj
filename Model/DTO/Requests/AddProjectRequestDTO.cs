using Ekospoj.Data;

namespace Ekospoj.Model.DTO.Requests
{
    public class ProjectAdmRequestDTO
    {
        public string Name { get; set; }
        public string ShortDescription { get; set; }
        public string Description { get; set; }
        public string logoPath { get; set; }

        // Navigation properties
        public  List<string> Tags { get; set; }
        public  List<string> Categories { get; set; }
        public  List<AddContactRequestDTO> Contacts { get; set; }
    }
}
