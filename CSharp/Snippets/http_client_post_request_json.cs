string uri = string.Empty;
string token = string.Empty;

if (!string.IsNullOrEmpty(uri) && !string.IsNullOrEmpty(token))
{
    try
    {
        HttpClient client = new HttpClient();
        client.DefaultRequestHeaders.Add("Authorization", $"Bearer {token}");
        HttpContent content = new StringContent(JsonConvert.SerializeObject(new { Field_1 = value_1, Fiels_2 = value_2 }));
        content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
        HttpResponseMessage requestStream = await client.PostAsync(new Uri(uri), content);
        requestStream.EnsureSuccessStatusCode();
        string responseStream = await requestStream.Content.ReadAsStringAsync();
        ClassResponse response = JsonConvert.DeserializeObject<ClassResponse>(responseStream);
    }
    catch (HttpRequestException ex) { }
    catch (Exception ex) { }
}