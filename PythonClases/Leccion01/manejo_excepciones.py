from NumerosIgualesException import NumerosIgualesException

resultado = None

try:
    a = int(input('Digite el primer número: '))
    b = int(input('Digite el segundo número: '))
    if a == b:
        raise NumerosIgualesException('son numeros iguales')

    resultado = a / b  # Modificamos
except TypeError as e:
    print(f'TypeError - ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - ocurrió un error: {type(e)}')
except Exception as e:
    print(f'Exception - ocurrió un error: {type(e)}')
else:
    print('no arrojo ninguna excepción')
finally: #Siempre se va a ejecutar
    print('Ejecución de este bloque Finally')

print(f'resultado es: {resultado}')
print('seguimos...')
