import requests
from bs4 import BeautifulSoup
import json

# Step 1: Construct the DuckDuckGo search URL
search_url = f"https://duckduckgo.com/?hps=1&q=baby+powder&atb=v395-5vk&ia=web"

# Step 2: Send an HTTP GET request and retrieve the search results
response = requests.get(search_url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Step 3: Parse the HTML content
    soup = BeautifulSoup(response.text, 'html.parser')

    # Step 4: Initialize an empty list for titles
    titles = []

    # Step 5: Extract and append titles to the list
    results = soup.find_all("span")
    for result in results:
        title = result.text
        titles.append(title)

    # Step 6: Convert the list of titles to JSON
    json_data = json.dumps(titles, indent=2)

    # Step 7: Prompt the user for a filename and save the JSON data
    filename = input("Enter a filename to save the JSON data: ")
    with open(filename, 'w') as file:
        file.write(json_data)

    # Step 8: Display a completion message
    print(f"Titles have been scraped and saved to {filename}")
else:
    print("Failed to retrieve search results. Please check your internet connection.")
