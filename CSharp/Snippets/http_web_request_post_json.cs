string uri = string.Empty;
string token = string.Empty;

HttpWebRequest request = (HttpWebRequest)WebRequest.Create(uri);
request.Method = "POST";
request.ContentType = "application/json";
request.Headers.Add("Authorization", $"Bearer {token}");

string jsonData = JsonConvert.SerializeObject(new { Field_1 = "value_1", Fiels_2 = "value_2" }).ToString();

using (StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
    streamWriter.Write(jsonData);
    streamWriter.Flush();
    streamWriter.Close();
}

using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
{
    using (Stream responseStream = response.GetResponseStream())
    {
        using (StreamReader reader = new StreamReader(responseStream))
        {
            string responseText = reader.ReadToEnd();
            Console.WriteLine(responseText);
        }
    }
}