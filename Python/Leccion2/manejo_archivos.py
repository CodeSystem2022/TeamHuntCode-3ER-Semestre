

try:
    archivo = open(' prueba.txt','w')  # la doble w es de write, escribir
    
    archivo.write(' ')

except Exception as e:
    print(e)

finally:
    archivo.close();


