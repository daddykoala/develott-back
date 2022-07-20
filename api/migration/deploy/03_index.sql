-- Deploy develott_sqitch:03_index to pg

BEGIN;

CREATE INDEX index_job ON public.job (name);
CREATE INDEX index_techno ON public.techno (name);
CREATE INDEX index_project ON public.project (name, start_date);

COMMIT;
