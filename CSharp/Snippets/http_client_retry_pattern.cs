Uri requestUri = new Uri("");

int maxAttempts = 3;
int currentAttempt = 1;
bool success = false;

while (!success && currentAttempt <= maxAttempts)
{
    try
    {
        HttpClient client = new HttpClient();
        HttpContent content = new StringContent(JsonConvert.SerializeObject(requestBody));
        content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
        HttpResponseMessage requestStream = await client.PostAsync(requestUri, content);
        requestStream.EnsureSuccessStatusCode();
        string responseStream = await requestStream.Content.ReadAsStringAsync();
        List<ClassResponse> responseBody = JsonConvert.DeserializeObject<List<ClassResponse>>(responseStream);
        success = true;
    }
    catch (HttpRequestException ex)
    {
        currentAttempt++;
        if (currentAttempt > maxAttempts)
        {
            throw new Exception($"Failed to send data after {maxAttempts} attempts.", ex);
        }
        else { Thread.Sleep(5000); }
    }
    catch (Exception ex) { }
}