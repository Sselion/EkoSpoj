using Ekospoj.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ekospoj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllCategories()
        {
            List<Category> categories = new List<Category> {
                new Category
                {
                    Id = Guid.NewGuid(),
                    Name = "MockupNameCathegory1",
                    ShortName = "MockUpShortname1"
                },
                new Category
                {
                    Id = Guid.NewGuid(),
                    Name = "MockupNameCathegory2",
                    ShortName = "MockUpShortname2"
                },
                new Category
                {
                    Id = Guid.NewGuid(),
                    Name = "MockupNameCathegory3",
                    ShortName = "MockUpShortname3"
                }
            };
            return Ok(categories);
        }
    }
}
