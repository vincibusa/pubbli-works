# Pubbli-Works - Next.js 15 con Server e Client Components

## Struttura del Progetto

Questo progetto sfrutta l'architettura di Next.js 15 combinando:

- **Server Components**: Per il rendering lato server (migliore SEO e performance)
- **Client Islands**: Per mantenere le animazioni di Framer Motion dove necessario
- **Approccio Ibrido**: Struttura del componente sul server, interattività sul client

## Architettura

### Componenti Server
- `layout.js` - Layout principale 
- `page.js` - Pagina principale
- Sezioni principali (`HeroSection.jsx`, `ServicesSection.jsx`, ecc.)

### Componenti Client ("Islands")
Sottodirectory: `src/app/components/client/`
- `NavbarClient.jsx` - Animazioni e interattività della navbar
- `HeroContent.jsx` - Contenuto animato della sezione Hero
- `ServicesContent.jsx` - Contenuto animato della sezione Servizi
- ecc.

## Come Funziona

L'architettura adottata è basata sul pattern "Islands Architecture" (Architettura a Isole):

1. **Componenti Base sul Server**: La struttura principale di ogni sezione è gestita da Server Components
2. **Isole Animate sul Client**: L'interattività e le animazioni sono delegate a specifici componenti client
3. **Vantaggi Combinati**: Ottimizzazione SEO dei Server Components + Interattività dei Client Components

Ad esempio:
- `HeroSection.jsx` (Server Component) → Contiene → `HeroContent.jsx` (Client Component con animazioni)
- `ServicesSection.jsx` (Server Component) → Contiene → `ServicesContent.jsx` (Client Component con animazioni)

## Benefici

- **SEO Migliorato**: I componenti server sono renderizzati lato server per un migliore SEO
- **Caricamento Iniziale Veloce**: HTML iniziale fornito dal server 
- **Interattività Mantenuta**: Framer Motion continua a funzionare nei componenti client
- **Miglior Caching**: I componenti server possono essere cachati più efficacemente
- **Streaming Migliorato**: Possibilità di utilizzare React Streaming per una UX migliore 