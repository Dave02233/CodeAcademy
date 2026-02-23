ALTER TABLE attendees 
ADD UNIQUE (email);


CREATE TABLE registrations (
    id integer NOT NULL,
    attendee_id integer NOT NULL,
    session_timeslot timestamp NOT NULL,
    talk_id  integer NOT NULL,
    UNIQUE (session_timeslot, attendee_id)
);

ALTER TABLE speakers
ADD PRIMARY KEY (id);

INSERT INTO speakers (email, name, organization, title, years_in_role)
VALUES ('J.Saunders@ABCTech.com', 'Joan Saunders', 'ABC Tech.', 'Sr. Data Scientist', 6)