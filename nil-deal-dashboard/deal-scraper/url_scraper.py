import requests
from bs4 import BeautifulSoup
import json

# Replace 'your_url_here' with the URL you want to scrape
url = 'https://www.on3.com/nil/deals/'

# Send an HTTP GET request to the URL
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the HTML content of the page
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find all <h5> tags in the parsed HTML
    h5_tags = soup.find_all('h5')

    # Create a list to store the text content of the <h5> tags
    h5_texts = [h5.text for h5 in h5_tags]

    # Define a dictionary to store the data
    data = {'h5_tags': h5_texts}

    # Save the data to a JSON file
    with open('recent-deals.json', 'w') as json_file:
        json.dump(data, json_file, indent=4)

    print('Data saved to recent-deals.json')
else:
    print('Failed to retrieve the web page.')
