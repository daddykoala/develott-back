-- Revert develott:1.init from pg

BEGIN;

DROP TABLE customer_has_project_role, customer_has_techno, project_has_job, project_has_techno,project,techno, role, customer,job

COMMIT;
