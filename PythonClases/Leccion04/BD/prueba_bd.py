import psycopg2 # es para poder conectarnos  a Postgre

conexion = psycopg2.connect(
    user = 'postgres',
    password = 'Yagosan3',
    host='127.0.0.1',
    port = '5432',
    database = 'test_bd'
)

cursor = conexion.cursor()

sentencia = 'SELECT * FROM persona'; #escribimos las sentencias

cursor.execute(sentencia) # de esta manera ejecutamos la sentencia

registros = cursor.fetchall() ##recupera aqui todos los registros de la sentencia delcarada


print(registros)

cursor.close()
conexion.close();

