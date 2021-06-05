const Footer = () => {
    return <footer className="page-footer blue darken-4">
                <div className="footer-copyright">
                    <div className="container">
                         { new Date().getFullYear()} 
                        <a className="grey-text text-lighten-4 right"  target="_blank" href="https://github.com/IrenaKowalewska">My GitHub</a>
                    </div>
                </div>
            </footer>
}

export { Footer };