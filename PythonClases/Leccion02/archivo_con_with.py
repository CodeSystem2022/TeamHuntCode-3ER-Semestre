from ManejoArchivos import ManejoArchivos  #manejo de contexto with, sintaxis simplificada
    # with open('prueba.txt', 'r', encoding='utf8') as archivo:
    #    print(archivo.read())



#no nos hace falta el bloque try ni finally
 # Utiliza diferentes metodos : __enter__ este es el que abre
# ahora el siguiente metodo  :  __exit__ este lo cierra

with ManejoArchivos('prueba.txt') as archivo:
    print(archivo.read())

