using Ekospoj.Data;
using EkoSpojTest4.Conteiners;
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

            List<CategoryData> categoryData = new List<CategoryData>();
            foreach (Category category in categories) { categoryData.Add( new CategoryData(category)); }

            return Ok(categoryData);
        }
    }
}
