export PGUSER=develott
export PGPASSWORD=huchaclepale

sqitch deploy db:pg:develott 01_init
sqitch deploy db:pg:develott 02_regex
sqitch deploy db:pg:develott 03_index
sqitch deploy db:pg:develott 04_data