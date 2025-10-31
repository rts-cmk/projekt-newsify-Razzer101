# Projektdokumentation

**Navn:** Rasmus Kjærulf Søndergaard

**Hold:** WU14

**Uddannelse:** Webudvikler

**Uddannelsessted:** Roskilde Tekniske Skole

**Link til hjemmesiden:** mynewsify.vercel.app


## Teknologier

-   HTML
-   Sass
-   JavaScript
-   Vite
-	React
-   Vitest

### Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen (Teknisk dokumentation)

React-Router: Bliver brugt til at lave nem og hurtig navigering mellem sider i projektet. Sørger for at projektet ikke reloader på side skift.

React-Icons - Tilbyder de ikoner som bliver brugt i bl.a navigation bar.

Gsap - Den animation library som alt animation i projektet gør brug af. Giver nemmere muglighed for at animere elementer gennem jsx filer og memmere muglighed for at få javascript kode til at starte efter en animation er færdig.

### Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

- Darkmode knappen valgte jeg at bruge light-dark() function i sass/css. Det var det nemeste af at light-dark() ved browseren også hvad er.

- Search bar/input feltet valgte jeg at der blev fetched til en seperat api fra new york times som havde bedre mulighed for at skrive keywork/ord man ville søge efter og så vise det lige under search bar'en.

- Save/slet af archived news valgte jeg at lave en localstorage til vær af kategorierne som så tog deres news og lavede en ny array inde i deres localstorage. Der efter blev de vist på archived siden. Det gjorde det nemere at opdele data'en i kategorier igen på archived siden.

- Den side man starter på viser startup animationen, tutorial, og login. Hvor efter man så bliver ført hen til /home. Af at tutorial og login kun bliver vist 1 gang så syntes jeg at det var mere optimalt at have det på en seperat side (første side) sammen med sartup animationen end det hovedsaglige indhold. Hvis man så går tilbage til start-siden (eller folader hjemmesiden og går ind på det igen) vil man kun blive mødt af startup animationen og der efter blive ført videre til det hovedsaglige indhold.

- Redigering af kategoriernes rækkefølge valgte jeg at lave en drag and drop funktion i settings hvor man kan trække de foskellige kategorier rundt for at bestemme deres rækkefølge fra top til bund. Jeg ville gerne sørge for at hjemmesiden så ud som reference matrialet og undgik at lave noget lignende fx. af knapper.

### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

Jeg syntes for det meste at det hele gik super godt. Jeg fik lært en masse nyt for at nå i mål med projektet som jeg kan bruge senere hen. Det er nogle små visuelle fejl her og der som jeg altid kan få fikset en anden dag men ellers syntes jeg selv at det ser rimelig fint ud.
I starten brugte jeg et stykke tid med at prøve at sætte alt fra start-siden ind over det hovedsaglige indhold men støtte på problemer der gjorde at jeg ændre det til det endelige opsætning.

### En beskrivelse af særlige punkter til bedømmelse

```js
const [archivedData, setArchivedData] = useState(JSON.parse(localStorage.getItem(`${category}ArchivedData`)) || [])
localStorage.setItem(`${category}ArchivedData`, JSON.stringify(archivedData))
const handleSaveClick = (elm) => {
    setArchivedData(currentContent => currentContent.some(item => item.url === elm.url) ? currentContent : [...currentContent, elm])
}
/*Category er det navn man vælger at skrive i function({ category }) i filen det henter componenten ind*/
/*Laver en localstorage med en array af content fra category og tjekker hvis det en noget data som er ens for ikke at for de samme nyheder flere steder*/
```

```css
.news-box-section
    display: flex
    overflow: scroll
    white-space: nowrap
    scroll-snap-type: x mandatory
    border-bottom: 1px solid var.$dark-border
    -ms-overflow-style: none
    scrollbar-width: none
	&::-webkit-scrollbar 
        display: none

    &__btn
        border: none
        font-size: 2em
        padding: 0 1.2em
        color: white
        scroll-snap-stop: always
        scroll-snap-align: end

        &:active
            filter: brightness(130%)

/*Sass'en for at lave nyhederne som man kan swipe til venstre of få save/slet knappen frem*/
```

