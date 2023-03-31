string dirtyPhoneNumber = "+38 (050) 596-96-52";
string cleanPhoneNumber = dirtyPhoneNumber
                        .Replace("+", string.Empty)
                        .Replace(" ", string.Empty)
                        .Replace("(", string.Empty)
                        .Replace(")", string.Empty)
                        .Replace("-", string.Empty);