# Product Redirect System

This document describes the product redirect system implementation for tracking attribution and analytics across the user journey from redirect → product → checkout → purchase.

## System Overview

The simplified attribution system implements the following flow:

**Complete Purchase & Redirect Flow:**
```
Landing Page → Buy Button Click → Gumroad Checkout → Purchase Success → Product Redirect
```

**Detailed Flow:**
```
1. User arrives on landing page (UTM tracking handled by analytics)
2. User clicks buy button → Gumroad URL enhanced with client_reference_id
3. User completes Gumroad checkout
4. Gumroad redirects to /api/purchase-redirect?product=<slug>
5. Server validates product slug and redirects user to their product
```

**Product Destinations:**
- `quickread` → https://chatgpt.com/g/g-689bf5fb269481918fccb4ffc7c32451-quickread
- `zettelkasten` → https://www.notion.so/Zettelkasten-26de70b7724b8088870acb39d8538f9e?duplicate=true&from=gumroad

## Files Created

### Core Configuration
- `lib/product-config.ts` - Product mapping configuration with allowlisted slugs
- `lib/analytics-types.ts` - TypeScript types for all analytics events
- `lib/attribution-utils.ts` - Utility functions for attribution tracking and cookies
- `lib/analytics-service.ts` - PostHog integration service
- `lib/stripe-utils.ts` - Stripe integration utilities and checkout session creation

### API Endpoints
- `app/api/redirect/route.ts` - Main redirect endpoint with validation and tracking
- `app/api/purchase-redirect/route.ts` - Post-purchase redirect endpoint with session validation
- `app/api/create-checkout/route.ts` - Creates Stripe checkout sessions with attribution
- `app/api/stripe/webhook/route.ts` - Stripe webhook handler for purchase completion

### Client-Side Integration
- `hooks/useAttribution.ts` - React hooks for client-side attribution tracking
- Updated `app/products/quickread/page.tsx` - Added analytics tracking to product page

## Testing the System

### 1. Start Development Server
```bash
pnpm dev
```

### 2. Test Basic Redirect (MVP)
Navigate to:
```
http://localhost:3000/api/redirect?p=quickread
```

Expected result:
- HTTP 302 redirect to `https://chatgpt.com/g/g-689bf5fb269481918fccb4ffc7c32451-quickread`
- Attribution cookie set
- `redirect_to_product` event logged to PostHog

### 3. Test Redirect with User ID (Stretch Goal)
Navigate to:
```
http://localhost:3000/api/redirect?p=quickread&u=user123
```

Expected result:
- HTTP 302 redirect to `https://chatgpt.com/g/g-689bf5fb269481918fccb4ffc7c32451-quickread`
- Attribution cookie set with user ID
- Event logged with user attribution

### 3b. Test Zettelkasten Product
Navigate to:
```
http://localhost:3000/api/redirect?p=zettelkasten&u=user456
```

Expected result:
- HTTP 302 redirect to `https://www.notion.so/Zettelkasten-26de70b7724b8088870acb39d8538f9e?duplicate=true&from=stripe`
- Attribution cookie set with user ID
- Event logged for zettelkasten product

### 4. Test Error Handling
Try invalid requests:
```
http://localhost:3000/api/redirect
http://localhost:3000/api/redirect?p=invalid-product
http://localhost:3000/api/redirect?p=quickread&u=invalid<>user
```

Expected results:
- HTTP 400 responses with validation errors
- No redirects performed
- Error messages logged

### 5. Test Product Page Analytics
1. Visit `/products/quickread` directly
2. Visit via redirect link
3. Check browser console for tracking events
4. Look for "Special link detected" message when coming from redirect

### 6. Test Checkout Tracking
1. Visit `/products/quickread` via redirect
2. Click "Get QuickRead" or "Buy QuickRead" buttons
3. Check browser console for `checkout_started` events

### 7. Test Landing Page Attribution Flow

#### Test Landing Page Demo
1. Visit the demo landing page:
```
http://localhost:3000/landing-demo
```

2. Observe the session info that gets automatically generated
3. Click a buy button and check the console - you should see:
```
🔒 Buy button clicked: {
  product: 'quickread',
  clientReferenceId: 'quickread_sess_1704067200000_abc123def_1704067300000',
  enhancedUrl: 'https://workframe.gumroad.com/l/quickread?layout=profile&client_reference_id=quickread_sess_...' 
}
```

#### Test with UTM Parameters
Visit with UTM params to see tracking:
```
http://localhost:3000/landing-demo?utm_source=google&utm_medium=cpc&utm_campaign=quickread
```

#### Test Post-Purchase Redirect
Simulate a completed purchase:
```
http://localhost:3000/api/purchase-redirect?product=quickread
```

Expected result:
- Product slug `quickread` validated against allowlist
- HTTP 200 JSON response confirming valid product (redirect to product destination is TODO — see TODO Items below)

#### Full Flow
1. **Landing**: User arrives on landing page → session generated, page view tracked
2. **Buy Click**: Click buy button → Gumroad URL enhanced with attribution, buy event tracked
3. **Checkout**: User completes Gumroad checkout
4. **Success**: Gumroad redirects to purchase-redirect endpoint with `?product=<slug>`
5. **Validation**: Server validates product slug
6. **Analytics**: Purchase completion logged with session correlation (TODO)
7. **Product**: User redirected to their purchased product (TODO)

## Environment Variables Required

Make sure these are set in your `.env.local`:

```bash
# PostHog Analytics (required for tracking)
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Discord (existing functionality)
DISCORD_WEBHOOK_URL=your_discord_webhook
```

## Gumroad Configuration

For the post-purchase redirect flow to work, you need to configure your existing Gumroad products:

### Recommended: Update Product Redirect URL
1. Go to your Gumroad Dashboard → Products
2. Edit your **QuickRead** product
3. Under **Summary/Details**, set the redirect URL to:
   ```
   https://yourdomain.com/api/purchase-redirect?product=quickread
   ```
4. For the **Zettelkasten** product, set:
   ```
   https://yourdomain.com/api/purchase-redirect?product=zettelkasten
   ```

**How it works (current implementation):**
- The `/api/purchase-redirect` endpoint accepts a `?product=` query parameter
- It validates the product slug against the allowlist (`quickread`, `zettelkasten`)
- Full post-purchase product redirect and analytics tracking are **TODO** — see TODO Items below

## Features Implemented

### ✅ Core Requirements Met
- **REQ-1.1.1 to REQ-1.1.5**: `/redirect` endpoint with validation and HTTP 302 redirects
- **REQ-1.2.1 to REQ-1.2.5**: Analytics tracking with PostHog, attribution cookies, request IDs
- **REQ-1.3.1 to REQ-1.3.5**: Stripe webhook handler structure (signature verification TODO)
- **REQ-2.1.1 to REQ-2.1.4**: Security measures including input sanitization and allowlists
- **REQ-2.2.2**: Asynchronous analytics logging to minimize redirect latency
- **REQ-3.1.1 to REQ-3.1.3**: Configurable product mapping
- **REQ-3.2.1 to REQ-3.2.5**: Complete analytics event schemas

### ⚠️ TODO Items
1. **Post-Purchase Redirect**: `/api/purchase-redirect` currently validates the product slug but does not yet redirect users to their product or log analytics
2. **Production Environment Variables**: Set up proper PostHog keys

## System Architecture

### Complete User Journey

**Simplified Landing Page Flow:**
1. User arrives on landing page → Session ID generated, UTM params captured
2. Page view tracked to PostHog with session data
3. User clicks buy button → `buy_button_clicked` event logged
4. Gumroad URL enhanced with `client_reference_id` (format: `product_sessionid_timestamp`)
5. User completes Gumroad checkout
6. Gumroad redirects to `/api/purchase-redirect?product=<slug>`
7. Server validates product slug
8. `purchase_completed` event logged (TODO)
9. User redirected to purchased product (ChatGPT/Notion) with access (TODO)

### Analytics Events Schema
- `landing_page_view`: User arrived on landing page (with UTM data)
- `buy_button_clicked`: User clicked buy button (with enhanced Gumroad URL)
- `purchase_completed`: Purchase completed (with session correlation — TODO)

### Attribution Cookie Format
```json
{
  "p": "quickread",        // product slug
  "u": "user123",          // user ID (optional)
  "rid": "abc123def456",   // request ID for correlation
  "ts": "2024-01-01T00:00:00.000Z"  // timestamp
}
```

## Monitoring and Debugging

### PostHog Events
Check your PostHog dashboard for these events:
- `redirect_to_product`
- `product_page_view` 
- `checkout_started`
- `purchase_completed`

### Browser Console
Client-side tracking logs appear in browser console:
```
Product page view tracked: { product: 'quickread', from_redirect: true, has_attribution: true }
Checkout started tracked: { product: 'quickread', checkout_url: '...', has_attribution: true }
```

### Server Logs
Check server console for:
- Redirect validation and processing
- Analytics event logging
- Error handling and warnings

## Security Notes

- Product destinations are allowlisted to prevent open redirects
- All user inputs are sanitized and validated
- Attribution cookies are httpOnly in production
- Request IDs prevent event correlation attacks