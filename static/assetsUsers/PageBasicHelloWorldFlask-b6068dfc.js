import{p as h}from"./posts-f41f5125.js";import{P as r}from"./prism-line-numbers-5648e3bb.js";import{d as p,j as _,a as u,c as f,h as e,t as i,u as o,f as a,b as l,w as c,e as v,p as g,g as k,i as y,r as x}from"./index-16045269.js";import"./_commonjsHelpers-042e6b4d.js";const t=s=>(g("data-v-2fecd9f0"),s=s(),k(),s),b={class:"post-container"},w=["href"],E=v(`<h2 data-v-2fecd9f0>Descripción</h2><p data-v-2fecd9f0>La lista de archivos del repositorio es la siguiente</p><ul class="ml-12" data-v-2fecd9f0><li data-v-2fecd9f0><code data-v-2fecd9f0>.gitignore</code></li><li data-v-2fecd9f0><code data-v-2fecd9f0>LICENSE</code></li><li data-v-2fecd9f0><code data-v-2fecd9f0>README.md</code></li><li data-v-2fecd9f0><code data-v-2fecd9f0>hello.py</code></li><li data-v-2fecd9f0><code data-v-2fecd9f0>requeriments.txt</code></li></ul><p data-v-2fecd9f0> El archivo <code data-v-2fecd9f0>.gitignore</code> es usado par no almacenar en el repositorio la carpeta <code data-v-2fecd9f0>.flask_venv</code> que corresponde al ambiente virtual y la carpeta <code data-v-2fecd9f0>__pycache__</code> que se genera al ejecutar el programa, ambas carptas deben generarse en el ambiente de ejecución. </p><p data-v-2fecd9f0> El archivo <code data-v-2fecd9f0>LICENSE</code> solo contiene la espeficicación de la licencia. </p><p data-v-2fecd9f0> En el archivo <code data-v-2fecd9f0>README.md</code> se encuentran las instrucciones para instalar las dependencias y ejecutar la aplicaión. </p><p data-v-2fecd9f0><code data-v-2fecd9f0>hello.py</code> corresponde al archivo principal, el cual debe ejecutarse con el comando <pre data-v-2fecd9f0>                <code data-v-2fecd9f0>
                    flask --app hello run --debug
                </code>
            </pre> con lo que se ejecutará un servidor de desarrollo con el cual pueden visulizarse las 2 rutas de la aplicación. </p><p data-v-2fecd9f0> El último archivo <code data-v-2fecd9f0>requeriments.txt</code> contiene las dependencias que necesita la aplicación para ejecutarse, usando el comando <pre data-v-2fecd9f0>                <code data-v-2fecd9f0>
                    pip install -r requeriments.txt
                </code>
            </pre> con el ambiente virtual activado, se instalarán todas las dependencias necesarias. </p><h3 data-v-2fecd9f0> hello.py </h3><p data-v-2fecd9f0> La aplicación inicia con la importación del módulo y la creación de una instancia la cual se inicializa con el parametro <code data-v-2fecd9f0>__name__</code> que hace referencia al nombre del archivo. </p>`,10),j=t(()=>e("p",null," Esta aplicación consta de 2 rutas determinadas por los decoradores ",-1)),q=t(()=>e("p",null," y cuyas url correspondientes son ",-1)),H=t(()=>e("p",null,"Al visitar la primer url se visualizará un resultado similar al siguiente",-1)),F=t(()=>e("div",{class:"url1"}," Hola mundo!!! ",-1)),I=t(()=>e("p",null," y para la segunda url un resultado similar a este ",-1)),P=t(()=>e("div",{class:"url2"}," Hola mundo desde un template ",-1)),B=t(()=>e("p",null," La única diferencia entre estas vistas, es que en la segunda se retorna un string con formato de template html para poder incluir estilos, hacer esto no es recomendable, ya que si se desea renderizar templates de sitios web con flask, es más eficiente usar algun motor de plantillas, en el caso de flask se usa jinja por defecto. ",-1)),C=t(()=>e("p",null," La parte central en el código corresponde al string que juega el papel de template ",-1)),S=t(()=>e("p",null," el cual retorna la segunda función, pero debemos de notar que amabas funciones retornan un string. Esto no siempre es así, ya que la mayoria de las veces se retornará alguna respuesta http ya que es una mejor manera para renderizar templates o crear APIs. ",-1)),L=t(()=>e("p",null,[a(" Para seguir practicando con este framework, la mejor opción es tomar un curso especializado y complementarlo con la documentación oficial "),e("a",{target:"_blank",href:"https://flask.palletsprojects.com/en/2.3.x/",class:"link-example"},"https://flask.palletsprojects.com/en/2.3.x/")],-1)),z=["href"],D=p({__name:"BasicHelloWorldFlask",setup(s){const n=_(h).value.filter(d=>d.id===3)[0];return(d,O)=>(u(),f("div",b,[e("h1",null,i(o(n).name),1),e("p",null,i(o(n).description),1),e("p",null,[a("Puedes consultar el repositorio del ejemplo "),e("a",{class:"link-example cursor-pointer font-semibold",href:o(n).repo},"en este enlace.",8,w)]),E,e("pre",null,[a("            "),l(o(r),{language:"python"},{default:c(()=>[a(`
    from flask import Flask

    app = Flask(__name__)


    @app.route('/')
    def hello_world():
        return '<h1>Hola mundo!!!</h1>'


    template = '''
    <!DOCTYPE htm>
    <html lang="en">
    <head>
        <meta http-equiv="refresh" content="5" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hello World Flask</title>
    </head>
    <body style="background: #484848;">
        <h1 style="color: white; font-family: arial;">
        Hola mundo desde un template
        </h1>
    </body>
    </html>
    '''


    @app.route('/template')
    def hello_template():
        return template
            `)]),_:1}),a(`
        `)]),j,e("pre",null,[a("            "),l(o(r),{language:"python"},{default:c(()=>[a(`
    @app.route('/')
    @app.route('/template')
            `)]),_:1}),a(`
        `)]),q,e("pre",null,[a("            "),l(o(r),{language:"python"},{default:c(()=>[a(`
    https://localhost:5000
    https://localhost:5000/template
            `)]),_:1}),a(`
        `)]),H,F,I,P,B,C,e("pre",null,[a("            "),l(o(r),{language:"python"},{default:c(()=>[a(`
    template = '''
    <!DOCTYPE htm>
    <html lang="en">
    <head>
        <meta http-equiv="refresh" content="5" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hello World Flask</title>
    </head>
    <body style="background: #484848;">
        <h1 style="color: white; font-family: arial;">
        Hola mundo desde un template
        </h1>
    </body>
    </html>
    '''
            `)]),_:1}),a(`
        `)]),S,L,e("a",{target:"_blank",class:"link-example block text-center text-4xl font-bold my-16",href:o(n).repo},"REPOSITORIO",8,z)]))}});const N=y(D,[["__scopeId","data-v-2fecd9f0"]]),T={class:"page-container"},W=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"})],-1),$=p({__name:"PageBasicHelloWorldFlask",setup(s){return(m,n)=>{const d=x("router-link");return u(),f("div",T,[l(d,{class:"link-example text-2xl flex",to:"/examples"},{default:c(()=>[W,a("   Regresar ")]),_:1}),l(N)])}}});export{$ as default};
