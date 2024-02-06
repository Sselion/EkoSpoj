using Ekospoj.Data;
using Ekospoj.Model;
using Microsoft.AspNetCore.Mvc;

namespace Ekospoj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ProjectDbContext dbContext;
        public CategoriesController(ProjectDbContext projectDbContext)
        {
            dbContext = projectDbContext;
        }

        [HttpGet]
        public IActionResult GetAllCategories()
        {
            List<Category> categories = dbContext.Categories.Where(x => x.Projects.Count > 0).ToList();

            List<CategoryDTO> categoryData = new List<CategoryDTO>();
            foreach (Category category in categories) { categoryData.Add( new CategoryDTO(category)); }

            return Ok(categoryData);
        }
    }
}
