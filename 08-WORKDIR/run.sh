docker build -t agilcore/node-volume:latest .

docker create --name node-volume --publish=3000:3000 agilcore/node-volume:latest

docker start node-volume