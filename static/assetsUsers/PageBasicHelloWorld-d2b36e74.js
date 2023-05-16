import{p as f}from"./posts-f41f5125.js";import{P as c}from"./prism-line-numbers-5648e3bb.js";import{d as p,j as h,a as u,c as m,h as e,t as d,u as o,f as a,b as l,w as r,e as b,p as g,g as v,i as y,r as x}from"./index-16045269.js";import"./_commonjsHelpers-042e6b4d.js";const i=n=>(g("data-v-bc31f306"),n=n(),v(),n),E={class:"post-container"},j=["href"],k=b('<h2 data-v-bc31f306>Descripción</h2><p data-v-bc31f306>El repositorio de este ejemplo consta de 3 archivos, los cuales son</p><ul class="ml-12" data-v-bc31f306><li data-v-bc31f306><code data-v-bc31f306>main.py</code></li><li data-v-bc31f306><code data-v-bc31f306>README.md</code></li><li data-v-bc31f306><code data-v-bc31f306>LICENSE</code></li></ul><p data-v-bc31f306> El archivo principal <code data-v-bc31f306>main.py</code> contiene el programa, los archivos <code data-v-bc31f306>README.md</code> y <code data-v-bc31f306>LICENSE</code> contienen las instrucciones para ejecutar el programa y la espeficicación de la licencia de código, respectivamente. </p><p data-v-bc31f306> El contenido del archivo <code data-v-bc31f306>main.py</code> se presenta a continuación </p>',5),w=i(()=>e("p",null,[a(" el programa consta de dos partes, la definición de una función "),e("code",null,"run()"),a(" y la ejecución de esta dentro del punto de entrada. En la función "),e("code",null,"run()"),a(" se hacen dos llamadas a la función "),e("code",null,"print()"),a(" cuyo resultado será la impresión en pantalla de las frases "),e("code",null,"Hola mundo!"),a(" y "),e("code",null,"Hello world!"),a(". Esto es un poco diferente al clásico programa de hola mundo, pero se hace de esta manera para ejemplificar las dos formas principales de escribir un dato de tipo string, usando comillas dobles y simples respectivamente. El hola mundo más simple posible en python se escribe de la siguiente manera ")],-1)),H=i(()=>e("p",null,"o siguiendo la misma linea de usar un punto de entrada, el programa se vería como",-1)),S=i(()=>e("p",null," La recomendación para este ejemplo es modificar el código fuente tratando de seguir las buenas prácticas, como por ejemplo, usar un punto de entrada para ejecutar el programa. ",-1)),q=["href"],B=p({__name:"BasicHelloWorld",setup(n){const s=h(f).value.filter(t=>t.id===1)[0];return(t,L)=>(u(),m("div",E,[e("h1",null,d(o(s).name),1),e("p",null,d(o(s).description),1),e("p",null,[a("Puedes consultar el repositorio del ejemplo "),e("a",{class:"link-example cursor-pointer font-semibold",href:o(s).repo},"en este enlace.",8,j)]),k,e("pre",null,[a("            "),l(o(c),{language:"python"},{default:r(()=>[a(`
    def run():
        """
            Los Doctrings son estas cadenas de caracteres escritas entres triples
            comillas dobles " o triples comillas simples ', se usan principalmente
            para documentar partes del codigo como funciones o clases.
            Se recomienda escribir la documentacion en ingles y sin usar caracteres
            especiales como acentos o ñ.
        """

        print("Hola mundo!") # Este es un comentario de una sola linea
        # este tipo de comentarios se pueden usar arriba o abajo de una linea de codigo
        # En la linea de abajo se usa otro tipo de string el cual se escribe dentro
        # de comillas simples '' y es equivalente a los strings que se escriben con comillas dobles ""
        print('Hello world!') # tambien se pueden usar al final de una linea, para no afectar su ejecucion


    if __name__ == '__main__':
        # La linea superior hace referencia al punto de entrada del programa (entry point)
        run() # Esta linea ejecuta la funcion run, la cual contiene la parte principal del programa


    # Por lo general es mala practica escribir muchos comentarios a menos que sean totalmente requeridos
    # en este ejemplo se usan asi a modo de ilustrar su uso.
    # Por ultimo, hay que observar que el contenido de todo este archivo es totalmente equivalente a escribir
    # las siguientes lineas sin identacion, ya que la ejecucion produce el mismo resultado
    # print("Hola mundo!")
    # print('Hello world!')
            `)]),_:1}),a(`
        `)]),w,e("pre",null,[a("            "),l(o(c),{language:"python"},{default:r(()=>[a(`
    print("Hola mundo")
            `)]),_:1}),a(`
        `)]),H,e("pre",null,[a("            "),l(o(c),{language:"python"},{default:r(()=>[a(`
    def main():
        print("Hola mundo")


    if __name__ == '__main__':
        run()
            `)]),_:1}),a(`
        `)]),S,e("a",{target:"_blank",class:"link-example block text-center text-4xl font-bold my-16",href:o(s).repo},"REPOSITORIO",8,q)]))}});const I=y(B,[["__scopeId","data-v-bc31f306"]]),P={class:"page-container"},C=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"})],-1),V=p({__name:"PageBasicHelloWorld",setup(n){return(_,s)=>{const t=x("router-link");return u(),m("div",P,[l(t,{class:"link-example text-2xl flex",to:"/examples"},{default:r(()=>[C,a("   Regresar ")]),_:1}),l(I)])}}});export{V as default};
