# Genesys Implicit Grant Demo

A minimal demo showing how to exercise the Genesys Cloud OAuth2 Implicit Grant flow, and how a mismatched `redirect_uri` produces the familiar “invalid client ID or redirect URI” error.

## 📁 Project Structure

implicit-app-test/
├── public/
│ ├── index.html
│ ├── callback.html
│ ├── wrong_callback.html
│ └── styles.css
├── server.js
├── .gitignore
└── README.md

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) v16+  
- A Genesys Cloud OAuth Client with **Implicit (Token) Grant** enabled  
  - Whitelist both `http://localhost:8000/callback.html` and `http://localhost:8000/wrong_callback.html` in **Admin → Integrations → OAuth Clients**

## 🚀 Setup & Run

1. **Clone the repo**  

   ```bash
   git clone https://github.com/your-org/implicit-app-test.git
   cd implicit-app-test

2. Install dependencies

npm install

3. Configure your OAuth Client ID

Open public/index.html

Set const clientId = 'YOUR_CLIENT_ID'; to your Genesys Cloud OAuth Client ID

Ensure regionHost matches your login host (e.g. login.usw2.pure.cloud)

4. Whitelist Redirect URIs

In Genesys Cloud, add these to your OAuth client’s Allowed Redirect URIs:

http://localhost:8000/callback.html

5. Start the server

```bash
node server.js

## 🎯 Testing

1. Successful flow

- Open http://localhost:8000

- Click Login (Correct Redirect)

- Authenticate in Genesys Cloud

- You should land on callback.html showing your access_token

2. Error Flow

- Click Login (Incorrect Redirect)

- Genesys Cloud should immediately show “OAuth client ID or redirect URI is invalid”

## Further Reading

* https://developer.genesys.cloud/authorization/platform-auth/use-implicit-grant

Note: This is purely a demo.