const Passcodes = [
    "1e94b5a3e45e52163564e5284ce0c098aa59fc93665331170b36c688", // Fabian Siedler
    "5164121b59272f135dc049f809b677655f513e0fc58dd6d57e860ae9" // Tim Flow
];

const Usernames = [
    "Fabian Siedler",
    "Tim Flow"
];

// Damit Angreifer nicht einfach einen neuen Eintrag in die Datenbank einfügen können, werden die beiden
// Arrays gefreezed, und sind somit nichtmehr veränderbar

Object.freeze(Passcodes);
Object.freeze(Usernames);