### GIT FILTER-REPO ###

## NÃO EXECUTE ESSE SCRIPT DIRETAMENTE
## Esse script foi feito para uso do
## script 'publisher.sh' fornecido 
## pela Trybe. 

[[ $# == 1 ]] && \
[[ $1 == "trybe-security-parameter" ]] && \
git filter-repo \
    --path .trybe \
    --path .github \
    --path .vscode \
    --path trybe.yml \
    --path trybe-filter-repo.sh \
    --path README.md \
    --invert-paths --force

echo -e "\033[0;31m"
echo -e "Essa versão do \033[0;32m'./trybe-filter-repo.sh'\033[0;31m é GENÉRICA."
echo "Procure a versão adequada ao seu projeto"
echo -e "\033[0m" 