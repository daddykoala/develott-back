-- Deploy develott:2.regex to pg

BEGIN;

CREATE DOMAIN email AS text CHECK (VALUE ~ '^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$');

ALTER TABLE customer 
ALTER COLUMN email TYPE email;

-- CREATE DOMAIN end_date AS timestamptz CHECK (VALUE>start_date);

-- ALTER TABLE project 
-- ALTER COLUMN end_date TYPE end_date;
-- CREATE DOMAIN start_date AS timestamptz CHECK (VALUE>NOW());
-- ALTER TABLE project 
-- ALTER COLUMN start_date TYPE start_date;


COMMIT;
