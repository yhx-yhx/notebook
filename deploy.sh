# ���Դ���
set -e

# ����
npm run dev

# �����������Ŀ¼
cd ./docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# ������� https://<USERNAME>.github.io
git push -f git@github.com:yhx-yhx.github.io.git main

cd -
