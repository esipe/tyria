
**Découvrir en live : http://esipe.geonef.fr/tyria/**

Tyrie Earth est un projet de serveur cartographique que je mene dans le cadre de mes etudes en informatique et geomatique (IG). Il a pour but de fournir des cartes dynamiques et enrichies de la Tyrie, l'univers de Guild Wars 2, afin de faire decouvrir aux neophytes ses regions et d'offrir aux explorateurs chevronnes un outil precis et complet pour apprivoiser ses vastes territoires.


Visualiser en WMS sous QGIS
---------------------------

...ou tout autre [client WMS](http://fr.wikipedia.org/wiki/Web_Map_Service).
Procédure pour [QGIS](http://www.qgis.org/) :

 * *Couche* -> *Ajouter une couche WMS*
 * cliquer sur *Nouveau* pour ajouter ce serveur WMS :
   * Nom : *tyria* (ou autre)
   * URL : *http://mapserver.esipe.geonef.fr/tyria/map?*
 * cliquer *OK* puis de retour à la fenêtre précédente, cliquer en bas sur *Ajouter* puis *Fermer*
 * c'est prêt : la couche devrait apparaître sous quelques secondes, navigable évidemment. Enjoy!


Installation
------------
Le [tutoriel du cours](http://www.geonef.fr/doc/cours/mapserver-et-wms/installation-systeme)
vous guide dans la mise en place de l'environnement sur une machine virtuelle
VirtualBox, donc utilisable depuis Windows, Mac ou Linux.

La machine installée est une *Debian GNU/Linux* exploitant
*MapServer* en FastCGI derrière le serveur HTTP *Nginx*.

Il est bien-sûr possible d'utiliser d'autres environnements comme par
exemple Apache sur Windows.

Après avoir cloné localement ce dépôt Git, il faut récupérer l'archive :
http://esipe.geonef.fr/tyria/extra-data.tar.bz2
et la désarchiver dans le même dossier, en faisant :
```
curl http://esipe.geonef.fr/tyria/extra-data.tar.bz2 | tar xjv
```


Auteurs
-------

Projet réalisé par Marc-Antoine Traynard <mtraynar@etudiant.univ-mlv.fr>,
étudiant IG2 de
[l'École Supérieure D'Ingénieurs de l'Université Paris-Est Marne-la-Vallée (ESIPE)](http://esipe.u-pem.fr/),
dans le cadre du cours *[Serveurs cartographiques](http://www.geonef.fr/doc/cours/mapserver-et-wms/)*.


Licence
-------

Les fichiers présents dans ce dépôt sont distribués sous les termes de
la licence CeCILL 2.1 contenue dans le fichier [LICENSE](LICENSE) et dont l'original
est disponible à l'URL http://www.cecill.info/licences/Licence_CeCILL_V2.1-fr.html
