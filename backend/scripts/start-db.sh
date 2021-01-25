hasMongo=$(docker ps -a | grep mongo)

if [[ -z "${hasMongo}"  ]]
then
  docker run -d -p 27017:27017 --name mongodb mongo
else
  docker start mongodb
fi
