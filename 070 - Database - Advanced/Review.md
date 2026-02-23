# Riassunto Funzioni SQL - Settantesimo Giorno

## Unique
- `ALTER TABLE attendees ADD UNIQUE (email);`
  - Impone che la colonna email sia unica nella tabella attendees.
- `CREATE TABLE registrations (..., UNIQUE (session_timeslot, attendee_id));`
  - Impone unicità combinata tra session_timeslot e attendee_id.
- `ALTER TABLE speakers ADD PRIMARY KEY (id);`
  - Imposta la colonna id come chiave primaria.

## Foreign Key
- `ALTER TABLE talks ADD FOREIGN KEY (speaker_id) REFERENCES speakers (id);`
  - Collega speaker_id di talks all'id di speakers, garantendo integrità referenziale.

## Check
- `ALTER TABLE speakers ADD CHECK (years_in_role < 100);`
  - Limita il valore di years_in_role a meno di 100.
- `ALTER TABLE speakers ADD CHECK (years_in_role < 100 AND years_in_role > 0);`
  - Limita years_in_role tra 1 e 99.
- `ALTER TABLE attendees ADD CHECK (standard_tickets_reserved + vip_tickets_reserved = total_tickets_reserved);`
  - Verifica la coerenza tra i biglietti riservati.

## Cascade
- `ALTER TABLE talks ADD FOREIGN KEY (speaker_id) REFERENCES speakers (id) ON DELETE CASCADE;`
  - Se uno speaker viene eliminato, vengono eliminati anche i talks associati.