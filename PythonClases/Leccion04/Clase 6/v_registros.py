import psycopg2 #Esto es para poder conectar a Postegre

conexion = psycogy2.connect(user='postegres', password='Admin', host='127.0.0.1', port='5432', database='test_bd',)

#print(conexion)
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'SELECT * FROM persona WHERE id_persona IN &s' #placeholder
            entrada = input('Digite los id_personas a buscar (separados por comas: )')
            llaves_primarias = (tuple(entrada.split(',')),)
        #id_persona = input('Digite un numero para el id_persona: ')
            cursor.execute(setencia, llaves_primarias) #De esta manera ejecutamos la setencia
            registros = cursor.fetchall()#Recuperamos todos los registros dque seran de una lista
        for registros in registros:
            print(registros)


except Exception as e:
    print(f'Ocurrio un error: {e} ')
finally:
        conexion.close()
