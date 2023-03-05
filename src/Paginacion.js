export default function Paginacion(props) {

    const getPagina = () => {
        const resultado = [];
        for(let i=0; i <= props.total; i++){
            const noc = i + 1;
            resultado.push(
                <a onClick={() => props.onChange(noc)} className={props.pagina === noc ? 'active' : ''}>
                    {noc}
                </a>
            );
        }
        return resultado;
    }

    return (
        <div className="topbar-filter">
            <div className="pagination2">
                <span>Page {props.pagina} of {props.total}:</span>

                {getPagina()}
                <a><i className="ion-arrow-right-b"></i></a>
            </div>
        </div>
    );
} 