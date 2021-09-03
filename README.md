# Magda-mdLinks

## Índice

* [1. ¿Qué es Magda-mdLinks?](#1¿Qué-es-Md-Links?)
* [2. Diagrama de Flujo](#2Diagrama-de-Flujo)
* [3. Instalación](#3Instalación)
* [4. Indicaciones de como debes usar la librería](#4Indicaciones-de-como-debes-usar-la-librería)
* [5. ¿Qué muestra el análisis?](#3¿Qué-muestra-el-análisis?)


***

## 1. ¿Qué es nico-md?  ![libreria](https://github.com/nicolarabarca/SCL017-md-link/blob/master/assets/libreria.png)

***Magda-mdLinks*** es un lenguaje de marcado ligero que manejan texto plano, ayudando así a conseguir la máxima legibilidad y facilidad de  publicación (como  el conocido documento README.md). Magda-mdLinks valida especificamente si el archivo Markdown contiene links y si estos links son funcionales o se encuentran rotos.


## 2. Diagrama de Flujo ![diagrama](https://github.com/nicolarabarca/SCL017-md-link/blob/master/assets/diagrama-de-flujo%20(1).png)

![Diagrama de Flujo](https://github.com/nicolarabarca/SCL017-md-link/blob/Borrador/assets/Untitled%20Diagram%20(7).png)

### 3. Instalación  ![instalación](https://github.com/nicolarabarca/SCL017-md-link/blob/master/assets/repair-tools.png)


  Para llevar a cabo el primer paso tienes ***2 opciones***
    - La primera opción es realizar un ***Fork*** y ***clonar*** el proyecto Magda-mdLinks para luego realizar la instalación con el comando ***npm install -g Magda-mdLinks*** 
    - La segunda opción es ***descargar*** directamente el proyecto y luego realizar la instalación con el comando ***npm install -g Magda-mdLinks***
    
#### 4. Indicaciones de como debes usar la librería ![indicaciones](https://github.com/nicolarabarca/SCL017-md-link/blob/master/assets/portapapeles.png)


  * Abriremos la terminal de tu editor de código o tu gitbash (o el que tu prefieras), como se muestra en la siguiente imagen.
  
  ![Terminal](https://github.com/Magdasanhueza/SCL017-md-link/blob/master/Assets/terminal%201.png)
  
  * A continuación debes usar el siguiente comando ***Magda-mdLinks*** y agregar ruta relativa o absoluta del archivo o directorio que quieras analizar. En La foto que adjunto a continuación yo ocupo el nombre del directorio Assets que contiene un archivo .md y otros de formatos diferentes.
  
  ![Comando](https://github.com/Magdasanhueza/SCL017-md-link/blob/master/Assets/terminal%202.png)
  
  * Por último hacer  click en la tecla ***Enter*** y ***voilà*** ya tienes el resultado del analisis de tu archivo o directorio.
  
  ![Análisis](https://github.com/Magdasanhueza/SCL017-md-link/blob/master/Assets/terminal%203.png)
  
  
 ##### 5. ¿Qué muestra el análisis? ![análisis](https://github.com/nicolarabarca/SCL017-md-link/blob/master/assets/computadora.png)
 
  * El análisis saludará a tu directorio o archivo.
  *Analiza y muestra si tu ruta corresponde a un archivo o directorio. ***Si*** es directorio retornará ***true*** o de lo contrario retornará ***false*** y esto quiere decir que es un archivo.
  * Luego mostrará el resultado de la ruta y nombre del archivo .md encontrado dentro del directorio.
  *Enseguida mostrará un resumen de todos los links detectados sin importar si estos links se encuentran funcionales o rotos.
  * A continuación validará cada uno de las URLs detectadas.
  *Finalmente justo en el lado izquierdo de cada link mostrará el status de cada uno de estos con un ***Link Valid*** o ***Link inValid***
  
  
  * Puedes descargar la librería directamente en este enlace https://github.com/Magdasanhueza/SCL017-md-link/releases/tag/v0.0.2
  
 
 
        
        
  
