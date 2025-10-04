function index(req, res) {
    const sql = `SELECT * FROM people`

    connection_db.query(sql, (err, results) => {
        if (err) { res.status(500).json({ error: 'Internal error server' }) }
        if (results.length === 0) { res.status(200).json({ message: 'No doctors Available' }) }
        res.json({
            lenght: results.length,
            people: results,
        }
        )
    })
};

function show(req, res) {
    const sql = `SELECT id, names, surname, age FROM people WHERE people.id = ?`

    connection_db.query(sql, (err, results) => {
        if (err) { res.status(500).json({ error: 'Internal error server' }) }
        if (results.length === 0) { res.status(200).json({ message: 'No person Available' }) }
        res.json({
            person: results,
        }
        )
    })
}

function store(req, res) {
    const sql = ``
}

function destroy(req, res) {
    const sql = `DELETE FROM name WHERE id = ?`

    connection_db.query(sqlSingleDoctor, [id], (err, results) => {
        if (err) { return res.status(500).json({ error: 'Internal error server' }) }
        if (results.effectedRows !== 1) {
            return res.status(400).json({ error: 'Is not possible delete this person, beacause he does not exist' })
        }
        res.json({
            person: results,
        }
        )
    })
}

export { index, show, store, destroy }