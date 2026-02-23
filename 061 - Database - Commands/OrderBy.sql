-- Seleziona tutti i clienti ordinati per cognome in ordine alfabetico (crescente)
SELECT * FROM clienti
ORDER BY cognome ASC;

-- Seleziona tutti i prodotti ordinati per prezzo dal più caro al più economico (decrescente)
SELECT * FROM prodotti
ORDER BY prezzo DESC;

-- Seleziona gli ordini ordinati prima per data (dal più recente), poi per importo (dal più alto)
SELECT * FROM ordini
ORDER BY data_ordine DESC, importo_totale DESC;

-- Seleziona i dipendenti ordinati per reparto e, all'interno del reparto, per nome
SELECT * FROM dipendenti
ORDER BY reparto ASC, nome ASC;

-- Nota:
-- ASC = ordine crescente (default)
-- DESC = ordine decrescente