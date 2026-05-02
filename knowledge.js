// ================================================================
// CaratLane Assistant — Knowledge Base (knowledge.js)
// ================================================================
// Update this file when policies change.
// No need to touch index.html for policy updates.
// ================================================================

const KB = [

  // ── 1. STORE PURCHASE RETURN / REFUND ──────────────────────────────
  {
    id: 'store_return',
    title: 'Store Purchase — Return / Refund Request',
    url: 'https://www.caratlane.com/returns-exchanges',
    tags: ['store refund','refund store','bought at store','purchased at store','store purchase','in store purchase','store order','cash refund store','store bought','bought in store','refund earring','refund ring','refund necklace','refund bracelet','store return'],
    weight: 10, // high weight — very specific scenario
    customer: `Thank you so much for reaching out to us, and we truly value your trust in CaratLane. 💛

We completely understand your concern, and we're sorry to hear you're not fully satisfied with your purchase.

For jewellery purchased at our store, here's what we can offer:

✨ 15-Day Exchange: If you're within 15 days of purchase, you're eligible for a full-value exchange at any CaratLane store — with no balance retained. You can exchange for any design of equal or higher value.

📌 Please note: A cash refund is not available for in-store purchases, as our policy covers exchanges rather than monetary refunds for store orders.

To proceed with the exchange, please visit your nearest CaratLane store with:
• The original jewellery in its original condition
• Your purchase invoice / order receipt

Our store team will be happy to assist you in finding something you'll love! 🏪

If you have any further questions, feel free to call us at +91-44-42935000 (24x7) or write to cs@caratlane.com.`,
    policy: `STORE PURCHASE RETURN / REFUND POLICY

AT STORE (In-store purchases):
• 15-Day FULL VALUE EXCHANGE — no cash refund, no balance retained
• Exchange at any CaratLane store within 15 days of purchase
• Customer can exchange for same or higher value product
• ❌ Cash/monetary refund NOT available for store purchases

ONLINE ORDERS (for reference):
• 15-Day Money-Back: available for online India orders up to ₹2,00,000
• Not applicable at store for online orders placed on caratlane.us or US outlets

NOT APPLICABLE ON:
• Engraved or personalised products
• International orders
• Products showing signs of wear or without original condition

📎 Source: https://www.caratlane.com/returns-exchanges`
  },

  // ── 2. ONLINE RETURN / MONEY BACK ─────────────────────────────────
  {
    id: 'online_return',
    title: 'Online Order — Return / Money Back',
    url: 'https://www.caratlane.com/returns-exchanges',
    tags: ['return online','online return','money back','money-back','refund online','online order refund','15 day return','15-day return','return policy','refund policy','send back','cancel order','return request','initiate return','online refund','get refund'],
    weight: 8,
    customer: `Thank you for contacting CaratLane! We appreciate your patience. 😊

Regarding your return request, here's what you need to know:

For online orders placed within India, we offer a 15-Day Money-Back Guarantee:
• You'll receive 100% of your invoice value as a refund
• This applies to orders up to ₹2,00,000

To initiate your return:
1. Log in to the CaratLane app or website
2. Go to My Orders → Select your order → Tap "Return"
3. Our team will arrange a free pickup from your doorstep

Please ensure the item is:
• In its original, unworn condition
• With original packaging and certificate

Once our quality team reviews the returned item, your refund will be processed within 5–7 business days. 🙏

Need help? Call us at +91-44-42935000 (24x7) or reach us on WhatsApp at +91-73580-65888.`,
    policy: `15-DAY MONEY-BACK POLICY (Online India Orders)

ELIGIBLE:
• Diamond/Gemstone/Gold/Platinum jewellery: 100% invoice value, up to ₹2,00,000
• USA & Canada orders: up to $1,500

NOT ELIGIBLE:
• Orders above ₹2,00,000 (exchange only, no money-back)
• International orders (Australia, UK, Singapore, Dubai, others)
• Engraved / personalised products
• Loose diamonds above ₹2 lakh (Lifetime Exchange or Buyback only)

STORE / TAH ORDERS:
• 15-Day Full Value Exchange only (not money-back) — no balance retained

📎 Source: https://www.caratlane.com/returns-exchanges`
  },

  // ── 3. EXCHANGE AFTER 15 DAYS / LATE EXCHANGE ─────────────────────
  {
    id: 'late_exchange',
    title: 'Exchange / Return After 15 Days',
    url: 'https://www.caratlane.com/returns-exchanges',
    tags: ['after 15 days','after 20 days','after 30 days','after a month','beyond 15','past 15','exchange after','months later','late exchange','too late','already 15','15 days passed','days passed','expired 15','old purchase'],
    weight: 9,
    customer: `Thank you for reaching out to us! We completely understand. 😊

While the 15-Day Money-Back and Exchange window has passed, we're glad to let you know that your jewellery is still covered under our **Lifetime Exchange Programme** — no expiry, ever!

Here's how it works:
• You can walk into any CaratLane store at any time
• Your piece will be evaluated at the current metal and stone rate
• You'll receive the full prevailing value to exchange for any new design you love ✨

For gold and platinum jewellery, you'll receive 100% of the current metal weight value. For diamond pieces, you receive 100% of the current diamond value.

Please do carry your original purchase invoice when you visit the store. Our team will be happy to assist you!

Find your nearest store: caratlane.com/stores
Any questions? Call us at +91-44-42935000 (24x7) 🙏`,
    policy: `EXCHANGE / RETURN AFTER 15 DAYS

15-Day window has expired → Lifetime Exchange applies

LIFETIME EXCHANGE VALUES:
• Gold / Platinum: 100% metal weight at prevailing rate
• Diamond: 100% prevailing diamond value
• Natural/Synthetic Gemstone: 90% prevailing gemstone value
• Glass/Simulant Gemstone / Kundan: NIL
• Preset Solitaire: 100% prevailing solitaire value
• Polki / Uncut / Chakri: 75% prevailing stone value
• Solitaires (loose): 90% prevailing solitaire rate
• Max value: ₹50 lakhs (₹10 lakhs for solitaires)

NOT eligible for Lifetime Exchange: Shaya/Silver jewellery, international orders

DEDUCTIONS:
• Any original purchase discount → deducted from exchange value
• xCLusive Points used → deducted from exchange value

📎 Source: https://www.caratlane.com/returns-exchanges`
  },

  // ── 4. LIFETIME EXCHANGE & BUYBACK ───────────────────────────────
  {
    id: 'lifetime_exchange',
    title: 'Lifetime Exchange & Buyback',
    url: 'https://www.caratlane.com/returns-exchanges',
    tags: ['lifetime exchange','lte','lifetime','buyback','buy back','lifetime buyback','upgrade jewellery','upgrade jewelry','exchange value','prevailing rate','diamond exchange value','gold exchange value','exchange old jewellery'],
    weight: 7,
    customer: `Great news — CaratLane offers a Lifetime Exchange on all your jewellery! ✨ No expiry date, ever.

Here's what your piece is worth when you exchange:

💛 Gold / Platinum: 100% of current metal weight value
💎 Diamond pieces: 100% of current diamond value
💎 Gemstone pieces: 90% of current gemstone value

Simply visit any CaratLane store with your jewellery and invoice. Our team will calculate the value on the spot and help you pick a gorgeous new design!

We also offer a Lifetime Buyback if you prefer cash — with a small additional deduction (typically 3–10% depending on the product type).

Please note: If your original purchase had any discount applied, or if you redeemed xCLusive Points, those amounts will be adjusted in the exchange value.

Any questions? We're available 24x7 at +91-44-42935000. 🙏`,
    policy: `LIFETIME EXCHANGE & BUYBACK POLICY

LIFETIME EXCHANGE VALUES:
• Gold / Platinum: 100% metal weight at prevailing rate
• Diamond: 100% prevailing diamond value
• Natural/Synthetic Gemstone: 90%
• Glass/Simulant Gemstone / Kundan: NIL
• Preset Solitaire: 100% prevailing solitaire value
• Polki / Uncut / Chakri: 75%
• Solitaires (loose): 90%
• Gold Coins: 100%
• Max: ₹50 lakhs (₹10 lakhs for solitaires)

LIFETIME BUYBACK (extra % deducted from LTE):
• Diamond Jewellery: 10% extra deducted
• Plain Gold/Platinum/Gemstone: 3% extra
• Gold Coins: 3% extra
• Max buyback: ₹50 lakhs

NOT AVAILABLE FOR: Shaya/Silver, international orders
DEDUCTIONS: Original discounts + xCLusive Points used = deducted

📎 Source: https://www.caratlane.com/returns-exchanges`
  },

  // ── 5. ENGRAVED / PERSONALISED ────────────────────────────────────
  {
    id: 'engraved',
    title: 'Engraved / Personalised Items Policy',
    url: 'https://www.caratlane.com/returns-exchanges',
    tags: ['engrav','personalised','personalized','customised','customized','name on','engraving','custom piece','custom ring','custom order','personalised return','engraved return','personalised refund'],
    weight: 8,
    customer: `Thank you for reaching out, and we completely understand your concern. 💛

We're sorry to share that engraved and personalised pieces are crafted exclusively for you — and as such, they are not eligible for our standard 15-Day Return or Exchange policy.

However, your piece is still covered under our Lifetime Exchange Programme! This means you can bring it to any CaratLane store at any time and exchange it for a new design at the current metal and stone value — with no time limit.

We hope this gives you the flexibility you need. If you'd like to explore your options, please visit your nearest store or reach us at:
📞 +91-44-42935000 (24x7)
📧 cs@caratlane.com

We're here to help! 🙏`,
    policy: `ENGRAVED / PERSONALISED ITEMS POLICY

NOT ELIGIBLE FOR:
• 15-Day Money-Back (online)
• 15-Day Exchange (store or online)
• Any form of return or cancellation

ELIGIBLE FOR:
• Lifetime Exchange (prevailing metal/stone value)
• Lifetime Buyback (with standard deductions)

Applies to: name engravings, custom text, monograms, personalised designs

📎 Source: https://www.caratlane.com/returns-exchanges`
  },

  // ── 6. SHAYA / SILVER RETURN ──────────────────────────────────────
  {
    id: 'shaya',
    title: 'Shaya / Silver Jewellery Policy',
    url: 'https://www.caratlane.com/returns-exchanges',
    tags: ['shaya','silver','silver jewellery','silver jewelry','shaya return','shaya exchange','silver return','shaya refund','silver diamond','shaya diamond'],
    weight: 9,
    customer: `Thank you for reaching out about your Shaya purchase! 😊

Here's how our policy works for Shaya jewellery:

✅ 15-Day Money-Back & Exchange: Available for both online orders and store purchases — 100% of invoice value.

✅ Shaya Diamond pieces: Eligible for 15-day exchange at store or online.

Please note: Shaya jewellery is currently not eligible for our standard Lifetime Exchange or Buyback programme. The 15-day window is the key period to make any changes.

To proceed, please visit your nearest store or initiate a return on the CaratLane app within 15 days of delivery.

We're here to help! Call us at +91-44-42935000 anytime. 🙏`,
    policy: `SHAYA / SILVER JEWELLERY POLICY

15-DAY MONEY-BACK & EXCHANGE:
• ✅ Applicable on BOTH online orders AND store purchases
• Shaya Diamonds: 15-day exchange eligible (store or online)

LIFETIME EXCHANGE / BUYBACK:
• ❌ Currently NOT available for Shaya or Silver jewellery

📎 Source: https://www.caratlane.com/returns-exchanges`
  },

  // ── 7. xCLUSIVE POINTS ────────────────────────────────────────────
  {
    id: 'xclusive',
    title: 'xCLusive Loyalty Program',
    url: 'https://www.caratlane.com/xclusive',
    tags: ['xclusive','xcl','x-clusive','loyalty points','reward points','earn points','redeem points','points balance','cashback','discount points','tier','regal','imperial','crown','points expire','xclusivepoints','xcl points','gift card xcl'],
    weight: 7,
    customer: `Welcome to the CaratLane xCLusive programme! ✨ Here's everything you need to know:

🏆 EARNING POINTS (1 Point = ₹1):
• Complete your CaratLane profile → earn ₹500 instantly!
• Every prepaid purchase earns you points:
  - Studded jewellery: 3%–5% back (based on your tier)
  - Shaya jewellery: 10%–20% back!
• Write a product review within 30 days → earn ₹200 bonus points

📊 TIERS: Regal → Imperial → Crown (higher tier = more points earned)

💰 REDEEMING POINTS:
• Use on the CaratLane App at checkout, or at any store
• Up to 20% of your order value on studded jewellery
• Points are credited 15 days after delivery

📍 CHECK YOUR BALANCE: App → More → My Account → My Offers

Please note: Points cannot be combined with coupon codes, and are not earned on cash-on-delivery orders. 😊`,
    policy: `xCLUSIVE LOYALTY PROGRAMME POLICY

1 xCLusive Point = ₹1

EARN RATES (prepaid orders only):
• Studded Jewellery: Regal 3% / Imperial 4% / Crown 5%
• Unstudded Jewellery (on making charges): Regal 3% / Imperial 4% / Crown 5%
• Shaya Jewellery: Regal 10% / Imperial 15% / Crown 20%
• Complete profile: ₹500 | Product review (30 days): ₹200

REDEMPTION LIMITS:
• Studded: up to 20% | Preset: up to 10%
• Unstudded: up to 10% or 500 pts (whichever higher)
• Shaya: up to 20% or 500 pts (whichever higher)

❌ CANNOT EARN/REDEEM ON: Mounts, Gift Cards, 22kt plain gold, gold coins, silver coins, international orders

RULES:
• Points credited 15 days after delivery
• No points if item returned under 15-Day Money-Back
• Cannot combine with coupon codes
• Redeemable on App or in-store ONLY (not on website)
• Points used in original purchase = deducted from Lifetime Exchange value

📎 Source: https://www.caratlane.com/xclusive`
  },

  // ── 8. OLD GOLD EXCHANGE (OGE) ────────────────────────────────────
  {
    id: 'oge',
    title: 'Old Gold Exchange (OGE)',
    url: 'https://www.caratlane.com/gold-exchange',
    tags: ['old gold','oge','gold exchange','old jewellery','old jewelry','karatmeter','karat meter','exchange old gold','bring gold','existing gold','scrap gold','previous gold','gold purity check','gold upgrade','my gold','selling old gold'],
    weight: 8,
    customer: `What a wonderful decision — upgrading your gold to beautiful new jewellery! 💛

Here's how our Old Gold Exchange works:

1. 🏪 Visit any CaratLane store with your old gold jewellery
2. 🔬 Our team will check the purity and weight of your gold using our Karatmeter — a precise, certified machine
3. 💰 We calculate your exchange value at the current gold rate — and you'll get MORE than the standard market rate!
4. 💎 Simply pick your favourite new CaratLane design!

Before you visit, please keep in mind:
• 📄 PAN card is required — please carry it
• We accept gold of any brand and any karat (10KT, 18KT, 22KT, 24KT)

Find your nearest store with Karatmeter: caratlane.com/gold-exchange 🏪`,
    policy: `OLD GOLD EXCHANGE (OGE) POLICY
Also referred to as: Gold Exchange / OGE

PROCESS:
1. Customer visits CaratLane store with old gold + PAN card
2. Karatmeter checks purity & weight at store
3. Exchange value at prevailing gold price (extra value given above standard market rate)
4. Customer selects new CaratLane jewellery

REQUIREMENTS:
• PAN card: MANDATORY for all OGE transactions
• In-store only — not available online
• Any brand, any karat of gold accepted

DEDUCTIONS: Handling charges + de-alloying charges apply

Find stores with Karatmeter: https://www.caratlane.com/gold-exchange

📎 Source: https://www.caratlane.com/gold-exchange`
  },

  // ── 9. TREASURE CHEST / POP ───────────────────────────────────────
  {
    id: 'treasure_chest',
    title: 'Treasure Chest / Gold Savings Scheme',
    url: 'https://www.caratlane.com/treasure-chest-gold-scheme',
    tags: ['treasure chest','plan of purchase','pop','gold scheme','gold savings','instalment','installment','monthly plan','icon plan','edge plan','9 months','10th month','savings scheme','monthly gold','treasure chest cancel','pop cancel','scheme refund'],
    weight: 8,
    customer: `Thank you for your interest in our Treasure Chest Gold Savings Scheme! 💛 It's one of our most popular ways to save for jewellery.

Here's a simple overview:

🔹 ICON Plan (Most Popular):
Pay 9 monthly instalments and get the 10th month FREE as a discount on your jewellery purchase. Simple, fixed, and rewarding!

🔸 EDGE Plan:
Same 9+1 structure, with an added benefit — each instalment is converted to gold units at that day's gold rate. If gold prices rise, your buying power increases too!

📌 Important things to know:
• Once enrolled, the plan cannot be cancelled for a cash refund
• The amount is redeemable only against jewellery — not withdrawable as cash
• If you stop before completing 9 months, no bonus or discount will be applied
• For EDGE plan: if gold rates fall, the customer bears the difference (CaratLane is not liable for rate changes)

Check your balance anytime on the CaratLane App → My Account 📱

To know more or enrol: caratlane.com/treasure-chest-gold-scheme or visit any store! 🙏`,
    policy: `TREASURE CHEST / GOLD SAVINGS SCHEME POLICY
Previously known as: Plan of Purchase / POP

ICON PLAN: Pay 9 instalments → 10th month FREE as jewellery discount
EDGE PLAN: Pay 9 instalments → 10th FREE + gold unit value (each instalment = gold units at that day's 24KT rate; final value = accumulated units × redemption day rate)

CANCELLATION/REFUND POLICY:
• ❌ Plans CANNOT be cancelled
• ❌ No cash refund — not by cheque, cash, or bank transfer — under any circumstance
• ✅ Redeemable ONLY against jewellery purchase
• Partial completion = ZERO benefit or discount
• Gold rate fluctuation loss (EDGE plan): borne by customer; CaratLane not liable

Balance check: CaratLane App → My Account

📎 Source: https://www.caratlane.com/treasure-chest-gold-scheme`
  },

  // ── 10. DIGITAL GOLD ──────────────────────────────────────────────
  {
    id: 'digital_gold',
    title: 'Digital Gold (eGold)',
    url: 'https://www.caratlane.com/caratlane-digital-gold',
    tags: ['digital gold','egold','e-gold','24k gold online','buy gold online','online gold','gold investment','gold vault','pure gold','digital gold gift','gold gift card','gold balance','24kt pure'],
    weight: 7,
    customer: `CaratLane Digital Gold is a safe and smart way to invest in pure gold! ✨

Here's everything you need to know:

🥇 What is it?
24-Karat pure gold (99.99% purity) that you can buy online starting from just ₹10 — no storage hassles, no hidden charges. Your gold is stored in secured vaults.

💛 What can you do with it?
• Accumulate gold anytime, in any amount
• Sell it back whenever you want — proceeds straight to your bank account
• Exchange it for beautiful CaratLane jewellery at any of our 330+ stores or online!

🎁 Gold Gift Cards also available:
Gift gold worth ₹2,000 to ₹50,000 to someone special — they can claim it and convert to digital gold.

To get started, complete your KYC on the CaratLane app. Do reach out if you need any help! 😊`,
    policy: `DIGITAL GOLD (eGold) POLICY

• 24K 99.99% pure gold — buy from ₹10 minimum
• Stored in secured partner vaults — no carrying cost
• NOT a financial product; it is a method to purchase/store gold
• KYC verification required to activate
• 100% guaranteed buyback
• Redeemable at 330+ CaratLane stores or online
• Sell back anytime via app/website (to bank account)
• Free delivery on jewellery bought via eGold redemption
• ❌ Not redeemable for international orders

GIFT CARD:
• Value range: ₹2,000 – ₹50,000
• Sent to buyer's registered mobile & email
• Recipient claims and converts to digital gold balance
• ❌ Not valid for international delivery orders

📎 Source: https://www.caratlane.com/caratlane-digital-gold`
  },

  // ── 11. POSTCARDS ─────────────────────────────────────────────────
  {
    id: 'postcards',
    title: 'Postcards — Video Message on Rings',
    url: 'https://www.caratlane.com/postcards',
    tags: ['postcard','postcards','video message','personalised video','ring video','scan ring','video with ring','video gift','message with ring','gift video','add video','my orders video'],
    weight: 8,
    customer: `How beautiful — a personalised video with a ring! 💌 Let me explain how CaratLane Postcards works:

For you (the gifter):
1. Purchase a ring at any CaratLane store or online
2. Open the CaratLane App → My Orders → Tap your order → "Add a Video"
3. Record your heartfelt message, add the recipient's details, and schedule it
4. Your video will be delivered to the recipient after they receive the ring ✨

For the lucky recipient:
1. Open the CaratLane App
2. Wear the ring and scan it with the app
3. Watch your personalised message — and replay it anytime by scanning again! 💖

📌 Available for rings only, via the CaratLane App (not on website)
📌 If you missed adding the video at order time — no worries! You can add it from My Orders anytime before delivery.`,
    policy: `POSTCARDS FEATURE POLICY

AVAILABILITY: CaratLane App only | Rings only | Not available on website

GIFTER PROCESS:
1. Place ring order (store or online)
2. App → My Orders → Add a Video
3. Record, add recipient details, schedule delivery
4. Note: Video delivered AFTER physical ring is received by recipient

RECEIVER PROCESS:
1. Install CaratLane App
2. Scan ring → watch video (can replay anytime by scanning again)

• Can be added after order placement anytime before delivery
• App required for both gifter and receiver

📎 Source: https://www.caratlane.com/postcards`
  },

  // ── 12. TRY AT HOME ───────────────────────────────────────────────
  {
    id: 'tah',
    title: 'Try at Home (TAH)',
    url: 'https://www.caratlane.com/frequently-asked-questions',
    tags: ['try at home','tah','home trial','try-at-home','home visit','try before','home appointment','home service','trial at home','home try','visit home','try jewellery home'],
    weight: 7,
    customer: `Great news — CaratLane's Try at Home service is completely FREE! 🏡

Here's how it works:
1. Browse CaratLane and shortlist up to 5 designs you love
2. Schedule a Try at Home appointment at a time that suits you
3. Our consultant brings the pieces to your home or office
4. Try them on at your leisure — zero pressure to buy!
5. If you love something, our consultant can place the order right then and there 💎

📍 Available in 30+ cities across India including Chennai, Mumbai, Delhi, Bangalore, Hyderabad, Pune, Kolkata and more.

Please note: This service is available within India only, and is free of charge with no purchase obligation.

To schedule, visit caratlane.com or call us at +91-44-42935000! 😊`,
    policy: `TRY AT HOME (TAH) POLICY

• Free service — no charges, no purchase obligation
• India only (not available internationally)
• Up to 5 products per visit
• For more than 5: call +91-44-42935000
• Orders can be placed on the spot with TAH consultant
• TAH exchange policy: 15-Day Full Value Exchange, no balance retained

AVAILABLE CITIES (33):
Ahmedabad, Ambala, Bangalore, Bhubaneswar, Bokaro, Chandigarh, Chennai, Cuttack, Delhi, Dehradun, Gandhinagar, Gurgaon, Guwahati, Haridwar, Hazaribagh, Hyderabad, Indore, Jaipur, Kanpur, Kolkata, Lucknow, Ludhiana, Meerut, Mumbai, Nagpur, Patna, Pathankot, Pune, Rajkot, Ranchi, Sonipat, Vapi, Vellore

📎 Source: https://www.caratlane.com/frequently-asked-questions`
  },

  // ── 13. SHIPPING ──────────────────────────────────────────────────
  {
    id: 'shipping',
    title: 'Shipping Policy',
    url: 'https://www.caratlane.com/customer-service/shipping-policy',
    tags: ['shipping','delivery','deliver','free shipping','courier','dispatch','shipped','bluedart','blue dart','speed post','track','tracking','when will i get','delivery time','package','how long delivery','delivery charge','shipping charge','delivery days'],
    weight: 6,
    customer: `Great news — CaratLane offers FREE shipping on all orders within India! 🎉

Your order is fully insured and will be carefully delivered via trusted carriers like Blue Dart or Speed Post. You can track your order anytime through the CaratLane app or website at caratlane.com/trackorder.

For international orders (USA, UK, Canada, Australia, Dubai, Singapore):
• We ship via FedEx, DHL, or UPS
• Shipping charges are calculated at checkout
• All customs duties are already included in the product price — no surprise charges on delivery!

📌 Please inspect your package carefully before signing for receipt. If anything looks tampered with, please contact us immediately.

Any questions? We're available 24x7 at +91-44-42935000 or cs@caratlane.com. 🙏`,
    policy: `SHIPPING POLICY

INDIA ORDERS:
• FREE shipping on ALL India orders
• Fully insured shipments
• Carriers: Sequel, Speed Post, Blue Dart
• Customers must inspect packaging before signing receipt
• Free gift packaging on all orders

INTERNATIONAL ORDERS:
• Ships to: USA, UK, Canada, Australia, Dubai, Singapore
• Carriers: UPS, FedEx, DHL
• Shipping charges: applied at order booking
• Custom duties: INCLUDED in product price — nothing extra at delivery

Track order: https://www.caratlane.com/trackorder

📎 Source: https://www.caratlane.com/customer-service/shipping-policy`
  },

  // ── 14. INTERNATIONAL ORDERS ──────────────────────────────────────
  {
    id: 'international',
    title: 'International Orders',
    url: 'https://www.caratlane.com/frequently-asked-questions',
    tags: ['international','outside india','abroad','usa','uk','canada','australia','dubai','singapore','ship outside','overseas','foreign','international order','international shipping','international return','international cancel','other country','nri'],
    weight: 7,
    customer: `Thank you for reaching out about your international order! 🌏

Here's what you need to know:

✅ We ship to USA, UK, Canada, Australia, Dubai, and Singapore via FedEx, DHL, and UPS. All shipments are fully insured.

💰 Custom duties are already included in the product price — you won't pay anything extra on delivery.

📌 Important to note:
• Returns and exchanges are not available for international orders
• Once an order has been shipped from India, cancellation is not possible
• Gift cards cannot be used for international orders

For personalised help with your international order, please contact our dedicated team:
📧 internationalsales@caratlane.com

We'll do our best to assist you! 😊`,
    policy: `INTERNATIONAL ORDER POLICY

DESTINATIONS: USA, UK, Canada, Australia, Dubai, Singapore
Other countries: contact internationalsales@caratlane.com

NOT AVAILABLE FOR INTERNATIONAL ORDERS:
• ❌ 15-Day Money-Back or Exchange
• ❌ Returns or exchanges of any kind
• ❌ Order cancellation after shipment
• ❌ Gift card redemption
• ❌ xCLusive Points (earning or redemption)

INCLUDED:
• ✅ Custom duties (in product price — nothing extra on delivery)
• ✅ Full shipment insurance via FedEx/DHL/UPS

Contact: internationalsales@caratlane.com

📎 Source: https://www.caratlane.com/frequently-asked-questions`
  },

  // ── 15. ID / PAN CARD ─────────────────────────────────────────────
  {
    id: 'id_required',
    title: 'ID / PAN Card Requirements',
    url: 'https://www.caratlane.com/terms-and-conditions',
    tags: ['pan card','pan','aadhaar','aadhar','id proof','id required','identity proof','above 50000','50000','50k','large purchase','id at store','id needed','government id','document required','kyc'],
    weight: 8,
    customer: `Thank you for checking with us! 😊

As per government regulations applicable to all jewellery retailers in India, we are required to verify identity for purchases above ₹50,000:

📄 Required document: Aadhaar card OR PAN card (any government-approved ID)

This is a standard regulatory requirement and helps protect your transaction. Our store team will request this at the time of billing.

For Old Gold Exchange (OGE) transactions, PAN card is required regardless of the purchase value.

Please do carry one of these documents when visiting us. Thank you for your understanding! 🙏`,
    policy: `ID / DOCUMENTATION REQUIREMENTS

IN-STORE PURCHASE ≥ ₹50,000:
• Government ID mandatory: Aadhaar card OR PAN card
• Regulatory requirement — no exceptions

OLD GOLD EXCHANGE (OGE):
• PAN card mandatory for ALL OGE transactions (regardless of value)

DIGITAL GOLD:
• KYC required (Aadhaar/PAN) to activate Digital Gold account

BIS HALLMARKING:
• All CaratLane designs above 2 grams: BIS hallmarked (government mandate)

📎 Source: https://www.caratlane.com/terms-and-conditions`
  },

  // ── 16. CONTACT & ESCALATION ──────────────────────────────────────
  {
    id: 'contact',
    title: 'Contact CaratLane',
    url: 'https://www.caratlane.com/frequently-asked-questions',
    tags: ['contact','call','phone number','email','whatsapp','customer service','helpline','support number','escalate','complaint','reach out','contact number','cs@','contactus','how to contact','speak to someone','talk to agent'],
    weight: 6,
    customer: `We're always here to help! Here's how you can reach our team:

📞 Phone: +91-44-42935000 (24x7, all days — including weekends and holidays!)
💬 WhatsApp: +91-73580-65888
📧 Email: cs@caratlane.com

For international queries: internationalsales@caratlane.com
For corporate/B2B: b2b@caratlane.com

You can also:
🏪 Find a store near you: caratlane.com/stores
📦 Track your order: caratlane.com/trackorder

We look forward to assisting you! 😊`,
    policy: `CONTACT DETAILS

Customer Service (24x7 all days): +91-44-42935000
WhatsApp: +91-73580-65888
Customer Service Email: cs@caratlane.com
General: contactus@caratlane.com
International Sales: internationalsales@caratlane.com
Corporate/B2B: b2b@caratlane.com
HR/Careers: careers@caratlane.com

Store Locator: https://www.caratlane.com/stores
Order Tracking: https://www.caratlane.com/trackorder

Registered Office: CaratLane Trading Pvt Ltd, 6th Floor, Olympia Cyberspace, Guindy, Chennai, Tamil Nadu 600032
CIN: U52393TN2007PTC064830`
  },
  {
    id: 'gold_coin_policy',
    title: 'Free Gold Coin — LTE/LTB Policy',
    url: 'https://www.caratlane.com/returns-exchanges',
    tags: ['free gold coin','coin return','gold coin lte','gold coin ltb'],
    weight: 10,
    customer: `If you received a free Gold Coin with your original purchase, you must return it when bringing the jewellery for Lifetime Exchange (LTE) or Lifetime Buyback (LTB).\n\nIf the coin is NOT returned, CaratLane will deduct either the coin's equivalent value or 10% of your original invoice value from your LTE/LTB amount.\n\nPlease bring the coin along when visiting the store for exchange or buyback. 😊`,
    policy: `FREE GOLD COIN — LTE/LTB POLICY\n\n• Customers who received a free Gold Coin MUST return it during LTE or LTB\n• If NOT returned: deduction = equivalent coin value OR 10% of invoice\n• Applies to: LTE and LTB only\n• Does NOT apply to: 15-Day Exchange\n\n📎 Source: https://www.caratlane.com/returns-exchanges`
  },
  {
    id: 'gold_coin_policy',
    title: 'Free Gold Coin — LTE/LTB Policy',
    url: 'https://www.caratlane.com/returns-exchanges',
    tags: ['free gold coin','coin return','gold coin lte','gold coin ltb'],
    weight: 10,
    customer: `If you received a free Gold Coin with your original purchase, you must return it when bringing the jewellery for Lifetime Exchange (LTE) or Lifetime Buyback (LTB).\n\nIf the coin is NOT returned, CaratLane will deduct either the coin's equivalent value or 10% of your original invoice value from your LTE/LTB amount. Please bring the coin when visiting the store for exchange or buyback. 😊`,
    policy: `FREE GOLD COIN — LTE/LTB POLICY\n\n• Customers who received a free Gold Coin MUST return it during LTE or LTB\n• If NOT returned: deduction = coin's equivalent value OR 10% of invoice\n• Applies to: LTE and LTB ONLY\n• Does NOT apply to: 15-Day Exchange\n\n📎 Source: https://www.caratlane.com/returns-exchanges`
  }
];

// ══════════════════════════════════════════════════════════════════════
//  SPECIFIC Q&A LAYER
//  These are precise questions that need direct answers — checked FIRST
//  before the topic matching engine runs. Prevents generic topic dumps.
// ══════════════════════════════════════════════════════════════════════
const SPECIFIC_QA = [
  {
    triggers: ['sell and buy price different','buy and sell price different','sell price different','buy price different','why different price','price difference digital gold','digital gold price difference','why is the price','spread digital gold','gold buying selling different'],
    title: 'Digital Gold Price Spread',
    url: 'https://www.caratlane.com/caratlane-digital-gold',
    answer: `Great question! The difference between the buying price and selling price of Digital Gold is called the "spread" — and it's completely normal across all gold platforms. Here's why:

💰 When you BUY Digital Gold:
You pay a slightly higher price — this covers transaction costs, vault storage, insurance, and the platform fee.

💸 When you SELL Digital Gold:
You receive a slightly lower price — this reflects processing, liquidity costs, and the buyback margin.

📌 Key things to know:
• Both prices are based on the live 24KT gold rate at the time of transaction
• The spread is typically small and transparent — you can see both prices before confirming
• CaratLane does not add hidden charges — the difference shown is the final price
• Check live rates at: caratlane.com/gold-rate

This is standard practice across all digital gold and precious metal platforms — the price you see is always the price you pay or receive, with no surprises. 😊

Is there anything else I can help you with?`
  },
  {
    triggers: ['why is digital gold price higher','digital gold expensive','digital gold markup','why pay more for digital gold'],
    title: 'Digital Gold Pricing',
    url: 'https://www.caratlane.com/caratlane-digital-gold',
    answer: `The buying price for Digital Gold is slightly higher than the raw market rate because it includes:

• 💼 Secure vault storage fees
• 🛡️ Insurance on your gold
• ⚙️ Platform and transaction processing costs
• ✅ Quality assurance (99.99% purity guarantee)

This is standard across all digital gold platforms. The price shown before you confirm is the final price — no hidden charges. 😊

Check live rates: caratlane.com/gold-rate`
  },
  {
    triggers: ['how many days to get refund','refund days','how long refund','refund timeline','when will i get my refund','refund processing time','days for refund'],
    title: 'Refund Timeline',
    url: 'https://www.caratlane.com/returns-exchanges',
    answer: `Once your returned item passes quality check (QC), refunds are processed within 5–7 business days. Here's the full timeline:

📦 Step 1: Raise return request on the app or website
🚪 Step 2: Free doorstep pickup arranged by CaratLane
🔬 Step 3: Quality inspection at our facility (2–3 working days)
💳 Step 4: Refund initiated within 5–7 business days post QC approval

The refund goes back to your original payment method (card/net banking/UPI). Cash-on-delivery orders receive refunds via bank transfer.

Is there anything else I can help with? 😊`
  },
  {
    triggers: ['difference between icon and edge','icon vs edge','icon plan vs edge','which plan is better','icon or edge','compare plans','treasure chest plans difference'],
    title: 'Treasure Chest — Icon vs Edge Plans',
    url: 'https://www.caratlane.com/treasure-chest-gold-scheme',
    answer: `Great question! Here's a clear comparison of the two Treasure Chest plans:

🔹 ICON PLAN (Most Popular):
• Pay 9 fixed monthly instalments
• Get 10th month's value FREE as jewellery discount
• Simple and predictable — the benefit is fixed
• Best for: Customers who want certainty and simplicity

🔸 EDGE PLAN:
• Pay 9 monthly instalments
• Each instalment is converted to gold units at that day's 24KT rate
• Get 10th month FREE + gold value benefit
• If gold price rises → your jewellery budget increases 📈
• If gold price falls → your budget decreases (CaratLane not liable) 📉
• Best for: Customers who want to benefit from gold price appreciation

📌 Both plans: No cash refund, jewellery credit only. Cannot be cancelled once enrolled.

Recommend ICON for risk-averse customers, EDGE for those comfortable with gold rate fluctuation. 😊`
  },
  {
    triggers: ['what is xcl','what is xclusive','how does xclusive work','xclusive programme explained','xclusive loyalty','explain xclusive'],
    title: 'xCLusive Programme',
    url: 'https://www.caratlane.com/xclusive',
    answer: `xCLusive is CaratLane's loyalty rewards programme. Here's a quick summary:

💛 1 xCLusive Point = ₹1

🏆 HOW TO EARN:
• Complete your profile → ₹500 points instantly
• Every prepaid order: 3%–20% back depending on product & tier
• Write a product review within 30 days → ₹200 points

📊 TIERS: Regal (entry) → Imperial → Crown (higher = more points earned)

💰 HOW TO REDEEM:
• On the CaratLane App at checkout, OR in-store
• ❌ Not available on the website
• Up to 20% of order value on studded jewellery

⏰ Points are credited 15 days after delivery — not immediately.

❌ Cannot use points + coupon code on the same order.

Check balance: App → More → My Account → My Offers 📱`
  },
  {
    triggers: ['what is oge','what is old gold exchange','how does old gold exchange work','oge explained','explain oge','gold exchange explained'],
    title: 'Old Gold Exchange (OGE)',
    url: 'https://www.caratlane.com/gold-exchange',
    answer: `OGE (Old Gold Exchange) is CaratLane's programme where you can bring your old gold — any brand, any karat — and exchange it for brand new CaratLane jewellery. Here's how it works:

🏪 Step 1: Visit any CaratLane store with your old gold + PAN card
🔬 Step 2: Store uses a Karatmeter to check the purity and weight of your gold
💰 Step 3: Exchange value is calculated at the prevailing gold rate
💎 Step 4: Customer picks new CaratLane jewellery of equal or higher value

✅ Any brand of gold accepted (10KT, 18KT, 22KT, 24KT)
📄 PAN card is MANDATORY — no exceptions
⚠️ Standard deductions apply: handling charges + de-alloying charges

Customers typically get more than the standard market rate for their gold at CaratLane!`
  },
  {
    triggers: ['what is treasure chest','what is pop','what is plan of purchase','treasure chest explained','pop explained'],
    title: 'Treasure Chest Scheme',
    url: 'https://www.caratlane.com/treasure-chest-gold-scheme',
    answer: `Treasure Chest (previously called Plan of Purchase / POP) is CaratLane's Gold Savings Scheme. Here's how it works:

💛 Pay 9 monthly instalments → Get the 10th month FREE as a jewellery discount!

TWO PLANS:
🔹 ICON: Fixed instalments, fixed benefit (10th month free)
🔸 EDGE: Instalments converted to gold units at daily rate — benefit from gold price rise

📌 Important rules:
• ❌ Cannot be cancelled — amount is jewellery credit only, no cash refund
• ❌ Partial completion = no benefit at all
• ✅ No expiry on accumulated balance

Check balance: CaratLane App → My Account`
  },
  {
    triggers: ['can i use xcl points and coupon','points and coupon together','combine points coupon','use coupon and points','coupon with points','xcl and coupon','discount and points together'],
    title: 'xCLusive Points + Coupon Codes',
    url: 'https://www.caratlane.com/xclusive',
    answer: `Unfortunately, xCLusive Points and coupon codes cannot be used together on the same order. 😔

It's one or the other per transaction:
• ✅ Use xCLusive Points OR a coupon code — not both simultaneously

This is a current system limitation. Our suggestion would be to choose whichever gives a higher discount for that particular order.

Is there anything else I can help you with? 😊`
  },
  {
    triggers: ['can i return gold coin','gold coin return','gold coin refund','return gold coin','gold coin exchange','gold coin policy'],
    title: 'Gold Coin Return/Exchange Policy',
    url: 'https://www.caratlane.com/returns-exchanges',
    answer: `Gold Coins have a specific policy at CaratLane — different from jewellery:

❌ NOT applicable on Gold Coins:
• 15-Day Money-Back
• 15-Day Exchange
• Order Cancellation

✅ WHAT IS available:
• Lifetime Exchange: 100% of gold weight at prevailing gold rate
• Lifetime Buyback: 100% of gold weight value minus an additional 3% deduction

So while you cannot return or cancel a gold coin purchase, you can always exchange it or sell it back to CaratLane at any time. 😊`
  },
  {
    triggers: ['what is tah','what is try at home','try at home explained','how does try at home work','tah explained','home trial explained'],
    title: 'Try at Home (TAH)',
    url: 'https://www.caratlane.com/frequently-asked-questions',
    answer: `Try at Home (TAH) is CaratLane's free service where a consultant brings jewellery to your home or office so you can try before buying — no obligation to purchase! 🏡

📋 HOW IT WORKS:
1. Browse and shortlist up to 5 designs on caratlane.com
2. Schedule a TAH appointment (select your city and time)
3. Consultant visits your location with the pieces
4. Try them on at your leisure
5. If you love something, place an order right there — or don't! Zero pressure.

✅ FREE of charge | India only | Up to 5 products
📍 Available in 33 cities including Chennai, Mumbai, Delhi, Bangalore, Hyderabad and more`
  },
  {
    triggers: ['shaya lifetime exchange','can i exchange shaya','shaya exchange policy','silver lifetime exchange','silver exchange policy'],
    title: 'Shaya / Silver Exchange Policy',
    url: 'https://www.caratlane.com/returns-exchanges',
    answer: `Shaya (Silver) jewellery has a slightly different policy compared to gold/diamond jewellery:

✅ WHAT IS AVAILABLE for Shaya/Silver:
• 15-Day Money-Back — available for both online orders AND store purchases
• Shaya Diamond pieces: 15-day exchange eligible

❌ WHAT IS NOT available for Shaya/Silver:
• Lifetime Exchange — currently not available
• Lifetime Buyback — currently not available

So the key window for Shaya jewellery is the 15-day period from delivery. After that, no exchange or buyback is possible at this time.

Is there anything else I can help with? 🙏`
  },
  {
    triggers: ['how to track order','track my order','where is my order','order status','order tracking','track shipment','check order status'],
    title: 'Order Tracking',
    url: 'https://www.caratlane.com/trackorder',
    answer: `You can track your CaratLane order easily! Here's how:

📱 On the App: My Orders → Select your order → View tracking details
💻 On the Website: caratlane.com/trackorder → Enter your Order ID

🚚 India orders are shipped via Blue Dart, Speed Post, or Sequel — tracking updates in real time.
🌍 International orders ship via FedEx, DHL, or UPS — tracking number shared via email/SMS.

If your tracking hasn't updated in 48 hours, please contact us:
📞 +91-44-42935000 (24x7) | 📧 cs@caratlane.com

Is there anything else I can help you with? 😊`
  },
  {
    triggers: ['what is hallmark','what is bis hallmark','bis hallmarked','hallmarking','is caratlane hallmarked','caratlane hallmark'],
    title: 'BIS Hallmarking',
    url: 'https://www.caratlane.com/terms-and-conditions',
    answer: `All CaratLane jewellery above 2 grams is BIS (Bureau of Indian Standards) Hallmarked — this is a Government of India mandate for all jewellery retailers. 🇮🇳

📌 What BIS Hallmarking means for customers:
• The gold purity is certified and guaranteed (e.g., 18KT, 22KT)
• The purity is tested at a government-approved testing centre
• The hallmark stamp on the jewellery is your proof of authenticity
• It protects consumers from receiving lower-purity gold

CaratLane complies fully with BIS regulations. All pieces carry the hallmark stamp.

Is there anything else I can help you with? 😊`
  },
  {
    triggers: ['what documents needed','documents required','what do i need to bring','what to carry','required documents','documents for store visit'],
    title: 'Documents Required',
    url: 'https://www.caratlane.com/terms-and-conditions',
    answer: `Here's what documents may be required depending on your visit:

🏪 FOR IN-STORE PURCHASE ≥ ₹50,000:
• Aadhaar card OR PAN card (any government-approved photo ID)

🥇 FOR OLD GOLD EXCHANGE (OGE):
• PAN card — MANDATORY regardless of transaction value

📱 FOR DIGITAL GOLD / eGold:
• KYC verification via Aadhaar/PAN on the CaratLane app

🛒 FOR REGULAR PURCHASES BELOW ₹50,000:
• No documents required

Is there anything else I can help you with? 😊`
  },
  {
    triggers: ['difference between return and exchange','return vs exchange','refund vs exchange','whats the difference return exchange','return or exchange'],
    title: 'Return vs Exchange — Key Difference',
    url: 'https://www.caratlane.com/returns-exchanges',
    answer: `Good question! Here's the key difference:

💵 RETURN / MONEY-BACK:
• You get your money back to the original payment source
• Available for online India orders within 15 days, up to ₹2,00,000
• NOT available for store purchases (exchange only)

🔁 EXCHANGE:
• You swap the jewellery for a new piece
• 15-Day Exchange: Available for both online AND store orders (full value, no balance retained)
• Lifetime Exchange: Available anytime — no expiry — at prevailing gold/stone rate

📌 KEY RULE: Store purchases → Exchange only, never cash refund.
Online purchases → Both return (money-back) AND exchange available within 15 days.

Is there anything else I can help you with? 😊`
  }
  // ── LTE vs LTB ─────────────────────────────────────────────────────
  {
    triggers: ['difference between lte and ltb','lte and ltb','ltb and lte','lte vs ltb','ltb vs lte','what is lte','what is ltb','lifetime exchange vs buyback','exchange vs buyback','buyback vs exchange','difference between exchange and buyback','compare lte ltb'],
    title: 'Lifetime Exchange vs Lifetime Buyback',
    url: 'https://www.caratlane.com/returns-exchanges',
    answer: `Here's the clear difference between LTE and LTB:\n\n🔁 LTE — LIFETIME EXCHANGE:\n• You bring old jewellery → get NEW CaratLane jewellery as store credit\n• Value: 100% of current metal/stone value (see rates below)\n• Must use as credit for new purchase — no cash\n• No expiry, any CaratLane store, anytime\n\n💵 LTB — LIFETIME BUYBACK:\n• You bring jewellery → CaratLane pays you CASH\n• Value: LTE value MINUS additional deduction:\n  - Diamond jewellery: extra 10% off LTE value\n  - Gold/Platinum/Gemstone: extra 3% off LTE value\n• Max buyback: ₹50 lakhs\n\n📊 BASE VALUES (same for both LTE and LTB before buyback deduction):\n• Gold/Platinum: 100% of metal weight at prevailing rate\n• Diamond: 100% of prevailing diamond value\n• Natural/Synthetic Gemstone: 90%\n• Polki/Uncut/Chakri: 75%\n• Solitaires (loose): 90%\n• Kundan/Glass stones: NIL\n\n⚠️ From BOTH: Original purchase discounts + xCLusive Points used are deducted\n❌ NOT available: Shaya/Silver jewellery, international orders\n\nSimple rule: LTE = new jewellery credit. LTB = cash, but slightly less value. 😊`
  },
  // ── OGE exact deduction % from official table ───────────────────────
  {
    triggers: ['standard deduction oge','oge standard deduction','standard deduction in oge','how much is the standard deduction','what is the standard deduction','deduction percentage oge','oge deduction percentage','how much deduction oge','deduction rate oge','oge deduction rate','oge charges','gold exchange charges','gold exchange deduction percentage'],
    title: 'OGE Standard Deduction',
    url: 'https://www.caratlane.com/gold-exchange',
    answer: `Exact standard deductions for Old Gold Exchange (OGE) — currently valid for a limited period:\n\n📊 STANDARD DEDUCTION TABLE:\n\n• Plain Gold jewellery:\n  - Handling Charges: 4%\n  - De-alloying Charges: 0%\n  - ✅ Total Deduction: 4%\n\n• Studded Jewellery (diamonds/stones):\n  - Handling Charges: 0%\n  - De-alloying Charges: 0%\n  - ✅ Total Deduction: 0% (currently waived)\n\n• Loose Solitaires:\n  - Handling Charges: 0%\n  - De-alloying Charges: 0%\n  - ✅ Total Deduction: 0% (currently waived)\n\n⚠️ Note: Marked as "valid only for a limited period" — rates may change. Store will show full breakdown via Karatmeter before you decide.\n📄 PAN card mandatory for all OGE transactions. 😊`
  },
  // ── POP what if not redeemed / expiry ────────────────────────────────
  {
    triggers: ["if i don't use my pop","if i dont use my pop","what happens if i don't redeem","what happens if i dont redeem","what if i don't redeem pop","what if i dont redeem","pop expires","pop expiry","if not redeemed","if i don't use treasure chest","if i dont use treasure chest","what happens to pop","pop lapse","scheme expire","scheme lapse","scheme not redeemed","not redeem pop","not use pop","pop not used","pop not redeemed","what if redemption window closes","if i don't use my scheme","do not use the pop","not use the pop amount","after maturity","pop amount after maturity","do not use pop amount","what if i do not use","if i do not use the pop","not use after maturity","pop after maturity","treasure chest after maturity","amount after maturity","after scheme matures","after pop matures","after it matures"],
    title: 'Treasure Chest — What if Not Redeemed',
    url: 'https://www.caratlane.com/treasure-chest-gold-scheme',
    answer: `Here's exactly what happens if you don't redeem your Treasure Chest / POP within the window:\n\n📅 REDEMPTION TIMELINE:\n• Days 1–240: Pay 9 instalments (Instalment Term)\n• Days 241–270: Cool Off Period — wait, no redemption yet\n• Days 271–330: ✅ REDEMPTION WINDOW — 60 days to redeem with bonus\n• After Day 330: Window closes\n\n❌ IF YOU MISS THE WINDOW:\n• The bonus discount (1 month's instalment free) is FORFEITED\n• No cash refund by cheque/cash/transfer\n• ✅ Your accumulated instalments are AUTOMATICALLY CONVERTED to Digital Gold\n• The Digital Gold units are credited to your CaratLane account (accessible on login)\n\n💡 Your money is NOT lost — it becomes Digital Gold which you can:\n• Hold as an asset\n• Sell anytime via the app (proceeds to bank account)\n• Redeem against jewellery at any CaratLane store\n\n⚠️ Always try to redeem within Day 271–330 to keep the bonus! 😊`
  },
  // ── POP converted to digital gold ──────────────────────────────────
  {
    triggers: ['converted to digital gold','pop converted to digital gold','treasure chest converted','will my pop be converted','will it become digital gold','pop become digital gold','scheme convert digital gold','converted into digital gold','what happens to unredeemed','unredeemed pop','unredeemed treasure chest'],
    title: 'Treasure Chest — Auto-Conversion to Digital Gold',
    url: 'https://www.caratlane.com/treasure-chest-gold-scheme',
    answer: `Yes — if your Treasure Chest / POP is not redeemed within the 60-day Redemption Window, the balance is AUTOMATICALLY converted to Digital Gold! 😊\n\n🔄 WHAT HAPPENS AUTOMATICALLY (after Day 330):\n• Unredeemed balance → converted to Digital Gold units\n• Credited to your CaratLane Digital Gold account\n• Access via: Login → My Account\n\n✅ WHAT YOU CAN DO WITH THE DIGITAL GOLD:\n• Keep it and watch it grow with gold prices\n• Sell anytime via the CaratLane app (proceeds to bank account)\n• Use it to purchase jewellery at any CaratLane store\n\n❌ WHAT YOU LOSE:\n• The free bonus (1 month instalment discount) — this is only available during the 60-day window\n\n📅 TIMELINE REMINDER:\n• Day 1–240: Pay 9 instalments\n• Day 241–270: Cool Off Period\n• Day 271–330: ✅ Redeem with bonus (DO THIS!)\n• After Day 330: Balance → Digital Gold, bonus lost\n\nIs there anything else I can help you with? 😊`
  },
  // ── POP redemption window exact ─────────────────────────────────────
  {
    triggers: ['pop redemption window','treasure chest redemption window','when does redemption open','redemption window pop','cool off period','when redemption starts pop','redemption period pop','when pop matures','pop maturity window','when treasure chest matures','when can i use pop','when can i buy with pop'],
    title: 'Treasure Chest — Redemption Window',
    url: 'https://www.caratlane.com/treasure-chest-gold-scheme',
    answer: `Here's the exact redemption timeline for Treasure Chest / POP:\n\n📅 COMPLETE TIMELINE (from Enrolment Date):\n\n• Days 1–240 — Instalment Term:\n  Pay 9 monthly instalments. Due date = same date as enrolment each month. Grace period: 10 days.\n\n• Days 241–270 — Cool Off Period (30 days):\n  All 9 payments must be completed. Cannot redeem yet.\n\n• Days 271–330 — ✅ REDEMPTION WINDOW (60 days):\n  You can redeem at: any CaratLane store, website, or Try-at-Home.\n  Your bonus (1 month free instalment) is available only here.\n  Must redeem FULL balance in ONE bill — partial redemption not allowed.\n\n• After Day 330 — Window Closes:\n  Bonus forfeited. Balance auto-converted to Digital Gold.\n\n⚠️ REDEMPTION CANNOT BE USED ON: Gold coins, gift cards, repair services\n✅ CAN BE COMBINED WITH: xCLusive Points earned from purchases, Birthday/Anniversary coupons\n❌ CANNOT COMBINE WITH: Doctor/Armed Forces/Payday discounts, Golden Harvest (Titan) plan\n\nIs there anything else I can help you with? 😊`
  },
  // ── POP unstudded jewellery rule ─────────────────────────────────────
  {
    triggers: ['can i use pop for plain gold','pop on plain gold','pop on unstudded','treasure chest plain gold','pop unstudded jewellery','can i buy plain gold with pop','can i buy gold chain with pop','pop on gold chain','pop for gold jewellery','pop 22kt','pop on 22kt','unstudded pop','pop on 18kt','pop on 14kt'],
    title: 'Treasure Chest — Unstudded Jewellery Rules',
    url: 'https://www.caratlane.com/treasure-chest-gold-scheme',
    answer: `Here's the rule for using Treasure Chest / POP on unstudded / plain gold jewellery:\n\n✅ FOR ENROLMENTS AFTER 1st SEPTEMBER 2025:\n• Can be used on: Unstudded Jewellery (18KT, 14KT & 22KT plain gold, platinum, gemstone)\n• BUT discount is restricted to 30% of one month's instalment only\n\nExample: Monthly instalment ₹10,000 → max discount on plain gold = ₹3,000 only\n\n⚠️ MIXED INVOICE (studded + unstudded together):\n• Discount restricted to 30% of one month's instalment\n\n✅ FULL BONUS APPLICABLE ON:\n• All studded jewellery (diamonds, platinum, 22KT studded, gemstones)\n• Shaya (silver) jewellery | Preset Solitaires | Loose solitaires\n\n❌ CANNOT BE USED ON:\n• Gold coins | Gift Cards | Repair services\n\nIs there anything else I can help you with? 😊`
  },
  // ── POP eligibility ─────────────────────────────────────────────────
  {
    triggers: ['who can enrol pop','who is eligible for pop','nri pop','can nri enrol','pop eligibility','treasure chest eligibility','minimum amount pop','pop minimum','minimum instalment pop','pan card pop','pop pan card','how to enrol pop','how to join pop','pop auto debit','auto debit pop'],
    title: 'Treasure Chest — Eligibility & Payment Rules',
    url: 'https://www.caratlane.com/treasure-chest-gold-scheme',
    answer: `Key eligibility and payment rules for Treasure Chest / POP:\n\n✅ WHO CAN ENROL: Indian resident individuals above 18 years only\n❌ CANNOT ENROL: Companies, firms, trusts, HUF, NRIs, international users, minors\n\n💰 INSTALMENT RULES:\n• Minimum: ₹1,000/month | Must be in multiples of ₹1,000\n• Once first instalment paid: amount CANNOT be changed\n• Maximum total (cash payments): ₹1,50,000 across all running schemes\n• Non-cash: No limit, but PAN required if total > ₹1,50,000\n\n📄 PAN CARD REQUIRED WHEN:\n• Monthly instalment ₹19,000+ (across all schemes)\n• Total accumulation > ₹1,50,000 (non-cash)\n\n💳 PAYMENT: Online / Cards / UPI / Cash (cash max ₹15,000/instalment)\nAuto-debit: Card up to ₹5,000 | UPI up to ₹15,000\nAuto-debit disabled after 3 failed attempts\n\n⏰ GRACE PERIOD: 10 days after due date. Late payment = proportional reduction in bonus.\n❌ DEFAULT (3 consecutive missed): Scheme cancelled by CaratLane. No bonus.\n\nIs there anything else I can help you with? 😊`
  },
  // ── SELL DIGITAL GOLD ────────────────────────────────────────────
  {
    triggers: ['how to sell digi gold','how to sell digital gold','sell my digi gold','sell my digital gold','sell digital gold','sell egold','sell my egold','how do i sell','sell back gold','sell gold back','withdraw digital gold','cash out digital gold','convert digital gold to cash','digital gold to money','egold to cash','sell gold online caratlane'],
    title: 'How to Sell Digital Gold',
    url: 'https://www.caratlane.com/caratlane-digital-gold',
    answer: `Here's exactly how to sell your CaratLane Digital Gold (eGold):\n\n📱 STEPS TO SELL:\n1. Open the CaratLane App\n2. Go to My Account → Digital Gold / eGold\n3. Tap "Sell Gold"\n4. Enter the quantity (grams) or amount (₹) you want to sell\n5. Review the current sell price shown\n6. Confirm — proceeds credited to your bank account within 2–3 business days\n\n💡 THINGS TO KNOW:\n• Partial sell is allowed — sell any amount\n• Sell price = prevailing 24KT rate at that moment (slightly lower than buy price — this is the spread)\n• KYC must be completed before selling\n• Proceeds go to your registered bank account\n\n⚠️ TIP: Instead of selling for cash, redeeming Digital Gold against jewellery at a CaratLane store may give better value!\n\nIs there anything else I can help you with? 😊`
  },
  // ── FREE GOLD COIN POLICY DURING LTE/LTB ─────────────────────────
  {
    triggers: ["don't return the free gold coin","dont return the free gold coin","free gold coin return","gold coin during exchange","gold coin during lte","gold coin during buyback","free gold coin lte","free gold coin ltb","what happens to free gold coin","gold coin with purchase","complimentary gold coin","free coin exchange","coin not returned","if i keep the gold coin","gold coin policy exchange","gold coin return policy","free gold coin during return","gold coin lifetime exchange","gold coin lifetime buyback","return free gold coin","free gold coin"],
    title: 'Free Gold Coin — LTE/LTB Policy',
    url: 'https://www.caratlane.com/returns-exchanges',
    answer: `Great question — here's the official CaratLane policy on free gold coins received with a purchase:\n\n🪙 IF YOU RECEIVED A FREE GOLD COIN with your original jewellery order, you MUST return it when bringing the jewellery for Lifetime Exchange (LTE) or Lifetime Buyback (LTB).\n\n❌ IF THE COIN IS NOT RETURNED:\nCaratLane will deduct EITHER:\n• The equivalent value of the gold coin, OR\n• 10% of the original invoice value\n(whichever is applicable at the time of exchange)\n\n✅ PRACTICAL ADVICE FOR EMPLOYEES:\n• Always remind customers to bring the free gold coin when they visit for LTE or LTB\n• If the customer has lost the coin → inform them a deduction will be made\n• This applies ONLY to LTE and LTB — not to the standard 15-Day Exchange\n\nIs there anything else I can help you with? 😊`
  },
  // ── LTE WITHOUT INVOICE ───────────────────────────────────────────
  {
    triggers: ['lte without invoice','no invoice lte','lost invoice exchange','invoice not available lte','lte deduction without bill','no bill exchange','lost receipt exchange','exchange without invoice','exchange without bill'],
    title: 'LTE Without Invoice — 15% Extra Deduction',
    url: 'https://www.caratlane.com/returns-exchanges',
    answer: `If the customer does NOT have their original invoice/bill at time of Lifetime Exchange (LTE) or Buyback:\n\n📋 POLICY: An additional 15% is deducted from the LTE value\n\n💡 TIP FOR EMPLOYEES: Always ask customers to bring their invoice. Remind them they can access digital invoices in the CaratLane App → My Orders anytime.\n\nIs there anything else I can help you with? 😊`
  },
  // ── LTE/OGE CREDIT VALIDITY ──────────────────────────────────────
  {
    triggers: ['lte validity','exchange value validity','lte expire','lte expiry','how long is lte valid','lifetime exchange validity','exchange credit validity','exchange value expire','180 days lte','lte 180','exchange value 180','oge credit validity','gold exchange credit expire'],
    title: 'LTE / OGE Credit Validity — 180 Days',
    url: 'https://www.caratlane.com/returns-exchanges',
    answer: `LTE (Lifetime Exchange) value and Old Gold Exchange (OGE) credit have a validity period:\n\n⏰ VALIDITY: 180 days from the transaction date\n\n• Must be used within 180 days\n• After 180 days: refunded MINUS 10% transaction charges\n\n💡 EXAMPLE: LTE value ₹50,000, not used in 180 days → Refund = ₹45,000 (₹5,000 deducted)\n\nIs there anything else I can help you with? 😊`
  },
  // ── HOW DISCOUNTS AFFECT LTE ──────────────────────────────────────
  {
    triggers: ['discount deducted from lte','coupon deducted exchange','how discount affects lte','discount lte calculation','coupon affect exchange','discount affect lte','making charge discount lte','gold value discount lte','mrp discount lte','promo code lte','coupon code exchange value'],
    title: 'How Discounts Affect LTE Value',
    url: 'https://www.caratlane.com/returns-exchanges',
    answer: `How discounts from original purchase affect your Lifetime Exchange (LTE) value:\n\n1️⃣ DISCOUNT ON MAKING CHARGES:\n• ✅ NOT deducted from LTE — you keep full metal/stone value\n\n2️⃣ DISCOUNT ON GOLD OR DIAMOND VALUE:\n• ❌ Entire discount IS deducted from LTE value\n\n3️⃣ DISCOUNT ON MRP:\n• Partially deducted — only from actual making charges, not gold/stone value\n\n📌 ALSO DEDUCTED: xCLusive Points used in original purchase\n\nIs there anything else I can help you with? 😊`
  },
  // ── SECOND EXCHANGE RULE ─────────────────────────────────────────
  {
    triggers: ['second exchange','exchange again','exchange twice','exchange second time','second time exchange','exchanged once already','already exchanged once','exchange product again','re-exchange'],
    title: 'Second Exchange Policy',
    url: 'https://www.caratlane.com/returns-exchanges',
    answer: `Important rule: you can only do a 15-Day full-value exchange ONCE per product.\n\n🔁 FIRST EXCHANGE (within 15 days): 100% full value — no deductions\n🔁 SECOND EXCHANGE: Treated as Lifetime Exchange (LTE) — prevailing rates apply\n\n📌 Products bought using LTE or OGE credit: eligible for 15-Day Exchange, LTE, and Buyback — but NOT for 15-Day Money-Back.\n\nIs there anything else I can help you with? 😊`
  },

];

// ══════════════════════════════════════════════════════════════════════
//  SMART NLU ENGINE — 5-layer brain with conversation memory
// ══════════════════════════════════════════════════════════════════════

