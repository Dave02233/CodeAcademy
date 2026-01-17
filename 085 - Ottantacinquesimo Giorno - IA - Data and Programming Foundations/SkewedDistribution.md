La **Skewed Distribution** è quando i dati sono "storpi" - non simmetrici!

## 3 Tipi di Distribuzioni

### 1. SIMMETRICA (Perfetta)

Campana perfetta: Media = Mediana = Moda
Esempio: Altezze persone normali

### 2. SKEWED POSITIVA (Coda DESTRA)

Moda < Mediana < Media
Esempi: Stipendi (milionari), Prezzi case, Tempo attesa

### 3. SKEWED NEGATIVA (Coda SINISTRA)

Media < Mediana < Moda
Esempi: Età pensionamento, Voti esami

## REGOLA UNIVERSALE

La MEDIA si trova SEMPRE nella CODA PIÙ LUNGA

Skewed DESTRA → Media ALTA (tirata dai ricchi)
Skewed SINISTRA → Media BASSA

## Esempio Pratico Stipendi

Dati: 1000, 1200, 1100, 1500, 100000 €

| Metrica | Valore | Posizione   |
| ------- | ------ | ----------- |
| Moda    | 1000€  | Picco       |
| Mediana | 1200€  | Centro      |
| Media   | 20800€ | Coda DESTRA |

Skewed POSITIVA → Usa MEDIANA non MEDIA!

## Problemi ML e Soluzioni

| Tipo Skew | Problema      | Fix           |
| --------- | ------------- | ------------- |
| Positiva  | Media falsata | MEDIANA       |
| Negativa  | Bias basso    | Log-transform |
| Forte     | ML instabile  | Box-Cox       |

## Come RICONOSCERLA VELOCEMENTE

1. **Grafico**: Coda lunga = Skewed
2. **Numeri**: Moda ≠ Media = Skewed
3. **Boxplot**: Media fuori scatola = Skewed

## Esempio Dataset Stipendi Italia

Moda = 1200€ (più comune)
Mediana = 1600€ (centro)  
Media = 2400€ (manager)

→ SKEWED POSITIVA GRAVE

## Riassunto 1 Frase

Skewed = "Coda lunga" → Dimentica MEDIA, usa MEDIANA!
