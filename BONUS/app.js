const { createApp } = Vue;
const { DateTime } = luxon;

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Trivette',
                    avatar: 'img/trivette.jpeg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 16:00:00',
                            message: 'Ehi Trivette, hai visto l\'ultima partita?',
                            status: 'sent',
                            dropdownOpen: false
                        },
                        {
                            date: '10/01/2020 16:01:00',
                            message: 'Sì, era incredibile! Hai perso qualcosa di epico.',
                            status: 'received',
                            dropdownOpen: false
                        },
                        {
                            date: '10/01/2020 16:02:00',
                            message: 'Maledizione! Speravo di poterla vedere. Forse la prossima volta.',
                            status: 'sent',
                            dropdownOpen: false
                        }
                    ],
                },
                {
                    name: 'Alex',
                    avatar: 'img/alex.jpeg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Alex, come va oggi?',
                            status: 'sent',
                            dropdownOpen: false
                        },
                        {
                            date: '10/01/2020 15:31:10',
                            message: 'Ciao! Tutto bene, grazie! Tu?',
                            status: 'received',
                            dropdownOpen: false
                        },
                        {
                            date: '10/01/2020 15:31:25',
                            message: 'Sto preparando il caso per il tribunale. Ci sono nuove informazioni importanti.',
                            status: 'sent',
                            dropdownOpen: false
                        },
                        {
                            date: '10/01/2020 15:31:40',
                            message: 'Grazie per l\'aggiornamento. Facci sapere se hai bisogno di supporto.',
                            status: 'received',
                            dropdownOpen: false
                        }
                    ],
                },
                {
                    name: 'C.D. Parker',
                    avatar: 'img/CD_parker.jpeg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 17:00:00',
                            message: 'Ciao C.D., come sta andando la giornata?',
                            status: 'sent',
                            dropdownOpen: false
                        },
                        {
                            date: '10/01/2020 17:01:00',
                            message: 'Oh, non c\'è male, ragazzo! Sto solo cercando di riparare quella vecchia camionetta.',
                            status: 'received',
                            dropdownOpen: false
                        },
                        {
                            date: '10/01/2020 17:02:00',
                            message: 'Hai bisogno di una mano? Posso passare dopo il lavoro.',
                            status: 'sent',
                            dropdownOpen: false
                        },
                        {
                            date: '10/01/2020 17:03:00',
                            message: 'Sarebbe fantastico! Ti aspetto.',
                            status: 'received',
                            dropdownOpen: false
                        }
                    ],
                },
                {
                    name: 'Sam',
                    avatar: 'img/sam.jpeg',
                    visible: true,
                    messages: [
                        {
                            date: '10/02/2020 10:00:00',
                            message: 'Ciao Sam, hai fatto progressi con la ricerca sulle streghe?',
                            status: 'sent',
                            dropdownOpen: false
                        },
                        {
                            date: '10/02/2020 10:01:00',
                            message: 'Sì, abbiamo trovato un rituale antico che potrebbe funzionare.',
                            status: 'received',
                            dropdownOpen: false
                        },
                        {
                            date: '10/02/2020 10:02:00',
                            message: 'Fantastico! Dobbiamo agire rapidamente prima che la luna piena finisca.',
                            status: 'sent',
                            dropdownOpen: false
                        }
                    ],
                },
                {
                    name: 'Dean',
                    avatar: 'img/Dean.jpeg',
                    visible: true,
                    messages: [
                        {
                            date: '10/02/2020 11:00:00',
                            message: 'Ehi Dean, hai visto la mia pistola argentata?',
                            status: 'sent',
                            dropdownOpen: false
                        },
                        {
                            date: '10/02/2020 11:01:00',
                            message: 'La tua pistola? È nel portabagagli della Impala.',
                            status: 'received',
                            dropdownOpen: false
                        },
                        {
                            date: '10/02/2020 11:02:00',
                            message: 'Grazie! Mi hai salvato la vita, letteralmente.',
                            status: 'sent',
                            dropdownOpen: false
                        }
                    ],
                },
                {
                    name: 'Castiel',
                    avatar: 'img/castiel.jpeg',
                    visible: true,
                    messages: [
                        {
                            date: '10/02/2020 12:00:00',
                            message: 'Castiel, hai trovato informazioni sul nuovo caso?',
                            status: 'sent',
                            dropdownOpen: false
                        },
                        {
                            date: '10/02/2020 12:01:00',
                            message: 'Sì, sembra essere legato a un angelo caduto.',
                            status: 'received',
                            dropdownOpen: false
                        },
                        {
                            date: '10/02/2020 12:02:00',
                            message: 'Dobbiamo indagare più a fondo. Hai qualche idea su come procedere?',
                            status: 'sent',
                            dropdownOpen: false
                        }
                    ],
                },
                {
                    name: 'Crowley',
                    avatar: 'img/crowley.jpeg',
                    visible: true,
                    messages: [
                        {
                            date: '10/02/2020 13:00:00',
                            message: 'Ciao Walker, ho sentito delle tue gesta nel Texas. Hai tempo per una piccola trattativa?',
                            status: 'received',
                            dropdownOpen: false
                        },
                        {
                            date: '10/02/2020 13:01:00',
                            message: 'Certo Crowley, cosa hai in mente stavolta?',
                            status: 'sent',
                            dropdownOpen: false
                        },
                        {
                            date: '10/02/2020 13:02:00',
                            message: 'Ho informazioni preziose su un giro di traffico di droga nella tua zona. Potremmo avere un accordo vantaggioso per entrambi.',
                            status: 'received',
                            dropdownOpen: false
                        },
                        {
                            date: '10/02/2020 13:03:00',
                            message: 'Non sono interessato ai tuoi traffici, Crowley. Lavoro per mantenere il Texas sicuro, non per fare affari con demoni.',
                            status: 'sent',
                            dropdownOpen: false
                        }
                    ],
                },
                {
                    name: 'Rory',
                    avatar: 'img/rory.jpeg',
                    visible: true,
                    messages: [
                        {
                            date: '10/03/2020 14:00:00',
                            message: 'Ciao Cordell! Come va la giustizia nel Texas oggi?',
                            status: 'received',
                            dropdownOpen: false
                        },
                        {
                            date: '10/03/2020 14:01:00',
                            message: 'Ciao Rory! Tutto tranquillo per ora, ma la giornata è lunga. Tu cosa combini di bello?',
                            status: 'sent',
                            dropdownOpen: false
                        },
                        {
                            date: '10/03/2020 14:02:00',
                            message: "Sto lavorando a un nuovo articolo per il giornale. Mi piacerebbe fare un reportage sul lavoro dei ranger del Texas. Potremmo fare un'intervista?",
                            status: 'received',
                            dropdownOpen: false
                        },
                        {
                            date: '10/03/2020 14:03:00',
                            message: 'Sarebbe un onore, Rory. Il lavoro dei ranger è duro ma gratificante. Quando vuoi venire?',
                            status: 'sent',
                            dropdownOpen: false
                        },
                        {
                            date: '10/03/2020 14:04:00',
                            message: 'Come ti va domani mattina? Potrei essere lì intorno alle 10:00.',
                            status: 'received',
                            dropdownOpen: false
                        },
                        {
                            date: '10/03/2020 14:05:00',
                            message: 'Va bene, ci vediamo alle 10:00. Non vedo l\'ora di scoprire di più sul tuo lavoro!',
                            status: 'sent',
                            dropdownOpen: false
                        }
                    ],
                    
                }
            ],
            randomQuotes: [
                "Che la Forza sia con te. - Star Wars",
                "Facciamo un'offerta che non potrà rifiutare. - Il Padrino",
                "Tu non puoi gestire la verità! - Codice d'onore",
                "Eccoci, ragazzo. - Casablanca",
                "Bond. James Bond. - Dr. No",
                "Torno subito. - Il Terminatore",
                "Continua a nuotare. - Alla ricerca di Nemo",
                "Verso l'infinito... e oltre! - Toy Story",
                "Vedo gente morta. - Sesto senso",
                "Houston, abbiamo un problema. - Apollo 13",
                "Hasta la vista, baby. - Terminator 2 - Il giorno del giudizio",
                "Sono il re del mondo! - Titanic",
                "Perché così serio? - Il cavaliere oscuro",
                "La vita è come una scatola di cioccolatini, non sai mai quello che ti capita. - Forrest Gump",
                "Mi stai parlando a me? - Taxi Driver",
                "Non puoi sederti con noi! - Mean Girls",
                "Sono solo una ragazza, in piedi di fronte a un ragazzo, chiedendogli di amarla. - Notting Hill",
                "Adoro l'odore del napalm al mattino. - Apocalypse Now",
                "Dì 'ciao' al mio piccolo amico! - Scarface",
                "Nessuno mette Baby in un angolo. - Dirty Dancing",
                "Sento il bisogno - il bisogno di velocità! - Top Gun",
                "Essere o non essere, questo è il problema. - Amleto",
                "E.T. telefona casa. - E.T. l'extra-terrestre",
                "Francamente, mio caro, me ne infischio. - Via col vento",
                "Non c'è posto come casa. - Il mago di Oz",
                "Facciamo un'offerta che non potrà rifiutare. - Il Padrino",
                "Sono il re del mondo! - Titanic",
                "Avanti, rendimi la giornata. - Colpo a sorpresa",
                "Che la Forza sia con te. - Star Wars",
                "Torno subito. - Il Terminatore",
                "Tu non puoi gestire la verità! - Codice d'onore",
                "Avrai bisogno di una barca più grande. - Lo squalo",
                "Sono furioso, e non lo prenderò più! - Network",
                "Eccoci, Johnny! - Shining",
                "Eccoci, ragazzo. - Casablanca",
                "Non ci si mette a piangere nel baseball! - Una lega a parte",
                "Stella! Eh, Stella! - Un tram che si chiama desiderio",
                "Vedo gente morta. - Sesto senso",
                "Houston, abbiamo un problema. - Apollo 13",
                "Non c'è posto come casa. - Il mago di Oz",
                "Adoro l'odore del napalm al mattino. - Apocalypse Now",
                "Mi hai avuto al 'ciao'. - Jerry Maguire",
                "Hasta la vista, baby. - Terminator 2 - Il giorno del giudizio",
                "Non puoi sederti con noi! - Mean Girls",
                "Sono solo una ragazza, in piedi di fronte a un ragazzo, chiedendogli di amarla. - Notting Hill",
                "Sento il bisogno - il bisogno di velocità! - Top Gun",
                "Mi stai parlando a me? - Taxi Driver",
                "Sono il re del mondo! - Titanic",
                "Perché così serio? - Il cavaliere oscuro",
                "La vita è come una scatola di cioccolatini, non sai mai quello che ti capita. - Forrest Gump",
                "Mi stai parlando a me? - Taxi Driver",
                "Non puoi sederti con noi! - Mean Girls",
                "Mi hai avuto al 'ciao'. - Jerry Maguire",
                "Essere o non essere, questo è il problema. - Amleto",
                "Avrai bisogno di una barca più grande. - Lo squalo",
                "Perché così serio? - Il cavaliere oscuro",
                "Avanti, rendimi la giornata. - Colpo a sorpresa",
                "Che la Forza sia con te. - Star Wars",
                "Torno subito. - Il Terminatore",
                "Tu non puoi gestire la verità! - Codice d'onore",
                "Avrai bisogno di una barca più grande. - Lo squalo",
                "Sono furioso, e non lo prenderò più! - Network",
                "Eccoci, Johnny! - Shining",
                "Eccoci, ragazzo. - Casablanca",
                "Non ci si mette a piangere nel baseball! - Una lega a parte",
                "Stella! Eh, Stella! - Un tram che si chiama desiderio",
                "Vedo gente morta. - Sesto senso",
                "Houston, abbiamo un problema. - Apollo 13",
                "Non c'è posto come casa. - Il mago di Oz",
                "Adoro l'odore del napalm al mattino. - Apocalypse Now",
                "Mi hai avuto al 'ciao'. - Jerry Maguire",
                "Hasta la vista, baby. - Terminator 2 - Il giorno del giudizio",
                "Non puoi sederti con noi! - Mean Girls",
                "Sono solo una ragazza, in piedi di fronte a un ragazzo, chiedendogli di amarla. - Notting Hill",
                "Sento il bisogno - il bisogno di velocità! - Top Gun",
                "Mi stai parlando a me? - Taxi Driver"
            ],
            currentContactIndex: 0,
            newMessage: '',
            searchQuery: '',
            dropdownOpen: false, //status base per il menu a tendina per cancellare i messaggi, così che sia sempre chiuso finchè non clicchiamo sopra
            isWriting: false,
            isOnline: false,
            message: '',
            show: false,
            newName: '',
            newPhoto: '',
            emptyPage: true,
            emptyList: false,
            
        }
    },
    computed: {
        /* funzione per filtrare i contatti e mostrare solo quelli corrispondendi alle lettere contenute nel campo di ricerca */
        filteredContacts() {
            return this.contacts.filter(contact => 
                contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    },
    methods: {
        /* funzione per selezionare quale chat aprire dalla lista dei contatti cliccando sopra al contatto corrispondente */
        selectContact(index) {
            this.emptyPage = false;
            this.currentContactIndex = index;
        },
        /* formula per settare il formato HH:mm:ss tramite luxon */
        formatTime(dateString) {
            const dateTime = DateTime.fromFormat(dateString, 'dd/MM/yyyy HH:mm:ss');
            return dateTime.toFormat('HH:mm');
        },
        /* formula per aggiungere i messaggi alla chat una volta inviati e far partire la risposta automatica */
        addMessage() {
            if (this.newMessage !== '' && this.newMessage.length >= 1) {
                this.contacts[this.currentContactIndex].messages.push({
                    date: DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'), 
                    message: this.newMessage, 
                    status: 'sent', 
                    dropdownOpen: false
                });
                this.isWriting = true
                setTimeout(() => {this.friendMessage()}, 1000)
            }
            this.newMessage = ''; //reimposta il campo invio dei messaggi a vuoto una volta mandato il messaggio
            this.$nextTick(() => {
                const messageContainer = document.querySelector('.chat');
                if (messageContainer) {
                    messageContainer.scrollTop = messageContainer.scrollHeight;
                }
            });
            
        },
        /* formula per l'aggiunta del messaggio di risposta automatico da parte del contatto a cui si è mandato un messaggio */
        friendMessage() {
            this.isWriting = false;
            this.isOnline = true
            setTimeout(() => {
                this.isOnline = false;
            }, 5000);
            let randomQuote = this.randomAnswerGenerator();
            this.contacts[this.currentContactIndex].messages.push({
                date: DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'), 
                message: randomQuote, 
                status: 'received',
                dropdownOpen: false
            });
            this.$nextTick(() => {
                const messageContainer = document.querySelector('.chat');
                if (messageContainer) {
                    messageContainer.scrollTop = messageContainer.scrollHeight;
                }
            });
            
        },
        /* formula per aprire e chiudere il menu a tendina */
        toggleDropdown(message) {
            message.dropdownOpen = !message.dropdownOpen;
        },
        /* formula per rimuovere i messaggi usando il menu a tendina */
        removeMessage(index) {
            this.contacts[this.currentContactIndex].messages.splice(index, 1);
        },
        removeAllMessages() {
            this.contacts[this.currentContactIndex].messages = [];
        },
        removeContact() {
            if (this.contacts.length > 1) { // Assicurati che ci sia almeno un contatto rimanente
                this.contacts.splice(this.currentContactIndex, 1); // Rimuovi il contatto corrente dall'array principale
                this.currentContactIndex = 0; // Rimetti l'indice del contatto attivo al primo della lista, se necessario
            } else {
                
                this.emptyList = true
                this.emptyPage = true
                this.dropdownOpen = false
                this.contacts = []; 
            }
        },
        randomAnswerGenerator() {
            let min = 0;
            let max = this.randomQuotes.length;
            let randomNumber = Math.floor(Math.random() * (max - min)) + min;    
            return this.randomQuotes[randomNumber];       
        },
        truncateText(text, maxLength) {
            if (text.length > maxLength) {
              return text.slice(0, maxLength) + '...';
            } else {
              return text;
            }
        },
        getLastMessage(friend) {
            if (friend.messages.length > 0) {
              const lastMessage = friend.messages[friend.messages.length - 1].message;
              return this.truncateText(lastMessage, 30);
            } else {
              return '';
            }
        },
        showPopup() {
            this.show = true
        },
        closePopup() {
            this.newName = document.querySelector('.new-name-input').value
            this.newPhoto = document.querySelector('.new-photo-input').value
            
            if(this.newName !== '' && this.newPhoto !== '') {
                this.contacts.unshift({
                    name: this.newName,
                    avatar: this.newPhoto,
                    visible: true,
                    messages: [],
                })
                this.show = false
                this.newName = '';
                this.newPhoto = '';
                this.emptyList = false;
            }
            else {
                this.show = false
            }
            
            
        }
        
    }

        
}).mount("#container");