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
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            dropdownOpen: false
                            
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            dropdownOpen: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
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
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            dropdownOpen: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            dropdownOpen: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
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
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            dropdownOpen: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            dropdownOpen: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
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
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            dropdownOpen: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
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
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            dropdownOpen: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
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
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            dropdownOpen: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            dropdownOpen: false
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
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
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            dropdownOpen: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
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
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            dropdownOpen: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            dropdownOpen: false
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            dropdownOpen: false
                        }
                    ],
                    
                }
            ],
            currentContactIndex: 0,
            newMessage: '',
            searchQuery: '',
            dropdownOpen: false
        }
    },
    computed: {
        filteredContacts() {
            return this.contacts.filter(contact => 
                contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    },
    methods: {
        selectContact(index) {
            this.currentContactIndex = index;
        },
        formatTime(dateString) {
            const dateTime = DateTime.fromFormat(dateString, 'dd/MM/yyyy HH:mm:ss');
            return dateTime.toFormat('HH:mm:ss');
        },
        addMessage() {
            if (this.newMessage !== '' && this.newMessage.length >= 5) {
                this.contacts[this.currentContactIndex].messages.push({date: DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'), message: this.newMessage, status: 'sent', dropdownOpen: false});
                setTimeout(() => {this.friendMessage()}, 1000)
            }
            this.newMessage = '';
            
        },
        friendMessage() {
            
            this.contacts[this.currentContactIndex].messages.push({date: DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'), message: 'okay!', status: 'received'});
            
        },
        toggleDropdown(message) {
            message.dropdownOpen = !message.dropdownOpen;
        },
        removeMessage(index) {
            this.contacts[this.currentContactIndex].messages.splice(index, 1);
        }
    },

        
}).mount("#container");