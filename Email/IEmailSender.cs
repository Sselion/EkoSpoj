namespace Ekospoj.Email
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string subject, string message);
    }
}
