# SIGNL.ONE Marketing & Preorder Site

A conversion-first marketing and preorder website for [SIGNL.ONE](https://signl.store), a compact wireless motorized OSC controller.

**Stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS + Stripe Checkout + SQLite

## Features

- **Marketing Pages:** Home, Product specs, Use cases (VP/Live/Installations), FAQ
- **Preorder Flow:** Stripe Checkout integration with graceful demo mode when keys aren't configured
- **Order Storage:** SQLite database for order records (webhook-driven)
- **Honest Positioning:** No fake scarcity, no invented ship dates, clear preorder terms
- **Railway-Ready:** Dockerfile and railway.toml included for one-click deploy

## Local Development

### Prerequisites

- Node.js 20+ (22 recommended)
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/your-org/signl-store.git
cd signl-store

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

The site runs at `http://localhost:3000`.

### Demo Mode

Without Stripe keys, the site runs in demo mode:
- All pages render normally
- Preorder button shows "Demo mode: Add Stripe keys to enable checkout"
- No crashes, no broken UI

To enable real checkout, add your Stripe keys to `.env.local`.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `STRIPE_SECRET_KEY` | For checkout | Stripe secret key (sk_test_... or sk_live_...) |
| `STRIPE_PUBLISHABLE_KEY` | For checkout | Stripe publishable key (pk_test_... or pk_live_...) |
| `STRIPE_WEBHOOK_SECRET` | For orders | Webhook signing secret (whsec_...) |
| `STRIPE_PRICE_ID` | Optional | Pre-created Stripe Price ID |
| `NEXT_PUBLIC_BASE_URL` | For redirects | Your production URL |
| `DATABASE_PATH` | Optional | SQLite path (default: ./data/orders.db) |
| `SMTP_HOST` | Optional | For notification emails |
| `SMTP_PORT` | Optional | SMTP port (587 or 465) |
| `SMTP_USER` | Optional | SMTP username |
| `SMTP_PASS` | Optional | SMTP password |
| `MAIL_TO` | Optional | Notification recipient (default: sales@signl.store) |

## Railway Deployment

### One-Click Deploy

1. Push this repo to GitHub
2. Go to [Railway](https://railway.app)
3. Click "New Project" → "Deploy from GitHub repo"
4. Select this repository
5. Railway auto-detects the Dockerfile and deploys

### Environment Variables on Railway

Add these in your Railway project settings → Variables:

```
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_BASE_URL=https://your-project.up.railway.app
```

### Persistent Storage for Orders

For production, attach a Railway volume to persist the SQLite database:

1. In Railway dashboard, go to your service
2. Click "Volumes" → "New Volume"
3. Mount path: `/app/data`
4. Add environment variable: `DATABASE_PATH=/app/data/orders.db`

### Stripe Webhook Setup

1. Go to [Stripe Dashboard → Webhooks](https://dashboard.stripe.com/webhooks)
2. Add endpoint: `https://your-project.up.railway.app/api/webhook`
3. Select event: `checkout.session.completed`
4. Copy the signing secret to `STRIPE_WEBHOOK_SECRET`

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── checkout/route.ts    # Creates Stripe Checkout session
│   │   └── webhook/route.ts     # Handles Stripe webhooks
│   ├── faq/page.tsx
│   ├── preorder/
│   │   ├── page.tsx             # Preorder page
│   │   └── success/page.tsx     # Post-checkout success
│   ├── privacy/page.tsx
│   ├── product/page.tsx
│   ├── terms/page.tsx
│   ├── use-cases/page.tsx
│   ├── layout.tsx
│   ├── page.tsx                 # Home
│   └── globals.css
├── components/
│   ├── FaderAnimation.tsx       # Animated fader visualization
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── PreorderButton.tsx       # Checkout trigger with loading/demo states
│   └── SpecCard.tsx
└── lib/
    ├── db.ts                    # SQLite database operations
    └── stripe.ts                # Stripe client utilities
```

## Building for Production

```bash
# Build
npm run build

# Start production server
npm start
```

The build creates a standalone output in `.next/standalone` suitable for Docker.

## Stripe Test Mode

For development, use Stripe test mode:

1. Get test keys from [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)
2. Use test card `4242 4242 4242 4242` with any future expiry and CVC

## Contact

- Sales & Support: sales@signl.store
- Company: SJCVisuals Ltd, London, UK

## License

Proprietary - SJCVisuals Ltd
