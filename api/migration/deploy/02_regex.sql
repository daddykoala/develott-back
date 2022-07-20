-- Deploy develott_sqitch:02_regex to pg

BEGIN;

CREATE DOMAIN email AS text CHECK (VALUE ~ '^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$');

ALTER TABLE public.user 
ALTER COLUMN email TYPE email;


COMMIT;
