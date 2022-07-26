-- Deploy develott:3.index to pg

BEGIN;

CREATE INDEX index_job ON job (name);
CREATE INDEX index_techno ON techno (name);
CREATE INDEX index_project ON project (name, start_date);

COMMIT;
