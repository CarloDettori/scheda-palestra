function index(req, res) {
    const sql = `SELECT * FROM people`

    connection_db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Internal error server' });
        if (results.length === 0) return res.status(200).json({ message: 'No people available' })
        res.json({
            lenght: results.length,
            people: results,
        }
        )
    })
};

function show(req, res) {
    const id = req.params.id;
    const sql = `SELECT id, names, surname, age FROM people WHERE people.id = ?`

    connection_db.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Internal error server' })
        if (results.length === 0) return res.status(404).json({ message: 'No person available' })
        res.json({
            person: results[0],
        })
    })
}

function store(req, res) {
    const { names, surname, age } = req.body;
    const sql = `INSERT INTO people (names, surname, age) VALUES (?, ?, ?)`

    connection_db.query(sql, [names, surname, age], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Internal error server' })
        }
        res.status(201).json({
            message: 'Person added successfully',
            personId: results.insertId
        })
    })
}

function destroy(req, res) {
    const id = req.params.id;
    const sql = `DELETE FROM people WHERE id = ?`;

    connection_db.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Internal error server' });
        if (results.affectedRows !== 1) {
            return res.status(404).json({ error: 'Person does not exist' })
        }
        res.json({
            message: 'Person deleted successfully',
        })
    })
}

export { index, show, store, destroy }