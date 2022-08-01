async create(body) {
    //! vérifier si project existe déjà
    const sql = `INSERT INTO project (name, exerpt, description, picture_project, start_date, end_date)VALUES($1, $2, $3, $4, $5, $6)`;
    const values = [
        body.name,
        body.exerpt,
        body.description,
        body.picture_project,
        body.start_date,
        body.end_date,
    ];

    try {
        const result = await pool.query(sql, values);
        return result.rows[0];
    } catch (error) {
        console.error(error);
    }
}