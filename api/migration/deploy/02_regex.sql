-- Deploy develott_sqitch:02_regex to pg

BEGIN;


CREATE DOMAIN password AS text CHECK (VALUE ~ '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
CREATE DOMAIN email AS text CHECK (VALUE ~ '^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$');

ALTER TABLE public.user 
ALTER COLUMN password TYPE password,
ALTER COLUMN email TYPE email;


COMMIT;
