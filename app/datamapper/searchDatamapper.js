const pool = require("../db/connect");

const searchDatamapper = {
  async searchFilter(body) {
    try {
      const fields = [];
      const values = [];
      console.log(Object.entries(body));
  
      Object.entries(body).forEach(([key, value], index) => {
        if (["technoId"].includes(key)) {
          fields.push(` project_has_techno.techno_id=$${index + 1}`);
          values.push(value);
        }
        if (["jobId"].includes(key)) {
          fields.push(` project_has_job.job_id=$${index + 1}`);
          values.push(value);
        }
        if (["start_date"].includes(key)) {
          fields.push(` project_has_techno.techno_id=$${index + 1}`);
          values.push(value);
        }
      });
  
      const sql = {
        text: `SELECT project.id as projectId , JSON_AGG(distinct project_has_techno.techno_id) as technoId , JSON_AGG(distinct project_has_job.job_id)as jobId,
          start_date
          from project
          
          join project_has_techno on project_id =project.id
          
          join project_has_job on project_has_job.project_id = project.id
          
          WHERE ${fields.join(" OR")} 
          GROUP BY projectId
          order by start_date DESC`,
        values,
      };
      const result = await pool.query(sql);
      return result.rows;
    } catch (error) {
      console.error(error);
    };
  },

  async projectsByAsc(startDate) {
    try {
      console.log('la commande est passée bientot un petit bébé codeur ;)');
      const sql = `SELECT * FROM public.v_project where start_date >= ($1) ORDER BY start_date ASC`;
  
      const result = await pool.query(sql, [startDate]);
      const projects = result.rows;
  
      const fields = [];
      const values = [];
  
      let number = 1;
      for (const i of projects) {
        Object.entries(i).forEach(([key, value]) => {
          if (["id"].includes(key)) {
          fields.push(` project_id=$${number++}`);
          values.push(value);
          }
        });
      };
  
      const sql2 = `SELECT customer_id, role_id, project_id, role, firstname, lastname, job_id, job, techno_name FROM public.v_equipe WHERE ${fields.join(" OR")}`;
      const sql3 = `SELECT * FROM public.v_project_has_job WHERE ${fields.join(" OR")}`;
  
      const result2 = await pool.query(sql2, values);
      const teams = result2.rows;
  
      const result3 = await pool.query(sql3, values);
      const jobByProject = result3.rows;
  
      return { projects, teams, jobByProject };
    } catch (error) {
      console.error(error);
    };
  },

  async projectsByDesc() {
    try {
      const sql = `SELECT * FROM public.v_project ORDER BY start_date DESC`;
      const result = await pool.query(sql);
      const projects = result.rows;

      const sql2 = `SELECT customer_id, role_id, project_id, role, firstname, lastname, job_id, job, techno_name FROM public.v_equipe `;
      const sql3 = `SELECT * FROM public.v_project_has_job `;
  
      
      const result2 = await pool.query(sql2);
      const teams = result2.rows;
  
      const result3 = await pool.query(sql3);
      const jobByProject = result3.rows;
  
      return { projects, teams, jobByProject };
    } catch (error) {
      console.error(error);
    };
  },

  // async projectsByAsc(startDate) {
  //   try {
  //     console.log('la commande est passée bientot un petit bébé codeur ;)');
  //     const sql = `SELECT * FROM public.v_project where start_date >= ($1) ORDER BY start_date ASC`;
  
  //     const result = await pool.query(sql, [startDate]);
  //     const projects = result.rows;
  
  //     const fields = [];
  //     const values = [];
  
  //     let number = 1;
  //     for (const i of projects) {
  //       Object.entries(i).forEach(([key, value]) => {
  //         if (["id"].includes(key)) {
  //         fields.push(` project_id=$${number++}`);
  //         values.push(value);
  //         }
  //       });
  //     };
  
  //     const sql2 = `SELECT customer_id, role_id, project_id, role, firstname, lastname, job_id, job, techno_name FROM public.v_equipe WHERE ${fields.join(" OR")}`;
  //     const sql3 = `SELECT * FROM public.v_project_has_job WHERE ${fields.join(" OR")}`;
  
  //     const result2 = await pool.query(sql2, values);
  //     const teams = result2.rows;
  
  //     const result3 = await pool.query(sql3, values);
  //     const jobByProject = result3.rows;
  
  //     return { projects, teams, jobByProject };
  //   } catch (error) {
  //     console.error(error);
  //   };
  // },

  // async projectsByDesc(endDate) {
  //   try {
  //     const sql = `SELECT * FROM public.v_project where end_date <= ($1) ORDER BY end_date DESC`;
  //     const result = await pool.query(sql,[endDate]);
  //     const projects = result.rows;
  
  
  //     const fields = [];
  //     const values = [];
  
  //     let number = 1;
  //     for (const i of projects) {
  //     Object.entries(i).forEach(([key, value]) => {
  //         if (["id"].includes(key)) {
  //         fields.push(` project_id=$${number++}`);
  //         values.push(value);
  //         }
  //     });
  //     }
  // console.log(values,fields);
  //     const sql2 = `SELECT customer_id, role_id, project_id, role, firstname, lastname, job_id, job, techno_name FROM public.v_equipe WHERE ${fields.join(" OR")}`;
  //     const sql3 = `SELECT * FROM public.v_project_has_job WHERE ${fields.join(" OR")}`;
  
      
  //     const result2 = await pool.query(sql2,values);
  //     const teams = result2.rows;
  
  //     const result3 = await pool.query(sql3,values);
  //     const jobByProject = result3.rows;
  
  //     return { projects, teams, jobByProject };
  //   } catch (error) {
  //     console.error(error);
  //   };
  // },

  async ProjectBetweenDate(startDate,endDate) {
  try {
    const sql = `SELECT * FROM public.v_project WHERE v_project.start_date BETWEEN $1 AND $2 ORDER BY start_date ASC`;
      const result = await pool.query(sql,[startDate,endDate]);
      const projects = result.rows;
  
      console.log(projects);
      const fields = [];
      const values = [];
  
      let number = 1;
      for (const i of projects) {
      Object.entries(i).forEach(([key, value]) => {
          if (["id"].includes(key)) {
          fields.push(` project_id=$${number++}`);
          values.push(value);
          }
      });
      }
      const sql2 = `SELECT customer_id, role_id, project_id, role, firstname, lastname, job_id, job, techno_name FROM public.v_equipe WHERE ${fields.join(" OR")}`;
      const sql3 = `SELECT * FROM public.v_project_has_job WHERE ${fields.join(" OR")}`;
  
      
      const result2 = await pool.query(sql2,values);
      const teams = result2.rows;
  
      const result3 = await pool.query(sql3,values);
      const jobByProject = result3.rows;
  
      return { projects, teams, jobByProject };
  } catch (error) {
    console.error(error);
  };

}
};

module.exports = searchDatamapper;
