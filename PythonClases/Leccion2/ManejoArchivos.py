class ManejoArchivos:
    def __init__(self, nombre):
        self.nombre = nombre
    def __enter__(self):
        print('Obtenemos el recurso'.center(50, '-'))
        self.nombre = open(self.nombre, 'r',encoding='utf8') # encapsulamos el codigo dentro del meotodo
        return self.nombre
    def __exit__(self, exc_type, exc_val, exc_tb):
        print('cerramos el recurso'.center(50,'-'))
        if self.nombre:
            self.nombre.close() # cerramos el archivo
