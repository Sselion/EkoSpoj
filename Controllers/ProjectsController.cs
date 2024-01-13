using Ekospoj.Data;
using EkoSpojTest4.Conteiners;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Ekospoj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly ProjectDbContext dbContext;

        public ProjectsController(ProjectDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public IActionResult GetAllProjects()
        {
            List<Project> projects = dbContext.Projects.ToList();
            List<ProjectData> projectData = new List<ProjectData>();

            foreach(Project project in projects) { projectData.Add(new ProjectData(project)); }

            return Ok(projectData);
        }
    }
}
