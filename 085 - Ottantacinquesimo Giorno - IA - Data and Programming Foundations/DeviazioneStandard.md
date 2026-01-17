## MEDIA (il CENTRO)

**"Qual è il numero TIPICO?"**

**Formula semplice**: Somma tutto ÷ Numero valori

**Esempio altezze**: [160, 165, 170, 175, 180]  
Media = (160+165+170+175+180) ÷ 5 = 170cm

**Vuol dire**: L'altezza "media" è 170cm

## DEVIAZIONE STANDARD (la VARIABILITÀ)

**"Quanto si SPARPAGLIANO i dati dalla media?"**

**Concetto**: Misura quanto i numeri sono "lontani" dalla media

**Esempio altezze**:
Media = 170cm
Differenze: 160(-10), 165(-5), 170(0), 175(+5), 180(+10)
Dev.Std ≈ 7cm

**Vuol dire**: La maggior parte ha altezza tra 163-177cm (media ± dev.std)

## Tabella Intuitiva

| Gruppo A                           | Gruppo B                             |
| ---------------------------------- | ------------------------------------ |
| Altezze: [168, 169, 170, 171, 172] | Altezze: [150, 160, 170, 180, 190]   |
| Media: 170cm                       | Media: 170cm                         |
| Dev.Std: 1.6cm (TUTTI uguali)      | Dev.Std: 15.8cm (MOLTO sparpagliati) |

STESSA media, DIVERSA variabilità!

## Esempio Pratico Dataset

Prima:
prezzi: [10€, 10€, 10€, 10€, 10€]
Media = 10€, Dev.Std = 0€ (perfetto)

Dopo outlier:
prezzi: [10€, 10€, 10€, 10€, 1000€]
Media = 208€, Dev.Std = 422€ (pazzo!)

## Regole Semplici

| Situazione       | Usa Media           | Usa Dev.Std |
| ---------------- | ------------------- | ----------- |
| Numeri normali   | ✅ SÌ               | ✅ SÌ       |
| Con outlier      | ❌ NO (usa mediana) | ❌ NO       |
| Confronti gruppi | ✅ SÌ               | ✅ SÌ       |

## Cosa GUARDANO in ML

Dataset ALTEZZE:
Media = 170cm → "centro" del dataset
Dev.Std = 8cm → "larghezza" del dataset

Buon dataset: 170 ± 8cm (162-178cm)
Cattivo dataset: 170 ± 50cm (sparpagliato!)

## Riassunto 1 Frase

MEDIA = "Valore tipico"  
DEV.STD = "Quanto varia tutto"

Media 170cm, Dev.Std 8cm =
"Altezza tipica 170cm, la gente varia ±8cm"
