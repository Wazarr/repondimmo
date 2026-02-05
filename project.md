# **RépondImmo — Prompt de build complet**

## 1. Concept

Une app qui répond automatiquement aux leads entrants des agences immobilières (SeLoger, LeBonCoin, Bien'ici, Logic-Immo, PAP). L'IA qualifie le prospect et propose un lien de réservation (Cal.com/Calendly). L'agent reçoit que les leads chauds.

**Positionnement vs concurrence (Leedpulse) :**

- Eux : SMS sortant pour relancer des leads froids, connecté au CRM, pricing opaque
- Toi : Email entrant pour répondre instantanément, connecté à la boîte mail (plus simple), 79€/mois transparent, self-serve

**Cible :** Agences indépendantes et petits réseaux (pas les franchises Century 21, Orpi, etc.)

---

## 2. User flow

### 2.1 Landing page (public)

**Hero**

```
Headline : "Vos leads reçoivent une réponse en 30 secondes. Même à 23h."

Sous-titre : "L'IA qui répond à vos demandes SeLoger et LeBonCoin, qualifie les prospects, et vous envoie que les leads chauds."

CTA : "Demander un accès beta" (scroll vers formulaire)
```

**Section problème**

```
"Vous recevez 50 demandes par jour. Vous en ratez combien ?"

Stats : 
- "78% des prospects choisissent l'agence qui répond en premier"
- "Temps de réponse moyen des agences : 24-48h"
- "47% des leads ne reçoivent jamais de réponse"
```

**Section solution (3 étapes avec icônes)**

```
1. Connectez votre boîte mail pro (Gmail/Outlook)
2. L'IA répond instantanément à chaque demande entrante  
3. Le prospect réserve une visite via votre lien Calendly/Cal.com
```

**Section screenshots/démo**

```
- Mockup d'un email entrant SeLoger
- Mockup de la réponse générée par l'IA (avec lien de booking)
- Mockup du dashboard avec les leads
```

**Section "Comment ça marche" (plus détaillé)**

```
1. Un prospect vous contacte via SeLoger ou LeBonCoin
2. Notre IA analyse la demande en 5 secondes
3. Une réponse personnalisée est envoyée depuis VOTRE boîte mail
4. Le prospect clique sur votre lien pour réserver une visite
5. Vous recevez une notification avec toutes les infos du lead
```

**Section pricing**

```
Solo — 79€/mois
- 1 boîte mail connectée
- Réponses illimitées
- Dashboard de suivi
- Support email

Agence — 149€/mois  
- Jusqu'à 5 boîtes mail
- Réponses illimitées
- Dashboard multi-utilisateurs
- Support prioritaire

[Gratuit pendant la beta — places limitées]
```

**Section FAQ**

```
Q: L'IA répond vraiment depuis ma boîte mail ?
R: Oui, les réponses partent de votre vraie adresse Gmail ou Outlook. Le prospect ne voit aucune différence.

Q: Et si je veux personnaliser les réponses ?
R: Vous définissez le ton (formel, chaleureux, décontracté), votre signature, et votre lien de réservation. L'IA s'adapte.

Q: Ça marche avec quels portails ?
R: SeLoger, LeBonCoin, Bien'ici, Logic-Immo, PAP, et tout email contenant une demande immobilière.

Q: Je peux voir ce que l'IA envoie ?
R: Oui, tout est visible dans votre dashboard. Vous gardez le contrôle total.

Q: Et si je n'ai pas de Calendly ?
R: On vous aide à créer un compte Cal.com gratuit en 5 minutes.
```

**Footer**

```
CTA final : "Demander un accès beta"
Formulaire : Email + Nom de l'agence + Ville

Liens : Mentions légales | Contact
```

---

### 2.2 Onboarding (post-signup, pour plus tard)

**Step 1 — Infos agence**

```
- Nom de l'agence
- Ville / zone
- Nombre de négociateurs (1, 2-5, 5+)
- Types de biens : Vente / Location / Les deux
```

**Step 2 — Connexion email**

```
- Bouton "Connecter Gmail" (OAuth via Nylas)
- Bouton "Connecter Outlook" (OAuth via Nylas)

Alternative : 
"Vous préférez ne pas connecter votre boîte ? 
Transférez vos emails de leads vers leads@repondimmo.com"
```

**Step 3 — Prise de RDV**

```
○ J'ai déjà un lien de réservation
   → [Champ : Collez votre lien Calendly/Cal.com]

○ Je n'en ai pas encore
   → "Créez un compte Cal.com gratuit en 5 min"
   → [Bouton : Créer mon compte Cal.com →]
   → [Champ : Collez votre lien une fois créé]
```

**Step 4 — Personnalisation des réponses**

```
Ton souhaité : 
○ Formel ("Madame, Monsieur...")
○ Chaleureux ("Bonjour et merci pour votre intérêt !")  
○ Décontracté ("Hello !")

Signature à inclure :
[Champ texte]
Exemple : "Marie Dupont - Agence Immobilière du 11e - 01 23 45 67 89"

Message d'accroche personnalisé (optionnel) :
[Champ texte]
Exemple : "Nous sommes spécialistes du 11e arrondissement depuis 15 ans."
```

---

### 2.3 Dashboard (app principale)

**Vue "Leads" (page principale)**

```
Tableau avec colonnes :
- Date/heure
- Nom du prospect
- Email
- Téléphone (si extrait)
- Bien concerné (adresse ou ref)
- Source (SeLoger, LeBonCoin, etc.)
- Statut (Répondu / RDV pris / À traiter / Archivé)
- Actions (voir, archiver)

Filtres :
- Par date (aujourd'hui, 7 jours, 30 jours, custom)
- Par statut
- Par source
```

**Vue "Lead détail" (au clic sur un lead)**

```
Colonne gauche :
- Infos prospect : nom, email, tel, budget si mentionné
- Bien concerné : adresse ou description
- Source : SeLoger
- Question posée par le prospect

Colonne droite :
- Email original (texte complet)
- Réponse envoyée par l'IA (texte complet)
- Horodatage

Actions :
- [Marquer RDV pris]
- [Relancer] (V2)
- [Archiver]
```

**Vue "Stats" (page secondaire)**

```
Cards :
- Leads reçus ce mois : XX
- Réponses envoyées : XX  
- Temps de réponse moyen : XX secondes
- Taux de RDV pris : XX%

Graphique :
- Leads par jour (bar chart)

Pie chart :
- Répartition par source (SeLoger, LeBonCoin, etc.)
```

**Vue "Paramètres"**

```
- Infos agence (éditable)
- Ton et signature (éditable)
- Lien de booking (éditable)
- Boîtes mail connectées (liste + ajouter/supprimer)
- Déconnexion
```

---

## 3. Backend logic

### 3.1 Détection des leads

```javascript
// Quand un email arrive, check si c'est un lead immo
const LEAD_SOURCES = [
  'seloger.com',
  'leboncoin.fr', 
  'bienici.com',
  'logic-immo.com',
  'pap.fr',
  'bien-ici.fr',
  'explorimmo.com',
  'orpi.com', // notifications de portails
  'fnaim.fr'
];

function isLead(email) {
  const senderDomain = extractDomain(email.from);
  return LEAD_SOURCES.some(source => senderDomain.includes(source));
}
```

### 3.2 Parsing du lead (via LLM)

```
SYSTEM PROMPT :

Tu es un assistant qui extrait les informations d'un email de demande immobilière.

Analyse l'email et retourne un JSON avec :
{
  "prospect_name": "string ou null",
  "prospect_email": "string ou null", 
  "prospect_phone": "string ou null",
  "property_address": "string - adresse ou description du bien",
  "property_ref": "string ou null - référence de l'annonce si présente",
  "question": "string - ce que le prospect demande",
  "budget": "string ou null - si mentionné",
  "source": "string - seloger, leboncoin, etc.",
  "project_type": "achat | location | estimation | autre"
}

Si une information n'est pas présente, retourne null.

USER PROMPT :

Email à analyser :
"""
{contenu_email_complet}
"""
```

### 3.3 Génération de la réponse (via LLM)

```
SYSTEM PROMPT :

Tu es l'assistant de l'agence immobilière "{nom_agence}" située à {ville}.

Tu dois rédiger une réponse email professionnelle à un prospect intéressé par un bien immobilier.

Règles :
- Ton : {ton} (formel/chaleureux/décontracté)
- Longueur : 4-6 phrases maximum, va droit au but
- Structure : remerciement → réponse à la question si possible → invitation à réserver une visite
- Inclus TOUJOURS le lien de réservation : {booking_link}
- Termine par la signature : {signature}
- Ne sois pas générique, personnalise avec le prénom du prospect et le bien concerné
- N'invente pas d'informations sur le bien que tu ne connais pas

USER PROMPT :

Infos du prospect :
- Prénom : {prospect_name}
- Bien concerné : {property_address}
- Question : {question}
- Type de projet : {project_type}

{message_accroche_custom si défini}

Génère la réponse email.
```

**Exemple de réponse générée (ton chaleureux) :**

```
Bonjour Marie,

Merci pour votre intérêt pour l'appartement rue de la Roquette ! 

C'est un bien qui part vite, je vous propose de le visiter rapidement. 
Réservez directement le créneau qui vous arrange ici : https://cal.com/agence-11e/visite

À très bientôt,

Pierre Martin
Agence Immobilière du 11e
01 23 45 67 89
```

### 3.4 Flow complet webhook

```javascript
// POST /api/nylas/webhook
async function handleWebhook(req) {
  const { data } = req.body;
  
  // 1. Récupérer l'email complet via Nylas
  const email = await nylas.messages.find(data.message_id);
  
  // 2. Vérifier si c'est un lead
  if (!isLead(email)) return;
  
  // 3. Récupérer les settings de l'agence
  const agency = await db.agencies.findByMailbox(data.grant_id);
  
  // 4. Parser le lead avec GPT
  const leadInfo = await parseLead(email.body);
  
  // 5. Sauvegarder le lead en DB
  const lead = await db.leads.create({
    agency_id: agency.id,
    ...leadInfo,
    original_email_id: email.id,
    original_email_body: email.body,
    status: 'processing'
  });
  
  // 6. Générer la réponse
  const response = await generateResponse({
    agency,
    lead: leadInfo
  });
  
  // 7. Envoyer la réponse via Nylas (reply)
  await nylas.messages.send({
    grant_id: data.grant_id,
    reply_to_message_id: email.id,
    to: [{ email: leadInfo.prospect_email }],
    subject: `Re: ${email.subject}`,
    body: response
  });
  
  // 8. Mettre à jour le lead
  await db.leads.update(lead.id, {
    response_body: response,
    response_sent_at: new Date(),
    status: 'responded'
  });
  
  // 9. Notifier l'agent (optionnel, V2)
  // await sendNotification(agency, lead);
}
```

---

## 4. Stack technique

| Composant | Tech | Notes |
|-----------|------|-------|
| Frontend | Next.js 14 (App Router) | T'as l'habitude |
| Styling | Tailwind CSS | Rapide à itérer |
| Auth | NextAuth.js | Google OAuth pour les users |
| DB | Supabase (Postgres) | Free tier généreux |
| Email API | Nylas (free tier) | 5 comptes gratuits |
| LLM | OpenAI API (gpt-4o-mini) | ~0.01€/lead |
| Hosting | Vercel | Gratuit |
| Emails transac | Resend | Pour notifs, pas les réponses auto |
| Booking | Cal.com (recommandé aux users) | Gratuit pour eux |

---

## 5. Schema DB (Supabase)

```sql
-- Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Agences
CREATE TABLE agencies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  city TEXT,
  tone TEXT DEFAULT 'chaleureux', -- 'formel', 'decontracte', 'chaleureux'
  signature TEXT,
  custom_intro TEXT, -- message d'accroche personnalisé
  booking_link TEXT, -- lien Cal.com/Calendly
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Users (négociateurs)  
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  agency_id UUID REFERENCES agencies(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'member', -- 'admin', 'member'
  created_at TIMESTAMP DEFAULT NOW()
);

-- Boîtes mail connectées
CREATE TABLE mailboxes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  agency_id UUID REFERENCES agencies(id) ON DELETE CASCADE,
  nylas_grant_id TEXT NOT NULL UNIQUE,
  email_address TEXT NOT NULL,
  provider TEXT, -- 'gmail', 'outlook'
  is_active BOOLEAN DEFAULT true,
  connected_at TIMESTAMP DEFAULT NOW()
);

-- Leads
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  agency_id UUID REFERENCES agencies(id) ON DELETE CASCADE,
  mailbox_id UUID REFERENCES mailboxes(id) ON DELETE SET NULL,
  
  -- Infos prospect
  prospect_name TEXT,
  prospect_email TEXT,
  prospect_phone TEXT,
  
  -- Infos bien
  property_address TEXT,
  property_ref TEXT,
  
  -- Contexte
  question TEXT,
  budget TEXT,
  source TEXT, -- 'seloger', 'leboncoin', etc.
  project_type TEXT, -- 'achat', 'location', 'estimation', 'autre'
  
  -- Email original
  original_email_id TEXT, -- Nylas message ID
  original_email_subject TEXT,
  original_email_body TEXT,
  
  -- Réponse
  response_body TEXT,
  response_sent_at TIMESTAMP,
  
  -- Statut
  status TEXT DEFAULT 'pending', -- 'pending', 'responded', 'rdv_taken', 'archived'
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Index pour les requêtes fréquentes
CREATE INDEX idx_leads_agency_id ON leads(agency_id);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_mailboxes_grant_id ON mailboxes(nylas_grant_id);

-- Beta signups (pour la landing)
CREATE TABLE beta_signups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  agency_name TEXT,
  city TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 6. API routes (Next.js App Router)

```
/app
  /api
    /auth
      /[...nextauth]/route.ts    -- NextAuth handlers
    /nylas
      /connect/route.ts          -- Initie OAuth Nylas
      /callback/route.ts         -- Callback OAuth Nylas
      /webhook/route.ts          -- Reçoit les nouveaux emails
    /leads
      /route.ts                  -- GET: liste des leads
      /[id]/route.ts             -- GET: détail d'un lead
      /[id]/status/route.ts      -- PATCH: update statut
    /agency
      /route.ts                  -- GET/PATCH: infos et settings
    /stats
      /route.ts                  -- GET: stats du mois
    /beta-signup
      /route.ts                  -- POST: inscription beta
```

---

## 7. Pour vendredi (MVP landing page)

**Ce que tu DOIS avoir :**

1. **Landing page complète et responsive**
   - Hero avec headline + CTA
   - Section problème
   - Section solution (3 étapes)
   - Screenshots/mockups (même fake)
   - Pricing
   - FAQ
   - Formulaire beta signup → enregistre en DB

2. **3 screenshots mockup réalistes**
   - Email entrant SeLoger (invente un exemple crédible)
   - Réponse IA générée
   - Dashboard leads (même vide avec des données fake)

3. **Formulaire fonctionnel**
   - Email + Nom agence + Ville
   - Enregistre dans Supabase table `beta_signups`
   - Message de confirmation

**Ce que tu peux SKIP pour vendredi :**

- Auth / login
- Dashboard réel
- Connexion Nylas
- Webhook
- Tout le backend en fait

**L'objectif c'est d'avoir un truc à montrer sur ton téléphone, pas un produit fonctionnel.**

---

## 8. Checklist build

### Mercredi (demain)

- [ ] Init projet : `npx create-next-app@latest repondimmo`
- [ ] Setup Tailwind (déjà inclus)
- [ ] Setup Supabase : créer projet + table `beta_signups`
- [ ] Landing page : Hero + Problème + Solution
- [ ] Landing page : Pricing + FAQ + Footer
- [ ] Formulaire beta signup fonctionnel
- [ ] Créer les 3 mockups/screenshots
- [ ] Intégrer les screenshots dans la landing
- [ ] Tester sur mobile
- [ ] Deploy sur Vercel

### Jeudi

- [ ] Review la landing, ajuste le copy si besoin
- [ ] Repérage terrain : note 10 agences dans le 11e
- [ ] Prépare ta tenue
- [ ] Relis le script de pitch

### Vendredi

- [ ] Go terrain 10h30
- [ ] 5-6 agences minimum
- [ ] Note chaque conversation (insights, objections, emails récupérés)
- [ ] Debrief avec moi le soir

---

## 9. Script terrain (rappel)

**Entrée :**
> "Bonjour, je cherche à parler au gérant de l'agence ?"

**Intro :**
> "Je suis développeur, je travaille sur des outils pour les agences immo. J'ai rien à vendre aujourd'hui, je cherche juste à comprendre vos vrais problèmes. Vous avez 5 minutes ?"

**Questions :**

1. "C'est quoi qui vous prend le plus de temps au quotidien ?"
2. "Vous recevez combien de demandes des portails par jour ?"
3. "Vous arrivez à répondre rapidement à tout le monde ?"
4. "Vous utilisez quoi comme outils ?"

**Si leads mentionné :**
> "Justement je bosse sur un truc pour ça, je vous montre ?"
> [Montre la landing sur ton tel]

**Closing :**
> "Je lance une beta gratuite. Je prends votre email ?"

---

## 10. Potentiel business (rappel)

- 30 000 agences en France
- Cible : indépendants = ~24 000
- Taux pénétration 1% = 240 clients × 100€ = **24k€ MRR**
- Taux pénétration 2-3% = **60-85k€ MRR**

---

## 11. Ton positionnement

```
"L'IA qui répond à vos leads SeLoger/LeBonCoin en 30 secondes."

- Simple : connectez votre email, c'est tout
- Rapide : réponse en 30 secondes, 24h/24
- Transparent : 79€/mois, sans engagement
- Vous gardez le contrôle : tout est visible dans le dashboard
```
