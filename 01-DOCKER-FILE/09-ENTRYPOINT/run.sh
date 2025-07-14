docker build -t agilcore/node-entry:latest .

docker create --name node-entry --publish=3000:3000 agilcore/node-entry:latest

docker start node-entry