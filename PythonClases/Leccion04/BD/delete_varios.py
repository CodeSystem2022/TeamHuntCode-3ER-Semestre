import psycopg2

# Establecer los detalles de la conexión
host = '127.0.0.1'  # Cambia esto según la ubicación de tu servidor PostgreSQL
port = 5432  # Cambia esto si tu servidor PostgreSQL está utilizando un puerto diferente
database = 'test_db'  # Cambia esto por el nombre de tu base de datos
user = 'postgres'  # Cambia esto por tu nombre de usuario de PostgreSQL
password = 'admin'  # Cambia esto por tu contraseña de PostgreSQL

# Conectar a la base de datos
try:
    connection = psycopg2.connect(
        host=host,
        port=port,
        database=database,
        user=user,
        password=password
    )
    print("Conexión exitosa a la base de datos")

    # Aquí puedes realizar operaciones con la base de datos

except psycopg2.Error as e:
    print("Error al conectar a la base de datos:", e)
# finally:
    # Cerrar la conexión
#    if connection:
#        connection.close()
#        print("Conexión cerrada")
try:
    with connection:
        with connection.cursor() as cursor:
            sentencia = 'DELETE FROM persona WHERE id_persona IN %s'
            entrada = input('Digite los numeros de registroa a eleminar (separados por coma): ')
            valores = (tuple(entrada.split(',')),) # Es una tupla de tuplas
            cursor.execute(sentencia, valores)
            registros_eliminados = cursor.rowcount
            print(f'Los registros eliminados son: {registros_eliminados}')

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    connection.close()