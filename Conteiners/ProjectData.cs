using Ekospoj.Data;

namespace EkoSpojTest4.Conteiners
{
    public class ProjectData
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public List<string> TagsName { get; } = new List<string>();
        public List<string> CategoriesName { get;  } = new List<string>();
        public List<ContactData> Contacts { get;  } = new List<ContactData>();

        public ProjectData(Project project)
        {
            Name = project.Name;
            Description = project.Description;
            SetTagsName(project.Tags);
            SetCategorisName(project.Categories);
            SetContacts(project.Contacts);
        }

        void SetTagsName(List<Tag> tags)
        {
            foreach (Tag tag in tags)
            {
                TagsName.Add(tag.Name);
            }
        }

        void SetCategorisName(List<Category> categories)
        {
            foreach(Category category in categories)
            {
                CategoriesName.Add(category.Name);
            }
        }

        void SetContacts(List<Contact> contacts)
        {
            foreach (Contact contact in contacts)
            {
                Contacts.Add(new ContactData(contact, contact.ContactType));
            }
        }
    }
}
