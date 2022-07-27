-- Revert develott_sqitch:02_regex from pg

BEGIN;

DROP DOMAIN IF EXISTS email CASCADE;
DROP DOMAIN IF EXISTS password CASCADE ;
COMMIT;
