docker build --no-cache -t agilcore/node-volume:latest .

docker create --name node-volume agilcore/node-volume:latest

docker start node-volume