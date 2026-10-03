function Article({ titulo, autor, data, conteudo }) {
    return (
        <article className="post">

            <h2>{titulo}</h2>

            <p className="informacoes">
                Por {autor} | {data}
            </p>

            <div className="conteudo">
                {conteudo}
            </div>

        </article>
    )
}

export default Article