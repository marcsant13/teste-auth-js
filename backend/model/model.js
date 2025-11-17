import pg from 'pg';

const pool = new pg.Pool({
    user: "postgres",
    password: "mrc#5467@",
    host: "localhost",
    database: "db_user_js",
    port: 5432
});

export default pool;