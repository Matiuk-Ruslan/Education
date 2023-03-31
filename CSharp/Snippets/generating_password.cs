string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgijklmnopqrstuvwxyz0123456789@";
char[] stringChars = new char[12];
Random random = new Random();

for (int i = 0; i < stringChars.Length; i++)
{
    stringChars[i] = chars[random.Next(chars.Length)];
}

string password = new string(stringChars);