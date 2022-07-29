-- SQLBook: Code
-- Revert develott:5.views from pg

BEGIN;
 DROP VIEW public.v_project;

 DROP VIEW public.v_equipe;

 DROP VIEW public.v_customer;

COMMIT;
