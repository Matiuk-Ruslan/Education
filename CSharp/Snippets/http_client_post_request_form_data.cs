string url = string.Empty;
string endpoint = string.Empty;
string token = string.Empty;

if (!string.IsNullOrEmpty(url) && !string.IsNullOrEmpty(endpoint) && !string.IsNullOrEmpty(token))
{
    try
    {
        Uri uri = new Uri(url + endpoint);

        using (HttpClient client = new HttpClient())
        {
            using (MultipartFormDataContent content = new MultipartFormDataContent())
            {
                content.Add(new StringContent(token), "token");
                content.Add(new StringContent("formDataElement_1"), "nameFormDataElement_1");
                content.Add(new StringContent("formDataElement_2"), "nameFormDataElement_2");

                using (HttpResponseMessage request = await client.PostAsync(uri, content))
                {
                    string response = await request.Content.ReadAsStringAsync();
                    if (request.IsSuccessStatusCode) { }
                    else { }
                }
            }
        }
    }
    catch (Exception ex) { }
}