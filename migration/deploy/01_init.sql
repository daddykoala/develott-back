-- SQLBook: Code
-- Deploy develott_sqitch:01_init to pg
BEGIN;

CREATE TABLE IF NOT EXISTS job
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name TEXT COLLATE pg_catalog."default" NOT NULL,
    description TEXT COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT job_pkey PRIMARY KEY (id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW() ,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS customer
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    firstname TEXT COLLATE pg_catalog."default" NOT NULL,
    lastname TEXT COLLATE pg_catalog."default" NOT NULL,
    password TEXT COLLATE pg_catalog."default" NOT NULL,
    email TEXT COLLATE pg_catalog."default" NOT NULL UNIQUE,
    charte BOOLEAN,
    city TEXT COLLATE pg_catalog."default",
    description TEXT COLLATE pg_catalog."default",
    profil_picture TEXT COLLATE pg_catalog."default",
    is_active BOOLEAN ,
    validate BOOLEAN DEFAULT 'false',
    username_gith TEXT COLLATE pg_catalog."default",
    url_github TEXT COLLATE pg_catalog."default",
    url_gitlab TEXT COLLATE pg_catalog."default",
    url_portfolio TEXT COLLATE pg_catalog."default",
    url_linkedin TEXT COLLATE pg_catalog."default",
    job_id INT ,
    CONSTRAINT customer_pkey PRIMARY KEY (id),
    CONSTRAINT customer_job_id_fkey FOREIGN KEY (job_id)
    REFERENCES job (id) MATCH SIMPLE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW() ,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS role
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name TEXT COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT role_pkey PRIMARY KEY (id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW() ,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS techno
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name TEXT COLLATE pg_catalog."default" UNIQUE,
    CONSTRAINT techno_pkey PRIMARY KEY (id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW() ,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS project
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name TEXT COLLATE pg_catalog."default" NOT NULL,
    exerpt TEXT COLLATE pg_catalog."default" NOT NULL,
    description TEXT COLLATE pg_catalog."default" NOT NULL,
    picture_project TEXT COLLATE pg_catalog."default",
    start_date TIMESTAMPTZ NOT NULL DEFAULT NOW() ,
    end_date TIMESTAMPTZ,
    url_slack_server TEXT COLLATE pg_catalog."default",
    url_github_repo TEXT COLLATE pg_catalog."default",
    url_github_projet TEXT COLLATE pg_catalog."default",
    url_trello TEXT COLLATE pg_catalog."default",
    CONSTRAINT project_pkey PRIMARY KEY (id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW() ,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS project_has_techno
(
   id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
   project_id INT NOT NULL,
   techno_id INT NOT NULL,
    CONSTRAINT techno_project_id_fkey FOREIGN KEY (project_id)
    REFERENCES public.project (id) MATCH SIMPLE,
    CONSTRAINT project_techno_id_fkey FOREIGN KEY (techno_id)
    REFERENCES public.techno (id) MATCH SIMPLE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW() ,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS project_has_job
(
   id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
   project_id INT NOT NULL,
   job_id INT NOT NULL,
    CONSTRAINT job_project_id_fkey FOREIGN KEY (project_id)
    REFERENCES public.project (id) MATCH SIMPLE,
    CONSTRAINT project_job_id_fkey FOREIGN KEY (job_id)
    REFERENCES public.job (id) MATCH SIMPLE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW() ,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS customer_has_techno
(
   id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
   customer_id INT NOT NULL,
   techno_id INT NOT NULL,
    CONSTRAINT techno_customer_id_fkey FOREIGN KEY (customer_id)
    REFERENCES public.customer (id) MATCH SIMPLE,
    CONSTRAINT customer_techno_id_fkey FOREIGN KEY (techno_id)
    REFERENCES public.techno (id) MATCH SIMPLE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW() ,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS customer_has_project_role
(
   customer_id INT NOT NULL,
   CONSTRAINT customer_id_fkey FOREIGN KEY (customer_id)
   REFERENCES public.customer (id) MATCH SIMPLE,
   role_id INT NOT NULL,
   CONSTRAINT role_id_fkey FOREIGN KEY (role_id)
   REFERENCES public.role (id) MATCH SIMPLE,
   project_id INT NOT NULL,
   CONSTRAINT project_id_fkey FOREIGN KEY (project_id)
   REFERENCES public.project (id) MATCH SIMPLE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW() ,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("customer_id", "role_id", "project_id")

 );

COMMIT;
