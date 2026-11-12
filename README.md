# Stellix

Privacy-first analytics infrastructure for Stellar builders. Independent project; not affiliated with or endorsed by SDF or SCF.

## Local setup

1. Copy `.env.example` to `.env` and set `JWT_SECRET`.
2. Start MongoDB: `docker compose up -d mongodb`.
3. Install: `npm install`.
4. Run: `npm run dev`.
5. Open `http://127.0.0.1:5173`.

The dashboard uses clearly labelled deterministic demo data until Umami and OpenTelemetry are configured. Email verification and password reset require SMTP credentials. MongoDB is required for real accounts, organizations, memberships, projects, and sessions.

## Discord login with Auth0

1. Create an Auth0 **Regular Web Application** and an API with audience `https://api.stellix.app`.
2. In Auth0 Marketplace/Social Connections, enable Discord and provide the Discord application client ID and secret.
3. Allow callback URL `http://127.0.0.1:5173/auth/complete` for local development.
4. Set `AUTH0_DOMAIN`, `AUTH0_AUDIENCE`, `VITE_AUTH0_DOMAIN`, `VITE_AUTH0_CLIENT_ID`, and `VITE_AUTH0_AUDIENCE` in `.env`.
5. Restart both frontend and backend. The backend validates Auth0 access tokens before issuing a Stellix HttpOnly session.

## MongoDB Atlas

The supplied Atlas URI still contains `<db_password>`. Replace it locally in `MONGODB_URI`; URL-encode special characters in the password. Add the running machine to Atlas Network Access and create a least-privilege database user. Never commit the completed URI.

## Subdomains

Availability, claim, branding, rename, deletion, tenant lookup, and authorization APIs are implemented under `/api/subdomains` and `/api/tenants`. See [wildcard deployment](docs/WILDCARD-DOMAIN.md). Production wildcard routing remains unverified until DNS/TLS and the hosting proxy are configured and tested.
