function NavBar() {
  return (
    <nav>
      <section className="sectionNav">
        <div className="navBarLeft">
          <ul>
            <li>
              <h1>sneakers</h1>
            </li>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="navBarRight">
          <ul>
            <li>🛒</li>
            <li>
              <img
                className="Avatar"
                src="https://static.vecteezy.com/ti/vecteur-libre/p3/5419157-profil-utilisateur-femme-avatar-est-une-femme-un-personnage-pour-un-economiseur-d-ecran-avec-emotions-illustrationle-sur-fond-blanc-isole-vectoriel.jpg"
                alt="avatar"
              />
            </li>
          </ul>
        </div>
      </section>
      <section className="trait">
        <hr />
      </section>
    </nav>
  );
}

export default NavBar;
