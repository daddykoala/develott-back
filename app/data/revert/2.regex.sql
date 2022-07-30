-- Revert develott:2.regex from pg

BEGIN;

DROP DOMAIN project, email;

COMMIT;
