if [ -d /opt/api-blueprint ]
then
        cd /opt/api-blueprint
        git checkout -f
        git clean -f
        git pull
else
        git clone https://github.com/dozer47528/api-blueprint-test.git /opt/api-blueprint
        cd /opt/api-blueprint
fi

find . -name "*.apib" | sed 's/.apib//' | xargs -i -t aglio -i {}.apib --theme-template triple -o {}.html
rm -rf /usr/share/nginx/html/*
cp -R * /usr/share/nginx/html/
