'use strict'

/* eslint no-process-env: 0 */
/* eslint no-inline-comments: 0 */
/* eslint camelcase: 0 */

module.exports = {
  pg: {
    user: process.env.PGUSER || 'bdm',
    host: process.env.PGHOST || 'localhost',
    database: process.env.PGDATABASE || 'bdm',
    password: process.env.PGPASSWORD || '',
    port: process.env.PGPORT || 5432
  },
}