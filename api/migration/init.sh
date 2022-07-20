export PGUSER=postgres

# createuser develott --login chpaclhule

createdb develott --owner develott

sqitch init develott_sqitch --engine pg 

sqitch add 01_init -n "creat tables"