namespace Ekospoj.Email
{
    public class FootMessage
    {
        public string name { get => _name; set => _name = value; }
        public string email { get => _email; set => _email = value; }
        public string subject { get => _subject; set => _subject = value; }
        public string message { get => CompleteMessage(); set => _message = value; }

        private string _name;
        private string _email;
        private string _subject;
        private string _message;

        public FootMessage() { }
        private string CompleteMessage()
        {
            return $"From: {name} <{email}> send:\n\n" +
                $"{message}";
        }
        private static string ValidateMessage(string s)
        {
            return s;
        }
        private static string Validate(string s)
        {
            return s;
        }
    }
}
