try:
    #manejo de contexto with, sintaxis simplificada
    with open('prueba.txt', 'r', encoding='utf8') as archivo:
        print(archivo.read())


except Exception as e:
    print(e)
finally:
    print("finalizo correctamente")