-- Revert develott:3.index from pg

BEGIN;

DROP INDEX index_project, index_techno, index_job

COMMIT;
