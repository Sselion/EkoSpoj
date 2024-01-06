using Ekospoj.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ekospoj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllCategories()
        {


            return Ok();
        }
    }
}
