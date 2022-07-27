-- Revert develott_sqitch:04_data from pg

BEGIN;

TRUNCATE TABLE customer_has_project_role, project_has_job, project_has_techno, project, customer_has_techno, role, customer, job;


COMMIT;
