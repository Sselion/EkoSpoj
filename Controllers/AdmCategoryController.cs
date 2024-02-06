using Ekospoj.Data;
using Ekospoj.Model;
using Ekospoj.Model.DTO;
using Ekospoj.Model.DTO.Requests;
using Microsoft.AspNetCore.Mvc;

namespace Ekospoj.Controllers
{
    [Route("adm/[controller]")]
    [ApiController]
    public class AdmCategoryController : ControllerBase
    {
        private readonly ProjectDbContext dbContext;

        public AdmCategoryController(ProjectDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public IActionResult GetAllCategories()
        {
            List<Category> categories = dbContext.Categories.ToList();

            List<CategoryDTO> categoryData = new List<CategoryDTO>();
            foreach (Category category in categories) { categoryData.Add(new CategoryDTO(category)); }

            return Ok(categoryData);
        }

        [HttpGet]
        [Route("{id:long}")]
        public IActionResult GetCategoryById([FromRoute] long id)
        {
            Category category = dbContext.Categories.Find(id);
            if (category == null) return NotFound();
            return Ok(new CategoryDTO(category));
        }

        [HttpPost]
        public IActionResult AddCategory(AddCategoryRequestDTO addCategory)
        {
            CategoryDTO categoryToAdd = new CategoryDTO(addCategory);

            return Ok(categoryToAdd);
            Category categoryToDatabase = categoryToAdd.CreateDatabaseObject();

            dbContext.Categories.Add(categoryToDatabase);
            dbContext.SaveChanges();

            return CreatedAtAction(nameof(GetCategoryById), new CategoryDTO(categoryToDatabase));
        }
    }
}
