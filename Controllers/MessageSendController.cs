using Castle.Core.Smtp;
using Ekospoj.Email;
using Microsoft.AspNetCore.Mvc;

namespace Ekospoj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageSendController : Controller
    {
        private readonly Ekospoj.Email.IEmailSender emailSender;

        public MessageSendController(Ekospoj.Email.IEmailSender emailSender)
        {
            this.emailSender = emailSender;
        }
        [HttpPost]
        public async Task<IActionResult> AcceptMessage([FromBody] FootMessage message)
        {

            await emailSender.SendEmailAsync(message.subject, message.message);
            return Ok(message);
        }
    }
}
