document.addEventListener("DOMContentLoaded", () => {
    const videoAsset = "assets/images/AQMZI06CblpmwfCTXTdvBeIvR72ovQh9_UbAJkTEZILOD0b__8rgh8n3AA_0kz3x6SHCJ1X1GzTmnu69PPttwVN_xj80noxgqDsMZ_hiu1DZ9Q.mp4";
    const imageAssets = {
        logo: "assets/images/tasca do bernardo logo.png",
        exterior: "assets/images/470125189_1665079541018404_1252334412030162214_n.jpg",
        terrace: "assets/images/470162725_1665079141018444_509668604536751405_n.jpg",
        wine: "assets/images/image.png",
        lamb: "assets/images/469875042_1665079437685081_3229248491716602161_n.jpg",
        grilled: "assets/images/469957553_1665079424351749_782398373624564268_n.jpg",
        creamySteak: "assets/images/469988535_1665079514351740_7717206032578285559_n.jpg",
        greens: "assets/images/470074170_1665079441018414_7868646413589459517_n.jpg",
        acorda: "assets/images/55892336_331867177672987_6975823768346165248_n.jpg",
        carrots: "assets/images/55935496_331870727672632_7385020940612009984_n.jpg",
        dessert: "assets/images/55536481_332194830973555_6418442686700716032_n.jpg"
    };

    const uiCopy = {
        pt: {
            title: "Tasca O Bernardo | Alentejo Grill House",
            description: "Tasca O Bernardo em Boavista dos Pinheiros. Grelhados premium, porco preto, sabores do Alentejo, ambiente cinematografico e reservas rapidas.",
            navStory: "Ambiente",
            navMenu: "Carta",
            navGallery: "Galeria",
            navBook: "Reservas",
            heroKicker: "Alentejo grill house em Odemira",
            heroTitle: "Brasa, vinho e cozinha portuguesa com alma",
            heroSubtitle: "Um ambiente escuro, acolhedor e cinematografico para provar porco preto, grelhados premium e classicos alentejanos.",
            heroPrimary: "Explorar carta",
            heroSecondary: "Reservar agora",
            heroHighlight1: "Video real do restaurante",
            heroHighlight2: "Brasa premium e porco preto",
            heroHighlight3: "Atmosfera rustica portuguesa",
            storyTag: "A experiencia",
            storyTitle: "Uma tasca elegante, escura e cheia de calor alentejano",
            storyBody: "Tasca O Bernardo mistura a rustica autenticidade do Alentejo com um toque premium de steakhouse moderna. Brasa viva, texturas quentes, boa conversa e pratos intensos definem a experiencia.",
            storyPoint1Title: "Logo e identidade",
            storyPoint1Text: "Marca forte centrada no hero com destaque cinematografico.",
            storyPoint2Title: "Video e galeria real",
            storyPoint2Text: "Fotos e video locais espalhados pelas seccoes principais.",
            storyPoint3Title: "Carta interativa",
            storyPoint3Text: "Botoes ativos com popup glassmorphism para cada familia de pratos.",
            storyBadgeTop: "Premium rustic",
            storyBadgeBottom: "Alentejo fire kitchen",
            menuTag: "Carta interativa",
            menuTitle: "Escolha uma categoria e abra a experiencia completa",
            menuIntro: "Cada botao abre uma carta premium com pratos, imagens reais e ambiente visual inspirado na brasa.",
            menuButtonTraditional: "Peixe e classicos da casa",
            menuButtonGrilled: "Cortes premium e brasa",
            menuButtonStarters: "Sabores para partilhar",
            menuButtonDesserts: "Final doce portugues",
            fishTitle: "Sabores do mar com sotaque alentejano",
            fishBody: "Camarao, ameijoas, sopa e acorda com textura de conforto e intensidade da costa.",
            grillTitle: "Carnes premium com fogo lento e molhos intensos",
            grillBody: "Do lombo grelhado aos lombinhos com pimenta, cogumelos ou roquefort, a brasa e a estrela.",
            blackPorkTitle: "Cortes alentejanos para uma experiencia autentica",
            blackPorkBody: "Secretos, plumas, lagartos e carne alentejana servidos com um acabamento robusto e memoravel.",
            cinematicTag: "Ao rubro",
            cinematicTitle: "Video, fogo e movimento para dar vida a cada prato",
            cinematicBody: "A pagina usa o video real do restaurante para criar profundidade, calor e uma sensacao de jantar premium antes mesmo da reserva.",
            galleryTag: "Galeria",
            galleryTitle: "Momentos reais da Tasca O Bernardo",
            galleryIntro: "Uma mistura de pratos, sala, esplanada e detalhes de mesa para manter a atmosfera portuguesa em toda a pagina.",
            galleryLink: "Ver mais no Instagram",
            contactTag: "Reservas",
            contactTitle: "Reserve uma mesa para a sua proxima noite de brasa",
            contactIntro: "Ligue, envie SMS, use WhatsApp ou preencha o formulario para preparar a sua reserva com rapidez.",
            contactPhoneTitle: "Telefone",
            contactAddressTitle: "Morada",
            contactHoursTitle: "Horário",
            contactHoursValue: "Seg. a sáb. · 12:00-16:00 / 19:00-00:00",
            contactHoursNote: "Domingo encerrado",
            contactPriceTitle: "Preço médio",
            contactPriceValue: "15€-20€ por pessoa",
            contactPriceNote: "Faixa pública média do restaurante",
            formTitle: "Pedido de reserva",
            formSubtitle: "Escolha os detalhes e enviamos consigo para confirmar.",
            formName: "Nome",
            formPhone: "Telefone",
            formGuests: "Pessoas",
            formDate: "Data",
            formTime: "Hora",
            formMessage: "Pedido especial",
            formSubmit: "Preparar reserva",
            formSms: "Enviar por SMS",
            formCall: "Ligar agora",
            mapTag: "Mini map",
            mapTitle: "Encontre a Tasca O Bernardo rapidamente",
            mapCopyTitle: "Boavista dos Pinheiros, Odemira",
            mapCopyBody: "Uma ultima paragem na pagina para localizar a casa e seguir diretamente para a reserva ou para o GPS.",
            mapButton: "Abrir no mapa",
            footerText: "Cozinha portuguesa, porco preto, grelhados premium e atmosfera alentejana autentica.",
            footerMenu: "Carta",
            footerGallery: "Galeria",
            footerBook: "Reservas",
            footerCopy: "© 2026 Tasca O Bernardo. Todos os direitos reservados.",
            modalTag: "Carta",
            messagesRequired: "Por favor preencha todos os campos obrigatorios para concluir o pedido.",
            messagesPhone: "Introduza um numero de telefone valido para podermos identificar a reserva.",
            messagesPastDate: "A data da reserva nao pode ser anterior ao dia de hoje.",
            messagesNoSpecial: "Sem pedidos especiais.",
            messagesHeader: "Pedido de reserva - Tasca O Bernardo",
            messagesSuccessCopied: "Pedido preparado e copiado para a area de transferencia. Tambem pode usar os botoes abaixo para enviar por SMS ou ligar.",
            messagesSuccessReady: "Pedido preparado com sucesso. Pode usar os botoes abaixo para enviar por SMS ou ligar para confirmar."
        },
        en: {
            title: "Tasca O Bernardo | Alentejo Grill House",
            description: "Tasca O Bernardo in Boavista dos Pinheiros. Premium grilled meats, black pork, Alentejo flavours, cinematic atmosphere and quick reservations.",
            navStory: "Atmosphere",
            navMenu: "Menu",
            navGallery: "Gallery",
            navBook: "Bookings",
            heroKicker: "Alentejo grill house in Odemira",
            heroTitle: "Fire, wine and Portuguese cooking with soul",
            heroSubtitle: "A dark, welcoming and cinematic setting for black pork, premium grilled meats and Alentejo classics.",
            heroPrimary: "Explore menu",
            heroSecondary: "Book now",
            heroHighlight1: "Real restaurant video",
            heroHighlight2: "Premium grill and black pork",
            heroHighlight3: "Portuguese rustic atmosphere",
            storyTag: "The experience",
            storyTitle: "An elegant dark tavern filled with Alentejo warmth",
            storyBody: "Tasca O Bernardo blends the rustic authenticity of Alentejo with a premium modern steakhouse feel. Live fire, warm textures and bold dishes shape the experience.",
            storyPoint1Title: "Logo and identity",
            storyPoint1Text: "Strong branding centered in the hero with a cinematic spotlight.",
            storyPoint2Title: "Real video and gallery",
            storyPoint2Text: "Local photos and video distributed across the main sections.",
            storyPoint3Title: "Interactive menu",
            storyPoint3Text: "Active buttons with a glassmorphism popup for each food family.",
            storyBadgeTop: "Premium rustic",
            storyBadgeBottom: "Alentejo fire kitchen",
            menuTag: "Interactive menu",
            menuTitle: "Choose a category and open the full experience",
            menuIntro: "Each button opens a premium menu view with dishes, real images and a live-fire mood.",
            menuButtonTraditional: "Fish and house classics",
            menuButtonGrilled: "Premium cuts and grill",
            menuButtonStarters: "Flavours to share",
            menuButtonDesserts: "Portuguese sweet finish",
            fishTitle: "Sea flavours with an Alentejo accent",
            fishBody: "Shrimps, clams, soup and bread stew with coastal comfort and rich flavour.",
            grillTitle: "Premium meats with slow fire and rich sauces",
            grillBody: "From grilled loin to pepper, mushroom or roquefort tenderloin, the grill leads the whole scene.",
            blackPorkTitle: "Alentejo pork cuts for an authentic experience",
            blackPorkBody: "Secretos, plumas, lagartos and Carne Alentejana served with a robust unforgettable finish.",
            cinematicTag: "On the fire",
            cinematicTitle: "Video, heat and motion bring every dish to life",
            cinematicBody: "The page uses the restaurant's real video to create depth, warmth and a premium dinner feeling before the booking even happens.",
            galleryTag: "Gallery",
            galleryTitle: "Real moments from Tasca O Bernardo",
            galleryIntro: "A mix of dishes, terrace, dining room and table details keeps the Portuguese mood alive throughout the page.",
            galleryLink: "See more on Instagram",
            contactTag: "Bookings",
            contactTitle: "Reserve a table for your next fire-led night",
            contactIntro: "Call, text, use WhatsApp or fill out the form to prepare your reservation quickly.",
            contactPhoneTitle: "Phone",
            contactAddressTitle: "Address",
            contactHoursTitle: "Opening hours",
            contactHoursValue: "Mon-Sat · 12:00-16:00 / 19:00-00:00",
            contactHoursNote: "Closed on Sunday",
            contactPriceTitle: "Average spend",
            contactPriceValue: "€15-€20 per person",
            contactPriceNote: "Publicly listed average range",
            formTitle: "Reservation request",
            formSubtitle: "Choose the details and we prepare the request for confirmation.",
            formName: "Name",
            formPhone: "Phone",
            formGuests: "Guests",
            formDate: "Date",
            formTime: "Time",
            formMessage: "Special request",
            formSubmit: "Prepare reservation",
            formSms: "Send by SMS",
            formCall: "Call now",
            mapTag: "Mini map",
            mapTitle: "Find Tasca O Bernardo quickly",
            mapCopyTitle: "Boavista dos Pinheiros, Odemira",
            mapCopyBody: "A final stop on the page so guests can find the restaurant and jump directly to GPS or booking.",
            mapButton: "Open map",
            footerText: "Portuguese cuisine, black pork, premium grilled meats and authentic Alentejo atmosphere.",
            footerMenu: "Menu",
            footerGallery: "Gallery",
            footerBook: "Bookings",
            footerCopy: "© 2026 Tasca O Bernardo. All rights reserved.",
            modalTag: "Menu",
            messagesRequired: "Please complete all required fields to finish your request.",
            messagesPhone: "Please enter a valid phone number so we can identify the reservation.",
            messagesPastDate: "The reservation date cannot be earlier than today.",
            messagesNoSpecial: "No special requests.",
            messagesHeader: "Reservation request - Tasca O Bernardo",
            messagesSuccessCopied: "Your request is ready and copied to the clipboard. You can also use the buttons below to send it by SMS or call.",
            messagesSuccessReady: "Your request is ready. You can use the buttons below to send it by SMS or call to confirm."
        },
        es: {
            title: "Tasca O Bernardo | Alentejo Grill House",
            description: "Tasca O Bernardo en Boavista dos Pinheiros. Parrilla premium, cerdo negro, sabores del Alentejo, atmosfera cinematografica y reservas rapidas.",
            navStory: "Ambiente",
            navMenu: "Carta",
            navGallery: "Galeria",
            navBook: "Reservas",
            heroKicker: "Steakhouse del Alentejo en Odemira",
            heroTitle: "Brasa, vino y cocina portuguesa con alma",
            heroSubtitle: "Un espacio oscuro, acogedor y cinematografico para probar cerdo negro, parrilla premium y clasicos del Alentejo.",
            heroPrimary: "Explorar carta",
            heroSecondary: "Reservar ahora",
            heroHighlight1: "Video real del restaurante",
            heroHighlight2: "Parrilla premium y cerdo negro",
            heroHighlight3: "Atmosfera rustica portuguesa",
            storyTag: "La experiencia",
            storyTitle: "Una tasca elegante y oscura llena de calor alentejano",
            storyBody: "Tasca O Bernardo mezcla la autenticidad rustica del Alentejo con un toque moderno de steakhouse premium. Fuego vivo, texturas calidas y platos intensos marcan la experiencia.",
            storyPoint1Title: "Logo e identidad",
            storyPoint1Text: "Marca fuerte en el hero con un enfoque cinematografico.",
            storyPoint2Title: "Video y galeria real",
            storyPoint2Text: "Fotos y video reales repartidos por las secciones principales.",
            storyPoint3Title: "Carta interactiva",
            storyPoint3Text: "Botones activos con popup glassmorphism para cada familia de platos.",
            storyBadgeTop: "Premium rustic",
            storyBadgeBottom: "Alentejo fire kitchen",
            menuTag: "Carta interactiva",
            menuTitle: "Elija una categoria y abra la experiencia completa",
            menuIntro: "Cada boton abre una carta premium con platos, imagenes reales y una atmosfera inspirada en la brasa.",
            menuButtonTraditional: "Pescado y clasicos de la casa",
            menuButtonGrilled: "Cortes premium y parrilla",
            menuButtonStarters: "Sabores para compartir",
            menuButtonDesserts: "Final dulce portugues",
            fishTitle: "Sabores del mar con acento alentejano",
            fishBody: "Gambas, almejas, sopa y açorda con comodidad costera y sabor intenso.",
            grillTitle: "Carnes premium con fuego lento y salsas intensas",
            grillBody: "Desde el lomo a la parrilla hasta los cortes con pimienta, champiñones o roquefort, la brasa manda.",
            blackPorkTitle: "Cortes de cerdo negro para una experiencia autentica",
            blackPorkBody: "Secretos, plumas, lagartos y Carne Alentejana con un acabado robusto y memorable.",
            cinematicTag: "Al fuego",
            cinematicTitle: "Video, calor y movimiento para dar vida a cada plato",
            cinematicBody: "La pagina usa el video real del restaurante para crear profundidad, calor y sensacion premium antes de la reserva.",
            galleryTag: "Galeria",
            galleryTitle: "Momentos reales de Tasca O Bernardo",
            galleryIntro: "Una mezcla de platos, terraza, sala y detalles de mesa mantiene viva la atmosfera portuguesa en toda la pagina.",
            galleryLink: "Ver mas en Instagram",
            contactTag: "Reservas",
            contactTitle: "Reserve una mesa para su proxima noche de brasa",
            contactIntro: "Llame, envie SMS, use WhatsApp o complete el formulario para preparar la reserva rapidamente.",
            contactPhoneTitle: "Telefono",
            contactAddressTitle: "Direccion",
            contactHoursTitle: "Horario",
            contactHoursValue: "Lun-Sab · 12:00-16:00 / 19:00-00:00",
            contactHoursNote: "Cerrado el domingo",
            contactPriceTitle: "Gasto medio",
            contactPriceValue: "15€-20€ por persona",
            contactPriceNote: "Rango medio publicado",
            formTitle: "Solicitud de reserva",
            formSubtitle: "Elija los detalles y preparamos la solicitud para confirmar.",
            formName: "Nombre",
            formPhone: "Telefono",
            formGuests: "Personas",
            formDate: "Fecha",
            formTime: "Hora",
            formMessage: "Peticion especial",
            formSubmit: "Preparar reserva",
            formSms: "Enviar por SMS",
            formCall: "Llamar ahora",
            mapTag: "Mini map",
            mapTitle: "Encuentre Tasca O Bernardo rapidamente",
            mapCopyTitle: "Boavista dos Pinheiros, Odemira",
            mapCopyBody: "Una ultima parada en la pagina para ubicar el restaurante y saltar directo al mapa o a la reserva.",
            mapButton: "Abrir mapa",
            footerText: "Cocina portuguesa, cerdo negro, parrilla premium y atmosfera autentica del Alentejo.",
            footerMenu: "Carta",
            footerGallery: "Galeria",
            footerBook: "Reservas",
            footerCopy: "© 2026 Tasca O Bernardo. Todos los derechos reservados.",
            modalTag: "Carta",
            messagesRequired: "Por favor complete todos los campos obligatorios para finalizar la solicitud.",
            messagesPhone: "Introduzca un telefono valido para identificar la reserva.",
            messagesPastDate: "La fecha de la reserva no puede ser anterior a hoy.",
            messagesNoSpecial: "Sin peticiones especiales.",
            messagesHeader: "Solicitud de reserva - Tasca O Bernardo",
            messagesSuccessCopied: "La solicitud esta lista y copiada al portapapeles. Tambien puede usar los botones inferiores para enviarla por SMS o llamar.",
            messagesSuccessReady: "La solicitud esta lista. Puede usar los botones inferiores para enviarla por SMS o llamar para confirmar."
        },
        fr: {
            title: "Tasca O Bernardo | Alentejo Grill House",
            description: "Tasca O Bernardo a Boavista dos Pinheiros. Grill premium, porc noir, saveurs de l'Alentejo, ambiance cinematographique et reservations rapides.",
            navStory: "Ambiance",
            navMenu: "Carte",
            navGallery: "Galerie",
            navBook: "Reservations",
            heroKicker: "Grill house de l'Alentejo a Odemira",
            heroTitle: "Braise, vin et cuisine portugaise avec ame",
            heroSubtitle: "Un lieu sombre, chaleureux et cinematographique pour le porc noir, les grillades premium et les classiques de l'Alentejo.",
            heroPrimary: "Explorer la carte",
            heroSecondary: "Reserver maintenant",
            heroHighlight1: "Video reelle du restaurant",
            heroHighlight2: "Grill premium et porc noir",
            heroHighlight3: "Atmosphere rustique portugaise",
            storyTag: "L'experience",
            storyTitle: "Une tasca elegante et sombre pleine de chaleur alentejane",
            storyBody: "Tasca O Bernardo melange l'authenticite rustique de l'Alentejo avec une sensation moderne de steakhouse premium. Feu vivant, textures chaudes et plats intenses definissent l'experience.",
            storyPoint1Title: "Logo et identite",
            storyPoint1Text: "Une marque forte placee au centre du hero avec une mise en scene cinematographique.",
            storyPoint2Title: "Video et galerie reelles",
            storyPoint2Text: "Photos et video locales reparties dans les sections principales.",
            storyPoint3Title: "Carte interactive",
            storyPoint3Text: "Boutons actifs avec popup glassmorphism pour chaque famille de plats.",
            storyBadgeTop: "Premium rustic",
            storyBadgeBottom: "Alentejo fire kitchen",
            menuTag: "Carte interactive",
            menuTitle: "Choisissez une categorie et ouvrez l'experience complete",
            menuIntro: "Chaque bouton ouvre une carte premium avec plats, images reelles et ambiance de braise.",
            menuButtonTraditional: "Poisson et classiques maison",
            menuButtonGrilled: "Coupes premium et grill",
            menuButtonStarters: "Saveurs a partager",
            menuButtonDesserts: "Final sucre portugais",
            fishTitle: "Saveurs de la mer avec accent alentejan",
            fishBody: "Crevettes, palourdes, soupe et açorda avec confort de la cote et saveur intense.",
            grillTitle: "Viandes premium avec feu lent et sauces intenses",
            grillBody: "Du lombo grille aux coupes au poivre, champignons ou roquefort, la braise dirige la scene.",
            blackPorkTitle: "Coupes de porc noir pour une experience authentique",
            blackPorkBody: "Secretos, plumas, lagartos et Carne Alentejana avec une finition robuste et memorable.",
            cinematicTag: "A la braise",
            cinematicTitle: "Video, chaleur et mouvement donnent vie a chaque plat",
            cinematicBody: "La page utilise la vraie video du restaurant pour creer profondeur, chaleur et sensation premium avant meme la reservation.",
            galleryTag: "Galerie",
            galleryTitle: "Moments reels de Tasca O Bernardo",
            galleryIntro: "Un melange de plats, terrasse, salle et details de table garde l'atmosphere portugaise tout au long de la page.",
            galleryLink: "Voir plus sur Instagram",
            contactTag: "Reservations",
            contactTitle: "Reservez une table pour votre prochaine soiree de braise",
            contactIntro: "Appelez, envoyez un SMS, utilisez WhatsApp ou remplissez le formulaire pour preparer rapidement votre reservation.",
            contactPhoneTitle: "Telephone",
            contactAddressTitle: "Adresse",
            contactHoursTitle: "Horaires",
            contactHoursValue: "Lun-Sam · 12:00-16:00 / 19:00-00:00",
            contactHoursNote: "Ferme le dimanche",
            contactPriceTitle: "Addition moyenne",
            contactPriceValue: "15€-20€ par personne",
            contactPriceNote: "Fourchette moyenne publiee",
            formTitle: "Demande de reservation",
            formSubtitle: "Choisissez les details et nous preparons la demande pour confirmation.",
            formName: "Nom",
            formPhone: "Telephone",
            formGuests: "Convives",
            formDate: "Date",
            formTime: "Heure",
            formMessage: "Demande speciale",
            formSubmit: "Preparer la reservation",
            formSms: "Envoyer par SMS",
            formCall: "Appeler maintenant",
            mapTag: "Mini map",
            mapTitle: "Trouvez Tasca O Bernardo rapidement",
            mapCopyTitle: "Boavista dos Pinheiros, Odemira",
            mapCopyBody: "Un dernier arret sur la page pour localiser la maison et passer directement au GPS ou a la reservation.",
            mapButton: "Ouvrir la carte",
            footerText: "Cuisine portugaise, porc noir, grillades premium et atmosphere authentique de l'Alentejo.",
            footerMenu: "Carte",
            footerGallery: "Galerie",
            footerBook: "Reservations",
            footerCopy: "© 2026 Tasca O Bernardo. Tous droits reserves.",
            modalTag: "Carte",
            messagesRequired: "Veuillez remplir tous les champs obligatoires pour terminer votre demande.",
            messagesPhone: "Veuillez saisir un numero de telephone valide pour identifier la reservation.",
            messagesPastDate: "La date de reservation ne peut pas etre anterieure a aujourd'hui.",
            messagesNoSpecial: "Aucune demande speciale.",
            messagesHeader: "Demande de reservation - Tasca O Bernardo",
            messagesSuccessCopied: "Votre demande est prete et copiee dans le presse-papiers. Vous pouvez aussi utiliser les boutons ci-dessous pour envoyer un SMS ou appeler.",
            messagesSuccessReady: "Votre demande est prete. Vous pouvez utiliser les boutons ci-dessous pour envoyer un SMS ou appeler pour confirmer."
        },
        de: {
            title: "Tasca O Bernardo | Alentejo Grill House",
            description: "Tasca O Bernardo in Boavista dos Pinheiros. Premium-Grill, schwarzes Schwein, Alentejo-Aromen, filmische Atmosphare und schnelle Reservierungen.",
            navStory: "Atmosphare",
            navMenu: "Karte",
            navGallery: "Galerie",
            navBook: "Reservierung",
            heroKicker: "Alentejo Grill House in Odemira",
            heroTitle: "Feuer, Wein und portugiesische Kuche mit Seele",
            heroSubtitle: "Ein dunkler, warmer und filmischer Ort fur schwarzes Schwein, Premium-Grill und Klassiker aus dem Alentejo.",
            heroPrimary: "Karte entdecken",
            heroSecondary: "Jetzt reservieren",
            heroHighlight1: "Echtes Restaurantvideo",
            heroHighlight2: "Premium-Grill und schwarzes Schwein",
            heroHighlight3: "Portugiesische rustikale Atmosphare",
            storyTag: "Das Erlebnis",
            storyTitle: "Eine elegante dunkle Tasca voller Alentejo-Warme",
            storyBody: "Tasca O Bernardo verbindet rustikale Authentizitat des Alentejo mit dem Gefuhl eines modernen Premium-Steakhouses. Offenes Feuer, warme Texturen und intensive Gerichte pragen das Erlebnis.",
            storyPoint1Title: "Logo und Identitat",
            storyPoint1Text: "Starkes Branding zentral im Hero mit filmischem Fokus.",
            storyPoint2Title: "Echtes Video und Galerie",
            storyPoint2Text: "Lokale Fotos und Videos in den Hauptbereichen der Seite.",
            storyPoint3Title: "Interaktive Karte",
            storyPoint3Text: "Aktive Buttons mit Glassmorphism-Popup fur jede Gerichtsfamilie.",
            storyBadgeTop: "Premium rustic",
            storyBadgeBottom: "Alentejo fire kitchen",
            menuTag: "Interaktive Karte",
            menuTitle: "Wahlen Sie eine Kategorie und offnen Sie das volle Erlebnis",
            menuIntro: "Jeder Button offnet eine Premium-Karte mit Gerichten, echten Bildern und Grill-Atmosphare.",
            menuButtonTraditional: "Fisch und Hausklassiker",
            menuButtonGrilled: "Premium Cuts und Grill",
            menuButtonStarters: "Zum Teilen",
            menuButtonDesserts: "Portugiesisches Dessertsfinale",
            fishTitle: "Meeresaromen mit Alentejo-Note",
            fishBody: "Garnelen, Muscheln, Suppe und Açorda mit Kustenkomfort und intensivem Geschmack.",
            grillTitle: "Premium-Fleisch mit langsamem Feuer und intensiven Saucen",
            grillBody: "Vom gegrillten Lombo bis zu Pfeffer-, Pilz- oder Roquefort-Saucen bestimmt die Glut die Szene.",
            blackPorkTitle: "Schwarze Schweinecuts fur ein authentisches Erlebnis",
            blackPorkBody: "Secretos, Plumas, Lagartos und Carne Alentejana mit kraftvollem und unvergesslichem Finish.",
            cinematicTag: "Am Feuer",
            cinematicTitle: "Video, Hitze und Bewegung bringen jedes Gericht zum Leben",
            cinematicBody: "Die Seite nutzt das echte Restaurantvideo, um Tiefe, Warme und Premium-Dinner-Gefuhl schon vor der Reservierung zu schaffen.",
            galleryTag: "Galerie",
            galleryTitle: "Echte Momente von Tasca O Bernardo",
            galleryIntro: "Ein Mix aus Gerichten, Terrasse, Gastraum und Tischdetails halt die portugiesische Stimmung auf der ganzen Seite lebendig.",
            galleryLink: "Mehr auf Instagram",
            contactTag: "Reservierungen",
            contactTitle: "Reservieren Sie einen Tisch fur Ihre nachste Feuernacht",
            contactIntro: "Rufen Sie an, senden Sie eine SMS, nutzen Sie WhatsApp oder fullen Sie das Formular aus, um Ihre Reservierung schnell vorzubereiten.",
            contactPhoneTitle: "Telefon",
            contactAddressTitle: "Adresse",
            contactHoursTitle: "Offnungszeiten",
            contactHoursValue: "Mo-Sa · 12:00-16:00 / 19:00-00:00",
            contactHoursNote: "Sonntag geschlossen",
            contactPriceTitle: "Durchschnittspreis",
            contactPriceValue: "15€-20€ pro Person",
            contactPriceNote: "Offentlich gelisteter Durchschnitt",
            formTitle: "Reservierungsanfrage",
            formSubtitle: "Wahlen Sie die Details und wir bereiten die Anfrage fur die Bestatigung vor.",
            formName: "Name",
            formPhone: "Telefon",
            formGuests: "Personen",
            formDate: "Datum",
            formTime: "Uhrzeit",
            formMessage: "Besonderer Wunsch",
            formSubmit: "Reservierung vorbereiten",
            formSms: "Per SMS senden",
            formCall: "Jetzt anrufen",
            mapTag: "Mini map",
            mapTitle: "Finden Sie Tasca O Bernardo schnell",
            mapCopyTitle: "Boavista dos Pinheiros, Odemira",
            mapCopyBody: "Ein letzter Abschnitt auf der Seite, um das Restaurant schnell zu finden und direkt zum GPS oder zur Reservierung zu wechseln.",
            mapButton: "Karte offnen",
            footerText: "Portugiesische Kuche, schwarzes Schwein, Premium-Grill und authentische Alentejo-Atmosphare.",
            footerMenu: "Karte",
            footerGallery: "Galerie",
            footerBook: "Reservierungen",
            footerCopy: "© 2026 Tasca O Bernardo. Alle Rechte vorbehalten.",
            modalTag: "Karte",
            messagesRequired: "Bitte fullen Sie alle Pflichtfelder aus, um die Anfrage abzuschliessen.",
            messagesPhone: "Bitte geben Sie eine gultige Telefonnummer ein, damit wir die Reservierung erkennen konnen.",
            messagesPastDate: "Das Reservierungsdatum darf nicht vor heute liegen.",
            messagesNoSpecial: "Keine besonderen Wunsche.",
            messagesHeader: "Reservierungsanfrage - Tasca O Bernardo",
            messagesSuccessCopied: "Ihre Anfrage ist fertig und in die Zwischenablage kopiert. Sie konnen auch die Buttons unten nutzen, um per SMS zu senden oder anzurufen.",
            messagesSuccessReady: "Ihre Anfrage ist fertig. Sie konnen die Buttons unten nutzen, um per SMS zu senden oder anzurufen."
        },
        it: {
            title: "Tasca O Bernardo | Alentejo Grill House",
            description: "Tasca O Bernardo a Boavista dos Pinheiros. Griglia premium, maiale nero, sapori dell'Alentejo, atmosfera cinematografica e prenotazioni rapide.",
            navStory: "Atmosfera",
            navMenu: "Carta",
            navGallery: "Galleria",
            navBook: "Prenotazioni",
            heroKicker: "Alentejo grill house a Odemira",
            heroTitle: "Braci, vino e cucina portoghese con anima",
            heroSubtitle: "Uno spazio scuro, accogliente e cinematografico per maiale nero, griglia premium e classici dell'Alentejo.",
            heroPrimary: "Esplora carta",
            heroSecondary: "Prenota ora",
            heroHighlight1: "Video reale del ristorante",
            heroHighlight2: "Griglia premium e maiale nero",
            heroHighlight3: "Atmosfera rustica portoghese",
            storyTag: "L'esperienza",
            storyTitle: "Una tasca elegante e scura piena di calore alentejano",
            storyBody: "Tasca O Bernardo unisce l'autenticita rustica dell'Alentejo a un tocco moderno da steakhouse premium. Fuoco vivo, texture calde e piatti intensi definiscono l'esperienza.",
            storyPoint1Title: "Logo e identita",
            storyPoint1Text: "Brand forte al centro dell'hero con un tocco cinematografico.",
            storyPoint2Title: "Video e galleria reali",
            storyPoint2Text: "Foto e video locali distribuiti nelle sezioni principali.",
            storyPoint3Title: "Carta interattiva",
            storyPoint3Text: "Bottoni attivi con popup glassmorphism per ogni famiglia di piatti.",
            storyBadgeTop: "Premium rustic",
            storyBadgeBottom: "Alentejo fire kitchen",
            menuTag: "Carta interattiva",
            menuTitle: "Scegli una categoria e apri l'esperienza completa",
            menuIntro: "Ogni pulsante apre una carta premium con piatti, immagini reali e atmosfera di brace.",
            menuButtonTraditional: "Pesce e classici della casa",
            menuButtonGrilled: "Tagli premium e griglia",
            menuButtonStarters: "Sapori da condividere",
            menuButtonDesserts: "Finale dolce portoghese",
            fishTitle: "Sapori di mare con accento alentejano",
            fishBody: "Gamberi, vongole, zuppa e açorda con comfort costiero e sapore intenso.",
            grillTitle: "Carni premium con fuoco lento e salse intense",
            grillBody: "Dal lombo alla griglia ai tagli con pepe, funghi o roquefort, la brace e protagonista.",
            blackPorkTitle: "Tagli di maiale nero per un'esperienza autentica",
            blackPorkBody: "Secretos, plumas, lagartos e Carne Alentejana con una finitura robusta e memorabile.",
            cinematicTag: "Alla brace",
            cinematicTitle: "Video, calore e movimento danno vita a ogni piatto",
            cinematicBody: "La pagina usa il vero video del ristorante per creare profondita, calore e sensazione premium ancora prima della prenotazione.",
            galleryTag: "Galleria",
            galleryTitle: "Momenti reali di Tasca O Bernardo",
            galleryIntro: "Un mix di piatti, terrazza, sala e dettagli del tavolo mantiene viva l'atmosfera portoghese in tutta la pagina.",
            galleryLink: "Vedi di piu su Instagram",
            contactTag: "Prenotazioni",
            contactTitle: "Prenota un tavolo per la tua prossima serata alla brace",
            contactIntro: "Chiama, invia SMS, usa WhatsApp o compila il modulo per preparare rapidamente la prenotazione.",
            contactPhoneTitle: "Telefono",
            contactAddressTitle: "Indirizzo",
            contactHoursTitle: "Orari",
            contactHoursValue: "Lun-Sab · 12:00-16:00 / 19:00-00:00",
            contactHoursNote: "Chiuso la domenica",
            contactPriceTitle: "Spesa media",
            contactPriceValue: "15€-20€ a persona",
            contactPriceNote: "Fascia media pubblicata",
            formTitle: "Richiesta di prenotazione",
            formSubtitle: "Scegli i dettagli e prepariamo la richiesta per la conferma.",
            formName: "Nome",
            formPhone: "Telefono",
            formGuests: "Persone",
            formDate: "Data",
            formTime: "Ora",
            formMessage: "Richiesta speciale",
            formSubmit: "Prepara prenotazione",
            formSms: "Invia via SMS",
            formCall: "Chiama ora",
            mapTag: "Mini map",
            mapTitle: "Trova Tasca O Bernardo rapidamente",
            mapCopyTitle: "Boavista dos Pinheiros, Odemira",
            mapCopyBody: "Un'ultima tappa nella pagina per trovare il ristorante e passare subito al GPS o alla prenotazione.",
            mapButton: "Apri mappa",
            footerText: "Cucina portoghese, maiale nero, griglia premium e autentica atmosfera dell'Alentejo.",
            footerMenu: "Carta",
            footerGallery: "Galleria",
            footerBook: "Prenotazioni",
            footerCopy: "© 2026 Tasca O Bernardo. Tutti i diritti riservati.",
            modalTag: "Carta",
            messagesRequired: "Compila tutti i campi obbligatori per completare la richiesta.",
            messagesPhone: "Inserisci un numero di telefono valido per identificare la prenotazione.",
            messagesPastDate: "La data della prenotazione non puo essere precedente a oggi.",
            messagesNoSpecial: "Nessuna richiesta speciale.",
            messagesHeader: "Richiesta di prenotazione - Tasca O Bernardo",
            messagesSuccessCopied: "La richiesta e pronta e copiata negli appunti. Puoi usare anche i pulsanti qui sotto per inviarla via SMS o chiamare.",
            messagesSuccessReady: "La richiesta e pronta. Puoi usare i pulsanti qui sotto per inviarla via SMS o chiamare per confermare."
        },
        nl: {
            title: "Tasca O Bernardo | Alentejo Grill House",
            description: "Tasca O Bernardo in Boavista dos Pinheiros. Premium grill, zwart varken, smaken uit de Alentejo, filmische sfeer en snelle reserveringen.",
            navStory: "Sfeer",
            navMenu: "Menu",
            navGallery: "Galerij",
            navBook: "Reserveren",
            heroKicker: "Alentejo grill house in Odemira",
            heroTitle: "Vuur, wijn en Portugese keuken met ziel",
            heroSubtitle: "Een donkere, warme en filmische plek voor zwart varken, premium grill en klassiekers uit de Alentejo.",
            heroPrimary: "Menu bekijken",
            heroSecondary: "Nu reserveren",
            heroHighlight1: "Echte restaurantvideo",
            heroHighlight2: "Premium grill en zwart varken",
            heroHighlight3: "Portugese rustieke sfeer",
            storyTag: "De ervaring",
            storyTitle: "Een elegante donkere tasca vol Alentejo-warmte",
            storyBody: "Tasca O Bernardo combineert de rustieke authenticiteit van de Alentejo met een modern premium steakhouse-gevoel. Levend vuur, warme texturen en krachtige gerechten vormen de ervaring.",
            storyPoint1Title: "Logo en identiteit",
            storyPoint1Text: "Sterke branding centraal in de hero met filmische focus.",
            storyPoint2Title: "Echte video en galerij",
            storyPoint2Text: "Lokale foto's en video verspreid over de hoofdsecties.",
            storyPoint3Title: "Interactief menu",
            storyPoint3Text: "Actieve knoppen met glassmorphism-popup voor elke gerechtengroep.",
            storyBadgeTop: "Premium rustic",
            storyBadgeBottom: "Alentejo fire kitchen",
            menuTag: "Interactief menu",
            menuTitle: "Kies een categorie en open de volledige ervaring",
            menuIntro: "Elke knop opent een premium menuweergave met gerechten, echte beelden en een grill-sfeer.",
            menuButtonTraditional: "Vis en huisklassiekers",
            menuButtonGrilled: "Premium cuts en grill",
            menuButtonStarters: "Om te delen",
            menuButtonDesserts: "Portugees zoet einde",
            fishTitle: "Zeesmaken met Alentejo-accent",
            fishBody: "Garnalen, kokkels, soep en açorda met kustcomfort en intense smaak.",
            grillTitle: "Premium vlees met langzaam vuur en intense sauzen",
            grillBody: "Van gegrilde lombo tot sneden met peper, champignons of roquefort, de grill voert de hoofdrol.",
            blackPorkTitle: "Zwart varkensvlees voor een authentieke ervaring",
            blackPorkBody: "Secretos, plumas, lagartos en Carne Alentejana met een robuuste en memorabele afwerking.",
            cinematicTag: "Op het vuur",
            cinematicTitle: "Video, warmte en beweging brengen elk gerecht tot leven",
            cinematicBody: "De pagina gebruikt de echte restaurantvideo om diepte, warmte en een premium diner-gevoel te creëren nog voor de reservering.",
            galleryTag: "Galerij",
            galleryTitle: "Echte momenten van Tasca O Bernardo",
            galleryIntro: "Een mix van gerechten, terras, zaal en tafeldetails houdt de Portugese sfeer levend over de hele pagina.",
            galleryLink: "Meer op Instagram bekijken",
            contactTag: "Reserveringen",
            contactTitle: "Reserveer een tafel voor uw volgende vurige avond",
            contactIntro: "Bel, stuur een sms, gebruik WhatsApp of vul het formulier in om uw reservering snel voor te bereiden.",
            contactPhoneTitle: "Telefoon",
            contactAddressTitle: "Adres",
            contactHoursTitle: "Openingstijden",
            contactHoursValue: "Ma-Za · 12:00-16:00 / 19:00-00:00",
            contactHoursNote: "Zondag gesloten",
            contactPriceTitle: "Gemiddelde besteding",
            contactPriceValue: "15€-20€ per persoon",
            contactPriceNote: "Openbaar vermeld gemiddeld bereik",
            formTitle: "Reserveringsaanvraag",
            formSubtitle: "Kies de details en wij bereiden de aanvraag voor bevestiging voor.",
            formName: "Naam",
            formPhone: "Telefoon",
            formGuests: "Personen",
            formDate: "Datum",
            formTime: "Tijd",
            formMessage: "Speciale wens",
            formSubmit: "Reservering voorbereiden",
            formSms: "Per sms verzenden",
            formCall: "Nu bellen",
            mapTag: "Mini map",
            mapTitle: "Vind Tasca O Bernardo snel",
            mapCopyTitle: "Boavista dos Pinheiros, Odemira",
            mapCopyBody: "Een laatste stop op de pagina om het restaurant direct te vinden en meteen naar GPS of reservering te gaan.",
            mapButton: "Kaart openen",
            footerText: "Portugese keuken, zwart varken, premium grill en authentieke sfeer uit de Alentejo.",
            footerMenu: "Menu",
            footerGallery: "Galerij",
            footerBook: "Reserveren",
            footerCopy: "© 2026 Tasca O Bernardo. Alle rechten voorbehouden.",
            modalTag: "Menu",
            messagesRequired: "Vul alle verplichte velden in om uw aanvraag af te ronden.",
            messagesPhone: "Voer een geldig telefoonnummer in zodat we de reservering kunnen herkennen.",
            messagesPastDate: "De reserveringsdatum mag niet voor vandaag liggen.",
            messagesNoSpecial: "Geen speciale wensen.",
            messagesHeader: "Reserveringsaanvraag - Tasca O Bernardo",
            messagesSuccessCopied: "Uw aanvraag is klaar en gekopieerd naar het klembord. U kunt ook de knoppen hieronder gebruiken om per sms te verzenden of te bellen.",
            messagesSuccessReady: "Uw aanvraag is klaar. U kunt de knoppen hieronder gebruiken om per sms te verzenden of te bellen ter bevestiging."
        }
    };

    const menuData = {
        tradicional: {
            title: "Traditional",
            description: "Peixe, acordas, sopas e porco preto com a identidade rustica da casa.",
            mediaType: "video",
            mediaSrc: videoAsset,
            groups: [
                {
                    title: "Fish",
                    items: [
                        { name: "Shrimps", note: "Sabor do mar com final delicado e textura rica.", image: imageAssets.grilled },
                        { name: "Clams", note: "Ameijoas com carater costeiro e perfil salino.", image: imageAssets.greens },
                        { name: "Açorda Alentejana", note: "Conforto alentejano em prato icónico.", image: imageAssets.acorda },
                        { name: "Soup Alentejana", note: "Entrada quente e aromatica para noites tranquilas.", image: imageAssets.wine }
                    ]
                },
                {
                    title: "Porco Preto",
                    items: [
                        { name: "Lombinhos Alentejana com Coentros e Alhos", note: "Perfil herbal e autentico do sul.", image: imageAssets.creamySteak },
                        { name: "Lombinhos com Molho de Pimenta", note: "Final intenso e picante elegante.", image: imageAssets.grilled },
                        { name: "Lombinhos com Molho de Cogumelos", note: "Creme profundo com textura suave.", image: imageAssets.creamySteak },
                        { name: "Lombinhos com Molho Roquefort", note: "Molho envolvente e premium.", image: imageAssets.lamb },
                        { name: "Secretos", note: "Corte suculento e muito procurado.", image: imageAssets.grilled },
                        { name: "Plumas", note: "Tenras, delicadas e cheias de sabor.", image: imageAssets.lamb },
                        { name: "Lagartos", note: "Brasa viva e acabamento memoravel.", image: imageAssets.grilled },
                        { name: "Carne Alentejana", note: "Feita na frigideira com vinho branco, ameijoas e carne de porco.", image: imageAssets.acorda },
                        { name: "Espetada de Lombinho", note: "Apresentacao rustica com lado premium.", image: imageAssets.exterior }
                    ]
                }
            ]
        },
        grelhados: {
            title: "Grelhados",
            description: "Carnes premium, cortes classicos e molhos encorpados servidos com visual de brasa.",
            mediaType: "video",
            mediaSrc: videoAsset,
            groups: [
                {
                    title: "Premium Grill",
                    items: [
                        { name: "Grilled Lamb Chop", note: "Costeleta com perfil elegante e forte.", image: imageAssets.lamb },
                        { name: "Lombinhos Bifinhos Alentejana com Coentros e Alhos", note: "Corte fino com assinatura tradicional.", image: imageAssets.grilled },
                        { name: "Lombinhos Grelhados", note: "Brasa direta e acabamento suculento.", image: imageAssets.grilled },
                        { name: "Lombinhos com Molho de Pimenta", note: "Molho vibrante e quente.", image: imageAssets.creamySteak },
                        { name: "Lombinhos com Molho de Cogumelos", note: "Camada cremosa e aromatica.", image: imageAssets.creamySteak },
                        { name: "Lombinhos com Molho Roquefort", note: "Perfil premium com intensidade azul.", image: imageAssets.lamb },
                        { name: "Lombo Grelhado 250g", note: "Corte robusto para amantes de carne.", image: imageAssets.grilled },
                        { name: "Lombo com Molho de Pimenta", note: "Calor controlado e textura rica.", image: imageAssets.creamySteak },
                        { name: "Lombo com Molho de Cogumelos", note: "Clássico cremoso da casa.", image: imageAssets.creamySteak },
                        { name: "Lombo com Molho Roquefort", note: "Opção luxuosa com perfil intenso.", image: imageAssets.lamb },
                        { name: "Espetada de Lombo", note: "Visual de fogo e serviço impactante.", image: imageAssets.terrace },
                        { name: "Black Pork", note: "Brasa premium com carater alentejano.", image: imageAssets.grilled }
                    ]
                }
            ]
        },
        entradas: {
            title: "Entradas",
            description: "Pequenos pratos para abrir a mesa com textura, cor e assinatura portuguesa.",
            mediaType: "image",
            mediaSrc: imageAssets.wine,
            groups: [
                {
                    title: "Start Here",
                    items: [
                        { name: "Bread", note: "Pão quente e rústico para abrir a refeição.", image: imageAssets.wine },
                        { name: "Cheese", note: "Seleção cremosa com toque português.", image: imageAssets.dessert },
                        { name: "Olives", note: "Azeitonas intensas com salinidade leve.", image: imageAssets.carrots },
                        { name: "Boiled Carrots Alentejana", note: "Cenouras alentejanas com perfume de ervas.", image: imageAssets.carrots },
                        { name: "Tábua de Enchidos", note: "Charcutaria para partilhar em ambiente premium.", image: imageAssets.exterior },
                        { name: "Grilled Sausage", note: "Linguiça na brasa com presença de fogo.", image: imageAssets.grilled },
                        { name: "Melon with Presunto", note: "Fresco, salgado e perfeito para abrir o apetite.", image: imageAssets.dessert },
                        { name: "Scrambled Eggs with Mushrooms", note: "Conforto cremoso com cogumelos.", image: imageAssets.creamySteak },
                        { name: "Scrambled Eggs with Sausage and Shrimps", note: "Misto intenso de terra e mar.", image: imageAssets.lamb },
                        { name: "Clams", note: "Toque costeiro para começar com força.", image: imageAssets.greens }
                    ]
                }
            ]
        },
        sobremesas: {
            title: "Sobremesas",
            description: "Final doce com um ar caseiro, elegante e alinhado com a atmosfera portuguesa da casa.",
            mediaType: "image",
            mediaSrc: imageAssets.dessert,
            groups: [
                {
                    title: "Doces da Casa",
                    items: [
                        { name: "Sericaia", note: "Clássico alentejano delicado e confortável.", image: imageAssets.dessert },
                        { name: "Arroz Doce", note: "Textura cremosa e final suave.", image: imageAssets.wine },
                        { name: "Mousse de Chocolate", note: "Final intenso e elegante.", image: imageAssets.dessert },
                        { name: "Pudim Caseiro", note: "Sobremesa clássica para fechar a experiência.", image: imageAssets.wine }
                    ]
                }
            ]
        }
    };

    const menuTranslations = {
        pt: {
            tradicional: {
                title: "Tradicional",
                description: "Peixe, acordas, sopas e porco preto com a identidade rustica da casa.",
                groups: [
                    {
                        title: "Peixe",
                        items: [
                            { name: "Camarao", note: "Sabor do mar com final delicado e textura rica." },
                            { name: "Ameijoas", note: "Ameijoas com carater costeiro e perfil salino." },
                            { name: "Acorda Alentejana", note: "Conforto alentejano em prato iconico." },
                            { name: "Sopa Alentejana", note: "Entrada quente e aromatica para noites tranquilas." }
                        ]
                    },
                    {
                        title: "Porco Preto",
                        items: [
                            { name: "Lombinhos a Alentejana com Coentros e Alhos", note: "Perfil herbal e autentico do sul." },
                            { name: "Lombinhos com Molho de Pimenta", note: "Final intenso e picante elegante." },
                            { name: "Lombinhos com Molho de Cogumelos", note: "Creme profundo com textura suave." },
                            { name: "Lombinhos com Molho Roquefort", note: "Molho envolvente e premium." },
                            { name: "Secretos", note: "Corte suculento e muito procurado." },
                            { name: "Plumas", note: "Tenras, delicadas e cheias de sabor." },
                            { name: "Lagartos", note: "Brasa viva e acabamento memoravel." },
                            { name: "Carne Alentejana", note: "Feita na frigideira com vinho branco, ameijoas e carne de porco." },
                            { name: "Espetada de Lombinho", note: "Apresentacao rustica com lado premium." }
                        ]
                    }
                ]
            },
            grelhados: {
                title: "Grelhados",
                description: "Carnes premium, cortes classicos e molhos encorpados servidos com visual de brasa.",
                groups: [
                    {
                        title: "Brasa Premium",
                        items: [
                            { name: "Costeleta de Borrego Grelhada", note: "Costeleta com perfil elegante e forte." },
                            { name: "Lombinhos Bifinhos a Alentejana com Coentros e Alhos", note: "Corte fino com assinatura tradicional." },
                            { name: "Lombinhos Grelhados", note: "Brasa direta e acabamento suculento." },
                            { name: "Lombinhos com Molho de Pimenta", note: "Molho vibrante e quente." },
                            { name: "Lombinhos com Molho de Cogumelos", note: "Camada cremosa e aromatica." },
                            { name: "Lombinhos com Molho Roquefort", note: "Perfil premium com intensidade azul." },
                            { name: "Lombo Grelhado 250g", note: "Corte robusto para amantes de carne." },
                            { name: "Lombo com Molho de Pimenta", note: "Calor controlado e textura rica." },
                            { name: "Lombo com Molho de Cogumelos", note: "Classico cremoso da casa." },
                            { name: "Lombo com Molho Roquefort", note: "Opcao luxuosa com perfil intenso." },
                            { name: "Espetada de Lombo", note: "Visual de fogo e servico impactante." },
                            { name: "Porco Preto", note: "Brasa premium com carater alentejano." }
                        ]
                    }
                ]
            },
            entradas: {
                title: "Entradas",
                description: "Pequenos pratos para abrir a mesa com textura, cor e assinatura portuguesa.",
                groups: [
                    {
                        title: "Comece Aqui",
                        items: [
                            { name: "Pao", note: "Pao quente e rustico para abrir a refeicao." },
                            { name: "Queijo", note: "Selecao cremosa com toque portugues." },
                            { name: "Azeitonas", note: "Azeitonas intensas com salinidade leve." },
                            { name: "Cenouras Cozidas a Alentejana", note: "Cenouras alentejanas com perfume de ervas." },
                            { name: "Tabua de Enchidos", note: "Charcutaria para partilhar em ambiente premium." },
                            { name: "Linguica Assada", note: "Linguica na brasa com presenca de fogo." },
                            { name: "Melao com Presunto", note: "Fresco, salgado e perfeito para abrir o apetite." },
                            { name: "Ovos Mexidos com Cogumelos", note: "Conforto cremoso com cogumelos." },
                            { name: "Ovos Mexidos com Linguica e Camarao", note: "Misto intenso de terra e mar." },
                            { name: "Ameijoas", note: "Toque costeiro para comecar com forca." }
                        ]
                    }
                ]
            },
            sobremesas: {
                title: "Sobremesas",
                description: "Final doce com um ar caseiro, elegante e alinhado com a atmosfera portuguesa da casa.",
                groups: [
                    {
                        title: "Doces da Casa",
                        items: [
                            { name: "Sericaia", note: "Classico alentejano delicado e confortavel." },
                            { name: "Arroz Doce", note: "Textura cremosa e final suave." },
                            { name: "Mousse de Chocolate", note: "Final intenso e elegante." },
                            { name: "Pudim Caseiro", note: "Sobremesa classica para fechar a experiencia." }
                        ]
                    }
                ]
            }
        },
        en: {
            tradicional: {
                title: "Traditional",
                description: "Fish, bread stews, soups and black pork with the house's rustic identity.",
                groups: [
                    {
                        title: "Fish",
                        items: [
                            { name: "Shrimps", note: "Sea flavour with a delicate finish and rich texture." },
                            { name: "Clams", note: "Coastal character with a gentle salty profile." },
                            { name: "Alentejo Acorda", note: "An iconic Alentejo comfort dish." },
                            { name: "Alentejo Soup", note: "A warm aromatic starter for relaxed evenings." }
                        ]
                    },
                    {
                        title: "Black Pork",
                        items: [
                            { name: "Tenderloin Alentejo Style with Coriander and Garlic", note: "Herbal and authentic southern flavour." },
                            { name: "Tenderloin with Pepper Sauce", note: "An elegant spicy finish." },
                            { name: "Tenderloin with Mushroom Sauce", note: "Deep creaminess with a soft texture." },
                            { name: "Tenderloin with Roquefort Sauce", note: "Rich premium sauce with character." },
                            { name: "Secretos", note: "A juicy cut guests always ask for." },
                            { name: "Plumas", note: "Tender, delicate and full of flavour." },
                            { name: "Lagartos", note: "Live-fire grilling with a memorable finish." },
                            { name: "Carne Alentejana", note: "Pork and clams cooked with white wine in a classic pan dish." },
                            { name: "Tenderloin Skewer", note: "Rustic presentation with a premium touch." }
                        ]
                    }
                ]
            },
            grelhados: {
                title: "Grilled",
                description: "Premium meats, classic cuts and rich sauces served with a live-fire look.",
                groups: [
                    {
                        title: "Premium Grill",
                        items: [
                            { name: "Grilled Lamb Chop", note: "A chop with an elegant and bold profile." },
                            { name: "Thin Tenderloin Alentejo Style with Coriander and Garlic", note: "A thin cut with a traditional signature." },
                            { name: "Grilled Tenderloin", note: "Direct fire and a juicy finish." },
                            { name: "Tenderloin with Pepper Sauce", note: "Vibrant and warming sauce." },
                            { name: "Tenderloin with Mushroom Sauce", note: "Creamy and aromatic layer." },
                            { name: "Tenderloin with Roquefort Sauce", note: "Premium profile with blue-cheese intensity." },
                            { name: "Grilled Loin 250g", note: "A robust cut for meat lovers." },
                            { name: "Loin with Pepper Sauce", note: "Balanced heat and rich texture." },
                            { name: "Loin with Mushroom Sauce", note: "A creamy house classic." },
                            { name: "Loin with Roquefort Sauce", note: "A luxurious option with strong flavour." },
                            { name: "Loin Skewer", note: "Fire-led presentation with real impact." },
                            { name: "Black Pork", note: "Premium grilling with Alentejo character." }
                        ]
                    }
                ]
            },
            entradas: {
                title: "Starters",
                description: "Small plates to open the table with texture, colour and Portuguese identity.",
                groups: [
                    {
                        title: "Start Here",
                        items: [
                            { name: "Bread", note: "Warm rustic bread to begin the meal." },
                            { name: "Cheese", note: "A creamy selection with a Portuguese touch." },
                            { name: "Olives", note: "Bold olives with light salinity." },
                            { name: "Alentejo Boiled Carrots", note: "Carrots with herbs and Alentejo character." },
                            { name: "Cured Meat Board", note: "Charcuterie made for sharing in a premium setting." },
                            { name: "Grilled Sausage", note: "Sausage kissed by the grill flame." },
                            { name: "Melon with Cured Ham", note: "Fresh, salty and perfect to open the appetite." },
                            { name: "Scrambled Eggs with Mushrooms", note: "Creamy comfort with mushrooms." },
                            { name: "Scrambled Eggs with Sausage and Shrimps", note: "An intense land-and-sea mix." },
                            { name: "Clams", note: "A coastal touch to start with impact." }
                        ]
                    }
                ]
            },
            sobremesas: {
                title: "Desserts",
                description: "A sweet homemade finish aligned with the restaurant's Portuguese atmosphere.",
                groups: [
                    {
                        title: "House Desserts",
                        items: [
                            { name: "Sericaia", note: "A delicate comforting Alentejo classic." },
                            { name: "Rice Pudding", note: "Creamy texture with a soft finish." },
                            { name: "Chocolate Mousse", note: "An intense yet elegant ending." },
                            { name: "Homemade Flan", note: "A classic dessert to close the experience." }
                        ]
                    }
                ]
            }
        },
        es: {
            tradicional: {
                title: "Tradicional",
                description: "Pescado, acordas, sopas y cerdo negro con la identidad rustica de la casa.",
                groups: [
                    {
                        title: "Pescado",
                        items: [
                            { name: "Gambas", note: "Sabor a mar con final delicado y textura rica." },
                            { name: "Almejas", note: "Caracter costero con perfil salino suave." },
                            { name: "Acorda Alentejana", note: "Plato iconico de confort del Alentejo." },
                            { name: "Sopa Alentejana", note: "Entrada caliente y aromatica para noches tranquilas." }
                        ]
                    },
                    {
                        title: "Cerdo Negro",
                        items: [
                            { name: "Solomillo a la Alentejana con Cilantro y Ajo", note: "Perfil herbal y autentico del sur." },
                            { name: "Solomillo con Salsa de Pimienta", note: "Final intenso y elegante." },
                            { name: "Solomillo con Salsa de Champinones", note: "Crema profunda con textura suave." },
                            { name: "Solomillo con Salsa Roquefort", note: "Salsa envolvente y premium." },
                            { name: "Secretos", note: "Corte jugoso y muy pedido." },
                            { name: "Plumas", note: "Tiernas, delicadas y llenas de sabor." },
                            { name: "Lagartos", note: "Brasa viva y acabado memorable." },
                            { name: "Carne Alentejana", note: "Cerdo y almejas cocinados con vino blanco en sarten." },
                            { name: "Brocheta de Solomillo", note: "Presentacion rustica con toque premium." }
                        ]
                    }
                ]
            },
            grelhados: {
                title: "Parrilla",
                description: "Carnes premium, cortes clasicos y salsas intensas servidos con presencia de brasa.",
                groups: [
                    {
                        title: "Parrilla Premium",
                        items: [
                            { name: "Costeleta de Cordero a la Parrilla", note: "Una costeleta con perfil elegante y potente." },
                            { name: "Solomillo Fino a la Alentejana con Cilantro y Ajo", note: "Corte fino con firma tradicional." },
                            { name: "Solomillo a la Parrilla", note: "Brasa directa y acabado jugoso." },
                            { name: "Solomillo con Salsa de Pimienta", note: "Salsa viva y caliente." },
                            { name: "Solomillo con Salsa de Champinones", note: "Capa cremosa y aromatica." },
                            { name: "Solomillo con Salsa Roquefort", note: "Perfil premium con intensidad azul." },
                            { name: "Lomo a la Parrilla 250g", note: "Corte robusto para amantes de la carne." },
                            { name: "Lomo con Salsa de Pimienta", note: "Calor equilibrado y textura rica." },
                            { name: "Lomo con Salsa de Champinones", note: "Clasico cremoso de la casa." },
                            { name: "Lomo con Salsa Roquefort", note: "Opcion lujosa con sabor intenso." },
                            { name: "Brocheta de Lomo", note: "Presentacion al fuego con impacto." },
                            { name: "Cerdo Negro", note: "Parrilla premium con caracter alentejano." }
                        ]
                    }
                ]
            },
            entradas: {
                title: "Entrantes",
                description: "Pequenos platos para abrir la mesa con textura, color y alma portuguesa.",
                groups: [
                    {
                        title: "Empiece Aqui",
                        items: [
                            { name: "Pan", note: "Pan caliente y rustico para abrir la comida." },
                            { name: "Queso", note: "Seleccion cremosa con toque portugues." },
                            { name: "Aceitunas", note: "Aceitunas intensas con salinidad ligera." },
                            { name: "Zanahorias Cocidas a la Alentejana", note: "Zanahorias con hierbas y perfume del Alentejo." },
                            { name: "Tabla de Embutidos", note: "Charcuteria para compartir en un ambiente premium." },
                            { name: "Salchicha a la Parrilla", note: "Salchicha marcada por la brasa." },
                            { name: "Melon con Jamon", note: "Fresco, salado y perfecto para abrir el apetito." },
                            { name: "Huevos Revueltos con Champinones", note: "Confort cremoso con champinones." },
                            { name: "Huevos Revueltos con Salchicha y Gambas", note: "Mezcla intensa de tierra y mar." },
                            { name: "Almejas", note: "Toque costero para empezar con fuerza." }
                        ]
                    }
                ]
            },
            sobremesas: {
                title: "Postres",
                description: "Un final dulce y casero alineado con la atmosfera portuguesa del restaurante.",
                groups: [
                    {
                        title: "Postres de la Casa",
                        items: [
                            { name: "Sericaia", note: "Clasico delicado y reconfortante del Alentejo." },
                            { name: "Arroz con Leche", note: "Textura cremosa y final suave." },
                            { name: "Mousse de Chocolate", note: "Final intenso y elegante." },
                            { name: "Flan Casero", note: "Postre clasico para cerrar la experiencia." }
                        ]
                    }
                ]
            }
        },
        fr: {
            tradicional: {
                title: "Traditionnel",
                description: "Poisson, acordas, soupes et porc noir avec l'identite rustique de la maison.",
                groups: [
                    {
                        title: "Poisson",
                        items: [
                            { name: "Crevettes", note: "Saveur marine avec une fin delicate et une texture riche." },
                            { name: "Palourdes", note: "Caractere cotier avec une salinite douce." },
                            { name: "Acorda Alentejana", note: "Plat reconfortant iconique de l'Alentejo." },
                            { name: "Soupe Alentejana", note: "Entree chaude et aromatique pour des soirees paisibles." }
                        ]
                    },
                    {
                        title: "Porc Noir",
                        items: [
                            { name: "Filet Mignon a l'Alentejana avec Coriandre et Ail", note: "Profil herbace et authentique du sud." },
                            { name: "Filet Mignon Sauce Poivre", note: "Final intense et elegant." },
                            { name: "Filet Mignon Sauce Champignons", note: "Creme profonde a la texture douce." },
                            { name: "Filet Mignon Sauce Roquefort", note: "Sauce riche et premium." },
                            { name: "Secretos", note: "Une coupe juteuse tres recherchee." },
                            { name: "Plumas", note: "Tendres, delicates et pleines de saveur." },
                            { name: "Lagartos", note: "Cuisson a la braise et finition memorables." },
                            { name: "Carne Alentejana", note: "Porc et palourdes cuits au vin blanc dans une poele classique." },
                            { name: "Brochette de Filet", note: "Presentation rustique avec touche premium." }
                        ]
                    }
                ]
            },
            grelhados: {
                title: "Grillades",
                description: "Viandes premium, coupes classiques et sauces riches servies avec l'esprit braise.",
                groups: [
                    {
                        title: "Grill Premium",
                        items: [
                            { name: "Cotelette d'Agneau Grillee", note: "Une cotelette au profil elegant et puissant." },
                            { name: "Fines Tranches de Filet a l'Alentejana", note: "Coupe fine avec signature traditionnelle." },
                            { name: "Filet Grille", note: "Braise directe et finition juteuse." },
                            { name: "Filet Sauce Poivre", note: "Sauce vive et chaleureuse." },
                            { name: "Filet Sauce Champignons", note: "Couche cremeuse et aromatique." },
                            { name: "Filet Sauce Roquefort", note: "Profil premium avec intensite bleue." },
                            { name: "Longe Grillee 250g", note: "Coupe robuste pour amateurs de viande." },
                            { name: "Longe Sauce Poivre", note: "Chaleur equilibree et texture riche." },
                            { name: "Longe Sauce Champignons", note: "Classique cremeux de la maison." },
                            { name: "Longe Sauce Roquefort", note: "Option luxueuse au gout intense." },
                            { name: "Brochette de Longe", note: "Presentation au feu tres impactante." },
                            { name: "Porc Noir", note: "Grill premium avec caractere alentejan." }
                        ]
                    }
                ]
            },
            entradas: {
                title: "Entrees",
                description: "Petites assiettes pour ouvrir la table avec texture, couleur et signature portugaise.",
                groups: [
                    {
                        title: "Commencez Ici",
                        items: [
                            { name: "Pain", note: "Pain chaud et rustique pour commencer le repas." },
                            { name: "Fromage", note: "Selection cremeuse avec touche portugaise." },
                            { name: "Olives", note: "Olives intenses a la salinite legere." },
                            { name: "Carottes Alentejana", note: "Carottes parfumees aux herbes de l'Alentejo." },
                            { name: "Planche de Charcuterie", note: "Charcuterie a partager dans une ambiance premium." },
                            { name: "Saucisse Grillee", note: "Saucisse marquee par la braise." },
                            { name: "Melon au Jambon", note: "Frais, sale et parfait pour ouvrir l'appetit." },
                            { name: "Oeufs Brouilles aux Champignons", note: "Confort cremeux aux champignons." },
                            { name: "Oeufs Brouilles a la Saucisse et Crevettes", note: "Melange intense terre et mer." },
                            { name: "Palourdes", note: "Touche cotiere pour commencer avec impact." }
                        ]
                    }
                ]
            },
            sobremesas: {
                title: "Desserts",
                description: "Une fin sucree et maison en accord avec l'atmosphere portugaise du restaurant.",
                groups: [
                    {
                        title: "Desserts Maison",
                        items: [
                            { name: "Sericaia", note: "Classique delicat et reconfortant de l'Alentejo." },
                            { name: "Riz au Lait", note: "Texture cremeuse et finale douce." },
                            { name: "Mousse au Chocolat", note: "Une fin intense et elegante." },
                            { name: "Flan Maison", note: "Dessert classique pour cloturer l'experience." }
                        ]
                    }
                ]
            }
        },
        de: {
            tradicional: {
                title: "Traditionell",
                description: "Fisch, Broteintopf, Suppen und schwarzes Schwein mit rustikaler Hausidentitat.",
                groups: [
                    {
                        title: "Fisch",
                        items: [
                            { name: "Garnelen", note: "Meeresgeschmack mit feinem Abgang und reicher Textur." },
                            { name: "Muscheln", note: "Kustennote mit sanft salzigem Profil." },
                            { name: "Acorda Alentejana", note: "Ein ikonisches Wohlgericht aus dem Alentejo." },
                            { name: "Alentejo-Suppe", note: "Warme aromatische Vorspeise fur ruhige Abende." }
                        ]
                    },
                    {
                        title: "Schwarzes Schwein",
                        items: [
                            { name: "Schweinefilet nach Alentejo-Art mit Koriander und Knoblauch", note: "Krauterig und authentisch im Sudstil." },
                            { name: "Schweinefilet mit Pfeffersauce", note: "Intensiver und eleganter Abschluss." },
                            { name: "Schweinefilet mit Pilzsauce", note: "Tiefe Cremigkeit mit sanfter Textur." },
                            { name: "Schweinefilet mit Roquefortsauce", note: "Reiche Premium-Sauce mit Charakter." },
                            { name: "Secretos", note: "Ein saftiger, sehr gefragter Zuschnitt." },
                            { name: "Plumas", note: "Zart, fein und voller Geschmack." },
                            { name: "Lagartos", note: "Lebendiges Grillfeuer mit unvergesslichem Finish." },
                            { name: "Carne Alentejana", note: "Schweinefleisch und Muscheln in Weisswein klassisch aus der Pfanne." },
                            { name: "Filetspies", note: "Rustikale Prasentation mit Premium-Note." }
                        ]
                    }
                ]
            },
            grelhados: {
                title: "Gegrillt",
                description: "Premium-Fleisch, klassische Zuschnitte und kraftige Saucen mit Glut-Charakter.",
                groups: [
                    {
                        title: "Premium-Grill",
                        items: [
                            { name: "Gegrilltes Lammkotelett", note: "Ein Kotelett mit elegantem und starkem Profil." },
                            { name: "Dunne Filetstreifen nach Alentejo-Art", note: "Feiner Zuschnitt mit traditioneller Handschrift." },
                            { name: "Gegrilltes Schweinefilet", note: "Direkte Glut und saftiger Abschluss." },
                            { name: "Schweinefilet mit Pfeffersauce", note: "Lebendige, warme Sauce." },
                            { name: "Schweinefilet mit Pilzsauce", note: "Cremige und aromatische Schicht." },
                            { name: "Schweinefilet mit Roquefortsauce", note: "Premium-Profil mit Blauschimmel-Intensitat." },
                            { name: "Gegrillte Lende 250g", note: "Krftiger Zuschnitt fur Fleischliebhaber." },
                            { name: "Lende mit Pfeffersauce", note: "Ausgewogene Scharfe und reiche Textur." },
                            { name: "Lende mit Pilzsauce", note: "Cremiger Hausklassiker." },
                            { name: "Lende mit Roquefortsauce", note: "Luxuriose Option mit intensivem Geschmack." },
                            { name: "Lendenspiess", note: "Feuergepragte Prasentation mit Wirkung." },
                            { name: "Schwarzes Schwein", note: "Premium-Grill mit Alentejo-Charakter." }
                        ]
                    }
                ]
            },
            entradas: {
                title: "Vorspeisen",
                description: "Kleine Teller zum Auftakt mit Textur, Farbe und portugiesischer Handschrift.",
                groups: [
                    {
                        title: "Hier Beginnen",
                        items: [
                            { name: "Brot", note: "Warmes rustikales Brot zum Start der Mahlzeit." },
                            { name: "Kase", note: "Cremige Auswahl mit portugiesischer Note." },
                            { name: "Oliven", note: "Intensive Oliven mit leichter Salzigkeit." },
                            { name: "Karotten nach Alentejo-Art", note: "Karotten mit Krautern und Alentejo-Duft." },
                            { name: "Wurst- und Schinkenbrett", note: "Charcuterie zum Teilen in Premium-Atmosphare." },
                            { name: "Gegrillte Wurst", note: "Wurst mit deutlicher Glutnote." },
                            { name: "Melone mit Schinken", note: "Frisch, salzig und perfekt fur den Appetit." },
                            { name: "Ruhrrei mit Pilzen", note: "Cremiger Komfort mit Pilzen." },
                            { name: "Ruhrrei mit Wurst und Garnelen", note: "Intensive Mischung aus Land und Meer." },
                            { name: "Muscheln", note: "Kustenakzent fur einen starken Start." }
                        ]
                    }
                ]
            },
            sobremesas: {
                title: "Desserts",
                description: "Ein susser hausgemachter Abschluss im Einklang mit der portugiesischen Atmosphare.",
                groups: [
                    {
                        title: "Hausdesserts",
                        items: [
                            { name: "Sericaia", note: "Ein zarter, wohltuender Klassiker aus dem Alentejo." },
                            { name: "Milchreis", note: "Cremige Textur mit sanftem Abschluss." },
                            { name: "Schokoladenmousse", note: "Intensiver und eleganter Abschluss." },
                            { name: "Hausgemachter Pudding", note: "Klassisches Dessert als runder Abschluss." }
                        ]
                    }
                ]
            }
        },
        it: {
            tradicional: {
                title: "Tradizionale",
                description: "Pesce, acorda, zuppe e maiale nero con l'identita rustica della casa.",
                groups: [
                    {
                        title: "Pesce",
                        items: [
                            { name: "Gamberi", note: "Sapore di mare con finale delicato e consistenza ricca." },
                            { name: "Vongole", note: "Carattere costiero con profilo salino leggero." },
                            { name: "Acorda Alentejana", note: "Piatto iconico e confortevole dell'Alentejo." },
                            { name: "Zuppa Alentejana", note: "Antipasto caldo e aromatico per serate tranquille." }
                        ]
                    },
                    {
                        title: "Maiale Nero",
                        items: [
                            { name: "Filetto all'Alentejana con Coriandolo e Aglio", note: "Profilo erbaceo e autentico del sud." },
                            { name: "Filetto con Salsa al Pepe", note: "Finale intenso ed elegante." },
                            { name: "Filetto con Salsa ai Funghi", note: "Cremosita profonda con consistenza morbida." },
                            { name: "Filetto con Salsa al Roquefort", note: "Salsa avvolgente e premium." },
                            { name: "Secretos", note: "Taglio succoso e molto richiesto." },
                            { name: "Plumas", note: "Tenere, delicate e piene di sapore." },
                            { name: "Lagartos", note: "Brace viva e finitura memorabile." },
                            { name: "Carne Alentejana", note: "Maiale e vongole cotti con vino bianco in padella." },
                            { name: "Spiedino di Filetto", note: "Presentazione rustica con tocco premium." }
                        ]
                    }
                ]
            },
            grelhados: {
                title: "Alla Griglia",
                description: "Carni premium, tagli classici e salse ricche serviti con presenza di brace.",
                groups: [
                    {
                        title: "Griglia Premium",
                        items: [
                            { name: "Costolette di Agnello alla Griglia", note: "Costolette dal profilo elegante e deciso." },
                            { name: "Filetto Sottile all'Alentejana", note: "Taglio sottile con firma tradizionale." },
                            { name: "Filetto alla Griglia", note: "Brace diretta e finitura succosa." },
                            { name: "Filetto con Salsa al Pepe", note: "Salsa viva e calda." },
                            { name: "Filetto con Salsa ai Funghi", note: "Strato cremoso e aromatico." },
                            { name: "Filetto con Salsa al Roquefort", note: "Profilo premium con intensita blu." },
                            { name: "Lombo alla Griglia 250g", note: "Taglio robusto per chi ama la carne." },
                            { name: "Lombo con Salsa al Pepe", note: "Calore equilibrato e consistenza ricca." },
                            { name: "Lombo con Salsa ai Funghi", note: "Classico cremoso della casa." },
                            { name: "Lombo con Salsa al Roquefort", note: "Opzione lussuosa dal gusto intenso." },
                            { name: "Spiedino di Lombo", note: "Presentazione al fuoco di grande impatto." },
                            { name: "Maiale Nero", note: "Griglia premium con carattere alentejano." }
                        ]
                    }
                ]
            },
            entradas: {
                title: "Antipasti",
                description: "Piccoli piatti per aprire la tavola con consistenza, colore e firma portoghese.",
                groups: [
                    {
                        title: "Inizia Qui",
                        items: [
                            { name: "Pane", note: "Pane caldo e rustico per iniziare il pasto." },
                            { name: "Formaggio", note: "Selezione cremosa con tocco portoghese." },
                            { name: "Olive", note: "Olive intense con leggera sapidita." },
                            { name: "Carote all'Alentejana", note: "Carote con erbe e profumo dell'Alentejo." },
                            { name: "Tagliere di Salumi", note: "Salumi da condividere in un'atmosfera premium." },
                            { name: "Salsiccia alla Griglia", note: "Salsiccia segnata dalla brace." },
                            { name: "Melone con Prosciutto", note: "Fresco, sapido e perfetto per aprire l'appetito." },
                            { name: "Uova Strapazzate con Funghi", note: "Comfort cremoso con funghi." },
                            { name: "Uova Strapazzate con Salsiccia e Gamberi", note: "Mix intenso di terra e mare." },
                            { name: "Vongole", note: "Tocco costiero per iniziare con forza." }
                        ]
                    }
                ]
            },
            sobremesas: {
                title: "Dessert",
                description: "Un finale dolce e casalingo in sintonia con l'atmosfera portoghese del ristorante.",
                groups: [
                    {
                        title: "Dolci della Casa",
                        items: [
                            { name: "Sericaia", note: "Classico delicato e confortante dell'Alentejo." },
                            { name: "Riso Dolce", note: "Texture cremosa e finale morbido." },
                            { name: "Mousse al Cioccolato", note: "Finale intenso ed elegante." },
                            { name: "Budino Fatto in Casa", note: "Dessert classico per chiudere l'esperienza." }
                        ]
                    }
                ]
            }
        },
        nl: {
            tradicional: {
                title: "Traditioneel",
                description: "Vis, acorda, soepen en zwart varken met de rustieke identiteit van het huis.",
                groups: [
                    {
                        title: "Vis",
                        items: [
                            { name: "Garnalen", note: "Zeesmaak met een delicate afdronk en rijke textuur." },
                            { name: "Kokkels", note: "Kustkarakter met een lichte zilte toets." },
                            { name: "Acorda Alentejana", note: "Een iconisch troostgerecht uit de Alentejo." },
                            { name: "Alentejo-soep", note: "Warme aromatische starter voor rustige avonden." }
                        ]
                    },
                    {
                        title: "Zwart Varken",
                        items: [
                            { name: "Varkenshaas op Alentejo-wijze met Koriander en Knoflook", note: "Kruidig en authentiek zuidelijk karakter." },
                            { name: "Varkenshaas met Pepersaus", note: "Intense maar elegante afdronk." },
                            { name: "Varkenshaas met Champignonsaus", note: "Diepe romigheid met zachte textuur." },
                            { name: "Varkenshaas met Roquefortsaus", note: "Rijke premium saus met karakter." },
                            { name: "Secretos", note: "Een sappige snede waar gasten vaak om vragen." },
                            { name: "Plumas", note: "Mals, verfijnd en vol smaak." },
                            { name: "Lagartos", note: "Levend vuur en een memorabele afwerking." },
                            { name: "Carne Alentejana", note: "Varkensvlees en kokkels bereid met witte wijn in een klassiek pannengerecht." },
                            { name: "Varkenshaasspies", note: "Rustieke presentatie met premium touch." }
                        ]
                    }
                ]
            },
            grelhados: {
                title: "Gegrild",
                description: "Premium vlees, klassieke sneden en volle sauzen met uitstraling van open vuur.",
                groups: [
                    {
                        title: "Premium Grill",
                        items: [
                            { name: "Gegrilde Lamskotelet", note: "Een kotelet met een elegant en krachtig profiel." },
                            { name: "Dunne Varkenshaas op Alentejo-wijze", note: "Dunne snede met traditionele signatuur." },
                            { name: "Gegrilde Varkenshaas", note: "Direct vuur en sappige afwerking." },
                            { name: "Varkenshaas met Pepersaus", note: "Levendige en warme saus." },
                            { name: "Varkenshaas met Champignonsaus", note: "Romige en aromatische laag." },
                            { name: "Varkenshaas met Roquefortsaus", note: "Premium profiel met blauwe intensiteit." },
                            { name: "Gegrilde Lende 250g", note: "Stevige snede voor vleesliefhebbers." },
                            { name: "Lende met Pepersaus", note: "Gebalanceerde warmte en rijke textuur." },
                            { name: "Lende met Champignonsaus", note: "Een romige klassieker van het huis." },
                            { name: "Lende met Roquefortsaus", note: "Luxe optie met uitgesproken smaak." },
                            { name: "Lendespies", note: "Vuurgedreven presentatie met impact." },
                            { name: "Zwart Varken", note: "Premium grill met karakter uit de Alentejo." }
                        ]
                    }
                ]
            },
            entradas: {
                title: "Voorgerechten",
                description: "Kleine borden om de tafel te openen met textuur, kleur en Portugese signatuur.",
                groups: [
                    {
                        title: "Begin Hier",
                        items: [
                            { name: "Brood", note: "Warm rustiek brood om de maaltijd te beginnen." },
                            { name: "Kaas", note: "Romige selectie met Portugese toets." },
                            { name: "Olijven", note: "Intense olijven met lichte ziltigheid." },
                            { name: "Alentejo-wortels", note: "Wortels met kruiden en Alentejo-geur." },
                            { name: "Vleeswarenplank", note: "Charcuterie om te delen in een premium sfeer." },
                            { name: "Gegrilde Worst", note: "Worst met duidelijke grilltoets." },
                            { name: "Meloen met Ham", note: "Fris, zout en perfect om de eetlust te openen." },
                            { name: "Roerei met Champignons", note: "Romig comfort met champignons." },
                            { name: "Roerei met Worst en Garnalen", note: "Intense mix van land en zee." },
                            { name: "Kokkels", note: "Kusttoets om sterk te beginnen." }
                        ]
                    }
                ]
            },
            sobremesas: {
                title: "Desserts",
                description: "Een zoete huisgemaakte afsluiting in lijn met de Portugese sfeer van het restaurant.",
                groups: [
                    {
                        title: "Desserts van het Huis",
                        items: [
                            { name: "Sericaia", note: "Een delicate en troostende klassieker uit de Alentejo." },
                            { name: "Rijstpap", note: "Romige textuur met zachte afdronk." },
                            { name: "Chocolademousse", note: "Intense maar elegante afsluiting." },
                            { name: "Huisgemaakte Pudding", note: "Klassiek dessert om de ervaring af te sluiten." }
                        ]
                    }
                ]
            }
        }
    };

    const elements = {
        navbar: document.querySelector(".navbar"),
        navBackdrop: document.querySelector(".nav-backdrop"),
        backToTop: document.querySelector(".back-to-top"),
        hamburger: document.querySelector(".hamburger"),
        navLinks: document.querySelector(".nav-links"),
        navItems: document.querySelectorAll(".nav-links a"),
        revealElements: document.querySelectorAll(".reveal, .reveal-up"),
        menuButtons: document.querySelectorAll(".menu-button"),
        modal: document.getElementById("menu-modal"),
        modalPanel: document.querySelector(".menu-modal-panel"),
        modalCloseButton: document.querySelector(".menu-modal-close"),
        modalTag: document.getElementById("menu-modal-tag"),
        modalTitle: document.getElementById("menu-modal-title"),
        modalDescription: document.getElementById("menu-modal-description"),
        modalMedia: document.getElementById("menu-modal-media"),
        modalGroups: document.getElementById("menu-modal-groups"),
        modalCloseControls: document.querySelectorAll("[data-close-modal]"),
        gallerySlider: document.getElementById("gallery-slider"),
        galleryDots: document.getElementById("gallery-dots"),
        gallerySlides: document.querySelectorAll(".gallery-slide"),
        galleryControls: document.querySelectorAll(".gallery-control"),
        decorativeVideos: document.querySelectorAll(".hero-video, .section-video"),
        qrCodeImage: document.getElementById("qr-code-image"),
        reservationForm: document.getElementById("reservation-form"),
        reservationActions: document.getElementById("reservation-actions"),
        reservationSms: document.getElementById("reservation-sms"),
        reservationCall: document.getElementById("reservation-call"),
        formMessage: document.getElementById("form-message"),
        dateInput: document.getElementById("date"),
        languageSelect: document.getElementById("language-select"),
        metaDescription: document.getElementById("meta-description"),
        mapIframe: document.querySelector(".map-frame iframe"),
        contactAddressValue: document.querySelector(".contact-card .fa-location-dot + div span"),
        whatsappLinks: document.querySelectorAll('a[href*="wa.me/351920461581"]')
    };

    const copyBindings = {
        navStory: document.querySelector('[data-copy="nav.story"]'),
        navMenu: document.querySelector('[data-copy="nav.menu"]'),
        navGallery: document.querySelector('[data-copy="nav.gallery"]'),
        navBook: document.querySelector('[data-copy="nav.book"]'),
        heroKicker: document.querySelector('[data-copy="hero.kicker"]'),
        heroTitle: document.querySelector('[data-copy="hero.title"]'),
        heroSubtitle: document.querySelector('[data-copy="hero.subtitle"]'),
        heroPrimary: document.querySelector('[data-copy="hero.primaryCta"]'),
        heroSecondary: document.querySelector('[data-copy="hero.secondaryCta"]'),
        heroHighlight1: document.querySelector('[data-copy="hero.highlight1"]'),
        heroHighlight2: document.querySelector('[data-copy="hero.highlight2"]'),
        heroHighlight3: document.querySelector('[data-copy="hero.highlight3"]'),
        storyTag: document.querySelector('[data-copy="story.tag"]'),
        storyTitle: document.querySelector('[data-copy="story.title"]'),
        storyBody: document.querySelector('[data-copy="story.body"]'),
        storyPoint1Title: document.querySelector('[data-copy="story.point1Title"]'),
        storyPoint1Text: document.querySelector('[data-copy="story.point1Text"]'),
        storyPoint2Title: document.querySelector('[data-copy="story.point2Title"]'),
        storyPoint2Text: document.querySelector('[data-copy="story.point2Text"]'),
        storyPoint3Title: document.querySelector('[data-copy="story.point3Title"]'),
        storyPoint3Text: document.querySelector('[data-copy="story.point3Text"]'),
        storyBadgeTop: document.querySelector('[data-copy="story.badgeTop"]'),
        storyBadgeBottom: document.querySelector('[data-copy="story.badgeBottom"]'),
        menuTag: document.querySelector('[data-copy="menu.tag"]'),
        menuTitle: document.querySelector('[data-copy="menu.title"]'),
        menuIntro: document.querySelector('[data-copy="menu.intro"]'),
        menuButtonTraditional: document.querySelector('[data-copy="menu.buttonTraditional"]'),
        menuButtonGrilled: document.querySelector('[data-copy="menu.buttonGrilled"]'),
        menuButtonStarters: document.querySelector('[data-copy="menu.buttonStarters"]'),
        menuButtonDesserts: document.querySelector('[data-copy="menu.buttonDesserts"]'),
        fishTitle: document.querySelector('[data-copy="fish.title"]'),
        fishBody: document.querySelector('[data-copy="fish.body"]'),
        grillTitle: document.querySelector('[data-copy="grill.title"]'),
        grillBody: document.querySelector('[data-copy="grill.body"]'),
        blackPorkTitle: document.querySelector('[data-copy="blackPork.title"]'),
        blackPorkBody: document.querySelector('[data-copy="blackPork.body"]'),
        cinematicTag: document.querySelector('[data-copy="cinematic.tag"]'),
        cinematicTitle: document.querySelector('[data-copy="cinematic.title"]'),
        cinematicBody: document.querySelector('[data-copy="cinematic.body"]'),
        galleryTag: document.querySelector('[data-copy="gallery.tag"]'),
        galleryTitle: document.querySelector('[data-copy="gallery.title"]'),
        galleryIntro: document.querySelector('[data-copy="gallery.intro"]'),
        galleryLink: document.querySelector('[data-copy="gallery.link"]'),
        contactTag: document.querySelector('[data-copy="contact.tag"]'),
        contactTitle: document.querySelector('[data-copy="contact.title"]'),
        contactIntro: document.querySelector('[data-copy="contact.intro"]'),
        contactPhoneTitle: document.querySelector('[data-copy="contact.phoneTitle"]'),
        contactAddressTitle: document.querySelector('[data-copy="contact.addressTitle"]'),
        contactHoursTitle: document.querySelector('[data-copy="contact.hoursTitle"]'),
        contactHoursValue: document.querySelector('[data-copy="contact.hoursValue"]'),
        contactHoursNote: document.querySelector('[data-copy="contact.hoursNote"]'),
        contactPriceTitle: document.querySelector('[data-copy="contact.priceTitle"]'),
        contactPriceValue: document.querySelector('[data-copy="contact.priceValue"]'),
        contactPriceNote: document.querySelector('[data-copy="contact.priceNote"]'),
        formTitle: document.querySelector('[data-copy="form.title"]'),
        formSubtitle: document.querySelector('[data-copy="form.subtitle"]'),
        formName: document.querySelector('[data-copy="form.name"]'),
        formPhone: document.querySelector('[data-copy="form.phone"]'),
        formGuests: document.querySelector('[data-copy="form.guests"]'),
        formDate: document.querySelector('[data-copy="form.date"]'),
        formTime: document.querySelector('[data-copy="form.time"]'),
        formMessage: document.querySelector('[data-copy="form.message"]'),
        formSubmit: document.querySelector('[data-copy="form.submit"]'),
        formSms: document.querySelector('[data-copy="form.sms"]'),
        formCall: document.querySelector('[data-copy="form.call"]'),
        mapTag: document.querySelector('[data-copy="map.tag"]'),
        mapTitle: document.querySelector('[data-copy="map.title"]'),
        mapCopyTitle: document.querySelector('[data-copy="map.copyTitle"]'),
        mapCopyBody: document.querySelector('[data-copy="map.copyBody"]'),
        mapButton: document.querySelector('[data-copy="map.button"]'),
        footerText: document.querySelector('[data-copy="footer.text"]'),
        footerMenu: document.querySelector('[data-copy="footer.menu"]'),
        footerGallery: document.querySelector('[data-copy="footer.gallery"]'),
        footerBook: document.querySelector('[data-copy="footer.book"]'),
        footerCopy: document.querySelector('[data-copy="footer.copy"]')
    };

    const localeMap = {
        pt: "pt-PT",
        en: "en-GB",
        es: "es-ES",
        fr: "fr-FR",
        de: "de-DE",
        it: "it-IT",
        nl: "nl-NL"
    };

    let currentLanguage = "pt";
    let currentGalleryIndex = 0;
    let galleryIntervalId = null;
    let scrollTicking = false;
    let lastFocusedElement = null;
    let touchStartX = 0;
    let touchEndX = 0;
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function getLanguageCopy() {
        return uiCopy[currentLanguage] || uiCopy.pt;
    }

    function syncBusinessDetails() {
        const whatsappMessage = "Olá Tasca O Bernardo, gostaria de fazer uma reserva.";
        const whatsappHref = `https://wa.me/351920461581?text=${encodeURIComponent(whatsappMessage)}`;

        if (elements.contactAddressValue) {
            elements.contactAddressValue.textContent = "Avenida do Comércio 6, Boavista dos Pinheiros, Odemira";
        }

        elements.whatsappLinks.forEach((link) => {
            link.href = whatsappHref;
        });
    }

    function getTranslatedMenuCategory(categoryKey) {
        const baseCategory = menuData[categoryKey];
        if (!baseCategory) {
            return null;
        }

        const languageMenus = menuTranslations[currentLanguage] || menuTranslations.pt;
        const translatedCategory = languageMenus?.[categoryKey];

        if (!translatedCategory) {
            return baseCategory;
        }

        return {
            ...baseCategory,
            title: translatedCategory.title || baseCategory.title,
            description: translatedCategory.description || baseCategory.description,
            groups: baseCategory.groups.map((group, groupIndex) => {
                const translatedGroup = translatedCategory.groups?.[groupIndex];

                return {
                    ...group,
                    title: translatedGroup?.title || group.title,
                    items: group.items.map((item, itemIndex) => {
                        const translatedItem = translatedGroup?.items?.[itemIndex];

                        return {
                            ...item,
                            name: translatedItem?.name || item.name,
                            note: translatedItem?.note || item.note
                        };
                    })
                };
            })
        };
    }

    function getMenuToggleLabel(isOpen) {
        return isOpen ? "Close menu" : currentLanguage === "pt" ? "Abrir menu" : "Open menu";
    }

    function getFocusableElements(container) {
        if (!container) {
            return [];
        }

        return Array.from(
            container.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])')
        ).filter((element) => !element.closest("[hidden]"));
    }

    function syncFormFocusState() {
        const activeElement = document.activeElement;
        const isReservationFieldFocused =
            window.innerWidth <= 640 &&
            activeElement instanceof HTMLElement &&
            Boolean(activeElement.closest("#reservation-form"));

        document.body.classList.toggle("form-focused", isReservationFieldFocused);
    }

    function syncMotionPreferences() {
        const shouldReduceMotion = reducedMotionQuery.matches || Boolean(navigator.connection?.saveData);
        document.body.classList.toggle("reduced-complexity", shouldReduceMotion);

        elements.decorativeVideos.forEach((video) => {
            if (shouldReduceMotion) {
                video.pause();
                return;
            }

            const playAttempt = video.play();
            if (playAttempt?.catch) {
                playAttempt.catch(() => undefined);
            }
        });

        if (shouldReduceMotion || document.hidden) {
            stopGalleryAutoplay();
            return;
        }

        startGalleryAutoplay();
    }

    function getQrTargetUrl() {
        const whatsappFallback = "https://wa.me/351920461581?text=Ol%C3%A1%20Tasca%20O%20Bernardo,%20gostaria%20de%20fazer%20uma%20reserva.";

        if (!window.location.protocol.startsWith("http")) {
            return whatsappFallback;
        }

        const qrUrl = new URL(window.location.href);
        qrUrl.hash = "";
        qrUrl.searchParams.set("source", "qr");
        return qrUrl.toString();
    }

    function renderQrCode() {
        if (!elements.qrCodeImage) {
            return;
        }

        const targetUrl = getQrTargetUrl();
        elements.qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&margin=12&data=${encodeURIComponent(targetUrl)}`;
    }

    function setMenuState(isOpen) {
        if (!elements.hamburger || !elements.navLinks) {
            return;
        }

        elements.hamburger.classList.toggle("active", isOpen);
        elements.hamburger.setAttribute("aria-expanded", String(isOpen));
        elements.hamburger.setAttribute("aria-label", getMenuToggleLabel(isOpen));
        elements.navLinks.classList.toggle("active", isOpen);
        elements.navLinks.setAttribute("aria-hidden", String(window.innerWidth <= 860 ? !isOpen : false));
        if (elements.navBackdrop) {
            elements.navBackdrop.setAttribute("aria-hidden", String(!isOpen));
        }
        document.body.classList.toggle("menu-open", isOpen);
    }

    function applyTranslations(languageCode) {
        currentLanguage = uiCopy[languageCode] ? languageCode : "pt";
        const copy = getLanguageCopy();

        document.documentElement.lang = localeMap[currentLanguage] || "pt-PT";
        document.title = copy.title;
        if (elements.metaDescription) {
            elements.metaDescription.setAttribute("content", copy.description);
        }

        Object.entries(copyBindings).forEach(([key, node]) => {
            if (!node) {
                return;
            }

            const lookupKey = key.replace(/[A-Z]/g, (match) => match);
            const copyValue = copy[lookupKey];
            if (copyValue) {
                node.textContent = copyValue;
            }
        });

        if (elements.hamburger) {
            const isExpanded = elements.hamburger.getAttribute("aria-expanded") === "true";
            elements.hamburger.setAttribute("aria-label", getMenuToggleLabel(isExpanded));
        }

        syncBusinessDetails();

        elements.menuButtons.forEach((button) => {
            const category = button.dataset.category;
            if (!category || !menuData[category]) {
                return;
            }

            if (button.classList.contains("active") && !elements.modal.hidden) {
                openMenuModal(category);
            }
        });
    }

    function renderModalMedia(category) {
        elements.modalMedia.innerHTML = "";

        if (category.mediaType === "video") {
            const video = document.createElement("video");
            video.src = category.mediaSrc;
            video.autoplay = true;
            video.muted = true;
            video.loop = true;
            video.playsInline = true;
            elements.modalMedia.appendChild(video);
            return;
        }

        const image = document.createElement("img");
        image.src = category.mediaSrc;
        image.alt = category.title;
        elements.modalMedia.appendChild(image);
    }

    function renderModalGroups(category) {
        elements.modalGroups.innerHTML = "";

        category.groups.forEach((group) => {
            const groupElement = document.createElement("section");
            groupElement.className = "menu-group";

            const heading = document.createElement("h4");
            heading.textContent = group.title;

            const grid = document.createElement("div");
            grid.className = "menu-grid";

            group.items.forEach((item) => {
                const card = document.createElement("article");
                card.className = "menu-item-card";
                card.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <strong>${item.name}</strong>
                        <span>${item.note}</span>
                    </div>
                `;
                grid.appendChild(card);
            });

            groupElement.append(heading, grid);
            elements.modalGroups.appendChild(groupElement);
        });
    }

    function updateMenuButtonState(openCategoryKey = null) {
        elements.menuButtons.forEach((button) => {
            const isActive = button.classList.contains("active");
            const isExpanded = button.dataset.category === openCategoryKey && !elements.modal.hidden;
            button.setAttribute("aria-controls", "menu-modal");
            button.setAttribute("aria-haspopup", "dialog");
            button.setAttribute("aria-pressed", String(isActive));
            button.setAttribute("aria-expanded", String(isExpanded));
        });
    }

    function openMenuModal(categoryKey) {
        const category = getTranslatedMenuCategory(categoryKey);
        if (!category || !elements.modal) {
            return;
        }

        const copy = getLanguageCopy();
        lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        renderModalMedia(category);
        renderModalGroups(category);

        elements.modalTag.textContent = copy.modalTag;
        elements.modalTitle.textContent = category.title;
        elements.modalDescription.textContent = category.description;
        elements.modal.hidden = false;
        document.body.classList.add("modal-open");
        updateMenuButtonState(categoryKey);

        window.setTimeout(() => {
            elements.modalCloseButton?.focus();
        }, 30);
    }

    function closeMenuModal() {
        if (!elements.modal) {
            return;
        }

        elements.modal.hidden = true;
        document.body.classList.remove("modal-open");
        updateMenuButtonState();

        if (lastFocusedElement) {
            lastFocusedElement.focus();
            lastFocusedElement = null;
        }
    }

    function updateActiveMenuButton(categoryKey) {
        elements.menuButtons.forEach((button) => {
            button.classList.toggle("active", button.dataset.category === categoryKey);
        });

        updateMenuButtonState(categoryKey);
    }

    function buildGalleryDots() {
        if (!elements.galleryDots || !elements.gallerySlides.length) {
            return;
        }

        elements.galleryDots.innerHTML = "";

        elements.gallerySlides.forEach((_slide, index) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.className = "gallery-dot";
            dot.setAttribute("aria-label", `Slide ${index + 1}`);
            dot.dataset.index = String(index);
            dot.addEventListener("click", () => {
                updateGallery(index);
                stopGalleryAutoplay();
                syncMotionPreferences();
            });
            elements.galleryDots.appendChild(dot);
        });
    }

    function updateGallery(index) {
        const slidesCount = elements.gallerySlides.length;
        if (!slidesCount) {
            return;
        }

        currentGalleryIndex = (index + slidesCount) % slidesCount;
        elements.gallerySlides.forEach((slide, slideIndex) => {
            const isActive = slideIndex === currentGalleryIndex;
            slide.classList.toggle("is-active", isActive);
            slide.setAttribute("aria-hidden", String(!isActive));
        });

        if (elements.galleryDots) {
            Array.from(elements.galleryDots.children).forEach((dot, dotIndex) => {
                const isActive = dotIndex === currentGalleryIndex;
                dot.classList.toggle("is-active", isActive);
                dot.setAttribute("aria-pressed", String(isActive));
            });
        }
    }

    function startGalleryAutoplay() {
        if (galleryIntervalId || !elements.gallerySlides.length || reducedMotionQuery.matches || document.hidden) {
            return;
        }

        galleryIntervalId = window.setInterval(() => {
            updateGallery(currentGalleryIndex + 1);
        }, 4200);
    }

    function stopGalleryAutoplay() {
        if (!galleryIntervalId) {
            return;
        }

        window.clearInterval(galleryIntervalId);
        galleryIntervalId = null;
    }

    function handleScroll() {
        const scrollY = window.scrollY;

        if (elements.navbar) {
            elements.navbar.classList.toggle("scrolled", scrollY > 30);
        }

        if (elements.backToTop) {
            elements.backToTop.classList.toggle("show", scrollY > 540);
        }
    }

    function setFieldState(field, isInvalid) {
        field.setAttribute("aria-invalid", String(isInvalid));
    }

    function getPreferredLanguage() {
        const storedLanguage = window.localStorage.getItem("preferred-language");
        if (storedLanguage && uiCopy[storedLanguage]) {
            return storedLanguage;
        }

        const browserLanguage = navigator.language?.slice(0, 2).toLowerCase();
        return uiCopy[browserLanguage] ? browserLanguage : "pt";
    }

    if (elements.dateInput) {
        elements.dateInput.min = new Date().toISOString().split("T")[0];
    }

    if (elements.hamburger) {
        elements.hamburger.addEventListener("click", () => {
            const isOpen = elements.hamburger.getAttribute("aria-expanded") === "true";
            setMenuState(!isOpen);
        });
    }

    if (elements.navBackdrop) {
        elements.navBackdrop.addEventListener("click", () => setMenuState(false));
    }

    elements.navItems.forEach((item) => {
        item.addEventListener("click", () => setMenuState(false));
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 860) {
            setMenuState(false);
        }

        syncFormFocusState();
    });

    window.addEventListener("scroll", () => {
        if (!scrollTicking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenuModal();
            setMenuState(false);
            return;
        }

        if (event.key === "Tab" && elements.modal && !elements.modal.hidden) {
            const focusableElements = getFocusableElements(elements.modalPanel);

            if (!focusableElements.length) {
                event.preventDefault();
                elements.modalPanel?.focus();
                return;
            }

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    });

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries, revealObserver) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        elements.revealElements.forEach((element) => observer.observe(element));
    } else {
        elements.revealElements.forEach((element) => element.classList.add("active"));
    }

    elements.menuButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const categoryKey = button.dataset.category;
            updateActiveMenuButton(categoryKey);
            openMenuModal(categoryKey);
        });
    });

    elements.modalCloseControls.forEach((control) => {
        control.addEventListener("click", closeMenuModal);
    });

    elements.galleryControls.forEach((control) => {
        control.addEventListener("click", () => {
            const direction = control.dataset.direction === "prev" ? -1 : 1;
            updateGallery(currentGalleryIndex + direction);
            stopGalleryAutoplay();
            syncMotionPreferences();
        });
    });

    if (elements.gallerySlider) {
        elements.gallerySlider.addEventListener("mouseenter", stopGalleryAutoplay);
        elements.gallerySlider.addEventListener("mouseleave", syncMotionPreferences);
        elements.gallerySlider.addEventListener("focusin", stopGalleryAutoplay);
        elements.gallerySlider.addEventListener("focusout", () => {
            window.setTimeout(syncMotionPreferences, 0);
        });
        elements.gallerySlider.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                updateGallery(currentGalleryIndex - 1);
                stopGalleryAutoplay();
                syncMotionPreferences();
            }

            if (event.key === "ArrowRight") {
                event.preventDefault();
                updateGallery(currentGalleryIndex + 1);
                stopGalleryAutoplay();
                syncMotionPreferences();
            }
        });
        elements.gallerySlider.addEventListener(
            "touchstart",
            (event) => {
                touchStartX = event.changedTouches[0].clientX;
                touchEndX = touchStartX;
            },
            { passive: true }
        );
        elements.gallerySlider.addEventListener(
            "touchmove",
            (event) => {
                touchEndX = event.changedTouches[0].clientX;
            },
            { passive: true }
        );
        elements.gallerySlider.addEventListener("touchend", () => {
            const swipeDistance = touchEndX - touchStartX;

            if (Math.abs(swipeDistance) < 40) {
                return;
            }

            updateGallery(currentGalleryIndex + (swipeDistance > 0 ? -1 : 1));
            stopGalleryAutoplay();
            syncMotionPreferences();
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const href = anchor.getAttribute("href");
            if (!href || href === "#") {
                return;
            }

            const target = document.querySelector(href);
            if (!target) {
                return;
            }

            event.preventDefault();
            const offset = elements.navbar?.offsetHeight || 0;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset + 8;
            window.scrollTo({ top, behavior: "smooth" });
        });
    });

    if (elements.languageSelect) {
        elements.languageSelect.value = getPreferredLanguage();
        elements.languageSelect.addEventListener("change", (event) => {
            applyTranslations(event.target.value);
            window.localStorage.setItem("preferred-language", event.target.value);
        });
    }

    document.addEventListener("visibilitychange", syncMotionPreferences);
    document.addEventListener("focusin", syncFormFocusState);
    document.addEventListener("focusout", () => {
        window.setTimeout(syncFormFocusState, 0);
    });
    if (typeof reducedMotionQuery.addEventListener === "function") {
        reducedMotionQuery.addEventListener("change", syncMotionPreferences);
    }

    buildGalleryDots();
    renderQrCode();
    handleScroll();
    updateGallery(0);
    applyTranslations(getPreferredLanguage());
    syncBusinessDetails();
    syncMotionPreferences();
    syncFormFocusState();

    if (!elements.reservationForm || !elements.formMessage) {
        return;
    }

    const fieldsToWatch = elements.reservationForm.querySelectorAll("input, select, textarea");
    const phoneField = document.getElementById("phone");
    const targetNumber = "920461581";

    fieldsToWatch.forEach((field) => {
        field.addEventListener("input", () => setFieldState(field, false));
        field.addEventListener("change", () => setFieldState(field, false));
    });

    elements.reservationForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const copy = getLanguageCopy();
        const requiredFields = elements.reservationForm.querySelectorAll("[required]");
        const invalidField = Array.from(requiredFields).find((field) => !field.value.trim());

        requiredFields.forEach((field) => setFieldState(field, false));
        elements.formMessage.className = "form-message";
        elements.formMessage.textContent = "";

        if (elements.reservationActions) {
            elements.reservationActions.hidden = true;
        }

        if (invalidField) {
            setFieldState(invalidField, true);
            elements.formMessage.className = "form-message error";
            elements.formMessage.textContent = copy.messagesRequired;
            invalidField.focus();
            return;
        }

        const phoneDigits = phoneField?.value.replace(/\D/g, "") || "";
        if (phoneDigits.length < 9) {
            if (phoneField) {
                setFieldState(phoneField, true);
                phoneField.focus();
            }
            elements.formMessage.className = "form-message error";
            elements.formMessage.textContent = copy.messagesPhone;
            return;
        }

        const dateValue = elements.dateInput?.value || "";
        const today = new Date().toISOString().split("T")[0];
        if (dateValue && dateValue < today) {
            if (elements.dateInput) {
                setFieldState(elements.dateInput, true);
                elements.dateInput.focus();
            }
            elements.formMessage.className = "form-message error";
            elements.formMessage.textContent = copy.messagesPastDate;
            return;
        }

        const guestsField = document.getElementById("guests");
        const reservationText = [
            copy.messagesHeader,
            `${copy.formName}: ${document.getElementById("name")?.value.trim() || ""}`,
            `${copy.formPhone}: ${phoneField?.value.trim() || ""}`,
            `${copy.formGuests}: ${guestsField?.options[guestsField.selectedIndex]?.text || ""}`,
            `${copy.formDate}: ${dateValue}`,
            `${copy.formTime}: ${document.getElementById("time")?.value || ""}`,
            `${copy.formMessage}: ${document.getElementById("message")?.value.trim() || copy.messagesNoSpecial}`
        ].join("\n");

        const smsUrl = `sms:${targetNumber}?body=${encodeURIComponent(reservationText)}`;
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        let copiedToClipboard = false;

        if (!isMobile && navigator.clipboard?.writeText) {
            try {
                await navigator.clipboard.writeText(reservationText);
                copiedToClipboard = true;
            } catch (_error) {
                copiedToClipboard = false;
            }
        }

        if (elements.reservationSms) {
            elements.reservationSms.href = smsUrl;
        }

        if (elements.reservationCall) {
            elements.reservationCall.href = `tel:${targetNumber}`;
        }

        if (elements.reservationActions) {
            elements.reservationActions.hidden = false;
        }

        elements.formMessage.className = "form-message success";
        elements.formMessage.textContent = copiedToClipboard ? copy.messagesSuccessCopied : copy.messagesSuccessReady;

        if (isMobile) {
            window.setTimeout(() => {
                window.location.href = smsUrl;
            }, 250);
        }
    });
});
