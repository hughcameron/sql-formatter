export const functions: string[] = [
  'ABS',
  'ACOS',
  'ADD',
  'ADD_PARQUET_KEY',
  'AGE',
  'AGGREGATE',
  'ALIAS',
  'ALL_PROFILING_OUTPUT',
  'ANY_VALUE',
  'APPLY',
  'APPROX_COUNT_DISTINCT',
  'APPROX_QUANTILE',
  'ARBITRARY',
  'ARGMAX',
  'ARGMIN',
  'ARG_MAX',
  'ARG_MAX_NULL',
  'ARG_MIN',
  'ARG_MIN_NULL',
  'ARRAY_AGG',
  'ARRAY_AGGR',
  'ARRAY_AGGREGATE',
  'ARRAY_APPEND',
  'ARRAY_APPLY',
  'ARRAY_CAT',
  'ARRAY_CONCAT',
  'ARRAY_CONTAINS',
  'ARRAY_COSINE_SIMILARITY',
  'ARRAY_CROSS_PRODUCT',
  'ARRAY_DISTANCE',
  'ARRAY_DISTINCT',
  'ARRAY_DOT_PRODUCT',
  'ARRAY_EXTRACT',
  'ARRAY_FILTER',
  'ARRAY_GRADE_UP',
  'ARRAY_HAS',
  'ARRAY_HAS_ALL',
  'ARRAY_HAS_ANY',
  'ARRAY_INDEXOF',
  'ARRAY_INNER_PRODUCT',
  'ARRAY_INTERSECT',
  'ARRAY_LENGTH',
  'ARRAY_POP_BACK',
  'ARRAY_POP_FRONT',
  'ARRAY_POSITION',
  'ARRAY_PREPEND',
  'ARRAY_PUSH_BACK',
  'ARRAY_PUSH_FRONT',
  'ARRAY_REDUCE',
  'ARRAY_RESIZE',
  'ARRAY_REVERSE',
  'ARRAY_REVERSE_SORT',
  'ARRAY_SELECT',
  'ARRAY_SLICE',
  'ARRAY_SORT',
  'ARRAY_TO_JSON',
  'ARRAY_TO_STRING',
  'ARRAY_TRANSFORM',
  'ARRAY_UNIQUE',
  'ARRAY_VALUE',
  'ARRAY_WHERE',
  'ARRAY_ZIP',
  'ARROW_SCAN',
  'ARROW_SCAN_DUMB',
  'ASCII',
  'ASIN',
  'ATAN',
  'ATAN2',
  'AVG',
  'BAR',
  'BASE64',
  'BIN',
  'BITSTRING',
  'BITSTRING_AGG',
  'BIT_AND',
  'BIT_COUNT',
  'BIT_LENGTH',
  'BIT_OR',
  'BIT_POSITION',
  'BIT_XOR',
  'BOOL_AND',
  'BOOL_OR',
  'CARDINALITY',
  'CBRT',
  'CEIL',
  'CEILING',
  'CENTURY',
  'CHECKPOINT',
  'CHR',
  'COLLATIONS',
  'COL_DESCRIPTION',
  'COMBINE',
  'CONCAT',
  'CONCAT_WS',
  'CONSTANT_OR_NULL',
  'CONTAINS',
  'COPY_DATABASE',
  'CORR',
  'COS',
  'COT',
  'COUNT',
  'COUNT_IF',
  'COUNT_STAR',
  'COVAR_POP',
  'COVAR_SAMP',
  'CREATE_SORT_KEY',
  'CURRENT_CATALOG',
  'CURRENT_DATABASE',
  'CURRENT_DATE',
  'CURRENT_LOCALTIME',
  'CURRENT_LOCALTIMESTAMP',
  'CURRENT_QUERY',
  'CURRENT_ROLE',
  'CURRENT_SCHEMA',
  'CURRENT_SCHEMAS',
  'CURRENT_SETTING',
  'CURRENT_USER',
  'CURRVAL',
  'DAMERAU_LEVENSHTEIN',
  'DATABASE_LIST',
  'DATABASE_SIZE',
  'DATEDIFF',
  'DATEPART',
  'DATESUB',
  'DATETRUNC',
  'DATE_ADD',
  'DATE_DIFF',
  'DATE_PART',
  'DATE_SUB',
  'DATE_TRUNC',
  'DAY',
  'DAYNAME',
  'DAYOFMONTH',
  'DAYOFWEEK',
  'DAYOFYEAR',
  'DECADE',
  'DECODE',
  'DEGREES',
  'DISABLE_CHECKPOINT_ON_SHUTDOWN',
  'DISABLE_OBJECT_CACHE',
  'DISABLE_OPTIMIZER',
  'DISABLE_PRINT_PROGRESS_BAR',
  'DISABLE_PROFILE',
  'DISABLE_PROFILING',
  'DISABLE_PROGRESS_BAR',
  'DISABLE_VERIFICATION',
  'DISABLE_VERIFY_EXTERNAL',
  'DISABLE_VERIFY_FETCH_ROW',
  'DISABLE_VERIFY_PARALLELISM',
  'DISABLE_VERIFY_SERIALIZER',
  'DIVIDE',
  'DUCKDB_COLUMNS',
  'DUCKDB_CONSTRAINTS',
  'DUCKDB_DATABASES',
  'DUCKDB_DEPENDENCIES',
  'DUCKDB_EXTENSIONS',
  'DUCKDB_FUNCTIONS',
  'DUCKDB_INDEXES',
  'DUCKDB_KEYWORDS',
  'DUCKDB_MEMORY',
  'DUCKDB_OPTIMIZERS',
  'DUCKDB_SCHEMAS',
  'DUCKDB_SECRETS',
  'DUCKDB_SEQUENCES',
  'DUCKDB_SETTINGS',
  'DUCKDB_TABLES',
  'DUCKDB_TEMPORARY_FILES',
  'DUCKDB_TYPES',
  'DUCKDB_VIEWS',
  'EDIT',
  'EDITDIST3',
  'ELEMENT_AT',
  'ENABLE_CHECKPOINT_ON_SHUTDOWN',
  'ENABLE_OBJECT_CACHE',
  'ENABLE_OPTIMIZER',
  'ENABLE_PRINT_PROGRESS_BAR',
  'ENABLE_PROFILE',
  'ENABLE_PROFILING',
  'ENABLE_PROGRESS_BAR',
  'ENABLE_VERIFICATION',
  'ENCODE',
  'ENDS_WITH',
  'ENTROPY',
  'ENUM_CODE',
  'ENUM_FIRST',
  'ENUM_LAST',
  'ENUM_RANGE',
  'ENUM_RANGE_BOUNDARY',
  'EPOCH',
  'EPOCH_MS',
  'EPOCH_NS',
  'EPOCH_US',
  'ERA',
  'ERROR',
  'EVEN',
  'EXP',
  'FACTORIAL',
  'FAVG',
  'FDIV',
  'FILTER',
  'FINALIZE',
  'FIRST',
  'FLATTEN',
  'FLOOR',
  'FMOD',
  'FORCE_CHECKPOINT',
  'FORMAT',
  'FORMATREADABLEDECIMALSIZE',
  'FORMATREADABLESIZE',
  'FORMAT_BYTES',
  'FORMAT_PG_TYPE',
  'FORMAT_TYPE',
  'FROM_BASE64',
  'FROM_BINARY',
  'FROM_HEX',
  'FROM_JSON',
  'FROM_JSON_STRICT',
  'FSUM',
  'FUNCTIONS',
  'GAMMA',
  'GCD',
  'GENERATE_SERIES',
  'GENERATE_SUBSCRIPTS',
  'GEN_RANDOM_UUID',
  'GEOMEAN',
  'GEOMETRIC_MEAN',
  'GETENV',
  'GET_BIT',
  'GET_BLOCK_SIZE',
  'GET_CURRENT_TIME',
  'GET_CURRENT_TIMESTAMP',
  'GLOB',
  'GRADE_UP',
  'GREATEST',
  'GREATEST_COMMON_DIVISOR',
  'GROUP_CONCAT',
  'HAMMING',
  'HASH',
  'HAS_ANY_COLUMN_PRIVILEGE',
  'HAS_COLUMN_PRIVILEGE',
  'HAS_DATABASE_PRIVILEGE',
  'HAS_FOREIGN_DATA_WRAPPER_PRIVILEGE',
  'HAS_FUNCTION_PRIVILEGE',
  'HAS_LANGUAGE_PRIVILEGE',
  'HAS_SCHEMA_PRIVILEGE',
  'HAS_SEQUENCE_PRIVILEGE',
  'HAS_SERVER_PRIVILEGE',
  'HAS_TABLESPACE_PRIVILEGE',
  'HAS_TABLE_PRIVILEGE',
  'HEX',
  'HISTOGRAM',
  'HOUR',
  'ICU_CALENDAR_NAMES',
  'ICU_SORT_KEY',
  'ILIKE_ESCAPE',
  'IMPORT_DATABASE',
  'INDEX_SCAN',
  'INET_CLIENT_ADDR',
  'INET_CLIENT_PORT',
  'INET_SERVER_ADDR',
  'INET_SERVER_PORT',
  'INSTR',
  'IN_SEARCH_PATH',
  'ISFINITE',
  'ISINF',
  'ISNAN',
  'ISODOW',
  'ISOYEAR',
  'JACCARD',
  'JARO_SIMILARITY',
  'JARO_WINKLER_SIMILARITY',
  'JSON',
  'JSON_ARRAY',
  'JSON_ARRAY_LENGTH',
  'JSON_CONTAINS',
  'JSON_DESERIALIZE_SQL',
  'JSON_EXECUTE_SERIALIZED_SQL',
  'JSON_EXTRACT',
  'JSON_EXTRACT_PATH',
  'JSON_EXTRACT_PATH_TEXT',
  'JSON_EXTRACT_STRING',
  'JSON_GROUP_ARRAY',
  'JSON_GROUP_OBJECT',
  'JSON_GROUP_STRUCTURE',
  'JSON_KEYS',
  'JSON_MERGE_PATCH',
  'JSON_OBJECT',
  'JSON_QUOTE',
  'JSON_SERIALIZE_PLAN',
  'JSON_SERIALIZE_SQL',
  'JSON_STRUCTURE',
  'JSON_TRANSFORM',
  'JSON_TRANSFORM_STRICT',
  'JSON_TYPE',
  'JSON_VALID',
  'JULIAN',
  'KAHAN_SUM',
  'KURTOSIS',
  'KURTOSIS_POP',
  'LAST',
  'LAST_DAY',
  'LCASE',
  'LCM',
  'LEAST',
  'LEAST_COMMON_MULTIPLE',
  'LEFT',
  'LEFT_GRAPHEME',
  'LEN',
  'LENGTH',
  'LENGTH_GRAPHEME',
  'LEVENSHTEIN',
  'LGAMMA',
  'LIKE_ESCAPE',
  'LIST',
  'LISTAGG',
  'LIST_AGGR',
  'LIST_AGGREGATE',
  'LIST_ANY_VALUE',
  'LIST_APPEND',
  'LIST_APPLY',
  'LIST_APPROX_COUNT_DISTINCT',
  'LIST_AVG',
  'LIST_BIT_AND',
  'LIST_BIT_OR',
  'LIST_BIT_XOR',
  'LIST_BOOL_AND',
  'LIST_BOOL_OR',
  'LIST_CAT',
  'LIST_CONCAT',
  'LIST_CONTAINS',
  'LIST_COSINE_SIMILARITY',
  'LIST_COUNT',
  'LIST_DISTANCE',
  'LIST_DISTINCT',
  'LIST_DOT_PRODUCT',
  'LIST_ELEMENT',
  'LIST_ENTROPY',
  'LIST_EXTRACT',
  'LIST_FILTER',
  'LIST_FIRST',
  'LIST_GRADE_UP',
  'LIST_HAS',
  'LIST_HAS_ALL',
  'LIST_HAS_ANY',
  'LIST_HISTOGRAM',
  'LIST_INDEXOF',
  'LIST_INNER_PRODUCT',
  'LIST_INTERSECT',
  'LIST_KURTOSIS',
  'LIST_KURTOSIS_POP',
  'LIST_LAST',
  'LIST_MAD',
  'LIST_MAX',
  'LIST_MEDIAN',
  'LIST_MIN',
  'LIST_MODE',
  'LIST_PACK',
  'LIST_POSITION',
  'LIST_PREPEND',
  'LIST_PRODUCT',
  'LIST_REDUCE',
  'LIST_RESIZE',
  'LIST_REVERSE',
  'LIST_REVERSE_SORT',
  'LIST_SELECT',
  'LIST_SEM',
  'LIST_SKEWNESS',
  'LIST_SLICE',
  'LIST_SORT',
  'LIST_STDDEV_POP',
  'LIST_STDDEV_SAMP',
  'LIST_STRING_AGG',
  'LIST_SUM',
  'LIST_TRANSFORM',
  'LIST_UNIQUE',
  'LIST_VALUE',
  'LIST_VAR_POP',
  'LIST_VAR_SAMP',
  'LIST_WHERE',
  'LIST_ZIP',
  'LN',
  'LOG',
  'LOG10',
  'LOG2',
  'LOWER',
  'LPAD',
  'LSMODE',
  'LTRIM',
  'MAD',
  'MAKE_DATE',
  'MAKE_TIME',
  'MAKE_TIMESTAMP',
  'MAKE_TIMESTAMPTZ',
  'MAP',
  'MAP_CONCAT',
  'MAP_ENTRIES',
  'MAP_EXTRACT',
  'MAP_FROM_ENTRIES',
  'MAP_KEYS',
  'MAP_VALUES',
  'MAX',
  'MAX_BY',
  'MD5',
  'MD5_NUMBER',
  'MD5_NUMBER_LOWER',
  'MD5_NUMBER_UPPER',
  'MEAN',
  'MEDIAN',
  'METADATA_INFO',
  'MICROSECOND',
  'MILLENNIUM',
  'MILLISECOND',
  'MIN',
  'MINUTE',
  'MIN_BY',
  'MISMATCHES',
  'MOD',
  'MODE',
  'MONTH',
  'MONTHNAME',
  'MULTIPLY',
  'NEXTAFTER',
  'NEXTVAL',
  'NFC_NORMALIZE',
  'NOT_ILIKE_ESCAPE',
  'NOT_LIKE_ESCAPE',
  'NOW',
  'NULLIF',
  'OBJ_DESCRIPTION',
  'OCTET_LENGTH',
  'ORD',
  'PARQUET_FILE_METADATA',
  'PARQUET_KV_METADATA',
  'PARQUET_METADATA',
  'PARQUET_SCAN',
  'PARQUET_SCHEMA',
  'PARSE_DIRNAME',
  'PARSE_DIRPATH',
  'PARSE_FILENAME',
  'PARSE_PATH',
  'PG_COLLATION_IS_VISIBLE',
  'PG_CONF_LOAD_TIME',
  'PG_CONVERSION_IS_VISIBLE',
  'PG_FUNCTION_IS_VISIBLE',
  'PG_GET_CONSTRAINTDEF',
  'PG_GET_EXPR',
  'PG_GET_VIEWDEF',
  'PG_HAS_ROLE',
  'PG_IS_OTHER_TEMP_SCHEMA',
  'PG_MY_TEMP_SCHEMA',
  'PG_OPCLASS_IS_VISIBLE',
  'PG_OPERATOR_IS_VISIBLE',
  'PG_OPFAMILY_IS_VISIBLE',
  'PG_POSTMASTER_START_TIME',
  'PG_SIZE_PRETTY',
  'PG_TABLE_IS_VISIBLE',
  'PG_TIMEZONE_NAMES',
  'PG_TS_CONFIG_IS_VISIBLE',
  'PG_TS_DICT_IS_VISIBLE',
  'PG_TS_PARSER_IS_VISIBLE',
  'PG_TS_TEMPLATE_IS_VISIBLE',
  'PG_TYPEOF',
  'PG_TYPE_IS_VISIBLE',
  'PI',
  'PLATFORM',
  'POSITION',
  'POW',
  'POWER',
  'PRAGMA_COLLATIONS',
  'PRAGMA_DATABASE_SIZE',
  'PRAGMA_METADATA_INFO',
  'PRAGMA_PLATFORM',
  'PRAGMA_SHOW',
  'PRAGMA_STORAGE_INFO',
  'PRAGMA_TABLE_INFO',
  'PRAGMA_USER_AGENT',
  'PRAGMA_VERSION',
  'PREFIX',
  'PRINTF',
  'PRODUCT',
  'QUANTILE',
  'QUANTILE_CONT',
  'QUANTILE_DISC',
  'QUARTER',
  'RADIANS',
  'RANDOM',
  'RANGE',
  'READFILE',
  'READ_BLOB',
  'READ_CSV',
  'READ_CSV_AUTO',
  'READ_JSON',
  'READ_JSON_AUTO',
  'READ_JSON_OBJECTS',
  'READ_JSON_OBJECTS_AUTO',
  'READ_NDJSON',
  'READ_NDJSON_AUTO',
  'READ_NDJSON_OBJECTS',
  'READ_PARQUET',
  'READ_TEXT',
  'REDUCE',
  'REGEXP_ESCAPE',
  'REGEXP_EXTRACT',
  'REGEXP_EXTRACT_ALL',
  'REGEXP_FULL_MATCH',
  'REGEXP_MATCHES',
  'REGEXP_REPLACE',
  'REGEXP_SPLIT_TO_ARRAY',
  'REGEXP_SPLIT_TO_TABLE',
  'REGR_AVGX',
  'REGR_AVGY',
  'REGR_COUNT',
  'REGR_INTERCEPT',
  'REGR_R2',
  'REGR_SLOPE',
  'REGR_SXX',
  'REGR_SXY',
  'REGR_SYY',
  'REPEAT',
  'REPEAT_ROW',
  'REPLACE',
  'RESERVOIR_QUANTILE',
  'REVERSE',
  'RIGHT',
  'RIGHT_GRAPHEME',
  'ROUND',
  'ROUNDBANKERS',
  'ROUND_EVEN',
  'ROW',
  'ROW_TO_JSON',
  'RPAD',
  'RTRIM',
  'SECOND',
  'SEM',
  'SEQ_SCAN',
  'SESSION_USER',
  'SETSEED',
  'SET_BIT',
  'SHA256',
  'SHA3',
  'SHELL_ADD_SCHEMA',
  'SHELL_ESCAPE_CRNL',
  'SHELL_IDQUOTE',
  'SHELL_MODULE_SCHEMA',
  'SHELL_PUTSNL',
  'SHOBJ_DESCRIPTION',
  'SHOW',
  'SHOW_DATABASES',
  'SHOW_TABLES',
  'SHOW_TABLES_EXPANDED',
  'SIGN',
  'SIGNBIT',
  'SIN',
  'SKEWNESS',
  'SNIFF_CSV',
  'SPLIT',
  'SPLIT_PART',
  'SQL_AUTO_COMPLETE',
  'SQRT',
  'STARTS_WITH',
  'STATS',
  'STDDEV',
  'STDDEV_POP',
  'STDDEV_SAMP',
  'STORAGE_INFO',
  'STRFTIME',
  'STRING_AGG',
  'STRING_SPLIT',
  'STRING_SPLIT_REGEX',
  'STRING_TO_ARRAY',
  'STRIP_ACCENTS',
  'STRLEN',
  'STRPOS',
  'STRPTIME',
  'STRUCT_EXTRACT',
  'STRUCT_INSERT',
  'STRUCT_PACK',
  'STR_SPLIT',
  'STR_SPLIT_REGEX',
  'SUBSTR',
  'SUBSTRING',
  'SUBSTRING_GRAPHEME',
  'SUBTRACT',
  'SUFFIX',
  'SUM',
  'SUMKAHAN',
  'SUMMARY',
  'SUM_NO_OVERFLOW',
  'TABLE_INFO',
  'TAN',
  'TEST_ALL_TYPES',
  'TEST_VECTOR_TYPES',
  'TIMEZONE',
  'TIMEZONE_HOUR',
  'TIMEZONE_MINUTE',
  'TIME_BUCKET',
  'TODAY',
  'TO_BASE',
  'TO_BASE64',
  'TO_BINARY',
  'TO_CENTURIES',
  'TO_DAYS',
  'TO_DECADES',
  'TO_HEX',
  'TO_HOURS',
  'TO_JSON',
  'TO_MICROSECONDS',
  'TO_MILLENNIA',
  'TO_MILLISECONDS',
  'TO_MINUTES',
  'TO_MONTHS',
  'TO_SECONDS',
  'TO_TIMESTAMP',
  'TO_WEEKS',
  'TO_YEARS',
  'TRANSACTION_TIMESTAMP',
  'TRANSLATE',
  'TRIM',
  'TRUNC',
  'TRY_STRPTIME',
  'TXID_CURRENT',
  'TYPEOF',
  'UCASE',
  'UNBIN',
  'UNHEX',
  'UNICODE',
  'UNION_EXTRACT',
  'UNION_TAG',
  'UNION_VALUE',
  'UNNEST',
  'UNPIVOT_LIST',
  'UPPER',
  'USER',
  'USER_AGENT',
  'UUID',
  'VARIANCE',
  'VAR_POP',
  'VAR_SAMP',
  'VECTOR_TYPE',
  'VERIFY_EXTERNAL',
  'VERIFY_FETCH_ROW',
  'VERIFY_PARALLELISM',
  'VERIFY_SERIALIZER',
  'VERSION',
  'WEEK',
  'WEEKDAY',
  'WEEKOFYEAR',
  'WHICH_SECRET',
  'WRITEFILE',
  'XOR',
  'YEAR',
  'YEARWEEK',
];
