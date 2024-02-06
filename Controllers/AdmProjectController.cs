using Ekospoj.Data;
using Ekospoj.Model;
using Ekospoj.Model.DTO;
using Ekospoj.Model.DTO.Requests;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ekospoj.Controllers
{
    [Route("adm/[controller]")]
    [ApiController]
    public class AdmProjectController : ControllerBase
    {
        private readonly ProjectDbContext dbContext;

        public AdmProjectController(ProjectDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public IActionResult GetAllProjects()
        {
            List<Project> projects = dbContext.Projects.ToList();
            List<ProjectAdmResponseDTO> projectData = new List<ProjectAdmResponseDTO>();

            foreach (Project project in projects) { projectData.Add(new ProjectAdmResponseDTO(project)); }

            return Ok(projectData);
        }

        [HttpGet]
        [Route("{id:long}")]
        public IActionResult GetProjectById([FromRoute] long id)
        {
            Project project = dbContext.Projects.Find(id);
            if (project == null) return NotFound();
            return Ok(new ProjectAdmResponseDTO(project));
        }

        [HttpPost]
        public IActionResult AddProject([FromBody] ProjectAdmRequestDTO addProjectRequest)
        {

            ProjectAdmResponseDTO projectToAdd = new ProjectAdmResponseDTO(addProjectRequest);

            return Ok(projectToAdd);
            Project projectToDatabase = projectToAdd.ToProjectModel(dbContext);

            dbContext.Projects.Add(projectToDatabase);
            dbContext.SaveChanges();

            return CreatedAtAction(nameof(GetProjectById), new ProjectDTO(projectToDatabase));
        }

        [HttpPut]
        [Route("{id:long}")]
        public IActionResult UpdateProject([FromRoute] long id, [FromBody] ProjectAdmRequestDTO addProjectRequest)
        {
            return Ok();
        }
    }
}
