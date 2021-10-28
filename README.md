# DervilonMbissiKongo_6_21102021

Projet6: Créez un site accessible pour une plateforme de photographes

Objectif:
        >  Site web de photographes freelances.
        >  Modifiéz un site statique à un site dynamique
        > Le rendre responsive et accessible au personnes malvoyantes et autres
        
        
Structure de ma map en Javascript :

Structure de ma map en Html :

Lien de la Demo :
https://kd-kongo-dervilon.github.io/DervilonMbissiKongo_6_21102021/

Prototype des fonctionnalités :
                              . Page d'accueil  
                              
                              > Liste de tous les photographes avec leur nom, leur slogan, leur localisation
                                            leur prix/heure, leurs tags et une image miniature de leur choix.
                                            
                              > En cliquant sur une étiquette (tag) dans la barre de navigation, la liste des
                                  photographes est filtrée pour n'afficher que ceux qui correspondent à cette étiquette.
                                  
                             > Lorsque l'utilisateur clique sur la vignette d'un photographe, il est amené à sa page.
                             
                             
                             .Pages des photographes
                             
                             > Affiche une galerie des travaux du photographe.
                             
                             > Les photographes peuvent montrer à la fois des photos et des vidéos.
                                  . Dans le cas des vidéos, montrer une image miniature dans la galerie.
                                                  Chaque média comprend un titre et un nombre de likes.
                                  . Lorsque l'utilisateur clique sur l'icône "Like", le nombre de likes affiché est incrémenté.
                                  . Le nombre de likes total d’un photographe doit correspondre à la 
                                                            somme des likes de chacun de ses médias.
                                                            
                            > Les médias peuvent être triés par popularité ou par titre.
                            
                            > Lorsque l'utilisateur clique sur un média, celui-ci doit s’ouvrir dans une lightbox 
                                  . Lorsque la lightbox est affichée, il y a une croix dans le coin pour fermer la fenêtre
                                  . Des boutons de navigation permettent de passer d'un élément média à l'autre (les utilisateurs                                                             peuvent cliquer sur ces boutons pour naviguer).
                                  . Les touches fléchées permettent également de naviguer entre les médias.
                                  
                          >  Afficher un bouton pour contacter le photographe.
                                  . Le formulaire de contact est une modale qui s'affiche par-dessus le reste.
                                  . Il comprend des champs pour les noms, l'adresse électronique et le message.
                                  . Plus tard, le bouton de contact enverra un message au photographe.
                                          Pour l'instant, seulement afficher le contenu des trois champs dans les logs de la console
                                         
  Exigences design supplémentaires : 
                                   > Rendre le système mobile convivial et responsive
                                   > Le site doit être accessibilité est clé
                                        ●  Utilisez des éléments HTML "sémantiques" qui décrivent leur intention autant que
                                                          possible, au lieu de mettre des éléments <div> et <span> partout.
                                        ●  Lorsque vous devez créer un élément personnalisé, ajoutez des attributs ARIA pour
                                                          décrire ce qu'il fait.
                                        ●  Le code devrait passer les tests AChecker sans “known issue” (afin qu'il soit
                                                  conforme aux WCAG).
                                        ●  Toute la gestion des événements (par exemple, les clics et les pressions au clavier)
                                                    doit être configurée (utilisez KeyboardEvent.key ou KeyboardEvent.code.).
                                        ●  Utilisez un lecteur d'écran gratuit pour vous faire une idée de ce que représente
                                                    l'utilisation du site pour une personne malvoyante
