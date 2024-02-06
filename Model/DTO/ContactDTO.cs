using Ekospoj.Data;
using Ekospoj.Model.DTO.Requests;

namespace Ekospoj.Model
{
    public class ContactDTO
    {
        public string TypeName { get; set; }
        public string Value { get; set; }
        public string IconPath { get; set; }

        public ContactDTO(Contact contact)
        {
            TypeName = contact.ContactType.Name;
            Value = contact.Value;
            IconPath = contact.ContactType.IconPath;
        }

        public ContactDTO(AddContactRequestDTO contact)
        {
            TypeName = contact.TypeName;
            Value = contact.Value;
            IconPath = "default.png";
        }
    }
}
