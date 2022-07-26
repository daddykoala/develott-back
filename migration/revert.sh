export PGUSER=develott
export PGPASSWORD=huchaclepale

sqitch revert db:pg:develott
# sqitch revert db:pg:develott 01_init
# sqitch revert db:pg:develott 02_regex
# sqitch revert db:pg:develott 03_index
# sqitch revert db:pg:develott 04_data