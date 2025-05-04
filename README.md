# URL_Shortener

A simple Node.js application for shortening URLs. This project allows users to create short links that redirect to long URLs, making it easier to share and manage links.

## Features
- Shorten long URLs to short, easy-to-share links
- Redirect short URLs to the original long URL
- Simple REST API

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

## Usage
- Visit `http://localhost:3000` (or the port specified in your configuration) to access the service.
- Use the API to shorten URLs:
  - `POST /shorten` with a JSON body `{ "url": "https://example.com" }`
  - Receive a response with the shortened URL.
- Access a short URL (e.g., `http://localhost:3000/abc123`) to be redirected to the original URL.

## Example API Request
```bash
curl -X POST http://localhost:3000/shorten \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.google.com"}'
```

## License
This project is licensed under the MIT License.
