// ==========================================================================
// 1. GESTION DU FORMULAIRE DE CONTACT (Sécurisée)
// ==========================================================================
const formulaire = document.getElementById('main-contact-form');

// On met une condition "if" : on exécute ce code UNIQUEMENT si le formulaire existe dans la page
if (formulaire) {
    formulaire.addEventListener('submit', function(evenement) {
        // evenement.preventDefault(); // Désactivé pour laisser FormSubmit envoyer le mail

        const nomUtilisateur = document.getElementById('name').value;
        const emailUtilisateur = document.getElementById('email').value;

        const messageDeConfirmation = `Assalamou alaykoum ${nomUtilisateur} ! Votre message va être envoyé. Somone Code vous recontactera rapidement sur l'adresse : ${emailUtilisateur}.`;

        alert(messageDeConfirmation);
    });
}
// ==========================================================================
// 2. LOGIQUE DU MODE SOMBRE INTELLIGENT (Pour toutes les pages)
// ==========================================================================
const boutonTheme = document.getElementById('theme-toggle');

// Au chargement de la page, on vérifie la mémoire du navigateur
if (localStorage.getItem('modeSombre') === 'actif') {
    document.body.classList.add('dark-mode');
    if (boutonTheme) boutonTheme.textContent = '☀️';
}

// On écoute le clic sur le bouton s'il est présent
if (boutonTheme) {
    boutonTheme.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            boutonTheme.textContent = '☀️';
            localStorage.setItem('modeSombre', 'actif');
        } else {
            boutonTheme.textContent = '🌙';
            localStorage.setItem('modeSombre', 'desactive');
        }
    });
}

// Vide le formulaire automatiquement si l'utilisateur revient en arrière dans son navigateur
window.addEventListener('pageshow', function(evenement) {
    const formulaire = document.getElementById('main-contact-form');
    if (formulaire) {
        formulaire.reset();
    }
});