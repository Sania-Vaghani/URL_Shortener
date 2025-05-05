# URL Shortener

A simple Node.js application for shortening URLs. Users can create short links that redirect to long URLs via a web form or API, making link sharing and management easier.

## Features
- Shorten long URLs to short, easy-to-share links
- Redirect short URLs to the original long URL
- Simple web UI and REST API
- Stores links in a local JSON file (`data/links.json`)

## Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/URL_Shortener.git
   cd URL_Shortener
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   node app.js
   ```
   The server will start on [http://localhost:1234](http://localhost:1234).

## Usage
### Web Interface
- Open [http://localhost:1234](http://localhost:1234) in your browser.
- Enter the original URL and a custom short code (or leave blank to auto-generate) in the form.
- View all shortened URLs on the page. Click a short link to be redirected to the original URL.

### API Usage
- To shorten a URL via API, send a POST request to `/` with form data:
  - `url`: The original URL (required)
  - `shortCode`: Custom code (optional; if omitted, a random one is generated)
- Example using `curl`:
  ```bash
  curl -X POST http://localhost:1234/ \
    -d "url=https://www.google.com" \
    -d "shortCode=goog"
  ```
- To access a short URL, visit `http://localhost:1234/<shortCode>` (e.g., `http://localhost:1234/goog`).

## Project Structure
```
URL_Shortener/
├── app.js            # Main application file
├── package.json      # Project dependencies
├── data/
│   └── links.json    # Stores short-to-long URL mappings
├── public/
│   └── style.css     # Stylesheet
├── views/
│   └── index.html    # Main HTML page
```

## Dependencies
- express

## License
This project is licensed under the MIT License.
