-- Revert develott_sqitch:data_table from pg

BEGIN;

TRUNCATE TABLE user_has_project_role, project_has_job, project_has_techno, project, user_has_techno, role, public.user, job;
COMMIT;
