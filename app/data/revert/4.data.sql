-- Revert develott:4.data from pg

BEGIN;

DELETE TABLE customer_has_project_role;
DELETE TABLE project_has_job;
DELETE TABLE project_has_techno;
DELETE TABLE project;
DELETE TABLE customer_has_techno;
DELETE TABLE role;
DELETE TABLE customer;
DELETE TABLE job;

COMMIT;
