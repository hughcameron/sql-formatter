import { flatKeywordList } from '../../utils';

export const keywords = flatKeywordList({
  keywords: [
    'ALL',
    // 'AND',
    'ANY',
    // 'ARRAY',
    'AS',
    'ASC',
    'ASSERT_ROWS_MODIFIED',
    'AT',
    'BETWEEN',
    'BY',
    // 'CASE',
    'CAST',
    'COLLATE',
    'CONTAINS',
    // 'CREATE',
    // 'CROSS',
    'CUBE',
    'CURRENT',
    'DEFAULT',
    'DEFINE',
    'DESC',
    'DISTINCT',
    // 'ELSE',
    // 'END',
    'ENUM',
    'ESCAPE',
    // 'EXCEPT',
    // 'EXCLUDE',
    'EXISTS',
    'EXTRACT',
    'FALSE',
    // 'FETCH',
    'FOLLOWING',
    'FOR',
    // 'FROM',
    'FULL',
    // 'GROUP',
    'GROUPING',
    'GROUPS',
    'HASH',
    // 'HAVING',
    'IF',
    'IGNORE',
    'IN',
    // 'INNER',
    // 'INTERSECT',
    // 'INTERVAL',
    'INTO',
    'IS',
    // 'JOIN',
    // 'LATERAL',
    // 'LEFT',
    'LIKE',
    // 'LIMIT',
    'LOOKUP',
    // 'MERGE',
    // 'NATURAL',
    'NEW',
    'NO',
    'NOT',
    'NULL',
    'NULLS',
    'OF',
    'ON',
    // 'OR',
    // 'ORDER',
    // 'OUTER',
    'OVER',
    'PARTITION',
    'PRECEDING',
    'PROTO',
    'RANGE',
    'RECURSIVE',
    'RESPECT',
    // 'RIGHT',
    'ROLLUP',
    'ROWS',
    // 'SELECT',
    // 'SET',
    'SOME',
    // 'STRUCT',
    'TABLE',
    'TABLESAMPLE SYSTEM',
    'THEN',
    'TO',
    'TREAT',
    'TRUE',
    'UNBOUNDED',
    // 'UNION',
    'UNNEST',
    'USING',
    // 'WHEN',
    // 'WHERE',
    // 'WINDOW',
    // 'WITH',
    'WITHIN',
  ],
  datatypes: [
    'ARRAY', // parametric, ARRAY<T>
    'BOOL',
    'BYTES', // parameterised, BYTES(Length)
    'DATE',
    'DATETIME',
    'GEOGRAPHY',
    'INTERVAL',
    'INT64',
    'INT',
    'SMALLINT',
    'INTEGER',
    'BIGINT',
    'TINYINT',
    'BYTEINT',
    'NUMERIC', // parameterised, NUMERIC(Precision[, Scale])
    'DECIMAL', // parameterised, DECIMAL(Precision[, Scale])
    'BIGNUMERIC', // parameterised, BIGNUMERIC(Precision[, Scale])
    'BIGDECIMAL', // parameterised, BIGDECIMAL(Precision[, Scale])
    'FLOAT64',
    'STRING', // parameterised, STRING(Length)
    'STRUCT', // parametric, STRUCT<T>
    'TIME',
    'TIMEZONE',
  ],
  // https://cloud.google.com/bigquery/docs/reference/standard-sql/conversion_functions#formatting_syntax
  stringFormat: ['HEX', 'BASEX', 'BASE64M', 'ASCII', 'UTF-8', 'UTF8'],
  misc: ['SAFE'],
  // https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language
  ddl: [
    // 'LIKE', // CREATE TABLE LIKE
    'COPY', // CREATE TABLE COPY
    'CLONE', // CREATE TABLE CLONE
    // 'IN',
    'OUT',
    'INOUT',
    'RETURNS',
    'LANGUAGE',
    'ANY TYPE',
    'ALL COLUMNS',
    'CASCADE',
    'RESTRICT',
    'DETERMINISTIC',
    'NOT DETERMINISTIC',
  ],
});
