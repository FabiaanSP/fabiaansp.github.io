var Version = 1.10

const Passcodes = [
    "1e94b5a3e45e52163564e5284ce0c098aa59fc93665331170b36c688", // Fabian Siedler
    "5164121b59272f135dc049f809b677655f513e0fc58dd6d57e860ae9", // Tim Flow
    "5a5f3eb2723da9c98d54f01363129a355a70ccd27dd311c73897c107", // Liam Jones
    "9b6c82ccccaefcf7fef47a2b46850cf03dfc3d779a4376e73576a338" // Marcus Draft
];

const Usernames = [
    "Fabian Siedler",
    "Tim Flow",
    "Liam Jones",
    "Marcus Draft"
];

console.log(Version);

// Damit Angreifer nicht einfach einen neuen Eintrag in die Datenbank einfügen können, werden die beiden
// Arrays gefreezed, und sind somit nichtmehr veränderbar

Object.freeze(Passcodes);
Object.freeze(Usernames);
