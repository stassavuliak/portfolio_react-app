const Contacts = () => {
  return ( 
    <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Denmark. Copenhagen</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram</h2>
                        <p><a href="tel:+4526663346">+45 266 633 46</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:stassavulak@gmail.com">stassavulak@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
   );
}
 
export default Contacts;