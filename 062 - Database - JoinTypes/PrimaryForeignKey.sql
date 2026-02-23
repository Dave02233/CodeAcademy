-- Creazione di due tabelle con chiave primaria e chiave esterna

-- Tabella 'Dipartimento' con chiave primaria 'DipartimentoID'
CREATE TABLE Dipartimento (
    DipartimentoID INT PRIMARY KEY,
    Nome VARCHAR(50)
);

-- Tabella 'Impiegato' con chiave primaria 'ImpiegatoID' e chiave esterna 'DipartimentoID'
CREATE TABLE Impiegato (
    ImpiegatoID INT PRIMARY KEY,
    Nome VARCHAR(50),
    DipartimentoID INT,
    FOREIGN KEY (DipartimentoID) REFERENCES Dipartimento(DipartimentoID)
);

-- Inserimento dati di esempio
INSERT INTO Dipartimento VALUES (1, 'IT'), (2, 'HR');
INSERT INTO Impiegato VALUES (101, 'Mario Rossi', 1), (102, 'Luca Bianchi', 2);

-- Query: seleziona tutti gli impiegati con il nome del loro dipartimento
SELECT i.Nome AS Impiegato, d.Nome AS Dipartimento
FROM Impiegato i
JOIN Dipartimento d ON i.DipartimentoID = d.DipartimentoID;

-- Query: trova tutti i dipartimenti senza impiegati
SELECT d.Nome AS Dipartimento
FROM Dipartimento d
LEFT JOIN Impiegato i ON d.DipartimentoID = i.DipartimentoID
WHERE i.ImpiegatoID IS NULL;

-- Query: aggiungi un nuovo impiegato in un dipartimento esistente
INSERT INTO Impiegato VALUES (103, 'Giulia Verdi', 1);

-- Nota:
-- La chiave primaria (PRIMARY KEY) garantisce l'unicità dei valori nella colonna.
-- La chiave esterna (FOREIGN KEY) assicura l'integrità referenziale tra le tabelle.