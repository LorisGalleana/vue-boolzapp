
# VUE-BOOLZAPP

## Descrizione
**Boolzapp** è una piattaforma di messaggistica realizzata con **Vue** che replica l’interfaccia e alcune funzionalità base di un'app di messaggistica, consentendo la visualizzazione e gestione di conversazioni in stile chat.

## Funzionalità Principali
- **Milestone 1**: Visualizzazione della lista dei contatti con i messaggi dell'utente e dell'interlocutore in classi CSS diverse, tramite `v-for`.
- **Milestone 2**: Visualizzazione dinamica dei messaggi del contatto attivo. Cliccando su un contatto, viene mostrata la conversazione relativa.
- **Milestone 3**: Invio di un messaggio digitando "Enter". Risposta automatica dell'interlocutore dopo 1 secondo.
- **Milestone 4**: Funzione di ricerca contatti tramite un input.
- **Milestone 5 (Opzionale)**: Possibilità di cancellare singoli messaggi tramite un menu a tendina.

## Funzionalità Aggiuntive
- **Prevenzione di Messaggi Vuoti**: Evita l’invio di messaggi composti solo da spazi vuoti.
- **Icone Dinamiche**: Cambio icona da microfono ad aeroplano quando l’input non è vuoto. È possibile inviare il messaggio cliccando sull’aeroplano.
- **Risposta Casuale**: Generazione di risposte casuali da una lista predefinita o tramite API.
- **Visualizzazione Ultimo Messaggio**: Mostra nella lista contatti l'ultimo messaggio inviato/ricevuto.
- **Indicazione Stato**: Mostra "sta scrivendo..." mentre si attende la risposta e "online" per pochi secondi, seguito dall'indicazione dell'ultimo accesso.
- **Eliminazione Chat**: Cancellazione di tutti i messaggi o dell'intera chat tramite un menu nel pannello di destra.
- **Aggiunta Nuova Chat**: Possibilità di aggiungere nuovi contatti tramite popup.
- **Auto Scroll**: Scroll automatico verso il basso al nuovo messaggio inviato.
- **Messaggio di Benvenuto**: Invito a selezionare un contatto se nessuna chat è aperta.

## Tecnologie Utilizzate
- **Vue.js** per la gestione della logica e della reattività.
- **Luxon** per la gestione e visualizzazione delle date e degli orari dei messaggi.

---
