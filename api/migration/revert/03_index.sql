-- Revert develott_sqitch:03_index from pg

BEGIN;

DROP INDEX IF EXISTS index_project, index_techno, index_job;

COMMIT;
