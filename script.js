// Lista de palabras en español de exactamente 7 letras (sin ñ)
const palabras = [
    'corazon', 'manzana', 'liberta', 'caballo', 'espanol', 'familia', 'galeria', 'hermano',
    'jugador', 'llegada', 'maestro', 'momento', 'naranja', 'ocasion', 'persona', 'quetzal',
    'sentido', 'tomates', 'univers', 'version', 'calidad', 'empleos', 'kimonos', 'lampara',
    'material', 'natural', 'operador', 'radiante', 'silencio', 'trabajo', 'variable', 'zapatos',
    'abogado', 'bebidas', 'cerebro', 'ejemplo', 'figuras', 'gratitud', 'habitat', 'innovar',
    'jaguar', 'lectura', 'mantras', 'nativos', 'originar', 'pregunta', 'quimico', 'recurso',
    'semilla', 'tomadas', 'vivencia', 'aceites', 'bailes', 'elegir', 'felices', 'habitan',
    'ignorar', 'limpios', 'optimos', 'romano', 'sabores', 'almacen', 'banderas', 'cascada',
    'general', 'hospital', 'invitado', 'jardin', 'manteca', 'noticias', 'semanas', 'zelador',
    'proceso', 'cocinas', 'calzado', 'vestido', 'pintura', 'pelicula', 'musical', 'cancion',
    'docente', 'estudio', 'campera', 'respuesta', 'cantina', 'programa', 'secuencia', 'funcion',
    'categoria', 'estruct', 'elemento', 'conjunto', 'horario', 'semestre', 'bimestre', 'trimestre',
    'tecnico', 'mecanico', 'electron', 'politico', 'academico', 'artistico', 'colegial', 'estatal',
    'municipal', 'ciudad', 'cultura', 'literar', 'proyecto', 'escuela', 'estacion', 'biblioteca',
    'aeropuerto', 'carretera', 'autobus', 'bicicleta', 'motorizado', 'patente', 'conductor', 'pasajero',
    'turismo', 'vacacion', 'hoteles', 'hostales', 'camping', 'parques', 'jardines', 'flores',
    'plantas', 'arboles', 'hojas', 'ramas', 'troncos', 'raices', 'animales', 'perros',
    'gatos', 'leones', 'tigres', 'osos', 'monos', 'aves', 'mariposas', 'abejas',
    'moscas', 'ants', 'escorpiones', 'arañas', 'cangrejos', 'langostas', 'caballos', 'vacas',
    'cerdos', 'ovejas', 'cabritos', 'conejos', 'ratones', 'mariscos', 'sardinas', 'truchas',
    'salmones', 'atunes', 'bacalaos', 'lubinas', 'carpas', 'estudiantes', 'profesores', 'alumnos',
    'universidad', 'colegios', 'escuelas', 'institutos', 'lecciones', 'tareas', 'examenes', 'notas',
    'calificacion', 'promedio', 'reportes', 'boletas', 'libros', 'cuadernos', 'lapices', 'boligrafos',
    'reglas', 'compases', 'calculadoras', 'computadoras', 'internet', 'paginas', 'sitios', 'navegadores',
    'emails', 'mensajes', 'llamadas', 'videos', 'musicas', 'cantos', 'guitarras', 'pianos',
    'violines', 'baterias', 'flautas', 'trompetas', 'teatros', 'cines', 'operas', 'ballets',
    'danzas', 'comedias', 'dramas', 'musicales', 'deportes', 'futbol', 'basquetbol', 'tenis',
    'voleybol', 'rugby', 'hockey', 'beisbol', 'natacion', 'ciclismo', 'atletismo', 'gimnasios',
    'karate', 'taekwondo', 'judo', 'cocinas', 'cuchillos', 'tenedores', 'cucharas', 'platos',
    'vasos', 'tazas', 'servilletas', 'comidas', 'desayunos', 'almuerzos', 'cenas', 'meriendas',
    'snacks', 'refrescos', 'cafes', 'leches', 'huevos', 'quesos', 'mantequilla', 'yogures',
    'cremas', 'azucares', 'sales', 'carnes', 'pollos', 'pescados', 'verduras', 'frutas',
    'legumbres', 'panes', 'arroz', 'pastas', 'pizzas', 'hamburguesas', 'sandwich', 'ensaladas',
    'sopas', 'caldos', 'agua', 'jugos', 'limonadas', 'cervezas', 'vinos', 'whiskies',
    'rones', 'ropas', 'camisas', 'pantalones', 'faldas', 'vestidos', 'chaquetas', 'sueteres',
    'calcetines', 'botas', 'sandalias', 'chanclas', 'guantes', 'sombreros', 'corbatas', 'anillos',
    'collares', 'pulseras', 'pendientes', 'relojes', 'cadenas', 'medallas', 'casas', 'apartamentos',
    'habitaciones', 'salones', 'comedores', 'dormitorios', 'mesas', 'sillas', 'sofas', 'camas',
    'armarios', 'cajones', 'estantes', 'espejos', 'ventanas', 'puertas', 'escaleras', 'ascensores',
    'balcones', 'terrazas', 'jardines', 'patios', 'banos', 'duchas', 'baneras', 'lavabos',
    'inodoros', 'toallas', 'secadores', 'refrigeradores', 'microondas', 'hornos', 'lavadoras', 'lavavajillas',
    'tostadores', 'licuadoras', 'televisores', 'radios', 'equipos', 'parlantes', 'audifonos', 'microfonos',
    'camaras', 'proyectores', 'dineros', 'pesos', 'dolares', 'euros', 'billetes', 'monedas',
    'cheques', 'tarjetas', 'bancos', 'cajeros', 'prestamos', 'creditos', 'deudas', 'intereses',
    'cambios', 'costos', 'precios', 'gastos', 'ahorros', 'inversiones', 'ventas', 'compras',
    'negocios', 'empresas', 'trabajos', 'empleos', 'oficinas', 'jefes', 'empleados', 'colaboradores',
    'equipos', 'proyectos', 'reuniones', 'presentaciones', 'conferencias', 'seminares', 'talleres', 'capacitaciones',
    'entrenamientos', 'practicas', 'medicos', 'doctores', 'enfermeras', 'pacientes', 'consultorios', 'clinicas',
    'hospitales', 'farmacias', 'medicinas', 'medicamentos', 'pastillas', 'jarabes', 'inyecciones', 'analisis',
    'radiografias', 'cirujias', 'carros', 'autos', 'motos', 'camiones', 'buses', 'taxis',
    'trenes', 'aviones', 'barcos', 'barcas', 'veleros', 'lanchas', 'yates', 'ferrys',
    'submarinos', 'globos', 'volcanes', 'montanas', 'valles', 'playas', 'rivers', 'lagos',
    'oceanos', 'islas', 'selvas', 'desiertos', 'praderas', 'bosques', 'campos', 'huertas',
    'vinedos', 'olivares', 'cielos', 'soles', 'lunas', 'estrellas', 'galaxias', 'cometas',
    'asteroides', 'planetas', 'anos', 'meses', 'dias', 'horas', 'minutos', 'segundos',
    'siglos', 'decadas', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre', 'lunes', 'martes',
    'miercoles', 'jueves', 'viernes', 'sabado', 'domingo', 'mananas', 'tardes', 'noches',
    'mediodias', 'medianoches', 'primavera', 'verano', 'otono', 'invierno', 'climas', 'lluvias',
    'nieves', 'granizos', 'vientos', 'huracanes', 'tornados', 'terremotos', 'inundaciones', 'sequias',
    'tormentas', 'rayos', 'padres', 'madres', 'hermanos', 'hermanas', 'hijos', 'hijas',
    'abuelos', 'abuelas', 'nietos', 'nietas', 'tios', 'tias', 'primos', 'primas',
    'novios', 'novias', 'esposos', 'esposas', 'parejas', 'amores', 'besos', 'bodas',
    'divorcios', 'separaciones', 'matrimonios', 'compromisos', 'relaciones', 'amistades', 'alegrías', 'tristeza',
    'enojos', 'miedos', 'sorpresas', 'emociones', 'pasiones', 'calmas', 'felices', 'tristes',
    'enojados', 'miedosos', 'sorprendidos', 'emocionados', 'apasionados', 'tranquilos', 'grandes', 'pequenos',
    'altos', 'bajos', 'gordos', 'delgados', 'rapidos', 'lentos', 'fuertes', 'buenos',
    'malos', 'bonitos', 'feos', 'nuevos', 'viejos', 'calientes', 'frios', 'dulces',
    'amargos', 'salados', 'picantes', 'suaves', 'duros', 'limpios', 'sucios', 'blancos',
    'negros', 'rojos', 'azules', 'verdes', 'amarillos', 'naranjas', 'violetas', 'rosas',
    'grises', 'marrones', 'dorados', 'plateados', 'brillantes', 'oscuros', 'claros', 'transparentes',
    'opacos', 'flexibles', 'fragiles', 'resistentes', 'lisos', 'rugosos', 'mojados', 'secos',
    'humedos', 'aridos', 'cerca', 'lejos', 'arriba', 'abajo', 'delante', 'detras',
    'dentro', 'fuera', 'izquierda', 'derecha', 'centro', 'lados', 'esquinas', 'frentes',
    'costas', 'marcos', 'marinos', 'continentales', 'europeos', 'americanos', 'asiaticos', 'africanos',
    'oceanicos', 'mexicanos', 'canadienses', 'argentinos', 'brasilenos', 'chilenos', 'colombianos', 'venezolanos',
    'peruanos', 'españoles', 'ingleses', 'franceses', 'alemanes', 'italianos', 'portugueses', 'rusos',
    'chinos', 'japones', 'coreanos', 'hindus', 'arabes', 'turcos', 'polacos', 'holandeses',
    'suecos', 'daneses', 'noruegos', 'finlandeses', 'suizos', 'austriacos', 'belgas', 'irlandeses',
    'escoceses', 'gallos', 'griegos', 'hungaros', 'checos', 'eslovacos', 'eslovenos', 'croatas',
    'serbios', 'bosnios', 'montenegrinos', 'macedonios', 'albaneses', 'rumanos', 'búlgaros'
];

// Símbolos para las contraseñas
const simbolos = ['@', '#', '$', '&', '%', '?', '*'];

// Función para generar una palabra capitalizada de 7 letras
function generarPalabra() {
    const palabra = palabras[Math.floor(Math.random() * palabras.length)];
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
}

// Función para generar un número de 2 dígitos
function generarNumero() {
    return Math.floor(Math.random() * 100).toString().padStart(2, '0');
}

// Función para validar que la palabra tenga exactamente 7 caracteres
function validarPalabra(palabra) {
    return palabra.length === 7;
}

// Función para generar una contraseña
function generarContrasena() {
    const palabra1 = generarPalabra();
    const numero1 = generarNumero();
    const palabra2 = generarPalabra();
    const numero2 = generarNumero();
    const simbolo = simbolos[Math.floor(Math.random() * simbolos.length)];
    
    return `${palabra1}${numero1}${palabra2}${numero2}${simbolo}`;
}

// Función para generar múltiples contraseñas
function generarContrasenas(cantidad) {
    const contrasenas = [];
    for (let i = 0; i < cantidad; i++) {
        contrasenas.push(generarContrasena());
    }
    return contrasenas;
}

// Función para mostrar las contraseñas en la interfaz
function mostrarContrasenas(contrasenas) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    
    contrasenas.forEach((contrasena, index) => {
        const passwordItem = document.createElement('div');
        passwordItem.className = 'password-item';
        
        const passwordText = document.createElement('span');
        passwordText.className = 'password-text';
        passwordText.textContent = contrasena;
        
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.innerHTML = `
            <svg class="copy-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
        `;
        
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(contrasena).then(() => {
                // Mostrar mensaje de éxito
                const originalIcon = copyBtn.innerHTML;
                copyBtn.innerHTML = `
                    <svg class="copy-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                `;
                copyBtn.style.color = '#28A745';
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalIcon;
                    copyBtn.style.color = '#6C757D';
                }, 2000);
            }).catch(err => {
                console.error('Error al copiar:', err);
            });
        });
        
        passwordItem.appendChild(passwordText);
        passwordItem.appendChild(copyBtn);
        resultsContainer.appendChild(passwordItem);
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const passwordCountInput = document.getElementById('passwordCount');
    
    generateBtn.addEventListener('click', () => {
        const cantidad = parseInt(passwordCountInput.value);
        
        if (isNaN(cantidad) || cantidad < 1 || cantidad > 100) {
            alert('Por favor, introduce un número válido entre 1 y 100');
            return;
        }
        
        const contrasenas = generarContrasenas(cantidad);
        mostrarContrasenas(contrasenas);
    });
    
    // Permitir generar con Enter
    passwordCountInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generateBtn.click();
        }
    });
});