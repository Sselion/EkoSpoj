using Ekospoj.Data;
using Ekospoj.Model.DTO.Requests;
using System.Linq;

namespace Ekospoj.Model.DTO
{
    public class ProjectAdmResponseDTO
    {
        public string Name { get; set; }
        public string ShortDescription { get; set; }
        public string Description { get; set; }
        public string ProjectLogoPath { get; set; }
        public List<string> Tags { get; } = new List<string>();
        public List<string> Categories { get; } = new List<string>();
        public List<ContactDTO> Contacts { get; } = new List<ContactDTO>();

        public ProjectAdmResponseDTO(Project project)
        {
            Name = project.Name;
            Description = project.Description;
            ShortDescription = project.ShortDescription;
            ProjectLogoPath = "/images/" + project.logoPath;
            SetTags(project.Tags);
            SetCategories(project.Categories);
            SetContacts(project.Contacts);
        }

        public ProjectAdmResponseDTO(ProjectAdmRequestDTO requestDTO)
        {
            Name = requestDTO.Name;
            Description = requestDTO.Description;
            ShortDescription = requestDTO.ShortDescription;
            ProjectLogoPath = "/images/" + requestDTO.logoPath;

            Tags = requestDTO.Tags;
            Categories = requestDTO.Categories;
            SetContacts(requestDTO.Contacts);
        }

        private void SetTags(List<Tag> tags)
        {
            foreach (Tag tag in tags) Tags.Add(tag.Name);
        }

        private void SetCategories(List<Category> categories)
        {
            foreach (Category category in categories) Categories.Add(category.ShortName);
        }
        private void SetContacts(List<Contact> contacts)
        {
            foreach (Contact contact in contacts) Contacts.Add(new ContactDTO(contact));
        }

        private void SetContacts(List<AddContactRequestDTO> contacts)
        {
            foreach (AddContactRequestDTO contact in contacts) Contacts.Add(new ContactDTO(contact));
        }

        public Project ToProjectModel(ProjectDbContext dbContext)
        {
            Project project = new Project()
            {
                Name = this.Name,
                ShortDescription = this.ShortDescription,
                Description = this.Description,
                logoPath = this.ProjectLogoPath
            };
            foreach (string tagName in Tags)
            {
                Tag tag = dbContext.Tags.Where(x => x.Name == tagName).FirstOrDefault();
                if (tag.Name != null) project.Tags.Add(tag);
            }

            foreach (string categoryName in this.Categories)
            {
                Category cat = dbContext.Categories.Where(x => x.ShortName == categoryName).FirstOrDefault();
                if (cat.Name != null) project.Categories.Add(cat);
            }

            foreach (ContactDTO contactDTO in this.Contacts)
            {
                ContactType ctype = dbContext.ContactTypes.Where(x => x.Name == contactDTO.TypeName).FirstOrDefault();
                if (ctype.Name != null) 
                { 
                    Contact c = new()
                    {
                        ContactType = ctype,
                        Project = project,
                        Value = contactDTO.Value
                    };
                    project.Contacts.Add(c);
                } 
            }
            return project;
        }
    }
}
