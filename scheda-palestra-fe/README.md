Tecnologie: ReactJs, Express/Node.js/PHP/Java

## Obiettivi

- Strutturare e modellare dati complessi, incluse relazioni tra entità
- Gestire uno stato uno stato in una app con React
- Implementare funzionalità CRUD sia lato frontend che backend
- Progettare e sviluppare API RESTful per la gestione delle risorse
- Validare correttamente i dati in input, sia lato client che server
- Creare un'interfaccia utente responsive e accessibile

## Competenze richieste

- **Sviluppo React**: componenti funzionali e hooks per la gestione dello stato
- **Gestione dati**: persistenza con localStorage o implementazione di chiamate API
- **Validazione**: tecniche di validazione form e input utente
- **UI/UX**: principi di design responsive e accessibilità per dispositivi mobili
- **Backend** (opzionale): implementazione di autenticazione
- **Modellazione dati**: progettazione di relazioni tra entità e diagramma E/R

## Ripasso teoria

**HTML e CSS**

1. Cos'è un layout responsive e perché è importante per una webapp?
2. Quali proprietà CSS sono fondamentali per creare un'interfaccia adattabile a schermi di diverse dimensioni?

**React e State Management**

1. Cos'è lo stato in React e perché è importante?
2. Qual è la differenza tra `useState` e `useEffect`?
3. Come gestisci lo stato condiviso tra componenti in React?

**API RESTful**

1. Cosa significa REST e quali sono i principi fondamentali?
2. Quali sono i principali metodi HTTP e a quali operazioni CRUD corrispondono?
3. Cosa sono i codici di stato HTTP e quali sono i più comuni?

**NodeJs e Express**

1. Cosa sono NodeJs ed NPM e che rapporto c'è tra queste tecnologie?
2. A cosa serve ExpressJs?
3. Come collegheresti un'app Express a un database?

## Consegna

📚 Nome repo: **scheda-palestra**

Sviluppa una semplice Web App per la gestione di schede di allenamento in palestra. Avrai a disposizione diverse opzioni di consegna in cui cimentarti, ma l'importante sarà saper motivare e spiegare la tua implementazione.

### Requisiti Principali

- **Creazione e Gestione Schede**
    - L'app deve permetterti di creare e gestire più schede di allenamento (es. "Workout A", "Workout B", ecc.)
    - Ogni scheda deve contenere esercizi con specifica di serie e ripetizioni
    - Il layout dev'essere fluido per essere consultabile da mobile, ma anche da desktop
- **Opzioni di consegna**
    1. **Solo Frontend con ReactJs e LocalStorage**
    - Utilizza React per la UI
    - Implementa un sistema di navigazione tra le diverse schede e visualizzazioni
    - Usa LocalStorage per salvare i dati
    - Permetti la gestione completa di schede ed esercizi (CRUD)
    - Implementa una visualizzazione del progresso (es. aumento del peso nel tempo)
    - Aggiungi validazione dei dati inseriti
    - Progetta un design responsive per utilizzo su dispositivi mobili
    1. **Backoffice + Api REST**
    - Utilizza le tecnologie che hai studiato e sviluppa un backoffice con autenticazione per gestire schede ed esercizi
    - Sviluppa la parte pubblica in ReactJs

⚠️ **Note Importanti:**

- Assicurati di gestire correttamente le relazioni tra schede ed esercizi
- Implementa la validazione dei dati in input
- Gestisci eventuali errori

## Bonus

🚀 **Bonus 1 - Campi aggiuntivi:**
Prevedi campi aggiuntivi a tua scelta per la scheda o gli esercizi.

🚀 **Bonus 2 - Timer Integrato:**
Aggiungi un timer/cronometro per gestire il tempo di riposo tra le serie

🎨 **Bonus 3 - Temi personalizzati per le schede:**
Permetti all’utente di scegliere alcuni temi per personalizzare l'interfaccia della scheda (colore principale, icone etc.)

Includi il file **README.md** in cui:

- Descrivi la struttura del tuo progetto
- Spiega le scelte implementative
- Documenta eventuali bonus realizzati

## Best Practices

- Inizia progettando la struttura dati prima di implementare la UI
- Ragiona su una buona user experience su mobile durante l'allenamento (pulsanti grandi, accesso rapido)
- Implementa la validazione sia lato client che lato server
- Documenta le API in modo chiaro, magari utilizzando Swagger
- Gestisci correttamente gli errori e restituisci codici HTTP appropriati
- Implementa test unitari per le funzionalità principali

Buon lavoro e (soprattutto questa volta) buon allenamento! 💪
