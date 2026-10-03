function Sidebar() {
    return (
        <aside>
            <h2>Novidades!</h2>

            <div className="novidades">

                <article>
                    <h3>🧁 Catcake</h3>

                    <figure>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAadrieY0AI5DtnYrIfzHMCJOlXXmk9z68Sv_GSQ01yKqIqmKqZZ6qNRo&s=10"
                            alt="Cupcake em formato de gatinho"
                        />

                        <figcaption>
                            Deliciosos cupcakes de gatinhos!
                        </figcaption>
                    </figure>
                </article>

                <article>
                    <h3>☕ Latte Miauchiato</h3>

                    <figure>
                        <img
                            src="https://i.pinimg.com/736x/7c/01/57/7c015741e71e72ff96eef20140b0a3f2.jpg"
                            alt="Café com desenho de gatinho"
                        />

                        <figcaption>
                            Um Latte de gatinho!
                        </figcaption>
                    </figure>
                </article>

            </div>
        </aside>
    )
}

export default Sidebar