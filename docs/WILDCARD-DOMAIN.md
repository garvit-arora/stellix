# Wildcard subdomain deployment

Stellix uses one shared application deployment. A subdomain identifies the requested organization, but authorization always requires a signed session plus a matching organization membership.

## Required production setup

1. Point `stellix.app` and `*.stellix.app` to the same application load balancer or reverse proxy.
2. Provision TLS for both apex and wildcard names (`stellix.app`, `*.stellix.app`). DNS-01 validation is commonly required for wildcard certificates.
3. Forward the original `Host` header to the Node service.
4. Configure `ROOT_DOMAIN=stellix.app`, `COOKIE_DOMAIN=.stellix.app`, `NODE_ENV=production`, and `CLIENT_ORIGIN=https://stellix.app`.
5. Route both apex and wildcard hosts to the same React build and `/api` backend.
6. Verify that unauthenticated requests return 401, non-members receive 403, deleted tenants return 404, and cookies are `Secure`, `HttpOnly`, and scoped to `.stellix.app`.

## Local testing

Use `slug.stellix.localhost` where supported, or pass `X-Tenant-Slug` from a trusted local proxy. Never accept `X-Tenant-Slug` from untrusted public traffic; strip it at the edge in production.

Wildcard production routing is prepared but is **not claimed as verified** until DNS, TLS, proxy forwarding, cookies, and membership isolation have been tested on the chosen provider.
