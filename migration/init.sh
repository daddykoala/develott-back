# 0. je prends l'identité de postgres
export PGUSER=postgres

# 1. Création d'un utilisateur en BDD ocolis_admin (with login)
# createuser ocolis_admin --login --password

# 2. Création d'une BDD ocolis dont le propriétaire est ocolis_admin
createdb develott --owner develott

# 3. Initialiser Sqitch
# sqitch init ocolis_sqitch --engine pg # on indique qu'on travaille avec postgres (pg)

# 4. Je crèe une version 1 pour ma BDD
#sqitch add ocolis_v1 -n "création des tables"