# DervilonMbissiKongo_6_21102021

Projet 6: Créez un site accessible pour une plateforme de photographes

Lien de la Demo :
https://kd-kongo-dervilon.github.io/DervilonMbissiKongo_6_21102021/

/*====================================================================*/
Objectif

    Rendre responsive et accessible le site

    Ecrire du code JavaScript maintenable

    Modifié un site statique en un site dynamique 

    Assurer l'accessibilité d'un site web

    Gérer les évènements d'un site avec JavaScript


/*====================================================================*/
Fabriqué avec

    Github-Desktop - logiciel de versioning et de stockage.

    Visual Studio Code - Editeur de code.



/*====================================================================*/
Map du Javascript 

Schéma du Javascript :

Shéma du Html :


/*====================================================================*/
Structure en Javascript :

Dossiers SearchApi
ApiFishEye : récupére, de manière asynchrone, les données du JSON.

Dossier Factory
ImageFactory : crée un élément img, et lui donne les attributs (‘src’, ‘alt’, ‘role’).

VideoFactory : crée un élément video, et lui donne les attributs (‘src’, ‘controls’, ‘role’).

Récupere les imports de ImageFactory et VideoFactory
MediaFactory : vérifie si l’élément est une image ou une vidéo et exécute ImageFactory ou VideoFactory.

Récupere  les import de MediaFactory  /  Lightbox
GalleryFactory : crée la section gallerie pour chaque page des photographes.
HomePage

/*====================================================================*/
Dossier Home

HomePageBuilder : crée la section comprenant l’ensemble des photographes sur la page d’accueil à partir des données JSON récupérées dans la classe ApiFishEye. Elle appelle également, les classes ‘Filter’ et ‘Scroll’.

Filter : filtrer les photographes par tags dans la page d’accueil.

Scroll : faire apparaitre le bouton ‘Passer au contenu’ dans la page d’accueil lorsque l’utilisateur se trouve à un certain point de la page. Permet, de plus, de rediriger celui-ci au clic du bouton, vers la section des photographes.

/*====================================================================*/
Photographers Pages

PhotographerProfil : créé le profil, se trouvant dans le header, de chaque photographe sur la page qui lui est destinée, à partir des données JSON récupérées dans la classe ApiFishEye. De plus, appelle les classes ‘Modal’ et ‘Form’.

Modal : faire apparaitre un formulaire au clic du bouton ‘Contactez-moi’, afin de pouvoir communiquer avec le photographe de son choix.

Form : vérifier les informations que l’utilisateur rentre dans le formulaire.

DropDownMenu : permet à l’utilisateur d’ouvrir/fermer le menu dropDown qui le donnera la possibilité de trier le travail de chaque photographe par Popularité, par Date ou bien par Titre. Appelle GalleryFactory à chaque fois que l’utilisateur fait un choix de trie afin de créer le HTML de la galerie.

MediaBuilder : appelle GalleryFactory afin de créer par default l’HTML de la galerie. De plus, crée la box qui comprend le nombre total de ‘Likes’ ainsi que le prix du photographe.

Lightbox : permet de créer, au clic d’une image/video, une Lightbox. Cette Lightbox affiche les médias dans une taille plus conséquente, et permet de switcher d’une image/video à une autre à l’aide des buttons ‘arrow’ ou bien avec les flèches directionnelles du clavier.

LikeSubscriber : permet d’ajouter/enlever un ‘like’ au clic de l'icône ‘coeur’ pour chaque media. À noter qu’à chaque clic, le nombre de ‘like’ du média ainsi que le nombre total de ‘like’ du photographes en question sont incrémentés.

/*====================================================================*/
Auteur :
    M'BISSI KONGO DERVILON
Projet :
     Projet6: Créez un site accessible pour une plateforme de photographes



