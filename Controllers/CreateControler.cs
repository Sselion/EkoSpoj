using Ekospoj.Data;
using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace EkoSpojTest4.Controllers
{
    //[Route("api/[controller]")]
   // [ApiController]
    public class CreateController : Controller
    {
        private readonly ProjectDbContext dbContext;

        public CreateController(ProjectDbContext dbContext)
        {
            this.dbContext = dbContext;

        }
        //[HttpGet]
        public IActionResult GetCreateCategories()
        {
            List<string[]> categories = new List<string[]> { 
                new string[2] { "Odpadové hospodářství", "Odpady" },
                new string[2] { "Vzdělání", "Vzdelani" },
                new string[2] { "Analýzy & Data", "Data" },
                new string[2] { "Transformace & energetika", "Energetika" },
                new string[2] { "Ochrana krajiny", "Ochrana" },
                new string[2] { "Zpravodajství", "Zpravodajstvi" },
                new string[2] { "Spolky & instituce", "Spolky" },
                new string[2] { "Finance", "Finance" },
            };

            List<string[]> projectData = new List<string[]>
            {
                new string[4]{ "Svaz moderní energetiky", "[Dopsat popis]","Transformace & energetika", "Energetika"},
                new string[4]{ "Samosebou", "[Dopsat popis]", "Odpadové hospodářství", "Odpady"},
                new string[4]{ "učím o klimatu", "[Dopsat popis]", "Vzdělání", "Vzdelani"},
                new string[4]{ "Envi data", "[Dopsat popis]", "Analýzy & Data", "Data"},
                new string[4]{ "Česká krajina", "[Dopsat popis]", "Ochrana krajiny", "Ochrana"},
                new string[4]{ "Ekolist", "[Dopsat popis]","Zpravodajství", "Zpravodajstvi"},
                new string[4]{ "Klimatická žaloba", "[Dopsat popis]","Spolky & instituce", "Spolky" }
            };

            List<string[]> contactData = new List<string[]>
            {
                new string[3]{ "https://www.modernienergetika.cz", "Svaz moderní energetiky", "Web" },
                new string[3]{ "https://www.samosebou.cz", "Samosebou", "Web" },
                new string[3]{ "https://ucimoklimatu.cz", "učím o klimatu", "Web" },
                new string[3]{ "https://www.envidata.cz", "Envi data", "Web" },
                new string[3]{ "https://www.ceska-krajina.cz", "Česká krajina", "Web" },
                new string[3]{ "https://ekolist.cz", "Ekolist", "Web" },
                new string[3]{ "https://www.klimazaloba.cz", "Klimatická žaloba", "Web" },
            };

            List<Project> dbProjects = dbContext.Projects.ToList();
            //List<Tag> dbTags = dbContext.Tags.ToList();
            List<ContactType> dbContactType = dbContext.ContactTypes.ToList();

            string path = "./resources/default.png";
            try
            {
                foreach (var data in contactData)
                {
                    //Tag? tg = dbTags.Find(x => x.Name == data[3]);
                    Project? prj = dbProjects.Find(x => x.Name == data[1]);
                    ContactType? ctt = dbContactType.Find(x => x.Name == data[2]);
                    Contact contact = new Contact
                    {
                        Value = data[0],
                        ContactTypeId = ctt.Id,
                        ContactType = ctt
                    };
                    //project.Tags = new List<Tag> { tg };
                    contact.Projects = new List<Project> { prj };

                    dbContext.Contacts.Add(contact);
                    dbContext.SaveChanges();
                }
            }catch (Exception ex)
            {
                return this.Problem(ex.Message);
            }
            
            
            return Ok();
        }
    }
}
