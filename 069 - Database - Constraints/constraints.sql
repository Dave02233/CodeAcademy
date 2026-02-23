CREATE TABLE attendees (
  id integer,
  name varchar,
  total_tickets_reserved integer,
  standard_tickets_reserved integer,
  vip_tickets_reserved integer
);

INSERT INTO attendees (id, name, total_tickets_reserved, standard_tickets_reserved, vip_tickets_reserved)
VALUES (
  1, 
  'John Smith',
  '2.5', <=====
  1,
  1
);

CREATE TABLE speakers (
  id integer NOT NULL,
  email varchar NOT NULL,
  name varchar NOT NULL, <====
  organization varchar,
  title varchar,
  years_in_role integer
);

INSERT INTO speakers (id, email, organization, title, years_in_role)
VALUES (1, 'awilson@ABCcorp.com', 'ABC Corp.', 'CTO', 6);

