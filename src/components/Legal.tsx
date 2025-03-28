import React from 'react';

const Legal = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-paynes-gray mb-8 font-heading">Mentions Légales - YB Carrelage</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-paynes-gray mb-4">1. Informations sur l'entreprise / l'éditeur du site</h2>
            <p className="text-custom-gray mb-4">Le présent site est édité par :</p>
            <ul className="space-y-2 text-custom-gray">
              <li><strong>Raison sociale :</strong> YB Carrelage</li>
              <li><strong>Forme juridique :</strong> Auto-entrepreneur</li>
              <li><strong>Numéro SIRET / RCS :</strong> 94818820600015</li>
              <li><strong>Adresse du siège social :</strong> 15 Rue de Sous Cassan, 74100 Annemasse, France</li>
              <li><strong>Numéro de téléphone :</strong> +33 7 70 15 14 68</li>
              <li><strong>Adresse e-mail de contact :</strong> info@yb-carrelage.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-paynes-gray mb-4">2. Responsable de la publication</h2>
            <ul className="space-y-2 text-custom-gray">
              <li><strong>Nom et prénom :</strong> BOUGHLAM Yanis</li>
              <li><strong>Fonction / Titre :</strong> Gérant</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-paynes-gray mb-4">3. Hébergement du site</h2>
            <p className="text-custom-gray mb-4">Le site est hébergé par Infomaniak Network SA :</p>
            <ul className="space-y-2 text-custom-gray">
              <li><strong>Nom :</strong> Infomaniak Network SA</li>
              <li><strong>Adresse :</strong> Rue Eugène-Marziano 25, 1227 Les Acacias, Genève, Suisse</li>
              <li><strong>Numéro de téléphone :</strong> +41 22 820 35 44</li>
              <li><strong>Adresse e-mail :</strong> contact@infomaniak.com</li>
              <li><strong>Site web :</strong> <a href="https://www.infomaniak.com" className="text-premium-base hover:text-premium-dark">www.infomaniak.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-paynes-gray mb-4">4. Autres informations légales</h2>
            <ul className="space-y-2 text-custom-gray">
              <li><strong>Numéro de TVA intracommunautaire :</strong> FR54948188206</li>
              <li><strong>Statut d'inscription :</strong> Auto-entrepreneur</li>
              <li><strong>Création et développement du site :</strong> Steven C. K. ELDRING pour <a href="https://agence-orbit.ch/" className="text-premium-base hover:text-premium-dark">Agence Orbit</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-paynes-gray mb-4">5. Gestion des données personnelles (RGPD)</h2>
            <p className="text-custom-gray mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), l'utilisateur peut exercer ses droits d'accès, 
              de rectification et de suppression des données personnelles en contactant :
            </p>
            <ul className="space-y-2 text-custom-gray">
              <li><strong>E-mail de contact RGPD :</strong> info@yb-carrelage.com</li>
              <li><strong>Adresse postale pour les demandes :</strong> 15 Rue de Sous Cassan, 74100 Annemasse, France</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-paynes-gray mb-4">6. Propriété intellectuelle</h2>
            <p className="text-custom-gray">
              L'ensemble du contenu présent sur ce site (textes, images, logos, etc.) est protégé par les lois en vigueur sur la 
              propriété intellectuelle et demeure la propriété exclusive de YB Carrelage. Toute reproduction, distribution ou 
              utilisation sans autorisation écrite est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-paynes-gray mb-4">7. Responsabilité</h2>
            <p className="text-custom-gray">
              YB Carrelage s'efforce d'assurer l'exactitude des informations publiées sur ce site mais ne saurait être tenu 
              responsable des erreurs, omissions ou des éventuelles indisponibilités temporaires. L'utilisateur est seul 
              responsable de l'usage qu'il fait des informations contenues sur ce site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-paynes-gray mb-4">8. Loi applicable</h2>
            <p className="text-custom-gray">
              Les présentes mentions légales sont régies par le droit français. Tout litige relatif à l'utilisation du site 
              sera soumis à la compétence exclusive des tribunaux français.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;