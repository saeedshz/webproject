// Hämtar knappen och kroppselementet
const toggleButton = document.getElementById('toggleButton');
const body = document.getElementById('body');

// Hanterar växling mellan mörkt och ljust läge
toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode'); // Lägg till eller ta bort dark-mode klassen

    // Om dark mode är aktiverat, visa solikonen
    if (body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = '<span class="icon-sun">☀️</span> Ljusläge'; // Byt till solikon
    } else {
        // Om dark mode inte är aktiverat, visa månikonen
        toggleButton.innerHTML = '<span class="icon-moon">🌙</span> Mörkläge'; // Byt till månikon
    }
});
