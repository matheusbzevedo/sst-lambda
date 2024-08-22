CUR_DIR=$(pwd)

echo "install layers $CUR_DIR/dependencies/"
# ls -d $CUR_DIR/*
for entry in $CUR_DIR/dependencies/*
do
  if [ -d "$entry" ];then
  echo "RUN INSTALL PACKAGE: $entry/nodejs"
    npm --prefix "$entry/nodejs" install
  fi
done
