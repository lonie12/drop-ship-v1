# drop-ship-v1
Description des differents fichiers et dossiers du projet

D = Dossier
F = Fichier

    ** src contient la configuratiion systeme du projet (fichiers et dossiers)

    ** D- config
        va contenir tout ce qui va avec la configuration du projet les methodes et variables globaux y seront definis

    ** D- middlewares
        va contenir les differents middlewares 

            @ F- handler.js ce fichier contiendra le middleware du 404 explicitant les resultats non trouvés et les pages inaccecibles
            @ F- authent.js ce fichier contiendra la configuration de JWT pour l'authentification utilisateur
            @ F- route.js c fichier va permettre de desactiver certaines fonctionnalités la page sera donc indisponible

            NB: Vous pouvez definir de nouvaux fichiers pour differents middlewares mais avec explicarion en commentaire

    ** D- models contiendra les models systeme

    ** D- routes contiendra la configuration des routers 

        @ F- router.js ce fichier contient toutes les routes explicites


    ** server.js congiguration du serveur et logique systeme

    ** prisma presente l'ORM utilisé par le systeme

        Le nom de la base de données = drop

        Veuilez a changer les configurations de connexion a la bd pour votre systeme( root et password)

        executer la commande: npx prisma migrate de --name init pour creer et faire les migrations

