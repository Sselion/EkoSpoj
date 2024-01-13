using Ekospoj.Data;

namespace EkoSpojTest4.Conteiners
{
    public class ContactData
    {
        public string TypeName { get; set; }
        public string Value { get; set; }
        public string IconPath { get; set; }

        public ContactData(Contact contact, ContactType cType)
        {
            TypeName = cType.Name;
            Value = contact.Value;
            IconPath = cType.IconPath;
        }
    }
}
