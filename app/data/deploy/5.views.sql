-- Deploy develott:5.views to pg

BEGIN;


CREATE OR REPLACE VIEW public.v_customer
 AS
 SELECT customer.id,
    customer.firstname,
    customer.lastname,
    customer.password,
    customer.email,
    array_agg(techno.name) AS techno,
    job.name AS job,
    customer.charte,
    customer.city,
    customer.description,
    customer.profil_picture,
    customer.is_active,
    customer.validate,
    customer.username_gith,
    customer.url_github,
    customer.url_gitlab,
    customer.url_portfolio,
    customer.url_linkedin,
    customer.job_id,
    customer.validation_link
   FROM customer
     FULL JOIN customer_has_techno ON customer_has_techno.techno_id = customer_has_techno.techno_id
     JOIN techno ON techno.id = customer_has_techno.techno_id
     JOIN job ON job.id = customer.job_id
  GROUP BY customer.id, customer.firstname, customer.lastname, customer.password, customer.email, job.name, customer.charte, customer.city, customer.description, customer.profil_picture, customer.is_active, customer.validate, customer.username_gith, customer.url_github, customer.url_gitlab, customer.url_portfolio, customer.url_linkedin, customer.job_id, customer.validation_link;

ALTER TABLE public.v_customer
    OWNER TO develott;

CREATE OR REPLACE VIEW public.v_equipe
 AS
 SELECT customer_has_project_role.customer_id,
    customer_has_project_role.role_id,
    customer_has_project_role.project_id,
    role.name AS role,
    customer.firstname,
    customer.lastname,
    customer.job_id,
    job.name AS job,
    array_agg(techno.name) AS techno_name
   FROM customer_has_project_role
     JOIN role ON customer_has_project_role.role_id = role.id
     JOIN customer ON customer_has_project_role.customer_id = customer.id
     JOIN job ON job.id = customer.job_id
     FULL JOIN customer_has_techno ON customer_has_techno.customer_id = customer.id
     LEFT JOIN techno ON techno.id = customer_has_techno.techno_id
  GROUP BY customer_has_project_role.customer_id, customer_has_project_role.role_id, customer_has_project_role.project_id, role.name, customer.firstname, customer.lastname, customer.job_id, job.name;

ALTER TABLE public.v_equipe
    OWNER TO develott;


CREATE OR REPLACE VIEW public.v_project
 AS
 SELECT project.id,
    project.name AS project,
    project.exerpt AS excerpt,
    project.description,
    project.picture_project AS picture,
    project.start_date,
    ph_techno.techno,
    ph_job.job,
    r_customer.role_id,
    r_customer.firstname,
    r_customer.lastname,
    r_customer.c_profil_picture
   FROM project
     LEFT JOIN ( SELECT array_agg(project_has_techno.techno_id) AS array_agg,
            project_has_techno.project_id,
            array_agg(techno.name) AS techno
           FROM project_has_techno
             JOIN techno ON project_has_techno.techno_id = techno.id
          GROUP BY project_has_techno.project_id) ph_techno ON ph_techno.project_id = project.id
     LEFT JOIN ( SELECT array_agg(project_has_job.job_id) AS array_agg,
            project_has_job.project_id,
            array_agg(job.name) AS job
           FROM project_has_job
             JOIN job ON project_has_job.job_id = job.id
          GROUP BY project_has_job.project_id) ph_job ON ph_job.project_id = project.id
     LEFT JOIN ( SELECT customer_has_project_role.role_id,
            customer_has_project_role.project_id,
            role.name AS role,
            customer_admin.firstname,
            customer_admin.lastname,
            customer_admin.profil_picture AS c_profil_picture
           FROM customer_has_project_role
             JOIN role ON customer_has_project_role.role_id = role.id
             JOIN ( SELECT customer.id,
                    customer.firstname,
                    customer.lastname,
                    customer.profil_picture
                   FROM customer) customer_admin ON customer_has_project_role.customer_id = customer_admin.id
          WHERE customer_has_project_role.role_id = 1) r_customer ON r_customer.project_id = project.id;

ALTER TABLE public.v_project
    OWNER TO develott;
COMMIT;
