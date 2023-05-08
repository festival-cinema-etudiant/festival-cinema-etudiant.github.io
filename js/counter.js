// Définir la date du jour
const today = new Date().getTime();

const startFestival = new Date("May 15, 2023 18:00:00").getTime();
const endFestival = new Date("May 26, 2023 20:00:00").getTime();

var endDate;

if (startFestival < today){
  // Festival commencé
  document.getElementById("countdownTitle").innerHTML = "Fin du Festival"
  endDate = endFestival;
}else{
  // Festival non commencé
  document.getElementById("countdownTitle").innerHTML = "Début du Festival";
  endDate = startFestival;
}

// Mettre à jour le compte à rebours toutes les secondes
setInterval(function() {
  // Obtenir la date et l'heure actuelles
  const now = new Date().getTime();

  // Calculer la différence entre la date de fin et la date actuelle
  const distance = (endDate - now);

  // Calculer les jours, heures, minutes et secondes restants ou écoulés
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Afficher les jours, heures, minutes et secondes restants
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
