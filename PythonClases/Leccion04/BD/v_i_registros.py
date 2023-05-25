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
            # cursor = connection.cursor()
            sentencia = 'INSERT INTO persona (nombre, apellido, email)VALUEs (%s, %s, %s)' # Placeholder
            valores = (
                ('Carlos', 'Lara', 'clara@mail.com'),
                ('Marcos', 'Canto', 'mcanto@mail.com'),
                ('Marcelo', 'Cuenca', 'cuencaM@mail.com')
            ) # Es una tupla de tuplas
            # connection.commit() esto se utiliza para guardar los cambios en la base de datos
            cursor.executemany(sentencia, valores)
            registros_insertados = cursor.rowcount
            print(f'Los registros insertados son: {registros_insertados}')

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    connection.close()