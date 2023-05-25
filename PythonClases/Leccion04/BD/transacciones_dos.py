import psycopg2 as bd

# Establecer los detalles de la conexión
host = '127.0.0.1'  # Cambia esto según la ubicación de tu servidor PostgreSQL
port = 5432  # Cambia esto si tu servidor PostgreSQL está utilizando un puerto diferente
database = 'test_db'  # Cambia esto por el nombre de tu base de datos
user = 'postgres'  # Cambia esto por tu nombre de usuario de PostgreSQL
password = 'admin'  # Cambia esto por tu contraseña de PostgreSQL

# Conectar a la base de datos
try:
    connection = bd.connect(
        host=host,
        port=port,
        database=database,
        user=user,
        password=password
    )
    print("Conexión exitosa a la base de datos")

    # Aquí puedes realizar operaciones con la base de datos

except bd.Error as e:
    print("Error al conectar a la base de datos:", e)
# finally:
    # Cerrar la conexión
#    if connection:
#        connection.close()
#        print("Conexión cerrada")
try:
    connection.autocommit = False # Esto no deberia estar
    cursor = connection.cursor()
    sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    valores = ('Carlos', 'Lara', 'lcarlos@mail.com')
    cursor.execute(sentencia, valores)

    sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    valores = ('Juan', 'Juarez', 'jcjuarez@mail.com', 1)
    cursor.execute(sentencia, valores)

    connection.commit()
    print('Termina la transaccion.')

except Exception as e:
    connection.rollback()
    print(f'Ocurrio un error, se hizo un rollback: {e}')
finally:
    connection.close()

# psycopg.org/docs/usage.html