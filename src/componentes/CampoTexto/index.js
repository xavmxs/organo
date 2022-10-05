import './CampoTexto.css'

//variável que é igual a sintaxe de função, esse é um codestyle
const CampoTexto = (props) => {
    
   // let valor =''

    
    
    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input 
            value={props.valor} 
            onChange={aoDigitado} 
            required={props.obrigatorio} 
            placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto