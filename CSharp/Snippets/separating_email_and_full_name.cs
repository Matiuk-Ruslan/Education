string senderOrRecipient = @"Матюк Руслан Александрович <matiuk.ruslan@gmail.com>;";
string email = Regex.Match(senderOrRecipient, "<.*>").Captures[0].Value.Replace("<", string.Empty).Replace(">", string.Empty);
string fullname = Regex.Match(senderOrRecipient, "^.*?<").Captures[0].Value;

// Убираем пробелы в конце строки
/* C# 7.3 */
//fullname = fullname.Substring(0, fullname.Length - 2);
/* C# 8.0 */
//fullname = fullname[0..^2];