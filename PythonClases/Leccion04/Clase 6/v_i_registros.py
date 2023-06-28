from prueba_bd import conexion

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'INSERT INTO persona (nombre, apellido, email)VALUES (%s, %s, %s)'
            valores = (
                ('carlos', 'Lara', 'clara@mail.com')
                ('marcos', 'canto', 'mcanto@mail.com')
                ('marcelo', 'cuenca', 'cuencam@mail.com')
            )#Es una tupla de tuplas
        #id_persona = input('Digite un numero para el id_persona: ')
            cursor.executemany(setencia, valores) #De esta manera ejecutamos la setencia
            #conexion.commit esto se utiliza para guardar los cambios en la base de datos
            registros_insertados = cursor.rowcount #Recuperamos todos los registros dque seran de una lista
            print(f'Los registros insertados son: {registros_insertados}')


except Exception as e:
    print(f'Ocurrio un error: {e} ')
finally:
        conexion.close()