using Ekospoj.Data;
using Ekospoj.Model;
using Ekospoj.Model.DTO;
using Ekospoj.Model.DTO.Requests;
using Microsoft.AspNetCore.Mvc;

namespace Ekospoj.Controllers
{
    [Route("adm/[controller]")]
    [ApiController]
    public class AdmTagController : Controller
    {
        private readonly ProjectDbContext dbContext;

        public AdmTagController(ProjectDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public IActionResult GetAllCategories()
        {
            List<Tag> tags = dbContext.Tags.ToList();

            List<TagDTO> tagsData = new List<TagDTO>();
            foreach (Tag tag in tags) { tagsData.Add(new TagDTO(tag)); }

            return Ok(tagsData);
        }

        [HttpGet]
        [Route("{id:long}")]
        public IActionResult GetTagById([FromRoute] long id)
        {
            Tag tag = dbContext.Tags.Find(id);
            if (tag == null) return NotFound();
            return Ok(new TagDTO(tag));
        }

        [HttpPost]
        public IActionResult AddTag(AddTagRequestDTO addTag)
        {
            TagDTO tagToAdd = new TagDTO(addTag);

            return Ok(tagToAdd);
            Tag tagToDatabase = tagToAdd.CreateDatabaseObject();

            dbContext.Tags.Add(tagToDatabase);
            dbContext.SaveChanges();

            return CreatedAtAction(nameof(GetTagById), new TagDTO(tagToDatabase));
        }
    }
}
