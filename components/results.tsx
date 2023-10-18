
export interface AnimatedResult {
    idx: number;
    text: string;
    imageOrGifUrl: string;
}

export const RESULTS_DATA: ReadonlyArray<AnimatedResult> = [
    {
        idx: 1,
        imageOrGifUrl: "/images/fb/crisis.png",
        text: "Kryzysy zdarzają się w każdym związku, ale wy potraficie sobie z nimi radzić. Wasza zdolność do wspólnego przekraczania trudności i budowania silniejszej więzi jest inspirująca!"
    },
    {
        idx: 2,
        imageOrGifUrl: "/images/fb/yas.png",
        text: "W związku możecie mieć odmienne zdanie, a mimo to potraficie się zrozumieć i wspólnie ewoluować. Wasza zdolność do akceptowania różnych punktów widzenia i otwartej dyskusji nad nimi jest imponująca."
    },
    {
        idx: 3,
        text: "W związku można mieć różne preferencje, a wasza zdolność do akceptowania i szanowania tych różnic jest godna podziwu. To, że potraficie docenić indywidualne gusta i potrzeby swojego partnera, jest dowodem na waszą wzajemną troskę i głębokie zrozumienie.",
        imageOrGifUrl: "/images/fb/kocham.png"
    },
    {
        idx: 4,
        text: "W związku, w którym jesteście, umiecie doceniać siebie nawzajem i wyrażać to wprost. Wasza zdolność do wyrażania wdzięczności i podziwu jest niezastąpiona. To, że potraficie mówić sobie, jak bardzo się nawzajem cenicie, tworzy atmosferę pełną miłości i uznania.",
        imageOrGifUrl: "/images/fb/jestes.png"
    },
    {
        idx: 5,
        text: "Na koniec dnia, bez względu na wszystkie trudności i wyzwania, druga osoba jest zawsze blisko. Wasza zdolność do trzymania się nawzajem w chwilach zarówno radości, jak i smutku, jest nieoceniona.",
        imageOrGifUrl: "/images/fb/dobranoc.png"
    },
]